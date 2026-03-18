import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function Counter() {
  // useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect (runs once on mount)
  // useEffect(() => {
  //   fetchData();
  // }, []); // Empty array = run once

  // useEffect with dependency
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Runs when count changes

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    setLoading(false);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />

      <TextInput
        value={name}
        onChangeText={setName} // Direct setter
        placeholder="Enter name"
      />
    </View>
  );
}
