import React from 'react';

import { Text } from 'react-native';

import HeaderStyles from 'styles/HeaderStyles';

class Header extends React.Component {
	render() {
		return (
			<Text style={HeaderStyles.iosStyles}>
				Restaurant Reviewer
			</Text>
		);		
	}
}

export default Header;