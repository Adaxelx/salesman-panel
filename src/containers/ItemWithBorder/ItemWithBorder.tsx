import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--colors-tertiary);
  }
`;

export default Wrapper;
