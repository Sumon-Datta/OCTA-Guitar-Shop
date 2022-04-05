import React from "react";
import useReviewer from "./../useReviewer/useReviewer";
import ReviewersData from "./../ReviewersData/ReviewersData";
import './Reviewer.css'
const Reviewer = () => {
  const [reviewers] = useReviewer();
  return (
    <div>
      <h4 className="review_headding">Customer Review</h4>
      <div className='reviews'>
      {reviewers.map((reviewer) => (
        <ReviewersData
          key={reviewer.id}
          reviewer={reviewer} >
        </ReviewersData>
      ))}
      </div>
    </div>
  );
};

export default Reviewer;
