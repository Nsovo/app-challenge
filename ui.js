'use strict';
const data = require('./data');
const React = require('react');
const {Box} = require('ink');
const {Text} = require('ink');
const TextInput = require("ink-text-input").default;


const App = () => {
	const [address, Search] = React.useState("");
	const [results , SetResult] = React.useState([])

	const addressData =  data.addresses

	React.useEffect(() => {
		getData()

	});

	const getData = () => {
		if(address && address.length > 3) {
			//const items =dataArray.filter(d => d.includes(address))
			for(const item in addressData){
				if(addressData[item].includes(address)){
					let searchedResults = item + ":"+ addressData[item]
					SetResult(searchedResults)
				}
			}
		}
	}


	return (
		<Box flexDirection="column">
			<TextInput
				placeholder="Enter address to search..."
				value={address}
				onChange={Search}
			/>
			<Text paddingTop={5}>
				Addressed searched for : {results}
			</Text>

		</Box>
	);
};

module.exports = App;

