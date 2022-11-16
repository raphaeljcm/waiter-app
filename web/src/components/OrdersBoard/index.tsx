import { useCallback, useState } from 'react';

import { Order } from '../../@types/Order';
import { OrderModal } from '../OrderModal';
import * as S from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <S.Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      <S.OrdersContainer>
        {!!orders.length ? (
          <>
            {orders.map(order => (
              <button
                type="button"
                key={order._id}
                onClick={() => handleOpenModal(order)}
              >
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            ))}
          </>
        ) : (
          <S.EmptyOrders>
            <strong>Sem pedidos</strong>
          </S.EmptyOrders>
        )}
      </S.OrdersContainer>
    </S.Board>
  );
}
