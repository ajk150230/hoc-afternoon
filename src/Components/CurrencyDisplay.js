
import React, { Component } from 'react'

const CurrencyDisplay = (props) => (
	<>
        {console.log(props)}
		US Dollar ${props.amount.toFixed(2)} = {props.currency.name}{' '}
		{props.currency.symbol}
		{(props.amount * props.currency.rate).toFixed(2)}
	</>
)

export default CurrencyDisplay
