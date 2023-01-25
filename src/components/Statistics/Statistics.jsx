import Section from '../Section';
const Statistics = ({ options, total, positivePercentage }) => {
  const elementsGenerate = options => {
    let labelsMarkUp = [];

    for (const key in options) {
      labelsMarkUp.push(
        <p key={key}>
          {key}: {options[key]}
        </p>
      );
    }
    return labelsMarkUp;
  };

  return (
    <Section title="Statistics">
      {elementsGenerate(options)}
      <p>Total: {total()}</p>
      <p>Positive feedback: {positivePercentage()}%</p>
    </Section>
  );
};
export default Statistics;
