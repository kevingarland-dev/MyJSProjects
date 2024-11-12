import { View, Text, SafeAreaView, Image, ImageBackground, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Stack = createNativeStackNavigator();

function Updates({navigation}) {
    return(
        <SafeAreaView className="bg-white h-full">
        <View className="bg-white pt-3 flex-row justify-between">
             <Text className="pb-4 pl-3 text-2xl text-">Updates</Text>
             <View className="flex-row justify-stretch pr-3">
                 <View className="pr-7">
                     <Ionicons name="camera-outline" size={24} color="black" />
                     
                 </View>
                 <View className="mr-5">
                 <SimpleLineIcons name="magnifier" size={24} color="black" />
                 </View>
                 <SimpleLineIcons name="options-vertical" size={24} color="black" />
                 
             </View>
         </View>

         <ScrollView>
         <View>
             
             <Text className="ml-3 text-lg font-bold">Status</Text>
             <View className="flex-row  drop-shadow-2xl">
                 <ScrollView
                    style={{
                        flexGrow: 0,
                        alignContent: "center",
                    }}
                    contentContainerStyle={{
                        flexGrow: 1,
                        position: "relative",
                    }}
                    horizontal>
                 <View className=" w-16 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text>My Status</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Esther</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Elsie</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Junior</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Kevin</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Mr. Zap..</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Emman</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Kojo</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Jessica</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Mother</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Bro</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">Mike</Text>
                 </View>
                 <View className=" w-12 rounded-full h-16 mt-2 ml-5 items-center justify-center">
                 <Image source={require("../assets/prof.png")} className="w-12 h-12 rounded-full"/>
                 <Text className="">James</Text>
                 </View>
                 </ScrollView>
                 
             </View>

             <View></View>
             
             
             
         </View>
         </ScrollView>
        </SafeAreaView>
        
    )
}
export default Updates;