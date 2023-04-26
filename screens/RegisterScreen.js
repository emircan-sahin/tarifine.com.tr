// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Password must contains at least 6 characters
    const isMinLength = password.length >= 6;
    // Password must contains a number
    const isContainNumber = /\d/.test(password);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    return (
        <View className='flex-1 items-center justify-center bg-[#0A0A0A] px-10'>
            <Text className='text-white text-2xl font-bold mt-8'>Welcome!</Text>
            <Text className='text-[#9FA5C0] text-base text-center mt-4'>Please enter your account here</Text>

            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full pl-4'>
                <MaterialIcons name="mail-outline" size={24} color={'#9FA5C0'} />
                <TextInput
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Email or phone number'
                    placeholderTextColor='#9FA5C0'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full px-4'>
                <Ionicons name="lock-closed-outline" size={24} color={'#9FA5C0'} />
                <TextInput
                    secureTextEntry={!showPassword}
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Password'
                    placeholderTextColor='#9FA5C0'
                    value={password}
                    onChangeText={handlePassword}
                />
                <Ionicons name={!showPassword ? 'eye-outline' : 'eye-off-outline'} size={24} color={'#9FA5C0'} onPress={toggleShowPassword} />
            </View>

            <Text className='text-white text-base mr-auto mt-6'>Your Password must contains:</Text>
            <View className='flex flex-row items-center w-full mx-auto mt-4'>
                <View className={`${isMinLength ? 'bg-[#E3FFF1]' : 'bg-[#28292E]'} w-5 h-5 flex items-center justify-center rounded-full`}>
                    <Ionicons name="checkmark-sharp" size={16} color={isMinLength ? 'black' : '#9FA5C0'} />
                </View>
                <Text className='text-white text-sm ml-2'>At least 6 characters</Text>
            </View>
            <View className='flex flex-row items-center w-full mx-auto mt-4'>
                <View className={`${isContainNumber ? 'bg-[#E3FFF1]' : 'bg-[#28292E]'} w-5 h-5 flex items-center justify-center rounded-full`}>
                    <Ionicons name="checkmark-sharp" size={16} color={isContainNumber ? 'black' : '#9FA5C0'} />
                </View>
                <Text className='text-white text-sm ml-2'>Contains a number</Text>
            </View>

            <TouchableOpacity className='w-full mx-auto py-4 bg-[#1FCC79] mt-8 rounded-full'>
                <Text className='text-center font-bold'>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity className='flex flex-row items-center' onPress={() => navigation.navigate('Login')}>
                <Text className='text-white text-base py-5 mr-2'>Do you have any account?</Text>
                <Text className='text-[#1FCC79] font-bold'>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}