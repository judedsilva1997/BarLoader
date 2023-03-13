import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ImageBackground } from 'react-native';

type EquipmentProps = {
	input: any,
	setInput:any,
	weightDetails: {
		icon:any,
		size: string
	}
}
export default function Equipment(props: any) : JSX.Element {
	return (
		<View style = {styles.container}>
			{/* <ImageBackground style = {styles.image} source={props.weightDetails.icon}>
				<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
					<Text style= {styles.text}>{props.weightDetails.size} kg</Text>
				</View>
			</ImageBackground> */}
			{
				<View style= {{
					backgroundColor: props.weightDetails.color,
					height:70,
					width:70,
					borderRadius:100,
				}}>
					<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
						<Text style= {styles.text}>{props.weightDetails.size} kg</Text>
					</View>
				</View>
			}
			<TextInput
			style = {styles.input}
			placeholder = "Qty."
			value={props.input[props.weightDetails.size] || ""}
			onChangeText={(text)=>{
				const newObj = {...props.input};
				newObj[String(props.weightDetails.size)] = text;
				// console.log(props.weightDetails.size);
				// console.log(newObj)
				props.setInput(newObj)
			}}
			textAlign ="center"
      			/>
		</View>
	)
}

const styles = StyleSheet.create ({
	container: {
		alignItems: "center",
		width: 100,
		height:100,
		padding: 5,
		margin : 5
	},
	image: {
		width:70,
		height:70,
	},
	input: {
		height:20,
		width:70,
		backgroundColor: "white",
		fontSize:11,
		marginTop: 5,
		padding: 2,
		borderRadius:5
	},
	text: {
		fontWeight:"bold"
	}

});