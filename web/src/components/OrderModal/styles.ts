import styled from 'styled-components';

import { pxToRem } from '../../utils/pxToRem';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: ${pxToRem(480)};
  border-radius: 8px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: ${pxToRem(24)};
    }

    button {
      border: 0;
      background-color: transparent;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: ${pxToRem(14)};
      font-weight: 500;
      color: #333;
    }

    div {
      margin-top: 0.5rem;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: ${pxToRem(14)};
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: ${pxToRem(14)};
        color: #666;

        display: block;
        min-width: ${pxToRem(20)};
        margin-left: ${pxToRem(12)};
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          color: #666;
          font-size: ${pxToRem(14)};
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${pxToRem(24)};

    span {
      font-size: ${pxToRem(14)};
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;

  .primary {
    background-color: #333;
    border-radius: ${pxToRem(48)};
    font-weight: bold;
    border: 0;
    color: #fff;
    padding: ${pxToRem(12)} ${pxToRem(24)};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .secondary {
    padding: ${pxToRem(12)} ${pxToRem(24)};
    color: #d73935;
    font-weight: bold;
    border: 0;
    background-color: transparent;
  }
`;
