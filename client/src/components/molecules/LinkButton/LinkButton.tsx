import { Link } from 'react-router-dom';

import { Button, type ButtonProps } from '../../atoms';

export interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function LinkButton({ content: text, href }: LinkButtonProps) {
  return (
    <Link to={href}>
      <Button content={text} />
    </Link>
  );
}
