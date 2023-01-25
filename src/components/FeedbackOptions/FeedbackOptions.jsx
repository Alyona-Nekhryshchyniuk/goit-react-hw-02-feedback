const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elementsGenerate = options => {
    let btnsArr = [];
    for (const key in options) {
      btnsArr.push(
        <button key={key} type="submit" onClick={onLeaveFeedback}>
          {key}
        </button>
      );
    }
    return btnsArr;
  };

  return <>{elementsGenerate(options)}</>;
};
export default FeedbackOptions;
