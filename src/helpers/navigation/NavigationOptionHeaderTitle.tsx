import { Text } from "@components/common";

interface NavigationOptionHeaderTitleProps {
  headerTitle: string | React.ReactNode;
}
export function NavigationOptionHeaderTitle({
  headerTitle,
}: NavigationOptionHeaderTitleProps) {
  return () =>
    typeof headerTitle === "string" ? (
      <Text
        style={{ maxWidth: 200 }}
        fontStyle="large"
        fontWeight="bold"
        numberOfLines={1}
        ellipsizeMode="middle"
      >
        {headerTitle}
      </Text>
    ) : (
      headerTitle
    );
}
