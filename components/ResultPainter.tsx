import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import config from "../configuration/config";

export default function ResultPainter({result}) : JSX.Element{
	const weights = config.weights;
	weights.sort((a,b)=>Number(b.size)-Number(a.size))
	console.log(result)
	if(result==null) {
		return (
			<View style= {styles.container}>
				<Text style= {styles.text}> Not enought weights</Text>
			</View>
		)
	}
	return (
		<>
		<View style = {styles.container}>
		{
		 result && weights.filter((weight) => !!result[weight.size])
			.flatMap((weight)=>{
				return [...Array(Number(result[weight.size])/2)].map((x,i)=>(
					<View
					style={
						{
							backgroundColor: weight.color,
							height : Number(weight.size)*5,
							width: 10,
							margin: 3
						}
					}
					></View>)
				)
			}
			).reverse()
		}
		<View style= {styles.barbel}></View>
		{
		 result && weights.filter((weight) => !!result[weight.size])
		 .flatMap((weight)=>{
			return [...Array(Number(result[weight.size])/2)].map((x,i)=>(
				<View
				style={
					{
						backgroundColor: weight.color,
						height : Number(weight.size)*5,
						width: 10,
						margin: 3
					}
				}
				></View>)
			)
		}
		)}
		</View>
		</>
		
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		flexDirection:"row",
		alignItems: "center",
		justifyContent:"center"
		
	},
	barbel: {
		width:40,
		height:10,
		backgroundColor:"grey"
	},
	text : {
		fontSize:20,
		fontWeight:"bold"
	}
})