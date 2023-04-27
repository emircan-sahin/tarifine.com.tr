// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const PasswordRecoveryScreen = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className='flex-1 items-center justify-center bg-[#0A0A0A] px-10'>
            <Text className='text-white text-2xl font-bold mt-8'>Password recovery</Text>
            <Text className='text-[#9FA5C0] text-base text-center mt-4'>Enter your email to recover your password</Text>

            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full pl-4'>
                <MaterialIcons name="mail-outline" size={24} color={'#9FA5C0'} />
                <TextInput
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Email or phone number'
                    placeholderTextColor='#9FA5C0'
                />
            </View>

            <TouchableOpacity className='w-full mx-auto py-4 bg-[#1FCC79] mt-8 rounded-full'>
                <Text className='text-center font-bold'>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}