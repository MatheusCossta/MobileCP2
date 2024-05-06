import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebaseConfig } from './firebaseConfig'
import { initializeApp } from "firebase/app";
import ListaComprasScreen from './screens/ListaCompras';
import AdicionarItemScreen from './screens/AdicionarItem';
import LogInScreen from './screens/LogIn'
import SignUpScreen from './screens/SignUp';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Stack = createNativeStackNavigator();

initializeApp(firebaseConfig);

function App() {
  const [isAuth, setIsAuth] = React.useState(undefined)

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    });
  }, [])

  return (
    <NavigationContainer>
      {
        isAuth ? 
        <Stack.Navigator initialRouteName='ListaCompras' >
          <Stack.Screen name="Lista de Compras" component={ListaComprasScreen} />
          <Stack.Screen name="Adicionar item" component={AdicionarItemScreen} />
        </Stack.Navigator> :
        <Stack.Navigator initialRouteName='Entrar' >
          <Stack.Screen name="Entrar" component={LogInScreen} />
          <Stack.Screen name="Cadastrar" component={SignUpScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default App;