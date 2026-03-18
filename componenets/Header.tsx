import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname()

    const showBack = pathname !== "/"

  return (
    <View style={styles.container}>
      {/* Left side - Back button or empty */}
      <View style={styles.left}>
        {showBack && (
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backButton}>← Back</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Right side - Menu or whatever */}
      <View style={styles.right}>
        <TouchableOpacity>
          <Text style={styles.menu}>Pages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  left: {
    width: 60,
  },
  right: {
    width: 60,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    fontSize: 20,
    color: "#007AFF",
  },
  menu: {
    fontSize: 16,
  },
});
