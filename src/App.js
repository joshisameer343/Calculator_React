import "./styles.css";
import Calculator from "./components/Calculator";
import "./components/Calculator.css";

export default function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator className="calculator" />
    </div>
  );
}
