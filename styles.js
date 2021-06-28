"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    color: "#fff",
    alignContent: "center",
  },
  innerContainer: {
    width: "100%",
    flex: 1,
    margin: "auto",
    alignContent: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 20,
    borderWidth: 3,
    fontFamily: "OpenSans",
  },
  signUpInfo: {
    color: "#eee",
    textAlign: "left",
    fontSize: 24,
    alignContent: "center",
    fontFamily: "OpenSansRegular",
  },

  inputStyle: {
    backgroundColor: "transparent",
    borderRadius: 30,
    width: "100%",
    color: "#fff",
    borderWidth: 2,
    borderColor: "#fea90e",
    height: 50,
    alignContent: "center",
    marginBottom: 15,
    fontFamily: "OpenSans",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginHorizontal: 15,
    color: "#eee",
  },
  signUpBtn: {
    backgroundColor: "#fea90e",
    borderRadius: 30,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
  signUpText: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },
  loginSocial: {
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
    paddingVertical: 10,
    height: 50,
    justifyContent: "center",
  },
  facebook: {
    backgroundColor: "#0a5994",
    width: 40,
    padding: 10,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  google: {
    backgroundColor: "#f32325",
    width: 40,
    padding: 10,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
