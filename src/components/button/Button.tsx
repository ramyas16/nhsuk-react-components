import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  as?: 'button';
}

interface ButtonLinkProps extends HTMLProps<HTMLAnchorElement> {
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  as?: 'a';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  type,
  ...rest
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={classNames(
      'nhsuk-button',
      { 'nhsuk-button--disabled': disabled },
      { 'nhsuk-button--secondary': secondary },
      { 'nhsuk-button--reverse': reverse },
      className,
    )}
    type={type}
    disabled={disabled}
    aria-disabled={disabled ? 'true' : rest["aria-disabled"]}
    {...rest}
  />
);

Button.defaultProps = {
  type: 'submit',
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  children,
  disabled,
  secondary,
  reverse,
  href,
  role,
  ...rest
}) => (
  <a
    className={classNames(
      'nhsuk-button',
      { 'nhsuk-button--disabled': disabled },
      { 'nhsuk-button--secondary': secondary },
      { 'nhsuk-button--reverse': reverse },
      className,
    )}
    role={role}
    href={href}
    aria-disabled={disabled ? 'true' : rest["aria-disabled"]}
    {...rest}
  >
    {children}
  </a>
);

ButtonLink.defaultProps = {
  role: 'button',
  draggable: false,
};

const ButtonWrapper: React.FC<ButtonLinkProps | ButtonProps> = ({ href, as, ...rest }) => {
  if (as === 'a') {
    return <ButtonLink href={href} {...(rest as ButtonLinkProps)} />;
  }
  if (as === 'button') {
    return <Button {...(rest as ButtonProps)} />;
  }
  if (href) {
    return <ButtonLink href={href} {...(rest as ButtonLinkProps)} />;
  }
  return <Button {...(rest as ButtonProps)} />;
};

export default ButtonWrapper;
