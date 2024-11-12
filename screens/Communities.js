import { View, Text, SafeAreaView, Image, ImageBackground, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const Stack = createNativeStackNavigator();

function Communities({navigation}) {
    return(
        <SafeAreaView className="bg-white h-full">
        <View className="bg-white pt-3 flex-row justify-between">
             <Text className="pb-4 pl-3 text-2xl text-">Communities</Text>
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
             
             <Text className="ml-3 text-lg font-bold">Favourites</Text>
             <View className="flex-row ">
                 
                 <View className="bg-green-600 w-10 rounded-full h-10 mt-2 ml-5 items-center justify-center">
                     <MaterialIcons name="favorite" size={20} color="white" />
                 </View>
                 <Text className="mt-5 ml-5 font-bold text-base">Add Favourite Communities</Text>
             </View>
             
             
         </View>
         <View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Gamerzhive Community</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Computer Science Department</Text>
                         <Text className="pl-3">CS1: Hello Everyone</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">KNUST Queens Hall 24</Text>
                         <Text className="pl-3">ANNEX: </Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Church of Christ Youth</Text>
                         <Text className="pl-3">Pastor: Hello Everybody</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             <View className="bg-white pt-3 mt-3 ml-3">
                 <TouchableOpacity className="bg-gary-200  flex-row">
                     <Image source={require("../assets/prof.png")} className="w-14 h-14 rounded-full"/>
                     <View>
                         <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
                         <Text className="pl-3">Yesterday</Text>
                     </View>
                 </TouchableOpacity>
             </View>
             
         </View>
         </ScrollView>
         
     </SafeAreaView>
        
    )
}
export default Communities;