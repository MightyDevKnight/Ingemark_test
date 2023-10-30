import React from "react";
import { Image, Header } from "./style";
import logo from "assets/image/logo.png";

export const HeaderLayout: React.FC = () => {
  return (
    <Header>
      <Image src={logo} />
    </Header>
  );
};
