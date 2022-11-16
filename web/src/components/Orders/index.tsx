import { Order } from '../../@types/Order';
import { OrdersBoard } from '../OrdersBoard/index';
import * as S from './styles';

const orders: Order[] = [
  {
    _id: '6373ef0ab4afa344e65c11f6',
    table: '1',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668539581610-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6373ef0ab4afa344e65c11f7',
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668540990954-coca-cola.png',
          price: 7,
        },
        quantity: 1,
        _id: '6373f204f676a35c912547f0',
      },
    ],
  },
];

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </S.Container>
  );
}
