import './uiListItem.style.css';

function UiListItmeComponent(props: {content: {title: string; subtitle: string}}) {
  let data: {title: string; subtitle: string} = props.content;
  const uiListItem = (
    <div className='list-item-wrapper'>
      <h3 data-cy='list-item-title'>{data.title}</h3>
      <div data-cy='list-item-subtitle'>{data.subtitle}</div>
    </div>
  );

  return uiListItem;
}

export default UiListItmeComponent;
