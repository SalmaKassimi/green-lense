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
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  
const Tips = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"}/>

      <Image
        style={{ width: 250, height: 250, margin: 20 }}
        source={require("../assets/logo.png")}
      />
      <View style={{margin:10, }}>
        <View>
        <View>
  <Text  style={{marginLeft:25, fontSize:16,fontWeight:'bold'}}>Waste distribution in time</Text>
  <LineChart  
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix="kg"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#C1121F",
      backgroundGradientFrom: "#669BBC",
      backgroundGradientTo: "#C1121F",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        margin:10
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      padding:10,
      borderRadius: 20,
      margin:10
    }}
  />
</View>
</View>

      </View>
    </View>
  )
}

export default Tips


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
  