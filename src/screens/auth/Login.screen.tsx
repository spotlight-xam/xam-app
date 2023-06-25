import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text, Input, Button, Pressable, Icon } from "@components/common";
import { createNativeStackNavigationOptions } from "@helpers/navigation";
import { useGlobalState } from "@hooks/queries/common";
import { useTheme } from "@providers";

export const LoginScreenOptions = createNativeStackNavigationOptions({
  headerTitle: "",
  headerShown: false,
});
export type LoginScreenParams = undefined;
export function LoginScreen() {
  const { top, bottom } = useSafeAreaInsets();
  const { colors } = useTheme();

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
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: top + 32,
          paddingBottom: bottom + 32,
          justifyContent: "center",
        }}
      >
        <View>
          <View style={{ marginBottom: 16, alignItems: "center" }}>
            <View
              style={{
                padding: 8,
                borderColor: colors.gray.foreground,
                borderWidth: 1,
              }}
            >
              <Text
                fontStyle="h1"
                fontWeight="bold"
                style={{ width: 200, height: 70 }}
              >
                Xam
              </Text>
            </View>
          </View>

          <View style={{ paddingTop: 50, paddingHorizontal: 36 }}>
            <Text fontStyle="h3" fontWeight="bold" style={{ marginBottom: 4 }}>
              이메일 주소로 로그인하세요
            </Text>

            <View style={{ flexDirection: "row", marginBottom: 48 }}>
              <Text style={{ marginRight: 4 }}>계정이 없으세요?</Text>
              <Pressable>
                <Text
                  color={colors.primary.origin}
                  underline
                  fontWeight="semiBold"
                >
                  XAM 가입
                </Text>
              </Pressable>
            </View>

            <View style={{ marginBottom: 16 }}>
              <Text style={{ marginBottom: 8 }}>이메일</Text>
              <Input
                prefix={<Icon name="AvatarIcon" />}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={{ marginBottom: 42 }}>
              <Text style={{ marginBottom: 8 }}>비밀번호</Text>
              <Input
                prefix={<Icon name="LinkIcon" />}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Button size="large" onPress={onSubmit} style={{ width: 150 }}>
                로그인
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
