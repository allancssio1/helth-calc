import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export default function ResultIMC(props) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.resultImc}</Text>
      <Text style={styles.numberImg}>{props.messageResultImc}</Text>
    </View>
  );
}
