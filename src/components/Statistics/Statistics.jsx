import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <Item>good: {good}</Item>
      <Item>neutral: {neutral}</Item>
      <Item>bad: {bad}</Item>
      <Item>total: {total}</Item>
      <Item>positive feedback: {positivePercentage}%</Item>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
