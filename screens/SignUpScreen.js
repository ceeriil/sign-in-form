import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { EvilIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUpScreen({ navigation }) {
  const styles = require("../styles");

  const { handleChange, handleSubmit, values } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "" },
    onSubmit: (values) =>
      alert(`Email: ${values.email}, Password: ${values.password}`),
  });

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setcomfirmPassword] = useState("");

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
          <StatusBar style="auto" />

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="orange"
              style={{ marginBottom: 50, paddingTop: 30 }}
            />
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Text style={styles.signUpInfo}>Create</Text>
            <Text style={styles.signUpInfo}>an account</Text>
            <Text
              style={{
                marginBottom: 90,
                color: "#bababa",
                paddingTop: 10,
                fontFamily: "OpenSansRegular",
              }}
            >
              Fill the details & create your account
            </Text>
          </View>

          <View style={styles.inputStyle}>
            <TextInput
              style={styles.textInput}
              placeholder="Username/Email ID"
              placeholderTextColor="#bababa"
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <View style={styles.inputStyle}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#bababa"
              secureTextEntry={true}
              onChangeText={(password) => setEmail(password)}
            />
          </View>

          <View style={styles.inputStyle}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              placeholderTextColor="#bababa"
              secureTextEntry={true}
              onChangeText={(confirmPassword) => setConfirm(confirmPassword)}
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
              style={{ marginTop: 70, color: "#bababa", textAlign: "center" }}
            >
              or sign in with
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
