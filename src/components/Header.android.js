import React from 'react';

import { Text } from 'react-native';

import HeaderStyles from 'styles/HeaderStyles';

class Header extends React.Component {
	render() {
		return (
			<Text style={HeaderStyles.styles}>
				Restaurant List
			</Text>
		);		
	}
}

export default Header;