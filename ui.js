'use strict';
const React = require('react');
const {Box} = require('ink');
const {Text} = require('ink');

const TextInput = require("ink-text-input").default;


const App = () => {
	const [address, search] = React.useState("");
	const [results , SetResult] = React.useState("results")

	React.useEffect(() => {
		const data = {
			addresses: {
				"0x1001": "Monero standard address",
				"0x1002": "Monero sub address",
				"0x1003": "Bitcoin address",
				"0x1004": "Ethereum address"
			}
		}

		const addressData =  Object.values(data.addresses).join(',')
		const dataArray = addressData.split(",")
		if(address && address.length > 3) {
			for (let value of dataArray) {
				// console.log(value)
				if (value.includes(address)) {
					console.log("true")
					SetResult(value)
				}
			}
		}

	});

	return (
		<Box flexDirection="column">
			<TextInput
				placeholder="Enter address to search..."
				value={address}
				onChange={search}
			/>
			<Text paddingTop={5}>
				Addressed searched for : {results}
			</Text>

		</Box>
	);
};

module.exports = App;

