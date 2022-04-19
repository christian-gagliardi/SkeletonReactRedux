import './uiListItem.style.css';

function UiListItemComponent(props: {id: string; onClick: any; title: string; subtitle: string}) {
  const uiListItem = (
    <li className='list-item-wrapper' onClick={props.onClick}>
      <div data-cy={`list-item-title-${props.id}`} className='list-item-title'>
        {props.title}
      </div>
      <div data-cy={`list-item-subtitle-${props.id}`}>{props.subtitle}</div>
    </li>
  );

  return uiListItem;
}

export default UiListItemComponent;
