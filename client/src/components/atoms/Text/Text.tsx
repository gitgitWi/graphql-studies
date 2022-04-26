export interface TextProps {
  content: string;
  classNames?: string[];
}

export function Text({ content, classNames = [] }: TextProps) {
  return <p className={[, ...classNames].join(' ')}>{content}</p>;
}
