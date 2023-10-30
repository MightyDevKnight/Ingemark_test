import React from "react";
import { HeaderLayout } from "./Header";
import { FooterLayout } from "./Footer";
import { ContentWrapper } from "styled";

interface Props {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
        <ContentWrapper>
        {children}
        </ContentWrapper>
      <FooterLayout />
    </div>
  );
};

export const WithLayout = (Component: React.FC) => () => {
  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
};
