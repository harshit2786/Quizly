import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import "../global.css";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/Home" >Go to quiz</Link>
    </View>
  );
}
