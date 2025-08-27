import { Text, TextInput, View } from "react-native";
import { newCampaignStyle } from "./styles";
import ImageIcon from "../../assets/icons/imageIcon";

const NewCampaign = () => {
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
      />
      <Text style={[newCampaignStyle.addCoverText, { marginTop: 10 }]}>
        Description
      </Text>
      <TextInput
        placeholder="Enter description"
        placeholderTextColor={"#999999"}
        style={newCampaignStyle.descriptionView}
      />
    </View>
  );
};
export default NewCampaign;
