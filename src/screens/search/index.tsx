import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
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
const SearchScreen = () => {
  const [data, setData] = useState<UserItemprops[]>(DummyData);
  const [IsClicked, SetIsClicked] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const insets = useSafeAreaInsets();
  const handleClick1 = () => {
    setCounter(counter + 1);
    SetIsClicked(!IsClicked);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View style={[styles.header, { marginTop: insets.top }]}>
            <ArrowLeftIcon />
            <Text style={styles.headerTitle}>New Campaign Shortlist</Text>
          </View>
          <NewCampaign />
          <Seprator />
          <View style={{ flex: 1 }}>
            <Text style={styles.selectText}>{counter} Selected</Text>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={{}}>
                  <View style={styles.listView}>
                    <View
                      style={{
                        top: 16,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={styles.imagestyle}
                      />
                    </View>
                    <Text style={styles.listName}>{item.name}</Text>
                    <VerificationtIcon style={{ right: 156 }} />
                    <View style={styles.iconStyle}>
                      {IsClicked ? (
                        <TickRightIcon onPress={() => handleClick1} />
                      ) : (
                        <AddIcon />
                      )}
                    </View>
                  </View>
                  <Text style={styles.listUsername}>{item.username}</Text>
                  <View style={styles.statsRow}>
                    <InstagramIcon />
                    <Text style={styles.statsText}>{item.followers}</Text>
                    <YoutubeIcon />
                    <Text style={styles.statsText}>{item.subscriber}</Text>
                    <TrandingIcon />
                    <Text style={styles.statsText}>{item.rating}</Text>
                  </View>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View style={styles.seperator}></View>
              )}
            />
            <TouchableOpacity style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SearchScreen;
