import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-[#0A0A0A] py-24'>
      <Image source={require('./assets/images/Onboarding.png')} className='h-[50vh] aspect-square' />
      <Text className='text-white text-2xl mt-16'>Start Cooking</Text>
      <Text className='text-[#9FA5C0] text-base w-8/12 text-center mt-4'>Let’s join our community to cook better food!</Text>

      <TouchableOpacity className='w-10/12 mx-auto py-4 bg-[#1FCC79] mt-12 rounded-full'>
        <Text className='text-center font-bold'>Get Started</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default App;