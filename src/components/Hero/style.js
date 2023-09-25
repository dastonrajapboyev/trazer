import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
`;
Container.HeroContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 80px;
  padding-top: 111px;
`;
Container.HeroInfo = styled.div``;
Container.HeroInfoTitleLogo = styled.img``;
Container.HeroInfoText = styled.div`
  margin-top: 32px;
  font-size: 56px;
  font-weight: 400;
  line-height: 142.829%;
  letter-spacing: 22.4px;
  text-transform: uppercase;
`;
Container.HeroInfoButton = styled.button`
  margin-top: 80px;
  display: inline-flex;
  height: 66px;
  padding: 28px 40px 21px 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 40px;
`;
Container.HeroImg = styled.img`
  width: 579px;
  height: 579px;
`;

export { Container };
