interface PillProps {
  text: string;
}

const Pill = ({ text }: PillProps) => {
  return <p className="border border-solid rounded-full p-2 text-sm">{text}</p>;
};

export default Pill;
