import '@reach/listbox/styles.css';

import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  ListboxButton,
  ListboxInput,
  ListboxList,
  ListboxOption,
  ListboxPopover as ListboxPopoverRUI,
} from '@reach/listbox';
import styled from 'styled-components';

import { ReactComponent as Arrow } from 'assets/caret-down-solid.svg';
import { IconWrapper } from 'components';

export interface SelectProps {
  value: string;
  onChange: Dispatch<SetStateAction<any>>;
  children: ReactNode | ReactNode[];
}

const ListboxPopover = styled(ListboxPopoverRUI)`
  &[data-reach-listbox-popover] {
    /* padding: 0; */
    background: var(--colors-background);
  }
`;

export const SelectOption = ListboxOption;

const Select = ({ value, onChange, children }: SelectProps) => {
  return (
    <ListboxInput
      value={value}
      onChange={onChange}
      className={`bg-background rounded-full h-12 text-text-base w-40 flex`}
    >
      <ListboxButton
        arrow={
          <IconWrapper className="w-4 h-6" size="small">
            <Arrow />
          </IconWrapper>
        }
        className={`bg-background rounded-full h-12 text-text-base px-4 w-40 flex`}
      />
      <ListboxPopover className="rounded-md">
        <ListboxList className={`bg-background text-text-base`}>{children}</ListboxList>
      </ListboxPopover>
    </ListboxInput>
  );
};

export default Select;
