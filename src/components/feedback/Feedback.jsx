const Feedback = ({feedback}) => {
    
  return (
    <>
    <ul>
    <li>Good: {feedback.good}</li>
    <li>Neutral: {feedback.neutral}</li>
    <li>Bad: {feedback.bad}</li>
</ul>
    <p>Total: </p>
    <p>Positive: </p>
    </>
  )
}

export default Feedback
