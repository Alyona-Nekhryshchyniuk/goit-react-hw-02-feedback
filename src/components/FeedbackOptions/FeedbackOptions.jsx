import PropTypes, { arrayOf } from 'prop-types';
import Section from '../Section';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elementsGenerate = options => {
    let btnsArr = [];

    for (const key in options) {
      btnsArr.push(
        <button
          key={key}
          type="submit"
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key}
        </button>
      );
    }
    return btnsArr;
  };

  return (
    <Section title="Please leave feedback">{elementsGenerate(options)}</Section>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.object,
};

export default FeedbackOptions;
