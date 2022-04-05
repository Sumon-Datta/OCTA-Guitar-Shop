import { useState, useEffect } from "react";

const useReviewer = () => {
  const [reviewers, setReviewer] = useState([]);

  useEffect(() => {
      fetch('Reviewer.json')
      .then(res => res.json())
      .then(data => setReviewer(data))
  }, []);
  
  return [reviewers]
};

export default useReviewer;