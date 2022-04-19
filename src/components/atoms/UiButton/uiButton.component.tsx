import './uiButton.style.css';

function UiButtonComponent(props: {content: {text: string; isPrimary: boolean; onClick: any}}) {
  let data: {text: string; isPrimary: boolean; onClick: any} = props.content;
  const uiButton = (
    <button
      data-cy='button'
      className={data.isPrimary ? 'button button-primary' : 'button'}
      onClick={data.onClick}>
      <span
        data-cy='button-text'
        className={data.isPrimary ? 'button-text-primary' : 'button-text'}>
        {data.text}
      </span>
    </button>
  );

  return uiButton;
}

export default UiButtonComponent;
