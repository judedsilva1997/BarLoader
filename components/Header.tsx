import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header () :JSX.Element {
	return (
		<View style= {style.container}>
			<Text style = {style.heading}>Bar Loader</Text>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	heading : {
		color: "#efefef",
		fontSize:20,
		fontWeight: "700"
	}
})