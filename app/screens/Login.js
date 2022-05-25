import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import GoogleForm from '../componets/Account/GoogleForm'
import LoginForm from '../componets/Account/LoginForm'

export default function Login() {
  return (
    <ScrollView>
      <Image source={require('../../assets/img/logo_black.png')} resizeMode='contain' style={styles.logo}/>
      <View style={styles.viewContainer}>
          <LoginForm />
      </View>
      <Divider style={styles.divider} />
      <View>
          <GoogleForm />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:'100%',
        height:130
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40,
    },
    textRegister:{
        marginTop:15,
        marginLeft:10,
        marginRight:10
    },
    btnRegister:{
        color:'#00a680',
        fontWeight:'bold'
    },
    divider:{
        backgroundColor:'#00a680',
        margin:40
    },
    textTitle:{
        marginTop:60,
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }

})