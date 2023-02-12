import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultIMC from "./Result";
import { styles } from "./style";

export default function Form() {
  const [messageImc, setMessageImc] = useState("Preencha altura e peso.");
  const [imc, setImc] = useState(null);
  const [heith, setheith] = useState(null);
  const [weight, setWeight] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  const calculatorIMC = () => {
    return setImc((weight / (heith * heith)).toFixed(2));
  };

  const validationImc = () => {
    if (weight !== null && heith !== null) {
      calculatorIMC();
      setMessageImc(`Seu imc é ${imc}`);
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    return;
  };

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setheith}
          value={heith}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.342"
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={() => validationImc()}
          style={styles.bottonCalculator}
        >
          <Text style={styles.textBottonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
