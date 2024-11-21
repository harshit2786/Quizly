import { Text, View } from "react-native";
import "../global.css";
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
      <Text className="text-2xl">Hello World</Text>
    </View>
  );
}
