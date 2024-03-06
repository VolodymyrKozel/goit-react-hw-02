import css from './Options.module.css';
const Options = ({ updateFeedback, total }) => {
  return (
    <div className={css.wrapper}>
      <button
        className={css['btn-options']}
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        className={css['btn-options']}
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        className={css['btn-options']}
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>
      {total ? (
        <button
          className={css['btn-options']}
          onClick={() => {
            updateFeedback('reset');
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
