interface Props extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
}

export default function Button({ label, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border border-secondary bg-secondary \
                 text-white  text-xl font-bebas \
                 rounded-full p-6 px-12"
    >
      {label}
    </button>
  );
}
