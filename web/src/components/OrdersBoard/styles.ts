import styled from 'styled-components';

import { pxToRem } from '../../utils/styles';

export const Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  > header {
    padding: 8px;
    font-size: ${pxToRem(14)};

    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    background-color: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: ${pxToRem(128)};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: ${pxToRem(14)};
      color: #666;
    }

    & + button {
      margin-top: 1.5rem;
    }
  }
`;

export const EmptyOrders = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;

  strong {
    font-weight: 500;
  }
`;
