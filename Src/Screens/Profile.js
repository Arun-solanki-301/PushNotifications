import React, { useEffect } from "react";
import {View , Image , Text , StyleSheet, ScrollView} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { profileRequest } from "../Redux/Actions/Action";
const Profile = () =>{

    const {UserListData} = useSelector(state=>state);
    const dispatch = useDispatch();
    useEffect(()=>{
        getUserInfo()
    } , [])
    
    const getUserInfo = () =>{
        dispatch(profileRequest())
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>User info list</Text>
            {UserListData?.data?.map((item)=>{
                return(
            <View style={styles.UserInfoContainer} key={item._id}>
            <View style={styles.UserContainer}><Text style={styles.HeadText}>UserName :</Text><Text  style={styles.InfoText}>{item.username}</Text></View>
            <View style={styles.UserContainer}><Text style={styles.HeadText}>Password :</Text><Text style={styles.InfoText}>{item.password}</Text></View>
            <View style={styles.UserContainer}><Text style={styles.HeadText}>Role :</Text><Text style={styles.InfoText}>{item.role}</Text></View>
            </View>
                )
            })
        }
        </ScrollView>
    )
}
export default Profile;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 15,
        marginVertical : 25,
        height : "100%"
    },
    headerText :{
        color : "#454545",
        fontSize : 25,
        textAlign : "center",
    },
    UserInfoContainer :{
        marginVertical : 15, 
    },
    UserContainer : {
        display : "flex",
        alignItems :"center",
        justifyContent : "space-between",
        flexDirection : "row"
    },
    HeadText :{
        fontSize : 18,
        width : "50%",
        textAlign : "center"
    },
    InfoText : {
        width : "50%",
        fontSize : 18,
        textAlign : "center"
    }
})