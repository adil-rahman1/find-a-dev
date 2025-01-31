interface PillProps {
  services: string[];
}

const Pill = ({ services }: PillProps) => {
  return (
    <div className="flex flex-row gap-4">
      {services.map((service) => (
        <p className="border border-solid rounded-full p-2 text-sm">
          {service}
        </p>
      ))}
    </div>
  );
};

export default Pill;
