import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PlaceDetailScreen = () => {
  return (
    <View>
      <Text>this is place details screen</Text>
    </View>
  );
};
PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle"),
  };
};
const styles = StyleSheet.create({
  //
});
export default PlaceDetailScreen;
