import { ReactNode } from 'react';
import styles from './styles.module.scss';

export interface ButtonProps {
  content?: string;
  classNames?: string[];
  children?: ReactNode;
}

export function Button({
  content,
  classNames = [],
  children = [],
}: ButtonProps) {
  return (
    <button className={[...classNames, styles.buttonDefault].join(' ')}>
      {content}
      {children ?? ''}
    </button>
  );
}
