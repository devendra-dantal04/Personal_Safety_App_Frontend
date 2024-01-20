import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/auth/register';

export default function App() {

 
  
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
      <Home />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

const Home = () => {
  const Stack = createNativeStackNavigator();
  return <Stack.Navigator>
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator>;
};


