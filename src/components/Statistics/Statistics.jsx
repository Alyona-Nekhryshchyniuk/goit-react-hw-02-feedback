const Statistics = ({ options, total }) => {
  const elementsGenerate = options => {
    let arr = [];
    for (const key in options) {
      let capitalizedKey = key.capitalized(key);
      arr.push(<p key={key}>{capitalizedKey}:</p>);
    }
    return arr;
  };

  return (
    <>
      <h2>Statistics</h2>
      <div>Total: {total}</div>
      {elementsGenerate(options)}
    </>
  );
};
export default Statistics;
