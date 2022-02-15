import React from 'react'
import styled from 'styled-components/native'
import Quote from './components/Quote'


const Container = styled.View`
	flex: 1;
	background-color: black;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`;

const App = () => {
	return (
		<Container>
			<Quote />
		</Container>
	);
};

export default App;
