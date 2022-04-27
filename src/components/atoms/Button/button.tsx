import {ReactNode} from 'react';
import {ButtonScale, ButtonVariant} from './types';
import {MouseEventHandler} from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<object>;
  variant?: ButtonVariant;
  scale?: ButtonScale;
  icon?: ReactNode;
  disabled?: boolean;
}

const StyledButton = styled.button``;

const Button: React.FC<ButtonProps> = ({
  label,
  variant = ButtonVariant.primary,
  scale = ButtonScale.MD,
  icon,
  onClick,
  children,
  disabled = false
}): JSX.Element => {
  const variantColor: Record<ButtonVariant, string> = {
    [ButtonVariant.primary]: 'bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/40',
    [ButtonVariant.secondary]: 'bg-cyan-800 hover:bg-cyan-900 disabled:bg-cyan-900/40',
    [ButtonVariant.success]: 'bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-900/40',
    [ButtonVariant.danger]: 'bg-red-500 hover:bg-red-600 disabled:bg-red-900/40',
    [ButtonVariant.text]: 'bg-transparent hover:bg-gray-100 disabled:bg-transparent'
  };
  const scalePadding: Record<ButtonScale, string> = {
    [ButtonScale.LG]: 'px-4 py-1',
    [ButtonScale.MD]: 'px-4 py-1',
    [ButtonScale.SM]: 'px-4 py-1'
  };

  const scaleFont: Record<ButtonScale, string> = {
    [ButtonScale.LG]: 'font-semibold text-xl',
    [ButtonScale.MD]: 'font-semibold ',
    [ButtonScale.SM]: 'font-semibold text-xs'
  };

  const variantFont: Record<ButtonVariant, string> = {
    [ButtonVariant.primary]: 'text-neutral-50',
    [ButtonVariant.secondary]: 'text-neutral-50',
    [ButtonVariant.success]: 'text-neutral-50',
    [ButtonVariant.danger]: 'text-neutral-50',
    [ButtonVariant.text]: 'text-neutral-900 disabled:text-neutral-300'
  };

  const font = `${scaleFont[scale]} ${variantFont[variant]}`;
  const spacing = 'space-x-2';
  const transition = 'duration-500 transform transition';
  const borders = 'rounded-lg';
  const alignment = 'inline-flex items-center';

  return (
    <StyledButton
      onClick={onClick}
      className={`${alignment} ${scalePadding[scale]} ${font} ${variantColor[variant]} ${spacing} ${borders} ${transition}`}
      disabled={disabled}>
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </StyledButton>
  );
};

Button.defaultProps = {
  label: ''
};

export default Button;
