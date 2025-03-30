import React from "react";
import TopBar from "./TopBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <TopBar />
      <div className="container">
        {/* Phần Logo, SearchBar, Cart */}
        <div className="row align-items-center py-4">
          <div className="col-md-3 d-flex justify-content-start justify-content-md-center">
            <Logo />
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <SearchBar />
          </div>
          <div className="col-md-3 d-flex justify-content-end justify-content-md-center">
            <Cart />
          </div>
        </div>

        {/* Phần Menu */}
        <div className="row">
          <div className="col-12">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
