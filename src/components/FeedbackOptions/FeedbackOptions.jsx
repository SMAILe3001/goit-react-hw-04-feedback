import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(btn => (
        <Button type="button" key={btn} onClick={onLeaveFeedback} name={btn}>
          {btn}
        </Button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
