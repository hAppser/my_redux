import "./App.css";
import useCustomRedux from "./useCustomRedux/useCustomRedux";
function App() {
  const store = useCustomRedux();
  let count = store.getState().count;
  store.subsribe(() => {
    count = store.getState().count;
    document.querySelector("#counter").innerHTML = count;
  });
  return (
    <div className="App">
      <div id="counter">{count}</div>
      <button
        className="plus btn"
        onClick={() => {
          store.dispatch({ type: "INCREMENT", payload: 1 });
        }}
      >
        +
      </button>
      <button
        className="minus btn"
        onClick={() => {
          store.dispatch({ type: "DECREMENT", payload: 1 });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
