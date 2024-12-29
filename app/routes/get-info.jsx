import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import QRCode from 'react-native-qrcode-svg';
import {AppContext} from '../Context/context.jsx'

export default function getInfo() {

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  const router = useRouter();
  const {userContact, userData} = useContext(AppContext)
  return (
    <View style={{
      padding: 30,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 20
       }} options={{ headerShown: false }}>


        <TouchableOpacity
         onPress={() => router.push("/")}
         style={{
          position: "absolute",
          top: 30,
          right: 30,
          alignItems: "center",
        }}>
          <SimpleLineIcons name="logout" size={24} color="black" />
        <Text style={{fontSize: 13, fontFamily: "Afacad", width: 50, lineHeight: 12, marginTop: 10, padding: 3}}>Change Contact</Text>
        </TouchableOpacity>
        
      <Text style={{
        fontSize: 40,
        fontFamily: "Afacad-B",
        textAlign: "center"
      }}>
       {
        userData.name
       } 
      </Text>
      <QRCode value={userContact.toString()} size={200} />
      {/* <Image source={require("@/assets/images/qr.png")} /> */}
      <Text style={{
        fontSize: 20,
        fontFamily: "Afacad-M",
        textAlign: "center",
      }}>Get Yours On InfoShare</Text>
    </View>
  )
}