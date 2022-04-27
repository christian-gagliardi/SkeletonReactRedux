import Menu from './menu';
import {MenuItem} from './types';

interface MultilevelSideMenuProps {
  items: MenuItem[];
}

const MultilevelSideMenu: React.FC<MultilevelSideMenuProps> = ({items}) => {
  return (
    <div className='h-full w-full flex bg-gray-50 divide-x divide-solid'>
      <Menu items={items} />
    </div>
  );
};

export default MultilevelSideMenu;
