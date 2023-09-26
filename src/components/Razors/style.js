import styled from "styled-components";

const Container = styled.div`
  background: #1c1c1e;
`;
Container.Item = styled.div`
  position: relative;
  padding: 29px 0 60px 0;
  display: flex;
`;
Container.ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 604px;
  height: 605px;
  position: relative;
  background-color: #fff;
  padding: 99px 92px 160px 92px;
  margin-top: 157px;
  z-index: 2;
`;
Container.ItemInfoTitle = styled.h1`
  color: #000;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 5.12px;
  text-transform: uppercase;
`;
Container.ItemInfoText = styled.h1`
  color: #404042;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 24px;
`;
Container.ItemInfoButton = styled.button`
  margin-top: 40px;
`;
Container.ItemImg = styled.img`
  position: absolute;
  left: 580px;
`;
export { Container };
