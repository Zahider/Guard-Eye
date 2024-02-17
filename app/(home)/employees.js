import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const employees = () => {
    const [employees, setEmployees] = useState([]);
    const [input, setInput] = useState("");
    const router = useRouter();
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/employees");
                setEmployees(response.data);
            } catch (error) {
                console.log("Error fetching employee data", error)
            }
        }
        fetchEmployeeData();
    }, [])
    console.log(employees);
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white"
                }}
            >
                <AntDesign name="back" size={35} color="black" />
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: "white",
                        height: 40,
                        borderRadius: 4
                    }}
                >

                    <FontAwesome name="search" size={24} color="black" />
                    <TextInput
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        style={{ flex: 1 }}
                        placeholder='Search'
                    />

                    {employees.length > 0 && (
                        <View>
                            <Pressable>
                                <AntDesign name="pluscircleo" size={24} color="black" />
                            </Pressable>
                        </View>

                    )}
                </Pressable>
            </View>

            <Pressable onPress={() => router.push("/(home)/adddetails")}>
                <AntDesign name="pluscircle" size={24} color="#0072b1" />
            </Pressable>
        </View>
    )
}

export default employees

const styles = StyleSheet.create({})