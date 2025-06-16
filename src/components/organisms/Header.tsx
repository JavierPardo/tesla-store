import { Logo } from "../atoms/Logo";
import { Navigation } from "../molecules/Navigation";
import { UserControls } from "../molecules/UserControls";

export const Header: React.FC = () => (
  <header className="bg-white shadow-md py-4 px-6 md:px-8 lg:px-12 fixed w-full z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Logo />
      <Navigation />
      <UserControls />
    </div>
  </header>
);