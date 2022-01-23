import React, { useEffect } from 'react'
import { ScrollView, View , Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AllPollsCompo from '../Components/AllPollsCompo'
import { allPollRequest } from '../Redux/Actions/Action'

const AllPolls = () =>{
    useEffect(()=>{
        getAllPollData()
    } , [])

    const {AllPollData} = useSelector(state=>state);
    const dispatch = useDispatch();
   console.log(AllPollData , "updated data")

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