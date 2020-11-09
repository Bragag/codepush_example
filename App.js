/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';
import codePush from "react-native-code-push";

const App = () => {

	useEffect(() => {
		codePush.sync({
			updateDialog: true,
			installMode: codePush.InstallMode.IMMEDIATE
		});
	})
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Exemplo app</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: '#ffffff',
	},
	body: {
		backgroundColor: '#ffffff',
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: 'rgb(50, 50, 50)',
	},

});

export default App;
