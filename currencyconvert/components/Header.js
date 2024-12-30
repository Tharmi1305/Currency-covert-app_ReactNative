import { View, StyleSheet } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function Header() {
    return (
        <PaperProvider>
            <Text variant="displayMedium" style={styles.header}>Currency Converter</Text>
            <Divider />
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});