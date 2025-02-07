import "../components/social-links.css";
import LinkedInLogo from "../../public/assets/icons/linkedin.svg";
import GitHubLogo from "../../public/assets/icons/github.svg";
import WebsiteLogo from "../../public/assets/icons/website.svg";
import OtherSiteLogo from "../../public/assets/icons/otherSite.svg";
import ISocialLinks from "../types/SocialLinks";

interface SocialLinksProps {
  isEditing: boolean;
  savedSocialLinks: ISocialLinks;
  editedSocialLinks: ISocialLinks;
  setEditedSocialLinks: React.Dispatch<React.SetStateAction<ISocialLinks>>;
}

const SocialLinks = ({
  isEditing,
  savedSocialLinks,
  editedSocialLinks,
  setEditedSocialLinks,
}: SocialLinksProps) => {
  return (
    <div className="flex flex-col items-start">
      {savedSocialLinks.linkedin && (
        <div className="flex items-center space-x-2 mt-3">
          <img className="social-icon" src={LinkedInLogo} alt="Your SVG" />
          {isEditing && (
            <input
              className="border-2 border-black w-96 mb-2 p-0.5 rounded-md"
              value={editedSocialLinks.linkedin}
              onChange={(e) =>
                setEditedSocialLinks({
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
                setEditedSocialLinks({
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
                setEditedSocialLinks({
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
                setEditedSocialLinks({
                  ...editedSocialLinks,
                  otherSite: e.target.value,
                })
              }
            />
          )}
          {!isEditing && <span>{savedSocialLinks.otherSite}</span>}
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
