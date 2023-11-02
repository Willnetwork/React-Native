import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Container, Title, Button, TextButton} from './styles'

const HomePage = ({navigation}) => {
return (
  <Container>
      <Title>Chegamos na outra tela.</Title>
      <button onPress={() => { navigation.navigate ('List'); }}>
        <TextButton>Click Aqui!</TextButton>
      </button>
</Container>
);
}

export default HomePage;