import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Feather, MaterialCommunityIcons, Octicons, MaterialIcons, Ionicons, Entypo, FontAwesome6, FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter();

  const [fontsLoaded, fontError] = useFonts({
    PlayBold: require('../../assets/fonts/ProtestGuerrilla-Regular.ttf'),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <LinearGradient colors={["#1e453e", "#1e453e"]} style={{ flex: 1}}>
        <View style={{ padding: 8 }}>
          <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
            <AntDesign name="barchart" size={28} color="white" />
            <Text style={{ fontSize: 35, fontWeight: "600", color: "white", fontFamily: "PlayBold", padding: 8 }}>GUARD EYE</Text>
            <Entypo name="lock" size={28} color="white" />
          </View>

          <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
            {/*Employee List*/}
            <Pressable
            onPress={() => router.push("/(home)/employees")}
              style={{
                backgroundColor: "white",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: 'center',
                flex: 1
              }}
            >
              <View style={{
                width: 80,
                height: 80,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
              >
                <FontAwesome6 name="person-dots-from-line" size={50} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: '600', fontSize: 16 }}>Employee List</Text>
            </Pressable>
            {/*Mark Attendance*/}
            <Pressable
              style={{
                backgroundColor: "white",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: 'center',
                flex: 1
              }}
            >
              <View style={{
                width: 100,
                height: 80,
                borderRadius: 25,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
              >
                <FontAwesome name="calendar" size={50} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: '600', fontSize: 16 }}
              >Mark Attendance
              </Text>
            </Pressable>

          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: "wwhite",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7
            }
            }>
            {/*Attendance Report*/}
            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Ionicons name="newspaper" size={24} color="black" />
              </View>
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600", flex: 1 }}>
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="navigate-next" size={35} color="black" />
              </View>
            </Pressable>
            {/*Summary Report*/}
            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600", flex: 1 }}>
                Summary Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="navigate-next" size={35} color="black" />
              </View>
            </Pressable>
            {/*Incidents*/}
            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <FontAwesome name="exclamation-triangle" size={24} color="black" />
              </View>
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600", flex: 1 }}>
                Incidents
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="navigate-next" size={35} color="black" />
              </View>
            </Pressable>
            {/*Overtime Employees*/}
            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialCommunityIcons name="debug-step-over" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1
                }}
              >
                Overtime Employees
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialIcons name="navigate-next" size={35} color="black" />
              </View>
            </Pressable>
          </View>

          <View style={{marginTop:10,flexDirection:"row", alignitems:"center", gap:12}}>
            {/*Attendance Criteria */}
            <View 
              style={{ 
                backgroundColor: "white", 
                borderRadius: 6, 
                padding: 12, 
                alignItems: "center", 
                justifyContent: "center",
                flex:1
                }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{marginTop:7}}>Attendance Criteria</Text>
            </View>
            {/*Overtime Employees*/}
            <View 
              style={{ 
                backgroundColor: "white", 
                borderRadius: 6, 
                padding: 12, 
                alignItems: "center", 
                justifyContent: "center",
                flex:1
                }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <AntDesign name="barschart" size={24} color="black" />
              </View>
              <Text style={{marginTop:7}}>Increased Workflow</Text>
            </View>
          </View>

          <View style={{marginTop:10,flexDirection:"row", alignitems:"center", gap:12, marginBottom:10}}>
            {/*Cost savings */}
            <View 
              style={{ 
                backgroundColor: "white", 
                borderRadius: 6, 
                padding: 12, 
                alignItems: "center", 
                justifyContent: "center",
                flex:1
                }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <FontAwesome6 name="money-bill-trend-up" size={24} color="black" />
              </View>
              <Text style={{marginTop:7}}>Cost savings</Text>
            </View>
            {/*Employee Performance*/}
            <View 
              style={{ 
                backgroundColor: "white", 
                borderRadius: 6, 
                padding: 12, 
                alignItems: "center", 
                justifyContent: "center",
                flex:1
                }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Feather name="trending-up" size={24} color="black" />
              </View>
              <Text style={{marginTop:7}}>Employee Performance</Text>
            </View>
          </View>
          
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  
})