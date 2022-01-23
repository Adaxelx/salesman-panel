import React from 'react';

import { Select } from 'components';
import { SelectProps } from 'components/Select/Select';

interface SelectWithHeaderProps extends SelectProps {
  header: string;
}

const SelectWithHeader = ({ header, ...rest }: SelectWithHeaderProps) => {
  return (
    <div>
      <p className="text-primary">{header}</p>
      <Select {...rest} />
    </div>
  );
};

export default SelectWithHeader;
