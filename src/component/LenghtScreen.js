import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Main = () => {
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [valueFrom, setValueFrom] = useState('cm');
  const [valueTo, setValueTo] = useState('cm');

  const reset = () => {
    setFirstVal(' ');
    setSecondVal(' ');
    setValueFrom(' ');
    setValueTo(' ');
  };

  const Convert = () => {
    if (valueFrom == valueTo) {
      setSecondVal(firstVal);
    } else {
      if (valueFrom == 'cm') {
        if (valueTo == 'm') {
          setSecondVal(firstVal / 100);
        } else if (valueTo == 'km') {
          setSecondVal(firstVal / 100000);
        }
      } else if (valueFrom == 'm') {
        if (valueTo == 'cm') {
          setSecondVal(firstVal * 100);
        }
        if (valueTo == 'km') {
          setSecondVal(firstVal / 1000);
        }
      } else if (valueFrom == 'km') {
        if (valueTo == 'cm') {
          setSecondVal(firstVal * 100000);
        }
        if (valueTo == 'm') {
          setSecondVal(firstVal * 1000);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.length}>Length</Text>

      <Text style={styles.text}>From</Text>
      <Picker
        style={styles.pickerStyle}
        selectedValue={valueFrom}
        onValueChange={(itemValue, itemIndex) => setValueFrom(itemValue)}>
        <Picker.Item label="km" value="km" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="cm" value="cm" />
      </Picker>
      <Text style={styles.text}>To</Text>
      <Picker
        style={styles.pickerStyle}
        selectedValue={valueTo}
        onValueChange={(itemValue, itemIndex) => setValueTo(itemValue)}>
        <Picker.Item label="km" value="km" />
        <Picker.Item label="m" value="m" />
        <Picker.Item label="cm" value="cm" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder={'Please Enter a number'}
        keyboardType="number-pad"
        onChangeText={text => setFirstVal(text)}></TextInput>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.button}>
          <TouchableOpacity color onPress={Convert}>
            <Text style={{color: 'white'}}>Convert</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonTwo}>
          <TouchableOpacity onPress={reset}>
            <Text style={{color: 'white'}}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view}>
        {secondVal !== '' ? (
          <Text style={styles.value}>{secondVal}</Text>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 170,
    margin: 12,
    borderWidth: 2,
    padding: 5,
    borderColor: 'grey',
    margin: 40,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#182c45',
    borderRadius: 10,
    height: 40,
    width: 100,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightsteelblue',
  },
  pickerStyle: {
    height: 30,
    width: 170,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  value: {
    backgroundColor: 'white',
    fontSize: 30,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  buttonTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#182c45',
    borderRadius: 10,
    height: 40,
    width: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
  },
  view: {
    // width: '50%',
    margin: 25,
    alignSelf: 'center',
    //backgroundColor: '#182c45',
  },
  length: {
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
});
export default Main;
