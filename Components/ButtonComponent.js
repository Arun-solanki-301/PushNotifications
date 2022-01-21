import React from "react";
import { Pressable, View, Text , StyleSheet } from "react-native";

const ButtonComponent = (props) => {
    console.log(props)
    return (
        <View>
            <Pressable style={styles.container}>
                <Text>{props.title}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'blue',
        padding : 15
    }
})

export default ButtonComponent;