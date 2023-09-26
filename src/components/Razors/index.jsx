import React from "react";
import { Container } from "./style";
import "../../App.css";

import razor1 from '../../assets/razors/razor-1.jpg'

const Razors = () => {
  return (
    <Container>
      <Container.Item>
        <Container.ItemInfo>
          <Container.ItemInfoTitle>
            Lorem ipsum dolor sit amet, consectetur
          </Container.ItemInfoTitle>
          <Container.ItemInfoText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </Container.ItemInfoText>
          <Container.ItemInfoButton className="dark-btn">Ditch the disposals</Container.ItemInfoButton>
        </Container.ItemInfo>
        <Container.ItemImg src={razor1} alt="razor-image"/>
      </Container.Item>
      
      <Container.Item>
      <Container.ItemImg src={razor1} alt="razor-image"/>
        <Container.ItemInfo className='reverse-item'>
          <Container.ItemInfoTitle>
            Lorem ipsum dolor sit amet, consectetur
          </Container.ItemInfoTitle>
          <Container.ItemInfoText>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </Container.ItemInfoText>
          <Container.ItemInfoButton className="dark-btn">Ditch the disposals</Container.ItemInfoButton>
        </Container.ItemInfo>
      </Container.Item>
    </Container>
  );
};

export default Razors;
