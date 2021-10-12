import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]= useState(" ")

  const insert= async ()=>{

    fetch("http://192.168.0.173:8080/blah", {
       method: 'POST',
       headers: {

                'Content-Type': 'application/json'
       },
      body: JSON.stringify({
              'name':name,
              'email':email,
              'password':password
            })
      }).then((response) => response.json())
      .then((responseJson) => {
                console.log(responseJson);
     });
    }
  return (
    <View style={styles.logincontainer}>
      
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />

      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      
 
      <TouchableOpacity style={styles.loginBtn}
      onPress={insert}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
    inputView: {
    backgroundColor: "lightblue",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems:'center'
    
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    justifyContent:'center',
    alignItems:'center'
  },
 

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
