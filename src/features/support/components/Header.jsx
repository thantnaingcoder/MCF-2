import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Logo from "../../../assets/pathwayLogo.png";


const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-10 w-10" />
          </Link>
          <div className="flex items-center space-x-4">
            <Button>Sign in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>
      
    </div>
  );
};

export default Header;
