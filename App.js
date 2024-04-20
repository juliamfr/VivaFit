import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro'; 


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home"
       component={Home}
       options={{

        title: 'Página Inicial',
        headerStyle: {
          backgroundColor: '#ff0000'

        },
        headerTintColor: '#fff'
      }}
             />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}
















