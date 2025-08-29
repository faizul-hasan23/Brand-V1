import { Text, TextInput, View } from "react-native";
import { newCampaignStyle } from "./styles";
import ImageIcon from "../../assets/icons/imageIcon";
import { useState } from "react";

const NewCampaign = () => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  return (
    <View style={newCampaignStyle.firstContainer}>
      <Text style={newCampaignStyle.addCoverText}>Add Cover Image</Text>
      <View style={newCampaignStyle.imageView}>
        <ImageIcon />
      </View>
      <Text style={[newCampaignStyle.addCoverText, { marginTop: 10 }]}>
        Shortlist Name
      </Text>
      <TextInput
        placeholder="Enter a title(e.g. Diwali Collection)"
        placeholderTextColor={"#999999"}
        style={newCampaignStyle.shortlistView}
        value={name}
        onChangeText={() => setName(name)}
      />
      <Text style={[newCampaignStyle.addCoverText, { marginTop: 10 }]}>
        Description
      </Text>
      <TextInput
        placeholder="Enter description"
        placeholderTextColor={"#999999"}
        style={newCampaignStyle.descriptionView}
        value={description}
        onChangeText={() => setDescription(description)}
      />
    </View>
  );
};
export default NewCampaign;
