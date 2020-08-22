import React from 'react';
import classnames from 'classnames';

export interface ButtonOptions {
  children?: React.ReactNode | null,
  theme?: 'default' | 'primary' | 'danger' | 'success'
}

export const Button = ({
                         children = null,
                         theme = 'default',
                         role = 'button',
                         ...props }: ButtonOptions & React.HTMLAttributes<HTMLButtonElement>) => {
  return <button className={classnames({
      'sl-button': true,
      'sl-button--primary': (theme === 'primary'),
      'sl-button--danger': (theme === 'danger'),
      'sl-button--success': (theme === 'success'),
    })} role={role} {...props}>{children}</button>
};
