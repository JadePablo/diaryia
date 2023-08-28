import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Homepage from './app/screens/Homepage';
import Create from './app/screens/Create';
import Recap from './app/screens/Recap';
import Entry from './app/screens/Entry';
import { useState , useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();
const loggedInStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <loggedInStack.Navigator>
      <loggedInStack.Screen name="homepage" component={Homepage} options={{ headerShown: false }}/>
      <loggedInStack.Screen name="create" component={Create} options={{ headerShown: false }}/>
      <loggedInStack.Screen name="recap" component={Recap} options={{ headerShown: false }}/>
      <loggedInStack.Screen name="entry" component={Entry} options={{headerShown:false}} />
    </loggedInStack.Navigator>
  )
}

export default function App() {

  const [user,setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        {user ?
        (
          <Stack.Screen name='Login' component={InsideLayout} options={{ headerShown: false }}/>

        )
        :
        (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}
