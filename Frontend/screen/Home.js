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

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"}/>

      <Image
        style={{ width: 250, height: 250, margin: 20 }}
        source={require("../assets/logo.png")}
      />


      <TouchableHighlight
          style={styles.buttonStart}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Camerainput")}
        >
          <View style={styles.buttonStart}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Get started</Text>
          </View>
        </TouchableHighlight>

      <TouchableHighlight
          style={styles.buttonStart}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Tips")}
        >
          <View style={styles.buttonStart}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Stats</Text>
          </View>
        </TouchableHighlight>
      <TouchableHighlight
          style={styles.buttonStart}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("AboutUs")}
        >
          <View style={styles.buttonStart}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>About us</Text>
          </View>
        </TouchableHighlight>
    </View>
  );
};

export default Home;

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
  }
});
