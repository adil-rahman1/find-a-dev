import "../components/social-links.css";
import ISocialLinks from "../types/SocialLinks";
import LinkedInLogo from "../../public/assets/icons/linkedin.svg";
import GitHubLogo from "../../public/assets/icons/github.svg";
import WebsiteLogo from "../../public/assets/icons/website.svg";
import OtherSiteLogo from "../../public/assets/icons/otherSite.svg";
import { Dispatch, SetStateAction, useState } from "react";

interface SocialLinksProps {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  socialLinks: ISocialLinks;
}

const SocialLinks = ({
  isEditing,
  setIsEditing,
  socialLinks,
}: SocialLinksProps) => {
  const [savedSocialLinks, setSavedSocialLinks] = useState(socialLinks);
  const [editedSocialLinks, seEditedSocialLinks] = useState(socialLinks);

  function saveNewSocialLinks() {
    setSavedSocialLinks(editedSocialLinks);
    setIsEditing(false);
  }

  return (
    <div className="flex flex-col items-start">
      {savedSocialLinks.linkedin && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={LinkedInLogo} alt="Your SVG" />
          {isEditing && (
            <input
              className="border-2 border-black w-96 mb-2 p-0.5 rounded-md"
              value={editedSocialLinks.linkedin}
              onChange={(e) =>
                seEditedSocialLinks({
                  ...editedSocialLinks,
                  linkedin: e.target.value,
                })
              }
            />
          )}
          {!isEditing && <span>{savedSocialLinks.linkedin}</span>}
        </div>
      )}
      {savedSocialLinks.github && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={GitHubLogo} alt="Your SVG" />
          {isEditing && (
            <input
              className="border-2 border-black w-96 mb-2 p-0.5 rounded-md"
              value={editedSocialLinks.github}
              onChange={(e) =>
                seEditedSocialLinks({
                  ...editedSocialLinks,
                  github: e.target.value,
                })
              }
            />
          )}
          {!isEditing && <span>{savedSocialLinks.github}</span>}
        </div>
      )}
      {savedSocialLinks.website && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={WebsiteLogo} alt="Your SVG" />
          {isEditing && (
            <input
              className="border-2 border-black w-96 mb-2 p-0.5 rounded-md"
              value={editedSocialLinks.website}
              onChange={(e) =>
                seEditedSocialLinks({
                  ...editedSocialLinks,
                  website: e.target.value,
                })
              }
            />
          )}
          {!isEditing && <span>{savedSocialLinks.website}</span>}
        </div>
      )}
      {savedSocialLinks.otherSite && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={OtherSiteLogo} alt="Your SVG" />
          {isEditing && (
            <input
              className="border-2 border-black w-96 mb-2 p-0.5 rounded-md"
              value={editedSocialLinks.otherSite}
              onChange={(e) =>
                seEditedSocialLinks({
                  ...editedSocialLinks,
                  otherSite: e.target.value,
                })
              }
            />
          )}
          {!isEditing && <span>{savedSocialLinks.otherSite}</span>}
        </div>
      )}
      {isEditing && (
        <div>
          <button
            className=" text-white bg-green-400 hover:bg-green-500 p-1 w-12 ml-7 mr-2 rounded-md"
            onClick={saveNewSocialLinks}
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
      {!isEditing && (
        <button
          className="text-white bg-sky-600 hover:bg-sky-700 p-1 w-48 mt-2 rounded-md"
          onClick={() => setIsEditing(true)}
        >
          Edit profile
        </button>
      )}
    </div>
  );
};

export default SocialLinks;
