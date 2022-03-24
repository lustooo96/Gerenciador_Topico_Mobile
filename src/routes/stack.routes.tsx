import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screen/Home";
import { DetailsTopic } from "../screen/DetailsTopic";
import { RegisterTopic } from "../screen/RegisterTopic";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="DetailsTopic" component={DetailsTopic} />
      <Screen name="RegisterTopic" component={RegisterTopic} />
    </Navigator>
  );
}
