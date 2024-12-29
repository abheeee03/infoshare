import { View, Text } from 'react-native'
import React from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function support() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const router = useRouter();
  return (
    <View style={{
      padding: 20
    }}>
      <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
      <Text style={{ fontSize: 20, fontFamily: "Afacad-M", marginTop: 20,  }}>Welcome to InfoShare,{"\n"}the simplest way to share contact numbers.{"\n"} This app ensures quick, seamless sharing without the hassle of manually exchanging details.</Text>
      <Text style={{
        fontSize: 20,
        fontFamily: "Afacad-B",
        marginTop: 20
      }}>
      Getting Started
      </Text>
      <Text style={{
        fontSize: 18,
        fontFamily: "Afacad",
        marginTop: 20,
        marginBottom: 20
      }}>1. Create Your QR Code:{"\n\n"}Enter Basic Deatils Such as Phone Nummber and Name. Click on the "Share Info" button to create a QR code. {"\n\n"}2. Ask Your Friend to Scan QR Code:{"\n\n"}Your friend can scan the QR code to view your contact details. That's It! Now that was too cool and Fast isnt't it?</Text>
    <Text style={{ fontSize: 20, fontFamily: "Afacad-B", marginTop: 20 }}>
    Contact Developer
    </Text>
    <Text style={{
      fontSize: 18,
      fontFamily: "Afacad",
      marginTop: 10
    }}>
      Email: <Link style={{
        color: "blue"
      }} href="mailto:abhaynimbalkar03@gmail.com">abhaynimbalkar03@gmail.com</Link>
    </Text>
    </View>
  )
}