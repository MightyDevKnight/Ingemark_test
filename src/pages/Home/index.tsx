import React from "react";
import { WithLayout } from "layouts";
import { HomeContainer } from "containers";

export const Home: React.FC = () => {
  return <HomeContainer />;
};

export const HomePage = WithLayout(Home);
