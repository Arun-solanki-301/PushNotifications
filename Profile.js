import react from "react";
import {View , Image , Text , StyleSheet} from 'react-native'
const Profile = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>User info list</Text>
            <View style={styles.UserInfoContainer}>
            <View style={styles.UserContainer}><Text style={styles.HeadText}>UserName :</Text><Text  style={styles.InfoText}>Arun solanki</Text></View>
            <View style={styles.UserContainer}><Text style={styles.HeadText}>Password :</Text><Text style={styles.InfoText}>Password</Text></View>
            <View style={styles.UserContainer}><Text style={styles.HeadText}>Role :</Text><Text style={styles.InfoText}>Role</Text></View>
            </View>
        </View>
    )
}
export default Profile;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 15,
        marginVertical : 25
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