import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propsTypes = {
  options: PropTypes.string.isRequired,
  onFeedbackCount: PropTypes.func.isRequired,
};
