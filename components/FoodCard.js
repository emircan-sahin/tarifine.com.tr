import { Image, Text, TouchableOpacity, View } from "react-native"

export const FoodCard = ({ food, onPress }) => {
    return (
        <TouchableOpacity className='w-[47%] mt-6'>
            <View className='flex flex-row items-center'>
                <Image
                    className='w-8 h-8 rounded-xl'
                    source={{ uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' }}
                />
                <Text className='text-white text-xs ml-2'>Calum Lewis</Text>
            </View>

            <View className='flex flex-col mt-4'>
                <Image
                    className='w-full h-40 rounded-xl'
                    source={{ uri: 'https://www.fnp.com/images/pr/x/v20221205202014/blackforest-cake-1kg_1.jpg' }}
                />
                <Text className='text-white text-lg font-semibold mt-4'>Black Forest Cake</Text>
                <Text className='text-[#9FA5C0] text-sm mt-2'>Food • {'>'} 60 mins</Text>
            </View>
        </TouchableOpacity>
    )
}