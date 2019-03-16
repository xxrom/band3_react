import * as React from 'react';
import './TurboCardSlider.css';
const cls = 'turbo-card-slider';

/**
 * ITurboCardProps {
 *     children: React.ReactNode;
 *     itemRefs: Array<React.RefObject<HTMLDivElement>>;
 *     cardAlign?: 'left' | 'center';
 *     renderBullets?: IBullets;
 * }
 */

/**
 * ITurboCardState {
 *     bulletActiveItem: number;
 * }
 */

// Логика компонента TurboCardSlider на основе компонента *swipeable-cards*.
class TurboCardSlider extends React.Component {
  activeItemIndex = 0;
  wrapperMiddle;
  itemsWidth = [];
  itemsCenter = [];
  itemsLength = 0;

  isStartSwipe = false;

  // Значение по X, с которого начался свайп
  startX = 0;
  startY = 0;
  // Текущее значение X во время свайпа
  currentX = 0;
  currentY = 0;
  // Значение смещение слайдера на момент начала скрола. Кратно ширине слайда
  initialX = 0;

  // Флаг блокировки вертикального скрола страницы
  blockPageVerticalScroll = false;
  // Флаг блокировки горизонтального скрола слайдера
  blockSliderHorizontalScroll = false;

  // Ширина объекта таблицы в которой сколим объекты
  itemWrapperWidth = 0;
  // Максимально значение смещения слайдера влево (1/5 слайда до первого слайда)
  maxLeftShift = 0;
  // Максимально значение смещения слайдера справа (1/5 слайда после последнего слайда)
  maxRightShift = 0;
  // Глобальный текущий сдвиг
  totalShift = 0;

  constructor(props) {
    super(props);

    this.scrollRef = React.createRef();
    this.wrapperRef = React.createRef();

    this.itemsLength = this.props.itemRefs.length;

    this.state = {
      bulletActiveItem: 0,
    };
  }

  componentDidMount() {
    this.subscribeOnResize();
    this.countSizeAndShifts();
  }

  componentWillReceiveProps(nextProps) {
    if (this.itemsLength !== nextProps.itemRefs.length) {
      // Обновляем количество элементов, если поменялось их количество
      this.itemsLength = nextProps.itemRefs.length;
    }
    this.countSizeAndShifts();
  }

  render() {
    const { renderBullets } = this.props;

    return (
      <div className={cls} ref={this.wrapperRef}>
        <div
          className={`${cls}__scroll`}
          ref={this.scrollRef}
          onTouchMove={this.onMove}
          onTouchEnd={this.onEnd}
          onTouchCancel={this.onEnd}
          onTouchStart={this.onStart}
          onMouseDown={this.onStart}
          onMouseMove={this.onMove}
          onMouseUp={this.onEnd}
          onMouseLeave={this.onEnd}
        >
          {this.props.children}
        </div>

        {renderBullets(
          this.itemsLength,
          this.state.bulletActiveItem,
          this.onBulletChange
        )}
      </div>
    );
  }

  onBulletChange = (index) => {
    this.activeItemIndex = index;

    this.setBulletActiveState();
    this.animateToActiveItem();
  };

  subscribeOnResize = () => {
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('orientationchange', this.onWindowResize);
  };

  onWindowResize = () => {
    this.countSizeAndShifts();
    this.animateToActiveItem();
  };

  setBulletActiveState = () => {
    if (this.state.bulletActiveItem !== this.activeItemIndex) {
      this.setState({
        bulletActiveItem: this.activeItemIndex,
      });
    }
  };

  onStart = (event) => {
    if (this.isStartSwipe) {
      return;
    }

    this.isStartSwipe = true;

    this.startX = event.pageX || event.touches[0].pageX;
    this.startY = event.touches ? event.touches[0].clientY : event.pageY;
    this.currentX = this.startX;
    this.currentY = this.startY;

    this.scrollRef.current.style.transitionDuration = '0s';
    requestAnimationFrame(this.onUpdate);
  };

  onMove = (event) => {
    // Если не отслеживаем этот свайп или если скролим страницу, а не свайпер
    if (!this.isStartSwipe || this.blockSliderHorizontalScroll) {
      return;
    }

    this.currentY = event.touches ? event.touches[0].clientY : event.pageY;

    const currentAbsYShift = Math.abs(this.currentY - this.startY);
    const currentAbsXShift = Math.abs(
      (event.pageX || event.touches[0].pageX) - this.startX
    );

    // Выбираем, скролим слайдер или страницу
    if (
      // Если скроллим горизонтально - блокируем стролл страницы
      this.blockPageVerticalScroll ||
      currentAbsXShift > currentAbsYShift
    ) {
      this.currentX = event.pageX || event.touches[0].pageX;

      this.blockPageVerticalScroll = true;
    } else if (
      // Если скролим вертикально - блокируем скрол слайдера
      currentAbsXShift < currentAbsYShift &&
      currentAbsYShift > 20 // 20 - порог, выбранный экспериментально
    ) {
      this.blockSliderHorizontalScroll = true;
    }
  };

