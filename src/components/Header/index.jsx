// components/Header.js
import React from "react";
import { Container } from "./style";

import Logo from "../../assets/header-img/logo.svg";
import AccountIcon from "../../assets/header-img/account-icon.svg";
import BagIcon from "../../assets/header-img/bag-icon.svg";

const Header = () => {
  return (
    <Container>
      <Container.Head>
        <Container.Top>
          <Container.TopTitle>
            Check out our <Container.Span> Holiday </Container.Span> Sale! Click
            here to shop now
          </Container.TopTitle>
        </Container.Top>
        <Container.Navigation>
          <Container.Logo src={Logo} alt="logo-icon" />
          <Container.NavItems>
            <Container.NavLink>Razors</Container.NavLink>
            <Container.NavLink>Shaving Supplies</Container.NavLink>
            <Container.NavLink>Gifts</Container.NavLink>
            <Container.NavLink>The Story</Container.NavLink>
            <Container.NavLink>The Difference</Container.NavLink>
            <Container.NavLink>More</Container.NavLink>
          </Container.NavItems>
          <Container.NavIcons>
            <Container.NavIcon src={AccountIcon} alt="AccountIcon" />
            <Container.NavIcon src={BagIcon} alt="BagIcon" />
          </Container.NavIcons>
        </Container.Navigation>
      </Container.Head>
    </Container>
  );
};

export default Header;
