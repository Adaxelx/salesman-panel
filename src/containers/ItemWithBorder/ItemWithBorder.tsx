import styled from 'styled-components';

const Wrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid var(--colors-tertiary);
  }
`;

export default Wrapper;
