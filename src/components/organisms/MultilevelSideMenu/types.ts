import {ReactNode} from 'react';

interface MenuItem {
  icon?: ReactNode;
  label?: string;
  disabled?: boolean;
  child: ReactNode | MenuItem[];
}

export type {MenuItem};
