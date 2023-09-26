import React from "react";
import { Container } from "./style";
import Logo1 from "../../assets/logos/01.png";
import Logo2 from "../../assets/logos/02.png";
import Logo3 from "../../assets/logos/03.png";
import Logo4 from "../../assets/logos/04.png";
import Logo5 from "../../assets/logos/05.png";
import Logo6 from "../../assets/logos/06.png";
import Logo7 from "../../assets/logos/07.png";
import Logo8 from "../../assets/logos/08.png";
import Logo9 from "../../assets/logos/09.png";

const Logos = () => {
  return (
    <Container>
      <Container.LogosTitle>As seen in</Container.LogosTitle>
      <Container.LogosImages>
        <Container.LogosImg src={Logo1} alt="logo-imamge" />
        <Container.LogosImg src={Logo2} alt="logo-imamge" />
        <Container.LogosImg src={Logo3} alt="logo-imamge" />
        <Container.LogosImg src={Logo4} alt="logo-imamge" />
        <Container.LogosImg src={Logo5} alt="logo-imamge" />
        <Container.LogosImg src={Logo6} alt="logo-imamge" />
        <Container.LogosImg src={Logo7} alt="logo-imamge" />
        <Container.LogosImg src={Logo8} alt="logo-imamge" />
        <Container.LogosImg src={Logo9} alt="logo-imamge" />
      </Container.LogosImages>
    </Container>
  );
};

export default Logos;
