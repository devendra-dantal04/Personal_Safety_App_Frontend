import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/auth/register';
import { UserContextProvider } from './context/userReducer';

export default function App() {

  return (
    <UserContextProvider>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
        <Home />
        </NavigationContainer>
      </GluestackUIProvider>
    </UserContextProvider>
  );
}

const Home = () => {
  const Stack = createNativeStackNavigator();
  return <Stack.Navigator>
    <Stack.Screen name='Register' component={Register} options={{
      headerShown: false,
    }}/>
  </Stack.Navigator>;
};


