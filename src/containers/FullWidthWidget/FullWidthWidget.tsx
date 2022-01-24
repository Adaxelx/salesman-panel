import styled from 'styled-components';

import { Widget } from 'components';

const FullWidthWidget = styled(Widget)`
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export default FullWidthWidget;
