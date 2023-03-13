import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Equipment from "./Equipment";
import config from "../configuration/config";
import { Text } from "@ui-kitten/components";
import ResultPainter from "./ResultPainter";

export default function EquipmentsList(): JSX.Element {
	const [input, setInput] = useState({});
	const [result, setResult] = useState(null);
	// const [weights, setWeights] = useState(config.weights);
	console.log(config.weights.sort((a,b)=>Number(b.size)-Number(a.size)));
	return (<>
			<View style={styles.textContainer}>
				<Text>Barbel Weight</Text>
				<TextInput
				placeholder = "Weight(Kg)"
				style= {{backgroundColor: "white"}}
				value= {input["barbel"] || ""}
				onChangeText={(text)=> setInput({...input, "barbel": text})}
				></TextInput>
			</View>
			<View style={styles.container}>
				{
					
					config.weights.map((weight, index)=>(
					
						<Equipment 
							key={weight.size}
							input={input}
							setInput={setInput}
							weightDetails={weight}></Equipment>
					
					))
				}
				
			</View>
			<View style={styles.textContainer}>
				<Text>Target Weight</Text>
				<TextInput
				placeholder = "Weight(Kg)"
				style= {{backgroundColor: "white"}}
				value={input["target"] || ""}
				onChangeText= {(text)=>setInput({...input,"target": text })}
				></TextInput>
			</View>
			<View >
				<Button title="Calculate"  onPress={()=> setResult(algo(input))}/>
			</View>
			<View>
				{/* <Text>{JSON.stringify(result)}</Text> */}
				<ResultPainter result={result} />
			</View>
			
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection:"row",
		justifyContent: "center",
		flexWrap: "wrap", // the number of columns you want to devide the screen into
		marginHorizontal: "auto",
		width: 400,
	},
	textContainer : {
		padding: 10
	}
});

function algo (input: any) : any{
	input = {...input};
	const weights = config.weights;
	weights.sort((a,b)=>Number(b.size)-Number(a.size));
	const target= Number(input["target"] || 0);
	const barbel = Number(input["barbel"] || 0);
	if(target>= barbel) {
		let toCalculate = target-barbel;
		if(toCalculate==0){
			return {};
		}else {
			const result : any= {};
			weights.map((weightInfo)=>{
				if(weightInfo.size){
					const weight = Number(weightInfo.size)
					while((input[weightInfo.size] && Number(input[weightInfo.size])>=2) && 2*weight<=toCalculate){
						toCalculate -= (2*weight)
						const curr = result[weightInfo.size] || 0;
						result[weightInfo.size] = curr + 2;
						input[weightInfo.size] = (Number(input[weightInfo.size])-2).toString();
					}
				}
			});
			if (toCalculate == 0) {
				return result;
			}else {
				null
			}
		}
	}else{
		return null;
	}
	


}