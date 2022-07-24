import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import firestore from "@react-native-firebase/firestore";

if (__DEV__) {
  firestore()
    .terminate()
    .then(() => {
      firestore()
        .clearPersistence()
        .then(() => {
          firestore().useEmulator("localhost", 8080);
        })
        .catch(() => {
          console.log("Clear persistence failed");
        });
    })
    .catch(() => {
      console.log("Terminate failed");
    });
}

firestore();

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

