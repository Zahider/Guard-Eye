import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <Redirect href="/(home)"/>
  )
}

export default index

const styles = StyleSheet.create({})


{/*Security Guard management Application

//COMMANDS TO RUN APP 
first terminal, to run expo use "npx expo start"
 second terminal, to connect to mongodb: cd into api folder first with "cd api" then "npm start" 
Custom fonts integration react navigation */}