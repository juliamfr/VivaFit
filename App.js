import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
export default function App() {
  return (
 
    <View style={estilos.container}>

  <Image
    source={require('./assets/image 2.png')} style={estilos.Image}  
    >

    </Image>

    <Text style={estilos.texto}>
      E-mail
    </Text>    
    <TextInput style={estilos.input}/> 
    <Text style={estilos.texto}>
      Senha
    </Text>    
    <TextInput style={estilos.input}/> 
  
    <TouchableOpacity style={estilos.button1}>
      <Text>
        Entrar
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilos.button2}>
      <Text>
        Entrar pelo Google
      </Text>
    </TouchableOpacity>

    
   
    </View>

  );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2126',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto:{
    color: "#ffffff",
    fontSize: 12
  },
  input:{
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width:'50%',
    backgroundColor:'#ffffff',
  },
  button1:{
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,  
    marginTop: 20,
  },
  
  button2:{
    backgroundColor: '#52FFEA',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8, 
    marginTop: 25, 
  },
  image:{
    alignItems: 'center',
  }
});