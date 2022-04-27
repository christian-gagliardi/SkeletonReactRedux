import React from 'react';
import {useState} from 'react';
import Pane from './pane';
import Row from './row';
import {MenuItem} from './types';

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({items}) => {
  const [activeItem, setActiveItem] = useState<MenuItem>();

  const handleItemClick = (item: MenuItem) => {
    setActiveItem(item == activeItem ? undefined : item);
  };

  return (
    <>
      <div className={`xl:w-128 w-1/3 bg-white divide-y divide-solid `}>
        {items.map((item) => (
          <Row
            key={item.label}
            item={item}
            onClick={() => handleItemClick(item)}
            active={item == activeItem}
          />
        ))}
      </div>

      {activeItem != undefined && (activeItem.child as MenuItem[]).length > 0 && (
        <Menu items={activeItem.child as MenuItem[]} />
      )}

      {activeItem != undefined && React.isValidElement(activeItem.child) && (
        <Pane item={activeItem} />
      )}
    </>
  );
};

export default Menu;
