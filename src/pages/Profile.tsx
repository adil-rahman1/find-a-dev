import { useState } from "react";
import Pill from "../components/Pill";
import PortfolioCard from "../components/PortfolioCard";
import SocialLinks from "../components/SocialLinks";
import ISocialLinks from "../types/SocialLinks";

const socialLinks = {
  id: 1,
  developer_id: 1,
  linkedin: "https://www.linkedin.com/in/adil-rahman1/",
  github: "https://github.com/adil-rahman1",
  website: "www.google.com",
  otherSite: "www.youtube.com",
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [savedAboutMe, setSavedAboutMe] = useState<string>("My name is Adil");
  const [editedAboutMe, setEditedAboutMe] = useState<string>("My Name is Adil");
  const [savedSocialLinks, setSavedSocialLinks] =
    useState<ISocialLinks>(socialLinks);
  const [editedSocialLinks, setEditedSocialLinks] =
    useState<ISocialLinks>(socialLinks);

  const skills = ["Web development", "Mobile development"];

  function updateProfile() {
    setSavedAboutMe(editedAboutMe);
    setSavedSocialLinks(editedSocialLinks);
    setIsEditing(false);
  }

  return (
    <div className="p-4">
      <img
        className="border rounded-full w-28 h-28 my-4"
        src="/public/assets/dev-1-profile-photo.jpeg"
        alt="profile-image"
      />
      <p className="font-bold text-xl my-4">John Smith</p>
      <div>
        {isEditing && (
          <textarea
            className="border-2 border-black w-96 mb-2 p-0.5 rounded-md"
            value={editedAboutMe}
            onChange={(e) => setEditedAboutMe(e.target.value)}
          />
        )}
        {!isEditing && <p>{savedAboutMe}</p>}
      </div>
      <SocialLinks
        isEditing={isEditing}
        savedSocialLinks={savedSocialLinks}
        editedSocialLinks={editedSocialLinks}
        setEditedSocialLinks={setEditedSocialLinks}
      />
      {!isEditing && (
        <button
          className="text-white bg-sky-600 hover:bg-sky-700 p-1 w-48 mt-2 rounded-md"
          onClick={() => setIsEditing(true)}
        >
          Edit profile
        </button>
      )}

      {isEditing && (
        <div>
          <button
            className=" text-white bg-green-400 hover:bg-green-500 p-1 w-12 ml-7 mr-2 rounded-md"
            onClick={updateProfile}
          >
            Save
          </button>
          <button
            className="text-white bg-gray-500 hover:bg-gray-600 p-1 w-20 rounded-md"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      )}

      <p className="font-bold my-4">Services</p>
      <div className="flex flex-row gap-4">
        {skills.map((skill) => (
          <Pill text={skill} />
        ))}
      </div>

      <p className="font-bold my-4">Portfolio</p>
      <PortfolioCard />
    </div>
  );
};

export default Profile;
