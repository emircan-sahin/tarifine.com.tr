import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FoodCards } from '../components/FoodCards';
import { useEffect, useRef, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const HomeScreen = ({ navigation }) => {
    const searchRef = useRef(null);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    // Close focus search when click outside
    useEffect(() => {
        if (isSearchFocused) return;
        searchRef.current?.blur();
    }, [isSearchFocused]);

    return (
        <View className='flex-1 bg-[#0A0A0A] pt-10 px-10'>
            <View className='flex flex-row items-center w-full mx-auto mt-8 border border-[#9FA5C0] rounded-full pl-4'>
                <MaterialIcons name="search" size={24} color={'#9FA5C0'} />
                <TextInput
                    ref={searchRef}
                    className='flex-1 text-white py-3 px-2'
                    placeholder='Search'
                    placeholderTextColor='#9FA5C0'
                    onFocus={() => setIsSearchFocused(true)}
                />
            </View>

            <TouchableWithoutFeedback onPress={() => setIsSearchFocused(false)}>
                <View className='flex flex-col'>
                    <View className='w-screen h-2 bg-white/5 mt-8 -ml-10'></View>

                    {/* Search Focus section */}
                    <View className={`relative left-0 top-0 w-full h-screen bg-[#0A0A0A] flex flex-col mt-6 ${isSearchFocused ? '' : 'hidden'}`}>
                        {/* Last search */}
                        <View className='flex flex-col'>
                            <TouchableOpacity className='flex flex-row items-center flex-wrap mb-4'>
                                <Ionicons name="time-outline" size={24} color={'#9FA5C0'} />
                                <Text className='text-[#9FA5C0] text-lg ml-3 mr-auto'>Pancakes</Text>
                                <Ionicons name="arrow-back" size={24} color={'#9FA5C0'} style={{
                                    transform: [{ rotate: '45deg' }]
                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity className='flex flex-row items-center flex-wrap mb-4'>
                                <Ionicons name="time-outline" size={24} color={'#9FA5C0'} />
                                <Text className='text-[#9FA5C0] text-lg ml-3 mr-auto'>Pancakes</Text>
                                <Ionicons name="arrow-back" size={24} color={'#9FA5C0'} style={{
                                    transform: [{ rotate: '45deg' }]
                                }} />
                            </TouchableOpacity>
                        </View>

                        <View className='w-screen h-2 bg-white/5 mt-2 -ml-10'></View>

                        {/* Search Suggestion butons */}
                        <View className='flex flex-col mt-6'>
                            <Text className='text-white text-lg font-semibold'>Search suggestion</Text>
                            <View className='flex flex-row mt-4 gap-x-4'>
                                <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-[#1FCC79] rounded-full'>
                                    <Text className='text-black text-base font-bold'>Pancakes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-white rounded-full'>
                                    <Text className='text-black text-base font-bold'>Pizza</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {/* Category scroll view */}
            <View className='flex flex-col mt-6 -z-10'>
                <Text className='text-white text-lg font-semibold'>Category</Text>

                <View className='flex flex-row mt-4 gap-x-4'>
                    <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-[#1FCC79] rounded-full'>
                        <Text className='text-black text-base font-bold'>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-white rounded-full'>
                        <Text className='text-black text-base font-bold'>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex flex-col items-center justify-center px-6 py-3 bg-white rounded-full'>
                        <Text className='text-black text-base font-bold'>Drink</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-screen h-2 bg-white/5 mt-8 -ml-10'></View>
            </View>

            <FoodCards />
        </View>
    )
}