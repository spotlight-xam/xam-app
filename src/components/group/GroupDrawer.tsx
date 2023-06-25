import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View } from "react-native";

import { GroupList } from "./GroupList";

interface GroupDrawerProps extends DrawerContentComponentProps {}
export function GroupDrawer({ ...props }: GroupDrawerProps) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <GroupList />
      </DrawerContentScrollView>
    </View>
  );
}
