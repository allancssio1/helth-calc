import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "./Result";

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
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setheith}
          value={heith}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.342"
          keyboardType="numeric"
        />
        <Button title={textButton} onPress={() => validationImc()} />
      </View>
      <ResultIMC messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
