import { useState } from "react";
import Pill from "../components/Pill";
import PortfolioCard from "../components/PortfolioCard";
import SocialLinks from "../components/SocialLinks";

const socialLinks = {
  id: 1,
  developer_id: 1,
  linkedin: "https://www.linkedin.com/in/adil-rahman1/",
  github: "https://github.com/adil-rahman1",
  website: "www.google.com",
  otherSite: "www.youtube.com",
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const services = ["Web development", "Mobile development"];

  return (
    <div className="p-4">
      <img
        className="border rounded-full w-28 h-28 my-4"
        src="/public/assets/dev-1-profile-photo.jpeg"
        alt=""
      />
      <p className="font-bold text-xl my-4">John Smith</p>
      <SocialLinks
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        socialLinks={socialLinks}
      />
      <p className="font-bold my-4">About me</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        voluptas fugiat ducimus nihil hic vel. Commodi enim, debitis quam
        blanditiis rem, iusto, delectus totam atque doloribus mollitia deserunt
        ut laborum eveniet unde quae tempora voluptas facere porro! Natus, nisi
        hic accusantium aut, ratione cupiditate perferendis provident, maiores a
        adipisci beatae?
      </p>
      <p className="font-bold my-4">Services</p>
      <Pill services={services} />
      <p className="font-bold my-4">Portfolio</p>
      <PortfolioCard />
    </div>
  );
};

export default Profile;
