import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <LayoutStyle>{props.children}</LayoutStyle>;
};

export default Layout;

const LayoutStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 800px;
  background-color: whitesmoke;
  margin-left: auto;
  margin-right: auto;
`;
