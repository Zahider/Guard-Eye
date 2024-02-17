import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
} from 'react-native'
import React, { useState } from 'react';
import employees from './employees';
import axios from 'axios';



const adddetails = () => {
    const [name, setName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [dob, setDob] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [salary, setSalary] = useState("");
    const [address, setAddress] = useState("");
    const [designation, setDesignation] = useState("");
    const handleRegister = () => {
        const employeeData = {
            employeeName: name,
            employeeId: employeeId,
            designation: designation,
            phoneNumber: mobileNo,
            dateOfBirth: dob,
            joiningDate: joiningDate,
            activeEmployee: true,
            salary: salary,
            address: address,
        };

        axios
            .post("http://localhost:8000/addEmployee", employeeData)
            .then((response) => {
            Alert.alert(
                "Registration Successful", 
                "You have been registered successfully!"
            );
            setName("");
            setEmployeeId("");
            setDob("");
            setMobileNo("");
            setSalary("");
            setAddress("");
            setJoiningDate("");
            setDesignation("");

        }).catch((error) => {
            Alert.alert(
                "Registration Failed", 
                "Error occured during registration!"
            );
            console.log("registtation failed", error);
        });
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#1e453e" }}>

            <View style={{ padding: 5 }}>
                <View View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center" }}>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: "600",
                            color: "white",
                            fontFamily: "PlayBold"
                        }}
                    >
                        Add a New Employee
                    </Text>
                </View>

            </View>
            <View style={{
                padding: 7,
                borderRadius: 7,
                margin: 10,
                backgroundColor: "white",
            }}
            >

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        First and Last Name
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='ex. John Doe'
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Employee ID
                    </Text>
                    <TextInput
                        value={employeeId}
                        onChangeText={(text) => setEmployeeId(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='ex. 80112'
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Designation
                    </Text>
                    <TextInput
                        value={designation}
                        onChangeText={(text) => setDesignation(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='ex. Site Supervisor'
                        placeholderTextColor={"black"}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Number
                    </Text>
                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='999-999-9999'
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Date of Birth
                    </Text>
                    <TextInput
                        value={dob}
                        onChangeText={(text) => setDob(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Day/Month/Year'
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Joining Date
                    </Text>
                    <TextInput
                        value={joiningDate}
                        onChangeText={(text) => setJoiningDate(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='Day/Month/Year'
                        placeholderTextColor={"black"}
                    />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10
                    }}
                >
                    <Text>Active Employee</Text>
                    <Text style={{ color: "green" }}>True</Text>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Address
                    </Text>
                    <TextInput
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='ex. 1 Yonge St, L1K MT7'
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Salary
                    </Text>
                    <TextInput
                        value={salary}
                        onChangeText={(text) => setSalary(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5
                        }}
                        placeholder='ex. $22/hr'
                        placeholderTextColor={"black"}
                    />
                </View>

                <Pressable
                    onPress={handleRegister}
                    style={{
                        backgroundColor: "#1e453e",
                        padding: 10,
                        marginTop: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5
                    }}
                >
                    <Text style={{ color: "white" }}>Add Employee</Text>
                </Pressable>
            </View>

        </ScrollView>
    )
}

export default adddetails

const styles = StyleSheet.create({})