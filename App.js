import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './screens/LoginScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { VerificationCode } from './screens/VerificationCode';
import { BottomNavigation } from './components/BottomNavigation';
import { HomeScreen } from './screens/HomeScreen';
import { PasswordRecoveryScreen } from './screens/PasswordRecoveryScreen';
import { NewPasswordScreen } from './screens/NewPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth Sections */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        {/* Home */}
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      <BottomNavigation />
    </NavigationContainer>
  );
}
export default App;