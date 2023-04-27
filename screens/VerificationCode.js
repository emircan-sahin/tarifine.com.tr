// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CODE_LENGTH = 4;

export const VerificationCode = ({ navigation }) => {
    const [codeExpiresIn, setCodeExpiresIn] = useState(180);
    const codeInputs = useRef([]);

    const handleCodeInput = (index, code) => {
        const cleanedCode = code.replace(/[^a-z0-9]/gi, '').toUpperCase();
        codeInputs.current[index].setNativeProps({ text: cleanedCode });
        if (cleanedCode.length === 1 && index < CODE_LENGTH - 1) {
            codeInputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.keyCode === 8 && index > 0) {
            if (!event.target.value) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (codeExpiresIn > 0) {
                setCodeExpiresIn(codeExpiresIn - 1);
            }
        }, 1000);
    }, [codeExpiresIn]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <View className='flex-1 items-center justify-center bg-[#0A0A0A] px-10'>
            <Text className='text-white text-2xl font-bold mt-8'>Check your email</Text>
            <Text className='text-[#9FA5C0] text-base text-center mt-4'>We've sent the code to your email</Text>

            <View className='flex flex-row items-center justify-center w-full mt-8 gap-x-4'>
                {Array(CODE_LENGTH).fill().map((_, index) => (
                    <TextInput
                        key={index}
                        ref={ref => codeInputs.current[index] = ref}
                        className='w-16 h-16 text-white py-3 px-2 border border-[#9FA5C0] rounded-2xl text-center text-3xl focus:border-[#1FCC79]'
                        placeholder=''
                        placeholderTextColor='#9FA5C0'
                        maxLength={1}
                        keyboardType='numeric'
                        onChangeText={text => handleCodeInput(index, text)}
                        onKeyUp={(event) => handleKeyDown(event, index)}
                    />
                ))}
            </View>

            <View className='flex flex-row items-center justify-center w-full mt-10 gap-x-1'>
                <Text className='text-[#9FA5C0] text-base text-center'>code expires in:</Text>
                <Text className='text-[#FF6464] text-base text-center'>{formatTime(codeExpiresIn)}</Text>
            </View>

            <TouchableOpacity className='w-full mx-auto py-4 bg-[#1FCC79] mt-6 rounded-full'>
                <Text className='text-center font-bold'>Verify</Text>
            </TouchableOpacity>

            <TouchableOpacity className='w-full mx-auto py-4 bg-white mt-4 rounded-full'>
                <Text className='text-center font-bold'>Resend code</Text>
            </TouchableOpacity>
        </View>
    )
}