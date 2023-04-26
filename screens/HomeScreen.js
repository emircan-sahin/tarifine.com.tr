// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export const HomeScreen = ({ navigation }) => {
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
            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full px-4'>
                <Ionicons name="search-outline" size={24} color={'#9FA5C0'} />
                <TextInput
                    secureTextEntry={!showPassword}
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Search'
                    placeholderTextColor='#9FA5C0'
                    value={password}
                    onChangeText={handlePassword}
                />
                <Ionicons name={'close-outline'} size={24} color={'#9FA5C0'} onPress={toggleShowPassword} />
            </View>
        </View>
    )
}