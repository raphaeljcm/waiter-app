import { useEffect } from 'react';

import { Order } from '../../@types/Order';
import closeIcon from '../../assets/images/close-icon.svg';
import { formatCurrenty } from '../../utils/formatCurrency';
import * as S from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

const statusOrderMapIcon = new Map([
  ['WAITING', '🕑'],
  ['IN_PRODUCTION', '👩‍🍳'],
  ['DONE', '✅'],
]);

const statusOrderMapText = new Map([
  ['WAITING', 'Fila em espera'],
  ['IN_PRODUCTION', 'Em produção'],
  ['DONE', 'Pronto!'],
]);

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((acc, { product, quantity }) => {
    return (acc += product.price * quantity);
  }, 0);

  return (
    <S.Overlay>
      <S.ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="fechar modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>{statusOrderMapIcon.get(order.status)}</span>
            <strong>{statusOrderMapText.get(order.status)}</strong>
          </div>
        </div>

        <S.OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width={48}
                  height={24.43}
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrenty(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrenty(total)}</strong>
          </div>
        </S.OrderDetails>

        <S.Actions>
          <button type="button" className="primary">
            <span>👩‍🍳</span>
            <span>Iniciar produção</span>
          </button>

          <button type="button" className="secondary">
            <span>Cancelar Pedido</span>
          </button>
        </S.Actions>
      </S.ModalBody>
    </S.Overlay>
  );
}
