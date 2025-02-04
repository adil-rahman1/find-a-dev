import "../components/social-links.css";
import ISocialLinks from "../types/SocialLinks";
import LinkedInLogo from "../../public/assets/icons/linkedin.svg";
import GitHubLogo from "../../public/assets/icons/github.svg";
import WebsiteLogo from "../../public/assets/icons/website.svg";
import OtherSiteLogo from "../../public/assets/icons/otherSite.svg";

interface SocialLinksProps {
  socialLinks: ISocialLinks;
}

const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
  const { linkedin, github, website, otherSite } = socialLinks;
  return (
    <div className="flex flex-col items-start">
      {linkedin && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={LinkedInLogo} alt="Your SVG" />
          <span>{linkedin}</span>
        </div>
      )}
      {github && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={GitHubLogo} alt="Your SVG" />
          <span>{github}</span>
        </div>
      )}
      {website && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={WebsiteLogo} alt="Your SVG" />
          <span>{website}</span>
        </div>
      )}
      {otherSite && (
        <div className="flex items-center space-x-2">
          <img className="social-icon" src={OtherSiteLogo} alt="Your SVG" />
          <span>{otherSite}</span>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;
