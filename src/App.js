import CurrencyList from "./components/currencyList";
import Result from "./components/result";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0),
    [fromCurrency, setFromCurrency] = useState(""),
    [toCurrency, setToCurrency] = useState(""),
    [conversionResult, setConversionResult] = useState({}),
    API_KEY = "ebe399702fe07cc9d653c818";

  function calculate() {
    fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`
    )
      .then((res) => res.json())
      .then((data) => setConversionResult(data));
  }

  function swapCurrency() {
    const newFromCurrency = fromCurrency,
      newToCurrency = toCurrency;

    setFromCurrency(newToCurrency);
    setToCurrency(newFromCurrency);

    calculate();
  }

  return (
    <div className="topParent d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-center mb-3">Exchange Rate Calculator</h1>
      <div className="border rounded-3 p-4" style={{ width: "450px" }}>
        <div className="row mb-3">
          <label htmlFor="changeAmount" className="row">
            Amount
          </label>
          <input
            type="number"
            name="changeAmount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            placeholder="Amount"
          />
        </div>
        <div
          className="row justify-content-center align-items-center text-center mb-3"
          style={{ gap: "10px" }}
        >
          <CurrencyList
            fieldLabel="From"
            currency={fromCurrency}
            setCurrency={setFromCurrency}
          />
          <button
            type="button"
            className="btn btn-outline-primary rounded-5 mx-10"
            onClick={swapCurrency}
            style={{ maxWidth: "60px" }}
          >
            <i className="fa-solid fa-right-left col mx-2"></i>
          </button>
          <CurrencyList
            fieldLabel="To"
            currency={toCurrency}
            setCurrency={setToCurrency}
          />
        </div>
        <div className="row my-2">
          <button className="btn btn-outline-primary" onClick={calculate}>
            Convert
          </button>
        </div>
      </div>
      {conversionResult.result === "success" ? (
        <Result
          conversionData={conversionResult}
          totalAmount={amount}
          from={fromCurrency}
          to={toCurrency}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
