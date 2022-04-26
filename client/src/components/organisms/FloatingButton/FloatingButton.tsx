import { Button, type ButtonProps } from '../../atoms';

import styles from './styles.module.scss';

export interface FloatingButtonProps extends ButtonProps {}

export function FloatingButton({ children = [] }: FloatingButtonProps) {
  return (
    <Button content="" classNames={[styles.floatingButtonDefault]}>
      {children}
    </Button>
  );
}
