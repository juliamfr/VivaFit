import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setErrorMessage('Campo Vazio. Por favor, preencha todos os campos!');
    } else {
      // lógica de autenticação aqui
      setErrorMessage(''); // limpa a mensagem de erro se os campos estiverem preenchidos
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image 19.png')} 
        style={styles.logo}
      />
      <View style={styles.bloco}>
        {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, {marginTop: 10}]} // adicionando espaço entre os campos
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[styles.input, {marginTop: 10}]} // adicionando espaço entre os campos
          placeholder="Confirme sua senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={{marginTop: 40}}> {/* adicionando espaço acima do botão */}
          <Button 
            title="Entrar" 
            onPress={handleLogin} 
            color="#000000" 
          />
        </View>
        <View style={{marginTop: 40}}> {/* adicionando espaço acima do botão */}
        
          <Button 
       
            title="Entrar com o Google" 
            onPress={handleLogin} 
            color="#000000" 
          
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1C2126', // cor de fundo
  },
  logo: {
    width: 300, 
    height: 200,
    marginBottom: 50,
  },
  bloco: {
    backgroundColor: '#37414B',
    height: 400,
    width: '80%',
    padding: 24,
    marginBottom: 32,
    borderRadius: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#52FFEA', // cor da borda
    borderBottomWidth: 1,
    marginBottom: 20, // adicionando espaço entre os campos
    paddingHorizontal: 10,
    color: '#FFF', // cor do texto
  },
  errorText: {
    color: '#ffffff',
    marginBottom: 10,
  },
});

export default LoginScreen;

















