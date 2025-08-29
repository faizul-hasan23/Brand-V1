import { StyleSheet } from "react-native";

export const newCampaignStyle = StyleSheet.create({
  firstContainer: {
    marginTop: 40,
    paddingHorizontal: 25,
  },
  addCoverText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#FFFFFF",
  },
  imageView: {
    height: 120,
    width: 120,
    borderRadius: 12,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#FFFFFF20",
    backgroundColor: "#191A2A",
    justifyContent: "center",
    alignItems: "center",
  },
  shortlistView: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFFFFF50",
    backgroundColor: "#171722",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    justifyContent: "flex-start",
    textAlignVertical: "top",
    height: 50,
    paddingLeft: 20,
    color: "#FFFFFF",
  },
  descriptionView: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFFFFF50",
    backgroundColor: "#171722",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    height: 100,
    paddingLeft: 20,
    color: "#FFFFFF",
  },
});
