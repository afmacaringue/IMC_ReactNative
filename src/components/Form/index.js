import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura"); 
    const [IMC, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    //funcao que calcula o imc
    function imcCalculator (){
        return setImc((weight/(height*height)).toFixed(2))
    }
    //funcao para validar o calculo
    function validation(){
        if (weight != null && height != null){
            imcCalculator()
            setMessageIMC("O seu IMC é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e a altura")
    }    
    
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput  style={styles.input} onChangeText={setHeight}
                   value={height}
                   placeholder="Ex.: 1.75"
                   keyboardType="numeric"
                />


                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} onChangeText={setWeight}
                   value={weight}
                   placeholder="Ex.: 65"
                   keyboardType="numeric"
                />
                   <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => validation()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                   </TouchableOpacity>


                <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC}/>
            </View>
        </View>
    );
}