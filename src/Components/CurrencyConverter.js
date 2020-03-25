import React, { Component } from "react";
import CurrencyDisplay from "./CurrencyDisplay";

const withCurrency = BaseComponent => {
  return( class Currency extends Component {
    constructor() {
      super();
      this.state = {
        currencyChosen: false,
        selectedCurrency: "Select Currency",
        amount: 0
      };
    }
    handleAmountIncrease = () => {
      this.setState(prevState => {
        return {
          amount: prevState.amount + 1
        };
      });
    };
    handleAmountDecrease = () => {
      this.setState(prevState => {
        return {
          amount: prevState.amount - 1
        };
      });
    };
    handleOption = evt => {
        const inputValue = evt.target.value
      this.setState(() => {
        return {
          selectedCurrency: inputValue,
          currencyChosen: inputValue === "Select Currency" ? false : true
        };
      });
    };
    render() {
      const currencyData = [
        { name: "Japanese Yen", symbol: "¥", rate: 113.6, id: 0 },
        { name: "British Pound", symbol: "£", rate: 0.77, id: 1 },
        { name: "Canadian Dollar", symbol: "CAD", rate: 1.32, id: 2 },
        { name: "Mexican Peso", symbol: "Mex$", rate: 20.41, id: 3 },
        { name: "Swiss Franc", symbol: "Fr.", rate: 1.01, id: 4 }
      ];
      const currencyOptions = currencyData.map((currency, index) => (
        <option key={currency.id} value={index}>
          {currency.symbol}, {currency.name}
        </option>
      ));
      return (
        <div>
          <select
            value={this.state.selectedCurrency}
            onChange={this.handleOption}
          >
            <option value="Select Currency">Select Currency</option>
            {currencyOptions}
          </select>
          <div>
            <button className="ADD" onClick={this.handleAmountIncrease}>
              +
            </button>
            <button className="MINUS" onClick={this.handleAmountDecrease}>
              -
            </button>
          </div>
          {this.state.currencyChosen ? (
            <BaseComponent
              currency={currencyData[this.state.selectedCurrency]}
              amount={this.state.amount}
            />
          ) : (
            <p>Select a Currency First</p>
          )}
        </div>
      );
    }
  })};
const ExchangedCurrency = withCurrency(CurrencyDisplay);
export default ExchangedCurrency;
