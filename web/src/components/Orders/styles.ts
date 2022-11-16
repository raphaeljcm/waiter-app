import styled from 'styled-components';

import { pxToRem } from '../../utils/styles';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${pxToRem(1216)};
  margin: ${pxToRem(40)} auto;

  display: flex;
  gap: 2rem;
`;
