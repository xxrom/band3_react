import React from 'react';

import './Warranty.css';

const Warranty = (props) => {
  return (
    <div className="warranty-wrapper">
      <div className="warranty">
        <div className="line" />
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
      </div>
    </div>
  );
};

export { Warranty };