  onEnd = () => {
    this.scrollRef.current.style.transitionDuration = '300ms';

    if (!this.isStartSwipe) {
      return;
    }

    this.isStartSwipe = false;
    this.blockPageVerticalScroll = false;
    this.blockSliderHorizontalScroll = false;

    this.calculateActiveItem();
    this.animateToActiveItem();
  };

  onUpdate = () => {
    if (!this.isStartSwipe || this.blockSliderHorizontalScroll) {
      return;
    }

    requestAnimationFrame(this.onUpdate);
    this.totalShift = this.currentX - this.startX + this.initialX;
    this.setTransform(this.totalShift);
  };

  calculateActiveItem = () => {
    if (this.totalShift > 0) {
      this.activeItemIndex = 0;
    } else {
      let nearestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      for (let i = 0; i < this.itemsLength; i++) {
        const currentDistance = Math.abs(
          this.wrapperMiddle - (this.itemsCenter[i] + this.totalShift)
        );

        if (currentDistance < minDistance) {
          minDistance = currentDistance;
          nearestIndex = i;
        }
      }

      this.activeItemIndex = nearestIndex;
    }

    this.setBulletActiveState();
  };

  animateToActiveItem = () => {
    this.initialX =
      -this.itemsCenter[this.activeItemIndex] +
      0.5 * this.itemsWidth[this.activeItemIndex];

    // Не первая карточка и не последняя карточки
    if (
      this.activeItemIndex > 0 &&
      this.activeItemIndex < this.itemsLength - 1 &&
      // Если карточки нужно прижимать к левому краю экрана, то дополнительный сдвиг не нужен
      this.props.cardAlign !== 'left'
    ) {
      // Дополнительный сдвиг, когда карта меньше размера обертки
      const shiftCard =
        0.5 * (this.itemWrapperWidth - this.itemsWidth[this.activeItemIndex]);

      this.initialX += shiftCard;
    }

    // Последняя карта
    if (this.activeItemIndex === this.itemsLength - 1) {
      this.initialX +=
        this.itemWrapperWidth - this.itemsWidth[this.activeItemIndex];
    }

    // если слайдер свайпили - выставляем актуальное значение и анимацию
    if (this.totalShift !== this.initialX) {
      this.totalShift = this.initialX;

      this.setTransform(this.initialX);
    }
  };

  setTransform = (value) => {
    // Не даем далеко скролить за границы слайдера
    if (value > this.maxLeftShift || value < this.maxRightShift) {
      return;
    }

    this.scrollRef.current.style.transform = `translate3d(${value}px,0,0)`;
    this.scrollRef.current.style.webkitTransform = `translate3d(${value}px,0,0)`;
  };

  countSizeAndShifts = () => {
    this.itemWrapperWidth = this.wrapperRef.current.getBoundingClientRect().width;
    this.wrapperMiddle = this.itemWrapperWidth / 2;

    let currentItemCenter = 0;
    let shiftCard = 0;
    for (let i = 0; i < this.itemsLength; i++) {
      this.itemsWidth[i] = this.props.itemRefs[
        i
      ].current.getBoundingClientRect().width;

      // Дополнительный сдвиг, когда карта меньше размера обертки
      shiftCard = 0.5 * (this.itemWrapperWidth - this.itemsWidth[i]);

      // Рассчитываем координаты центров блоков
      if (i === 0) {
        currentItemCenter += this.itemsWidth[i] / 2;

        // Максимально значение смещения слайдера влево (1/5 слайда до первого слайда)
        this.maxLeftShift = this.itemsWidth[i] / 5;
      } else {
        currentItemCenter +=
          this.itemsWidth[i - 1] / 2 + this.itemsWidth[i] / 2;
      }

      if (i === this.itemsLength - 1) {
        // Максимально значение смещения слайдера справа (1/5 слайда после последнего слайда)
        this.maxRightShift =
          // крайняя левая точка по X
          -1 * currentItemCenter +
          0.5 * this.itemsWidth[i] -
          // Последний слайд может сдвигаться дополнительно еще на 1/5
          0.2 * this.itemsWidth[i] +
          // Карта может сдвигаться на разницу сдвига
          Math.abs(2 * shiftCard);
      }

      // Сохраняем координаты центров всех блоков с рефами
      this.itemsCenter[i] = currentItemCenter;
    }
  };
}

export { TurboCardSlider };
