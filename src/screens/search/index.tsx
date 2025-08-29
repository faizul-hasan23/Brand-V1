import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SearchStyles } from "./styles";
import ArrowLeftIcon from "../../assets/icons/arrowLeftIcon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Seprator from "../../components/Seprator/index";
import { useState } from "react";
import { UserItemprops } from "../../utils/CommonTypes";
import DummyData from "../../utils/DummyData.json";
import AddIcon from "../../assets/icons/addIcon";
import NewCampaign from "../../components/NewCampaign";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TrandingIcon from "../../assets/icons/trandingIcon";
import YoutubeIcon from "../../assets/icons/youtubeIcon";
import VerificationtIcon from "../../assets/icons/verificationIcon";
import TickRightIcon from "../../assets/icons/tickRightIcon";
import { goBack } from "../../navigation/rootNavigator";
const SearchScreen = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const insets = useSafeAreaInsets();

  const renderItem = ({ item }: { item: (typeof DummyData)[0] }) => {
    const isSelected = selectedIds.includes(item.id);

    const toggleSelect = (id: string) => {
      if (selectedIds.includes(id)) {
        // remove from selected
        setSelectedIds(selectedIds.filter((item) => item !== id));
      } else {
        // add to selected
        setSelectedIds([...selectedIds, id]);
      }
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={SearchStyles.listView}>
          <View style={{ top: 16 }}>
            <Image
              source={{ uri: item.image }}
              style={SearchStyles.imagestyle}
            />
          </View>
          <Text style={SearchStyles.listName}>
            {item.name}
            <VerificationtIcon />
          </Text>
          <TouchableOpacity
            style={{ marginRight: 20, marginTop: 25 }}
            onPress={() => toggleSelect(item.id)}
          >
            {isSelected ? <TickRightIcon /> : <AddIcon />}
          </TouchableOpacity>
        </View>
        <Text style={SearchStyles.listUsername}>{item.username}</Text>
        <View style={SearchStyles.statsRow}>
          <InstagramIcon />
          <Text style={SearchStyles.statsText}>{item.followers}</Text>
          <YoutubeIcon />
          <Text style={SearchStyles.statsText}>{item.subscriber}</Text>
          <TrandingIcon />
          <Text style={SearchStyles.statsText}>{item.rating}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={SearchStyles.container}>
      <ScrollView style={SearchStyles.container}>
        <View style={SearchStyles.container}>
          <View style={[SearchStyles.header, { marginTop: insets.top }]}>
            <ArrowLeftIcon onPress={goBack} />
            <Text style={SearchStyles.headerTitle}>New Campaign Shortlist</Text>
          </View>
          <NewCampaign />
          <Seprator />
          <View style={{ flex: 1 }}>
            <Text style={SearchStyles.selectText}>
              {selectedIds.length > 0
                ? `${selectedIds.length} Selected`
                : `${selectedIds.length} Selected`}
            </Text>
            <FlatList
              data={DummyData}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              ItemSeparatorComponent={() => (
                <View style={SearchStyles.seperator}></View>
              )}
              scrollEnabled={false}
            />
            <TouchableOpacity style={SearchStyles.buttonView}>
              <Text style={SearchStyles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SearchScreen;
