import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", backgroundColor: "orange", height: 40 }}
      ></View>
      <View
        style={{
          flex: 1,
          marginTop: 100,
          height: "90%",
        }}
      >
        <Text style={styles.welcomeText}>Welcome Guest </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
  },
  welcomeText: {
    color: "white",
    fontSize: 30,
    fontFamily: "OpenSans",
    flex: 1,
    justifyContent: "center",
  },
});
