import { SocialIcon } from "../atoms/SocialIcon";

export const SocialLinks: React.FC = () => (
  <div className="flex space-x-4">
    <SocialIcon href="#" iconClass="fab fa-facebook" />
    <SocialIcon href="#" iconClass="fab fa-instagram" />
    <SocialIcon href="#" iconClass="fab fa-twitter" />
    <SocialIcon href="#" iconClass="fab fa-linkedin" />
  </div>
);