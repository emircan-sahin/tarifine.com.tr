import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const OnboardingScreen = ({ navigation }) => {
    return (
        <View className='flex-1 items-center justify-center bg-[#0A0A0A]'>
            <Image source={require('../assets/images/Onboarding.png')} className='w-full h-[60%]' />
            <Text className='text-white text-2xl font-bold mt-8'>Start Cooking</Text>
            <Text className='text-[#9FA5C0] text-base w-5/12 text-center mt-4'>Let’s join our community to cook better food!</Text>

            <TouchableOpacity
                className='w-10/12 mx-auto py-4 bg-[#1FCC79] mt-8 rounded-full'
                onPress={() => navigation.navigate('Login')}
            >
                <Text className='text-center font-bold'>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}