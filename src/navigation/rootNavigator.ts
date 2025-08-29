import {
  ParamListBase,
  createNavigationContainerRef,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef<ParamListBase>();
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
