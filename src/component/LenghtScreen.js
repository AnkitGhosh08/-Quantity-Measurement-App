import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';


const Main = () => {
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [valueFrom, setValueFrom] = useState('cm');
    const [valueTo, setVAlueTo] = useState('m');

    const Convert = () => {
        if (valueFrom == valueTo) {
            setSecondValue(firstValue);
        } else {
            if (valueFrom == 'cm') {
                if (valueTo == 'm') {
                    setSecondValue(firstValue / 100);
                }
            } else if (valueTo == 'km') {
                setSecondValue(firstValue / 100000);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text> {firstValue}{valueFrom}={secondValue}{valueTo} </Text>
            <Text>From</Text>
            <Picker
                style={styles.pickerStyle}
                selectedValue={valueFrom}
                onValueChange={(itemValue, itemIndex) => setValueFrom(itemValue)}>
                <Picker.Item label="km" value="km" />
                <Picker.Item label="m" value="m" />
                <Picker.Item label="cm" value="cm" />
            </Picker>
            <Text>To</Text>
            <Picker
                style={styles.pickerStyle}
                selectedValue={valueTo}
                onValueChange={(itemValue, itemIndex) => setVAlueTo(itemValue)}>
                <Picker.Item label="km" value="km" />
                <Picker.Item label="m" value="m" />
                <Picker.Item label="cm" value="cm" />
            </Picker>
            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}></Text>
            <TextInput
                style={styles.input}
                placeholder={'Please Enter a number'}
                keyboardType="number-pad"
                onChangeText={(text) => setFirstValue(text)}></TextInput>
            <View style={styles.button}>
                <Button title="Convert" color onPress={Convert} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 170,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        borderColor: '',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e00d73',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    pickerStyle: {
        height: 30,
        width: 170,
        justifyContent: 'center',
        backgroundColor: '#e00d73',
    },
});
export default Main;