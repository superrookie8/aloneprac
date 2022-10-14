import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderTitle>나혼자 Todo 리스트!!</HeaderTitle>
        <HeaderName>리액트 뽀개기</HeaderName>
      </HeaderContainer>
    </div>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px !important;
  height: 80px;
  background-color: lightgray;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.div`
  font-size: x-large;
  font-weight: 700;
  margin-right: auto;
  margin-left: 10px;
`;

const HeaderName = styled.div`
  font-size: x-large;
  font-weight: 700;
  margin-left: auto;
  margin-right: 10px;
`;
