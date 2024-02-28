import { Text } from "react-native";

export function Header({ children }) {
  return <Text style={{ fontSize: 32, fontWeight: 700 }}>{children}</Text>;
}

export function SubHeader({ children }) {
  return <Text style={{ fontSize: 24, fontWeight: 600 }}>{children}</Text>;
}

export function Paragraph({ children, style, ...rest }) {
  return (
    <Text {...rest} style={{ fontSize: 16, ...style }}>
      {children}
    </Text>
  );
}

export function Small({ children }) {
  return <Text style={{ fontSize: 12 }}>{children}</Text>;
}
