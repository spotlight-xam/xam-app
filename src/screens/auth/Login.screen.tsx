import { useState } from "react";
import { Alert, View } from "react-native";

import { Text, Input, Button } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";
import { useGlobalState } from "@hooks/queries/common";

export const LoginScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "로그인",
});
export type LoginScreenParams = undefined;
export function LoginScreen() {
  const [, setAccessToken] = useGlobalState<string>(["accessToken"], "");
  const [, setRefreshToken] = useGlobalState<string>(["refreshToken"], "");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    if (email && password) {
      console.log("onSubmit", email, password);
      setAccessToken("accessToken");
      setRefreshToken("refreshToken");
    } else {
      Alert.alert("아이디와 비밀번호를 입력하세요.");
    }
  };

  return (
    <View>
      <Text fontStyle="h3">로그인</Text>

      <Input value={email} onChangeText={setEmail} />
      <Input value={password} onChangeText={setPassword} />
      <Button label="로그인" onPress={onSubmit} />
    </View>
  );
}
