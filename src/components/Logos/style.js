import styled from "styled-components";

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  text-align: center;
  padding: 41px 0 51px 0;
`;
Container.LogosTitle = styled.h2`
  color: #8f8f8f;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2.24px;
  text-transform: uppercase;
`;
Container.LogosImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-top: 27px;
`;
Container.LogosImg = styled.img`
  object-fit: contain;
  margin: 0 auto;
`;

export { Container };
