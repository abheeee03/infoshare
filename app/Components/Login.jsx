import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useRouter } from 'expo-router'
import {AppContext} from '../Context/context.jsx'




export default function Login() {

  const router = useRouter();
  const [Name, setName] = useState('')
  const [contactNum, setcontactNum] = useState('')
  const {updateUser} = useContext(AppContext)

  const contactCard = ()=>{
    updateUser({
      name: Name,
      contact: contactNum
    })
  }

  return (
    <View style={{ padding: 30 }}>
      <View style={{ marginTop: 50 }}>
        <Text style={{
          fontSize: 60,
          fontFamily: "Afacad-B"
        }}>
          InfoShare
        </Text>
        <Text style={{
          fontSize: 20,
          fontFamily: "Afacad-M",
          width: 200
        }}>
          Share Your Contact Info With Just One Click!
        </Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text style={{ fontSize: 18, fontFamily: "Afacad" }}>Enter Your Name</Text>
        <TextInput onChangeText={(text)=>setName(text)} style={{ borderWidth: 1, marginTop: 10, padding: 10, borderRadius: 10, fontFamily: "Afacad" }} placeholder='Enter Your Name Here....'></TextInput>
        <Text style={{ fontSize: 18, fontFamily: "Afacad", marginTop: 30 }}>Enter Your Phone Number</Text>
        <TextInput onChangeText={(text)=>setcontactNum(text)} keyboardType="phone-pad" style={{ borderWidth: 1, marginTop: 10, padding: 10, borderRadius: 10, fontFamily: "Afacad" }} placeholder='Enter Your Phone Number Here....'></TextInput>
        <TouchableOpacity style={{
          width: 100,
          backgroundColor: "#000",
          borderWidth: 1,
          marginTop: 30,
          padding: 7,
          borderRadius: 10, 
          fontFamily: "Afacad"
        }} onPress={() => {
          contactCard();
          router.push("/routes/get-info")

        }}>
          <Text style={{ fontSize: 18, fontFamily: "Afacad-M", textAlign: "center", color: "#fff" }}>Share Info</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>{
        
        router.push("/routes/support")

      }} style={{
        marginTop: "80%",
        marginLeft: "43%",
      }}>
        <Text style={{
          fontSize: 15,
          fontFamily: "Afacad",
        }}>
        Support
        </Text>
      </TouchableOpacity>
    </View>
  )
}