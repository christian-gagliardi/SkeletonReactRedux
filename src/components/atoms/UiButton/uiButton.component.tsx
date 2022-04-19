import './uiButton.style.css';

function UiButtonComponent(props: {id: string; text: string; isPrimary: boolean; onClick: any}) {
  const uiButton = (
    <button
      data-cy={`button-${props.id}`}
      className={props.isPrimary ? 'button button-primary' : 'button'}
      onClick={props.onClick}>
      <span
        data-cy='button-text'
        className={props.isPrimary ? 'button-text-primary' : 'button-text'}>
        {props.text}
      </span>
    </button>
  );

  return uiButton;
}

export default UiButtonComponent;
