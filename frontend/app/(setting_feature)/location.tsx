import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Checkbox } from "react-native-paper";

const Location: React.FC = ({ navigation }: any) => {
  const provinces = [
    { label: "Hà Nội", value: "hanoi" },
    { label: "TP. Hồ Chí Minh", value: "hochiminh" },
    { label: "Đà Nẵng", value: "danang" },
    { label: "Hải Phòng", value: "haiphong" },
    { label: "Cần Thơ", value: "cantho" },
  ];
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [isChecked, setIsChecked] = useState<boolean>();

  return (
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("@/assets/icons/left.png")}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.titleSettings}>Địa chỉ giao hàng</Text>
      </View>
      <FlashList
        data={[1]}
        renderItem={() => {
          return (
            <View style={{ flex: 1 }}>
              <View style={styles.container}>
                <Text style={[styles.text1, { marginTop: 10 }]}>
                  Nhập địa chỉ mới
                </Text>
                <View>
                  <Text style={styles.text2}>Tên người nhận</Text>
                  <View style={styles.inputBlock}>
                    <TextInput style={styles.input} placeholder="Nhập họ tên" />
                  </View>
                </View>
                <View>
                  <Text style={styles.text2}>Số điện thoại</Text>
                  <View style={styles.inputBlock}>
                    <TextInput
                      style={styles.input}
                      placeholder="Nhập số điện thoại"
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.text2}>Tỉnh/ Thành phố</Text>
                  <View style={styles.inputBlock}>
                    <RNPickerSelect
                      onValueChange={(value) => setSelectedProvince(value)}
                      items={provinces}
                      placeholder={{
                        label: "Chọn tỉnh/thành phố...",
                        value: null,
                      }}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.text2}>Quận/ Huyện</Text>
                  <View style={styles.inputBlock}>
                    <RNPickerSelect
                      onValueChange={(value) => setSelectedProvince(value)}
                      items={provinces}
                      placeholder={{
                        label: "Chọn Quận/ Huyện",
                        value: null,
                      }}
                      disabled={true}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.text2}>Phường/ Xã</Text>
                  <View style={styles.inputBlock}>
                    <RNPickerSelect
                      onValueChange={(value) => setSelectedProvince(value)}
                      items={provinces}
                      placeholder={{
                        label: "Chọn Phường/ Xã",
                        value: null,
                      }}
                      disabled={true}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.text2}>Địa chỉ nhận hàng</Text>
                  <View style={styles.inputBlock}>
                    <TextInput
                      style={styles.input}
                      placeholder="Tên nhà/ số nhà/ tên đường"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.rowContainer}>
                  <Checkbox
                    status={isChecked ? "checked" : "unchecked"}
                    onPress={() => setIsChecked(!isChecked)}
                  />
                  <Text style={styles.text1}>Chọn làm địa chỉ mặc định</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.container2}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Xác nhận</Text>
        </TouchableOpacity>
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
    padding: 15,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: "#1E90FF",
    flexDirection: "row",
    alignItems: "center",
  },
  titleSettings: {
    width: "100%",
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  iconBack: {
    width: 20,
    height: 20,
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: 14,
    fontWeight: "500",
  },
  text2: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 10,
  },
  inputBlock: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 5,
  },
  input: {
    padding: 17,
    outlineColor: "gray",
    color: "gray",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    paddingVertical: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  textBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  container2: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default Location;
