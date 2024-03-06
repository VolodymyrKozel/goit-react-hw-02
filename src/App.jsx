import { useState, useEffect } from 'react';
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';
import './App.css';

function App() {
  const clearObject = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem('saved-feedback');
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return clearObject;
  });
  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedback(clearObject);
      return;
    }
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);
  return (
    <main className="container">
      <Description />
      <Options updateFeedback={updateFeedback} total={totalFeedback} />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </main>
  );
}

export default App;
