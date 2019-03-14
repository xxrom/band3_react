import React from 'react';

import './Warranty.css';
import { Image } from '../Image';

const Warranty = (props) => {
  const srcImg = ['100_0.png', '100_3.png', '100_1.png'];
  return (
    <div className="warranty-wrapper">
      <div className="warranty">
        <div className="line" />

        <div className="warranty-images">
          {srcImg.map((src) => (
            <div className="warranty-images__image">
              <Image src={src} style={{ maxWidth: '90%' }} />
            </div>
          ))}
        </div>

        <div className="warranty-title">Возврат и обмен</div>

        <div className="warranty-text">
          Вы можете изменить решение о покупке и отказаться от заказанного
          Товара в любое время до его получения.
        </div>

        <div className="warranty-return">
          <div className="warranty-text-bold">
            Получили товар, и поняли, что он не подходит? Не переживайте!
          </div>

          <div className="warranty-text">
            Всё просто: верните товар в его оригинальном состоянии* в течение
            срока приема возврата (14 дней, не считая дня передачи Товара).
          </div>
          <div style={{ paddingTop: '1rem' }} className="warranty-text">
            * Оригинальное состояние: упаковка должна быть не вскрыта, товар не
            должен был быть в употреблении, должен быть сохранен его товарный
            вид и потребительские свойства (в том числе остаточный срок
            годности).
          </div>
        </div>

        <div className="warranty-broken">
          <div className="warranty-text-bold">
            Обнаружили брак? Не волнуйтесь:
          </div>
          <div className="warranty-text">
            Просто верните покупку или обменяйте товар.
          </div>
        </div>

        <div className="warranty-broken">
          <div className="warranty-text-bold">Гарантия на Mi Band 3:</div>
          <div className="warranty-text">
            Для основного изделия – 6 месяцев с даты покупки, но в пределах
            срока службы изделия;
          </div>
          <div className="warranty-text">
            Для поставляемого в комплекте ремешка 14 дней с даты покупки
            изделия, но в пределах срока службы изделия.
          </div>
        </div>
      </div>
    </div>
  );
};

export { Warranty };
