import { Image } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Notify = () => {
  return (
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.header}>
        <Text style={styles.title}>Notification</Text>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.img}
          source={require("@/assets/icons/empty_email.webp")}
        />
        <Text>Bạn chưa có thông báo nào</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
    flex: 1,
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  img: {
    width: 300,
    height: 300,
  },
});

export default Notify;
