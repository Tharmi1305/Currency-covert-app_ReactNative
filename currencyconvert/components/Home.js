import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { getExchangeRate } from '../src/services/api';


export default function Home() {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(null);

    const handleConvert = async () => {
        if (!amount || isNaN(amount)) {
          alert('Please enter a valid amount');
          return;
        }
    
        try {
          const rate = await getExchangeRate(baseCurrency, targetCurrency);
          console.log('Exchange Rate:', rate);
          if (rate) {
            setResult(rate * parseFloat(amount));
          } else {
            alert('Exchange rate not available.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while converting currency.');
        }
      };

    return (
        <View style={styles.container}>
            <TextInput
                label="Base Currency"
                mode="outlined"
                value={baseCurrency}
                onChangeText={setBaseCurrency}
                style={styles.input} />

            <TextInput
                label="Target Currency"
                mode="outlined"
                value={targetCurrency}
                onChangeText={setTargetCurrency}
                style={styles.input} />

            <TextInput
                label="Amount"
                mode="outlined"
                value={amount}
                onChangeText={setAmount}
                style={styles.input} />

            <Button mode="contained" onPress={handleConvert}>
                Convert
            </Button>
            {result && <Text style={styles.result}>Converted Amount: {result.toFixed(2)}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    marginVertical: 10,
    width: '100%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  }
});