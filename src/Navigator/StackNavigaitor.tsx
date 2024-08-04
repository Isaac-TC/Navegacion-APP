import { createStackNavigator } from '@react-navigation/stack';
import { pantalla2screnn } from '../Screens/pantalla2screnn';
import { pantalla3screnn } from '../Screens/pantalla3screnn';
import { pantalla1screnn } from '../Screens/pantalla1screnn';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla1" component={pantalla1screnn} />
      <Stack.Screen name="Pantalla2" component={pantalla2screnn} />
      <Stack.Screen name="Pantalla3" component={pantalla3screnn} />
      
    </Stack.Navigator>
  );
}