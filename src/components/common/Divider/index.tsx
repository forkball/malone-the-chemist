interface Props {
  height?: string;
  className?: string;
}

export default function Divider({height = "h-56", className}: Props) {
  return <div className={`${height} ${className}`}/>;
}
