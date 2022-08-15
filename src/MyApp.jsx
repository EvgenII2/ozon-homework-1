function MyApp() {
  const [step, setStep] =
    React.useState(1);
  const [count, setCount] =
    React.useState(2);
  const [sum, setSum] =
    React.useState(0);
  React.useEffect(() => {
    setSum(step + count);
    return () => {};
  }, [step, count]);
  return (
    <section className='app'>
      <h1>React</h1>
      <h2>How much will?</h2>
      <p>
        {count} + {step}
      </p>
      <p>
        <strong>Result: {sum}</strong>
      </p>
      <div className='math'>
        Counter:
        <button
          className='button minus'
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
        <button
          className='button plus'
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {" "}
          +1
        </button>
      </div>
      <div className='math'>
        Step:
        <button
          className='button minus'
          onClick={() => {
            setStep(step - 2);
          }}
        >
          {" "}
          -2
        </button>
        <button
          className='button plus'
          onClick={() => {
            setStep(step + 2);
          }}
        >
          {" "}
          +2
        </button>
      </div>
    </section>
  );
}

const container =
  document.getElementById("react-app");
const root =
  ReactDOM.createRoot(container);
root.render(<MyApp />);
