import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  TextInput,
  Linking,
} from "react-native";
import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const styles = require("../styles");

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="orange"
              style={{ marginBottom: 50, paddingTop: 30 }}
            />
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Text style={styles.signUpInfo}>Sign into</Text>
            <Text style={styles.signUpInfo}>an existing account</Text>
            <Text
              style={{ marginBottom: 90, color: "#bababa", paddingTop: 10 }}
            >
              Enter your username and password to proceed
            </Text>
          </View>

          <View style={styles.inputStyle}>
            <TextInput
              style={styles.textInput}
              placeholder="Username/Email ID"
              placeholderTextColor="#bababa"
            />
          </View>

          <View style={styles.inputStyle}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#bababa"
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => navigation.navigate("Home")}
            /* onPress={handleSubmit} */
          >
            <Text style={styles.signUpText}>Continue</Text>
          </TouchableOpacity>

          <View>
            <Text
              style={{
                marginTop: 70,
                color: "#bababa",
                textAlign: "center",
                fontFamily: "OpenSans",
              }}
            >
              Or login with
            </Text>

            <View style={styles.loginSocial}>
              <TouchableOpacity
                style={styles.facebook}
                onPress={() => Linking.openURL("https://facebook.com")}
              >
                <EvilIcons name="sc-facebook" size={28} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.google}>
                <AntDesign name="google" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
