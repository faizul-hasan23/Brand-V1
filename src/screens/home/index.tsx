import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles, windowWidth } from "./styles";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TrandingIcon from "../../assets/icons/trandingIcon";
import ForwardIcon from "../../assets/icons/forwardIcon";
import TickRightIcon from "../../assets/icons/tickRightIcon";
import ShareIcon from "../../assets/icons/shareIcon";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RobotCrad from "../../components/RobotCard";
import IndiaFlagIcon from "../../assets/icons/IndiaFlagIcon";
import MaskedView from "@react-native-masked-view/masked-view";
const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  interface props {
    name: string;
    username: string;
    tags: Array<string>;
    followers: string;
    rating: string;
    image?: string;
  }
  const DummyData: Array<props> = [
    {
      name: "Priya Sharma",
      username: "@priyalifestyle",
      tags: ["Lifestyle", "Fashion", "Beauty", "+3"],
      followers: "156k",
      rating: "5.2%",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
    },
    {
      name: "Rohan Sharma",
      username: "@priyalifestyle",
      tags: ["Lifestyle", "Fashion", "+3"],
      followers: "156k",
      rating: "5.2%",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
    },
    {
      name: "Rahul Sharma",
      username: "@priyalifestyle",
      tags: ["Lifestyle", "Fashion", "+3"],
      followers: "156k",
      rating: "5.2%",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
    },
  ];
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={[styles.container, { marginTop: index === -1 ? 0 : 20 }]}>
        <View
          style={[
            styles.productContainer,
            { width: index === -1 ? windowWidth - 20 : windowWidth / 2 - 20 },
          ]}
        >
          <ImageBackground
            source={{ uri: item.image }}
            imageStyle={styles.image}
          >
            <View style={styles.bookmark}>
              <ShareIcon />
            </View>

            <LinearGradient
              colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)", "#000"]}
              locations={[0, 0.55, 1]}
              style={styles.gradientOverlay}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 45,
                }}
              >
                <Text style={styles.name}>{item.name}</Text>
                <TickRightIcon />
              </View>
              <Text style={styles.username}>{item.username}</Text>
              <View style={styles.tagRow}>
                {item.tags.map((tag: string, index: number) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.statsRow}>
                <InstagramIcon />
                <Text style={styles.statsText}>{item.followers}</Text>
                <TrandingIcon style={{ marginLeft: 8 }} />
                <Text style={styles.statsText}>{item.rating}</Text>
              </View>
              <TouchableOpacity style={[styles.button]}>
                {/* , { marginLeft: index === -1 ? 200 : 0 } */}
                <Text style={styles.buttonText}>View Details</Text>
                <ForwardIcon />
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <LinearGradient
          colors={["#1B1E6D", "#000000"]}
          start={{ x: 1.1, y: 0.0 }}
          end={{ x: 1.0, y: 0.5 }}
        >
          <SafeAreaView style={styles.container}>
            <RobotCrad />
            <FlatList
              data={DummyData?.slice(1)}
              renderItem={renderItem}
              numColumns={2}
              keyExtractor={(_, index) => `${index}`}
              ListHeaderComponent={() =>
                renderItem({ item: DummyData[0], index: -1 })
              }
              contentContainerStyle={{ marginTop: insets.top }}
              scrollEnabled={false}
            />
          </SafeAreaView>
        </LinearGradient>
        <View style={{ flex: 1, marginHorizontal: 15 }}>
          <Text style={styles.influenceText}>
            Influence that speaks data, not drama!
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.craftedText}>Crafted cool by</Text>
            <MaskedView
              maskElement={<Text style={[styles.NurddText]}>NURDDS</Text>}
            >
              <LinearGradient
                colors={["#A78BFA", "#6366F1"]} // Purple to Indigo
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={[styles.NurddText, { opacity: 0 }]}>NURDDS</Text>
              </LinearGradient>
            </MaskedView>
            <Text style={styles.Emogi}>🤓⚡</Text>
          </View>

          <Text style={styles.madeInIndia}>
            ~ made in INDIA <IndiaFlagIcon />
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
