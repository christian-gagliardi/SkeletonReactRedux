import './uiCard.style.css';

function UiCardComponent(props: {
  content: {image: string; code: string; name: string; address: string; city: string};
}) {
  let data: {image: string; code: string; name: string; address: string; city: string} =
    props.content;
  const uiCard = (
    <div className='card-wrapper'>
      <div className='card-img'>
        <img data-cy='card-img' className='imagePointer' src={data.image} />
      </div>
      <div className='card-content'>
        <h3 data-cy='card-title'>{data.name}</h3>
        <div data-cy='card-subtitle'>{data.city}</div>
        <div data-cy='card-text'>{data.address}</div>
      </div>
    </div>
  );

  return uiCard;
}

export default UiCardComponent;
