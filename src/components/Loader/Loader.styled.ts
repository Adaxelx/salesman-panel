import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.div`
  border-top-color: var(--colors-primary);
  -webkit-animation: spinner 1.5s linear infinite;
  animation: ${spinner} 1.5s linear infinite;
`;
