import styled from 'styled-components';

import { pxToRem } from '../../utils/pxToRem';

export const Container = styled.header`
  background-color: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(198)};
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${pxToRem(1216)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
