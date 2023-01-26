import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { Camera } from "expo-camera";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress/Circle";

var { width, height } = Dimensions.get("window"); //full screen width and height

const CameraModule = ({ hideModal, setReturnedData }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [loading, setLoading] = useState(false);

  const takePicture = async () => {
    try {
      setLoading(true);
      const { base64: imgString } = await cameraRef.takePictureAsync({
        base64: true,
      });
      //http://192.168.1.152:8080
      console.log(imgString.slice(0, 20));
      const res = await fetch("http://172.20.213.93:8080/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imgString }),
      });
      const { image, classes } = await res.json();
      setLoading(false);
      return { image, classes };
    } catch (error) {
      console.error(error);
      setLoading(false);
      return null;
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        hideModal();
      }}
    >
      {!loading && (
        <Camera
          style={{ flex: 1 }}
          ratio="16:9"
          flashMode={Camera.Constants.FlashMode.off}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                icon="close"
                style={{ marginLeft: 12 }}
                mode="contained"
                color="white"
                onPress={() => {
                  hideModal();
                }}
              >
                Close
              </Button>
              <TouchableOpacity
                onPress={async () => {
                  if (cameraRef) {
                    try {
                      const returnedData = await takePicture();
                      setReturnedData(returnedData);
                      hideModal();
                    } catch (error) {
                      console.error(error);
                    }
                  }
                }}
                leading={(props) => (
                  <Ionicons name="camera" size={24} color="black" {...props} />
                )}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "white",
                    height: 50,
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 16,
                    marginTop: 16,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 50,
                      borderColor: "white",
                      height: 40,
                      width: 40,
                      backgroundColor: "white",
                    }}
                  ></View>
                </View>
              </TouchableOpacity>
              <Button
                icon="axis-z-rotate-clockwise"
                style={{ marginRight: 12 }}
                mode="contained"
                color="white"
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                {type === Camera.Constants.Type.back ? "Front" : "Back "}
              </Button>
            </View>
          </View>
        </Camera>
      )}
      {loading && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"rgba(255, 255, 255, 0.8)" }}
        >
          <ProgressCircle size={20} indeterminate={true} />
        </View>
      )}
    </Modal>
  );
};
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "white",

          borderRadius: 20,
          marginBottom: 8,
          width: width * 0.8,
          height: height * 0.7,

          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: image }}
          resizeMode={"cover"}
          style={{
            flex: 1,
          }}
        />
      </View>
      <TouchableHighlight
        style={styles.buttonStart}
        activeOpacity={0.8}
        mode="contained"
        onPress={() => {
          setShowCamera(true);
        }}
      >
        <View style={styles.buttonStart}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Open Camera</Text>
        </View>
      </TouchableHighlight>

      {camera && (
        <CameraModule
          showModal={camera}
          hideModal={() => setShowCamera(false)}
          setReturnedData={({ image, classes }) => {
            setImage(image);
            console.log({ classes });
            setShowCamera(false);
          }}
          // setImage={(result) => setImage(result.uri)}
        />
      )}
    </View>
  );
}

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
});
