import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { styles } from "./styles";
import HomeIcon from "../../assets/icons/homeIcon";
import HomeScreen from "../../screens/home";
import SearchScreen from "../../screens/search";
import SearchIcon from "../../assets/icons/searchIcon";
import AiChatScreen from "../../screens/aiChat";
import AiChatIcon from "../../assets/icons/aiChatIcon";
import ShortlistScreen from "../../screens/shortlist";
import ShortlistIcon from "../../assets/icons/shortlistIcon";
import ProfileScreen from "../../screens/profile";
import ProfileIcon from "../../assets/icons/profileIcon";
import { TabIconWithGradient } from "../../components/TabIconWithGradient";

const Tab = createBottomTabNavigator();

export interface BottomTabIcon {
  focused: boolean;
  color: string;
  size: number;
  image?: boolean;
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#495AFF",
        tabBarInactiveTintColor: "#808080",
        tabBarLabelStyle: styles.tabBarlabel,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }: BottomTabIcon) => (
            <TabIconWithGradient
              focused={focused}
              icon={<HomeIcon color={color} />}
            />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, focused }: BottomTabIcon) => (
            <TabIconWithGradient
              focused={focused}
              icon={<SearchIcon color={color} />}
            />
          ),
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name={"AiChat"}
        component={AiChatScreen}
        options={{
          tabBarIcon: ({ color, focused }: BottomTabIcon) => (
            <TabIconWithGradient
              focused={focused}
              icon={<AiChatIcon color={color} />}
            />
          ),
          tabBarLabel: "Ai Chat",
        }}
      />

      <Tab.Screen
        name={"Shortlist"}
        component={ShortlistScreen}
        options={{
          tabBarIcon: ({ color, focused }: BottomTabIcon) => (
            <TabIconWithGradient
              focused={focused}
              icon={<ShortlistIcon color={color} />}
            />
          ),
          tabBarLabel: "Shortlist",
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }: BottomTabIcon) => (
            <TabIconWithGradient
              focused={focused}
              icon={<ProfileIcon color={color} />}
            />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
