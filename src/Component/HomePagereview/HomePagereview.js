import React from "react";
import "./HomePagereview.css";
import useReviewer from "./../useReviewer/useReviewer";
import { useNavigate } from "react-router";
import CustomerShowPage from "./../CustomerShowPage/CustomerShowPage";
const HomePagereview = () => {
  const [reviewers] = useReviewer();
  const navigate = useNavigate();
  return (
    <div className="customer_review">
      <h1>Customer Review </h1>
      <div className="line"></div>
      <div className="reviews_area">
        {reviewers.slice(0, 3).map((reviewer) => (
          <CustomerShowPage
            key={reviewer.id}
            reviewer={reviewer}
          ></CustomerShowPage>
        ))}
      </div>
      <div className="button">
        <button className="btn" onClick={() => navigate("/reviewers")}>
          See All Review
        </button>
      </div>
    </div>
  );
};

export default HomePagereview;
