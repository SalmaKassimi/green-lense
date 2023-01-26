import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  StatusBar,
} from "react-native";
const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      <Image
        style={{ width: 250, height: 250, margin: 20 }}
        source={require("../assets/logo.png")}
      />
      <View style={styles.textWrapper}>
      <Text style={{fontWeight:"bold", fontSize:24, marginBottom:10}}>About Us</Text>
        <Text style={{ marginBottom:10}}>
          Green lense is an environmental management school project made by fifth year students in ENSAM Meknes engineering school, AI and Data science specialty, the project consists of waste management through the smart
          detection of different types of waste using AI on a mobile App created
          and deployed using Expo CLI. The first version includes classifying
          waste through a picture taken from the phone camera. We are counting
          on growing this project more to include statistics of the amount of
          waste and suggestions on how to manage it by planning the pickup time
          of the trash ahead of time using AI prediction{" "}
        </Text>
        <Text style={{ marginBottom:10}}>
          This project is created by:
        </Text>
        <Text style={{ marginBottom:10,fontWeight:"bold"}}>
          Salma Kassimi
        </Text>
        <Text style={{ marginBottom:10,fontWeight:"bold"}}>
          Chaima Elhajoubi
        </Text>
        <Text style={{ marginBottom:10,fontWeight:"bold"}}>
          Oumayma Tajir
        </Text>
        <Text style={{ marginBottom:10}}>
          This project was supervised by:
        </Text>
        <Text style={{ marginBottom:10,fontWeight:"bold"}}>
          Pr. Imane Bouhadou
        </Text>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStart: {
    width: 200,
    height: 50,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5C312",
    borderRadius: 25,
  },
  buttonContainer: {
    marginVertical: 8,
    backgroundColor: "#F5C312",
    justifyContent: "center",
    alignItems: "center",
    width: 335,
    height: 65,
    borderRadius: 24,
  },
  textWrapper: {
    alignItems: "start",
    justifyContent: "center",
    padding: 20,
    margin:3
  },
});
