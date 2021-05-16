interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div onClick={onClick}>{color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div onClick={onClick}>{color}</div>;
};
