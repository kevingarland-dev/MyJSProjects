import { View, Text, SafeAreaView, Button, TouchableOpacity, ScrollView, Image, headerShown, StatusBar, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React,{ useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DetailJames from "./screens/DetailJames"
import { Header } from 'react-native/Libraries/NewAppScreen';
import Calls from './screens/Calls';
import Communities from './screens/Communities';
import Updates from './screens/Updates';
import DetailMother from './screens/DetailMother';







const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
  return (
    
    <SafeAreaView className="h-full bg-white">
      <StatusBar backgroundColor={"white"}/>
      
      {/**Top_bar start */}
      <View className="bg-white pt-3 flex-row justify-between">
        <Text className="pb-4 pl-3 text-2xl font-bold text-green-600 text-">WhatsApp</Text>
        <View className="flex-row justify-stretch pr-3">
          <View className="pr-7">
          <Ionicons name="camera-outline" size={24} color="black" />
          </View>
        <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </View>
      </View>
      {/**Top_bar end */} 
      <ScrollView className="">
      {/**Search_bar start */}
      <View className="bg-gray-100 pt-2 pb-2 mr-3 ml-3 flex-row justify-between rounded-full">
        <View className="flex-row justify-start pl-3">
          <Image source={require("./assets/meta.png")} className="w-9 h-7 object-fill"/>
          <Text className="text-gray-500 text-base pl-3">Ask Meta AI or Search</Text>
        </View>
      </View>
      {/**Search_bar end */}
      {/**mini bars */}
      {/**child one */}
      <View className=" p-3 flex-row justify-start">
        <View className="bg-gray-100 w-9 h-6 rounded-full flex-row justify-center items-center mr-2">
          <Text>All</Text>
        </View>
        {/**child  two */}

        <View className="bg-gray-100 w-14 h-6 rounded-full flex-row justify-center items-center mr-2">
          <Text>Unread</Text>
        </View>
        {/**child three */}
        <View className="bg-gray-100 w-20 h-6 rounded-full flex-row justify-center items-center mr-2">
          <Text>Favourites</Text>
        </View>
        {/**child  four */}

        <View className="bg-gray-100 w-14 h-6 rounded-full flex-row justify-center items-center">
          <Text className="">Groups</Text>
        </View>
      </View>
      {/**child 2 */}
      
      {/**Chats_column start */}
      
      {/**chat 1 */}
      <View className="bg-white  mt-1 ml-3">
        <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
         className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">James</Text>
          <Text className="pl-3">Hello Kojo</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 2 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity
        onPress={() => navigation.navigate('Mother')}
         className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Mother</Text>
          <Text className="pl-3">I'm here to help</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 3 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Bernard</Text>
          <Text className="pl-3">Are you going to make it for the party t...</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 4 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Jessica</Text>
          <Text className="pl-3">sfknsoeiosi</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 5 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Bro</Text>
          <Text className="pl-3">Go to hell mf</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 6 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">David</Text>
          <Text className="pl-3">I'll be leaving in 2 hours</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 7 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Esther</Text>
          <Text className="pl-3">I've gotten enough money now so i think i'll bleach my skin</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 8 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Herbert</Text>
          <Text className="pl-3">Are you bringing the basketball??</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 9 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">ragrgagfdga</Text>
          <Text className="pl-3">ragagfdafgargr</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 110 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">argaergfdgarg</Text>
          <Text className="pl-3">argargfgreg</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 11 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">argafgrg</Text>
          <Text className="pl-3">raegfgagath</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 12 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">efawefwef</Text>
          <Text className="pl-3">efwefsdawrf</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 13 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">ewgfsdagweg</Text>
          <Text className="pl-3">wagasgaaerg</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 14 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">gargarg</Text>
          <Text className="pl-3">ragrgargr</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 15 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
            <Text className="pl-3 text-lg font-bold ">gragradgar</Text>
            <Text className="pl-3">Iagaregarg</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 16 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Mark</Text>
          <Text className="pl-3">Hey, how are you doing?</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 17 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">rgaregag</Text>
          <Text className="pl-3">rgaergafdgar</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 18 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">rgaerger</Text>
          <Text className="pl-3">argafgar</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 19 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">rgagrgre</Text>
          <Text className="pl-3">idgaf</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/**chat 20 */}
      <View className="bg-white pt-3 mt-3 ml-3">
        <TouchableOpacity className="bg-gary-200  flex-row">
          <Image source={require("./assets/prof.png")} className="w-14 h-14 rounded-full"/>
          <View>
          <Text className="pt-1 pl-3 text-lg font-bold">Wifey</Text>
          <Text className="pl-3">Send Nudes</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="items-center pt-6 ">
        <Text className="text-sm font-bold text-gray-600 pb-5">Tap and hold on a chat for more options</Text>
        
      </View>
      </ScrollView>
      {/**bottom_tab start */}
      
      
    </SafeAreaView>
    
  );
}


const Stack = createNativeStackNavigator();

function HomeStackNavigator({ navigation }) {
  

  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      <Stack.Screen name="Details" component={DetailJames}  />
      <Stack.Screen name="Mother" component={DetailMother} />
    </Stack.Navigator>
  );
}



function HomeTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarStyle={{ height: 70,paddingBottom: 10,}}
      
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Chats') {
              return <Ionicons name="chatbubbles-outline" size={size} color={color} />;
            } else if (route.name === 'Communities') {
              return <MaterialCommunityIcons name="account-group-outline" size={size} color={color} />;
            } else if (route.name === 'Updates') {
              return <Ionicons name="logo-ionic" size={24} color="black" />;
            } else if (route.name === 'Calls') {
              return <Ionicons name="call-outline" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 12 },
        })}
      >
        <Tab.Screen name="Chats" component={HomeStackNavigator} />
        <Tab.Screen name="Communities" component={Communities} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeTabs;