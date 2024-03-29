interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
  value: string;
  className?: string;
}

export default function Input({ label, value, className, onChange, placeholder }: Props)  {
  return (
    <div className={`flex flex-col grow ${className}`}>
      <span className="font-bebas">{label}</span>
      <input
        type="text"
        className="bg-secondary rounded text-white p-4 font-bebas"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
