import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>

      <TouchableHighlight
        onPress={() => {
          console.log("Hello");
        }}
      >
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/id/1/200/300",
          }}
        ></Image>
      </TouchableHighlight>

      <Button
        title="Click Me"
        onPress={() => {
          Alert.alert("Hello There", "Here is what", [
            { text: "Yes" },
            { text: "No" },
          ]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
