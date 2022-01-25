import React, { useCallback, useEffect } from 'react'
import { ScrollView, View , Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AllPollsCompo from '../Components/AllPollsCompo'
import { allPollRequest } from '../Redux/Actions/Action'
import { useFocusEffect } from '@react-navigation/native'

const AllPolls = ({navigation}) =>{
   
    useEffect(()=>{
        getAllPollData()
    } , [AllPollData])


    useFocusEffect(
        useCallback(()=>{
            console.log("usefocus")
            getAllPollData()
        },[AllPollData])
    )

    const {AllPollData} = useSelector(state=>state);
    const dispatch = useDispatch();
   

    const getAllPollData = () =>{
        dispatch(allPollRequest())
    }
    return(
        <ScrollView style={{height : "100%" , marginHorizontal : 15}}>
            <Text style={{textAlign : "center" , fontSize : 30 , color : "#454545"}}>ALL POLLS</Text>
            <AllPollsCompo data={AllPollData?.data}/>
        </ScrollView>
    )
}
export default AllPolls;