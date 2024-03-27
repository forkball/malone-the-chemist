interface Props {
  label: string;
}

export default function Button({ label }: Props) {
  return (
    <button
      type="button"
      className="border border-secondary bg-secondary \
                 text-white  text-xl font-bebas \
                 rounded-full p-6 px-12"
    >
      {label}
    </button>
  );
}
