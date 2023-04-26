// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const LoginScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View className='flex-1 items-center justify-center bg-[#0A0A0A] px-10'>
            <Text className='text-white text-2xl font-bold mt-8'>Welcome Back!</Text>
            <Text className='text-[#9FA5C0] text-base text-center mt-4'>Please enter your account here</Text>

            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full pl-4'>
                <MaterialIcons name="mail-outline" size={24} color={'#9FA5C0'} />
                <TextInput
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Email or phone number'
                    placeholderTextColor='#9FA5C0'
                />
            </View>

            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full px-4'>
                <Ionicons name="lock-closed-outline" size={24} color={'#9FA5C0'} />
                <TextInput
                    secureTextEntry={!showPassword}
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Password'
                    placeholderTextColor='#9FA5C0'
                />
                <Ionicons name={!showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} color={'#9FA5C0'} onPress={toggleShowPassword} />
            </View>

            <TouchableOpacity className='ml-auto'>
                <Text className='text-[#9FA5C0] text-base py-5 mr-2'>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity className='w-full mx-auto py-4 bg-[#1FCC79] mt-8 rounded-full'>
                <Text className='text-center font-bold'>Login</Text>
            </TouchableOpacity>

            <Text className='text-white text-base py-5'>or continue with</Text>

            <TouchableOpacity className='flex flex-row items-center justify-center w-full mx-auto py-4 bg-[#FF5842] rounded-full'>
                <Ionicons name="logo-google" size={18} color="black" />
                <Text className='text-center font-bold ml-1'>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex flex-row items-center' onPress={() => navigation.navigate('Register')}>
                <Text className='text-white text-base py-5 mr-2'>Don’t have any account?</Text>
                <Text className='text-[#1FCC79] font-bold'>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}