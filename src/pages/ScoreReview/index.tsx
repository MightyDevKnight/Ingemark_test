import React from "react";
import { WithLayout } from "layouts";
import { ScoreReviewContainer } from "containers";

const ScoreReview: React.FC = () => {
  return <ScoreReviewContainer />;
};

export const ScoreReviewPage = WithLayout(ScoreReview);
