import Pill from "./Pill";

const skills = ["Web development", "Mobile development"];

const PortfolioCard = () => {
  return (
    <div className="border border-stone-300 rounded-xl p-4 flex gap-4">
      <img
        className="rounded-md"
        src="/public/assets/portfolio-image.webp"
        alt=""
      />
      <div className="flex flex-col justify-around gap-4">
        <p className="text-xl font-medium">Paple website - Frontend Design</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, saepe
          officia! Quis quaerat non et fugit ex? Odit tempora quae aspernatur ab
          asperiores distinctio obcaecati nisi sapiente, atque consequatur
          recusandae doloremque iure vero unde doloribus nulla accusamus
          ratione. Consectetur veniam autem, atque asperiores vel molestias sint
          explicabo id vitae debitis?
        </p>
        <div className="flex flex-row gap-4">
          {skills.map((skill) => (
            <Pill text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
