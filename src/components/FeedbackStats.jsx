import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let totalRating = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>{totalRating} Total rating</h4>
      <h4>{(totalRating / feedback.length).toFixed(1)} Average rating</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackStats;
