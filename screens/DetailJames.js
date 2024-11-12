import { View, Text, SafeAreaView, Image, ImageBackground, StatusBar, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Stack = createNativeStackNavigator();
function DetailsJames({navigation}) {
    return(
        <SafeAreaView>
            <View>
                <View className="bg-white pt-3  flex-row justify-between ">
                    <View className="flex-row mb-3 ">
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('HomeScreen')}
                            className="mr-1 ml-2 mt-2.5">
                            <Ionicons name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                        <Image source={require("../assets/prof.png")} className=" w-10 h-10 object-contain "/>
                        <Text className="mt-2 font-bold text-lg ml-3">James</Text>
                    </View>
                    <View className="mr-2 mt-4">
                        <SimpleLineIcons name="options-vertical" size={20} color="black" />
                    </View>
                    <StatusBar/>
                </View>
                
                <Image source={require("../assets/whatbg.png")} className="w-full h-full"/>
            </View>
        </SafeAreaView>
        
    )
}
export default DetailsJames;

