import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

Container.Head = styled.div`
  display: flex;
  flex-direction: column;
`;
Container.Top = styled.div`
  width: 100%;
  text-align: center;
  background-color: #f3f3f5;
  padding: 12px 0;
`;
Container.TopTitle = styled.p`
  display: flex;
  justify-content: center;
  gap: 4px;
  color: #000;
  font-size: 14px;
  font-weight: 400;
`;
Container.Span = styled.p`
  color: #997f72;
  font-size: 14px;
  font-weight: 400;
`;
Container.Navigation = styled.div`
  display: flex;
  justify-content: center;
  background: #2c2c2e;
  color: #fff;
`;
Container.Logo = styled.img``;
Container.NavItems = styled.div`
  display: flex;
  padding: 16px 73px 16px 58px;
  gap: 72px;
`;
Container.NavLink = styled.p``;
Container.NavIcons = styled.div`
  display: flex;
  gap: 40px;
`;
Container.NavIcon = styled.img``;

export { Container };
