import {MultilevelSideMenu, MenuItem} from '../../components/organisms/MultilevelSideMenu';

const PreviewPage: React.FC = () => {
  const menuItemsA: MenuItem[] = [
    {label: 'AA', child: <div></div>},
    {label: 'AB', child: <div></div>},
    {label: 'AC', child: <div></div>},
    {label: 'AD', child: <div></div>},
    {label: 'AE', child: <div></div>},
    {label: 'AF', child: <div></div>}
  ];

  const menuItemsB: MenuItem[] = [
    {label: 'BA', child: <div></div>},
    {label: 'BB', child: <div></div>},
    {label: 'BC', child: <div></div>},
    {label: 'BD', child: <div></div>},
    {label: 'BE', child: <div></div>},
    {label: 'BF', child: <div></div>}
  ];

  const menuItems: MenuItem[] = [
    {label: 'A', child: menuItemsA},
    {label: 'B', child: menuItemsB},
    {label: 'C', child: <div></div>},
    {label: 'D', child: <div></div>},
    {label: 'E', child: <div></div>},
    {label: 'F', child: <div></div>}
  ];

  return (
    <>
      <MultilevelSideMenu items={menuItems} />
    </>
  );
};

export default PreviewPage;
