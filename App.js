/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View,
	TextInput,
	ScrollView
} from 'react-native';

import Header from 'components/Header';

const restaurants = [
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
	{ name: 'React Cafe', address: '123 Anywhere St' },
	{ name: 'Fancy Restaurant', address: '799 Main St' },
	{ name: 'Taco Bar', address: '324 Nearby St' },
];

const Restaurant = ({ restaurant, index }) => (
	<View style={styles.row}>
		<View style={styles.edge}>
			<Text>{index + 1}</Text>
		</View>
		<View style={styles.restaurantInfo}>
			<Text>{restaurant.name}</Text>
			<Text style={styles.restaurantName}>{restaurant.address}</Text>
		</View>
		<View style={styles.edge}>
			<Text>Info</Text>
		</View>
	</View>
);

export default class App extends Component<Props> {
	state = {
		filter: ''
	}

	render() {
		return (
			<View style={{
				flex: 1
			}}>
				<Header />

				<TextInput 
					style={styles.input} 
					placeholder="Live Search"
					onChangeText={text => {
						this.setState({ filter: text });
					}}
					value={this.state.filter}
				/>

				<ScrollView contentContainerStyle={{ paddingTop: 30 }}>
					{ restaurants
						.filter(restaurant => {
							const { filter } = this.state;
							const re = new RegExp(filter, 'i');
							return !filter || re.test(`${restaurant.name}-${restaurant.address}`);
						})
						.map((restaurant, index) => (
							<Restaurant restaurant={restaurant} index={index} key={restaurant.name} />
						))
					}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	edge: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	restaurantInfo: {
		flexDirection: 'column',
		flex: 8
	},
	restaurantName: {
		color: 'grey'
	},
	input: {
		padding: 10,
		paddingHorizontal: 20,
		fontSize: 16,
		color: '#444',
		borderBottomWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#F5F5F5'
	}
});