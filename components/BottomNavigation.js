import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { useEffect } from "react"
import { Text, TouchableOpacity, View } from "react-native"

export const BottomNavigation = () => {
    const navigation = useNavigation();
    const navigationState = useNavigationState(state => state);
    const activeScreenName = navigationState?.routeNames[navigationState?.index];

    const getIconColor = (screenName) => {
        return screenName === activeScreenName ? '#1FCC79' : '#FFFFFF';
    }

    const getTextColor = (screenName) => {
        return screenName === activeScreenName ? '[#1FCC79]' : 'white';
    }

    const handlePress = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View className='flex flex-row items-center justify-between w-full px-4 pb-2 bg-[#000]'>
            <TouchableOpacity className='w-[20%] flex flex-col items-center justify-center' onPress={() => handlePress('Home')}>
                <MaterialCommunityIcons name="home" size={24} color={getIconColor('Home')} />
                <Text className={`text-${getTextColor('Home')} mt-1`}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity className='w-[20%] flex flex-col items-center justify-center' onPress={() => handlePress('Upload')}>
                <MaterialCommunityIcons name="creation" size={24} color={getIconColor('Upload')} />
                <Text className={`text-${getTextColor('Upload')} mt-1`}>Upload</Text>
            </TouchableOpacity>

            <TouchableOpacity className='w-[20%] relative flex flex-col items-center justify-center -translate-y-2' onPress={() => handlePress('Scan')}>
                <View className='bg-[#1FCC79] p-4 rounded-full scale-125 -translate-y-3'>
                    <MaterialCommunityIcons name="qrcode-scan" size={18} color={'#000000'} />
                </View>
                <Text className={`text-${getTextColor('Scan')} -mt-1`}>Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity className='w-[20%] flex flex-col items-center justify-center' onPress={() => handlePress('Notification')}>
                <MaterialCommunityIcons name="bell" size={24} color={getIconColor('Notification')} />
                <Text className={`text-${getTextColor('Notification')} mt-1`}>Notification</Text>
            </TouchableOpacity>

            <TouchableOpacity className='w-[20%] flex flex-col items-center justify-center' onPress={() => handlePress('Profile')}>
                <MaterialCommunityIcons name="account" size={24} color={getIconColor('Profile')} />
                <Text className={`text-${getTextColor('Profile')} mt-1`}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}