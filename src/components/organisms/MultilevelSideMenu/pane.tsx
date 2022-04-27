import {MenuItem} from './types';

interface PaneProps {
  item: MenuItem;
}

const Pane: React.FC<PaneProps> = ({item}) => {
  return (
    <div className='grow p-4 bg-white'>
      <p className='font-bold text-xl'>{item.label}</p>
      <div> {item.child}</div>
    </div>
  );
};

export default Pane;
