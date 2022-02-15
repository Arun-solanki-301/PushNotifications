import React, { useCallback, useEffect } from 'react'
import { ScrollView, View , Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AllPollsCompo from '../Components/AllPollsCompo'
import { allPollRequest } from '../Redux/Actions/Action'
import { useFocusEffect } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AllPolls = ({navigation}) =>{
   
    useEffect(()=>{
        getAllPollData()
    } , [])


    // useFocusEffect(
    //     useCallback(()=>{
    //         getAllPollData()
    //     },[AllPollData])
    // )

    const {AllPollData} = useSelector(state=>state);
    const dispatch = useDispatch();
   

    const getAllPollData = () =>{
        console.log('jgdajdj');
        dispatch(allPollRequest())
    }
    return(
        <ScrollView style={{height : "100%" , marginHorizontal : 15}} showsVerticalScrollIndicator={false}>
            <Text style={{textAlign : "center" , fontSize : 30 , color : "#454545"}}>ALL POLLS</Text>
            <AllPollsCompo data={AllPollData?.data}/>
        <TouchableOpacity style={{backgroundColor:"#454545" , width:40,height:40 , position:"absolute" , bottom:0 , right:0}}>
            <Text style={{fontSize : 35 ,textAlign:"center" , color : "#fff"}}>+</Text>
        </TouchableOpacity>
        </ScrollView>
       
    )
}
export default AllPolls;