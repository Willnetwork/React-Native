import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const HomePage = (navigation) => {
  return (
<View
    style={{
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
        <text style={{fontSize: 28, fontWeight: 'bold', color:'#000000'}}>
            Chegamos na outra tela.</text>
    </View>
  );
}

export default HomePage;