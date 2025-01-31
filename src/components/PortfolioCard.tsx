const PortfolioCard = () => {
  return (
    <div className="border border-stone-300 rounded-xl p-4 flex gap-4">
      <img
        className="rounded-md"
        src="/public/assets/portfolio-image.webp"
        alt=""
      />
      <div>
        <p className="text-xl font-medium mb-2">
          Paple website - Frontend Design
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea magnam
          nobis fuga consequatur, non doloribus.
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
