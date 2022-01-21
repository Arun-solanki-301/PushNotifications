import React from "react";
import { Pressable, View, Text , StyleSheet } from "react-native";

const ButtonComponent = (props) => {
    console.log(props)
    return (
        <View>
            <Pressable style={props.styless}>
                <Text style={props.textStyle}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ButtonComponent;