import React from "react";
import { Container } from "./style";

import Logo2 from "../../assets/hero-img/logo2.png";
import HeroImg  from "../../assets/hero-img/hero-image-1.png"

const Hero = () => {
  return (
    <Container>
      <Container.HeroContent>
        <Container.HeroInfo>
          <Container.HeroInfoTitleLogo src={Logo2} alt="Logo2"/>
          <Container.HeroInfoText>Lorem ipsum dolor sit consectetur</Container.HeroInfoText>
          <Container.HeroInfoButton className="light-btn">Ditch the disposals</Container.HeroInfoButton>
        </Container.HeroInfo>
        <Container.HeroImg src={HeroImg} alt="hero-image"/>
      </Container.HeroContent>
    </Container>
  );
};

export default Hero;
