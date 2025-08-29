import { LinearGradient } from "expo-linear-gradient";
import StarVectorIcon from "../../assets/icons/starVectorIcon";
import { SepratorStyles } from "./styles";
import { Text, View } from "react-native";

const Seprator = () => {
  return (
    <View style={SepratorStyles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <LinearGradient
          colors={["#1E1E2E00", "#7D5FFF", "#1E1E2E00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.7, y: 0 }}
          style={SepratorStyles.line}
        />
      </View>
      <StarVectorIcon style={SepratorStyles.icon} />
      <View style={SepratorStyles.centerContent}>
        <Text style={SepratorStyles.text}>SUGGESTED</Text>
        <Text style={SepratorStyles.text}>CREATORS</Text>
      </View>
      <StarVectorIcon style={SepratorStyles.icon} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <LinearGradient
          colors={["#1E1E2E00", "#7D5FFF", "#1E1E2E00"]}
          locations={[0, 0, 0.7]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.7, y: 0 }}
          style={SepratorStyles.line}
        />
      </View>
    </View>
  );
};
export default Seprator;
