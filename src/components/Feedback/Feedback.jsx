import { useEffect, useState } from 'react';
import statistickFeedback from '../../data/state';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  function handleLeaveFeedback(e) {
    switch (e.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  }

  useEffect(() => {
    setTotal(() => good + neutral + bad);
    setPositivePercentage(() => Math.round((good * 100) / total));
  }, [good, neutral, bad, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(statistickFeedback)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
