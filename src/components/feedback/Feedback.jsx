import css from './Feedback.module.css';
const Feedback = ({ feedback, total, positive }) => {
  const feedbackKeys = Object.keys(feedback);
  console.log(feedbackKeys);
  return (
    <div className={css.wrapper}>
      <ul className={css['feedback-list']}>
        {feedbackKeys.map(feed => (
          <li className={css['feedback-item']} key={feed}>
            {feed} : {feedback[feed]}
          </li>
        ))}
      </ul>
      <p className={css.total}>Total: {total}</p>
      <p className={css.positive}>Positive: {positive}</p>
    </div>
  );
};

export default Feedback;
