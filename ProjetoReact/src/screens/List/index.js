import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Container, Title, Button, TextButton} from './styles'

const List = (navigation) => {
  return (
        <Container>
            <Title>Segunda Tela</Title>
            <button onPress={() => { navigation.navigate ('HomePage'); }}>
              <TextButton>Sair</TextButton>
            </button>
    </Container>
  );
}

export default List;