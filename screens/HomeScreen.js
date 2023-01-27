import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView >
      <Text className="">

     <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image 
        source={{uri: "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"}} 
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>

     <View>
      <Text className="text-gray-400 text-xs font-bold" >Deliver Now</Text>
      <Text className="font-bold text-xl">Current Location</Text>
     </View>
     </View>
        </Text>

    </SafeAreaView>
  )
}

export default HomeScreen