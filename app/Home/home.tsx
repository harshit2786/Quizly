import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { fetchQuizQuestions } from "../utils/api";
import { QuestionObj } from "../utils/model";
export default function HomeScreen() {
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState<QuestionObj[]>([]);
  const startQuiz = async () => {
    if (topic.trim()) {
      const resp = await fetchQuizQuestions(topic.trim());
      setQuestions(resp?.quiz);
    } else {
      alert("Please enter a topic.");
    }
  };
  console.log("Ques", questions);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold mb-4">Enter a Topic</Text>
        <TextInput
          className="border border-gray-400 rounded-md p-2 w-3/4"
          placeholder="e.g., Science, History"
          value={topic}
          onChangeText={setTopic}
        />
        <Button title="Start Quiz" onPress={startQuiz} />
      </View>
    </View>
  );
}
