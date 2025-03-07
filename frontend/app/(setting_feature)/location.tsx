import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
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
  // const provinces = [
  //   { label: "Hà Nội", value: "hanoi" },
  //   { label: "TP. Hồ Chí Minh", value: "hochiminh" },
  //   { label: "Đà Nẵng", value: "danang" },
  //   { label: "Hải Phòng", value: "haiphong" },
  //   { label: "Cần Thơ", value: "cantho" },
  // ];
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [communes, setCommunes] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');

  useEffect(() => {
    const fetchProvinces = async () => {
      if (!isChecked) return;
      try {
        const response = await fetch('https://provinces.open-api.vn/api/p/');
        const data = await response.json();
        setProvinces(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };

    fetchProvinces();
  }, [isChecked]);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (!selectedProvince) {
        setDistricts([]);
        return;
      }

      try {
        const response = await fetch(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`);
        const data = await response.json();
        setDistricts(data.districts || []);
        console.log(data);
      } catch (error) {
        console.error('Error fetching districts:', error);
      }
    };
    fetchDistricts();
  }, [selectedProvince]);

  useEffect(() => {
    const fetchCommunes = async () => {
      if (!selectedDistrict) {
        setCommunes([]);
        return;
      }
      try {
        const response = await fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`);
        const data = await response.json();
        setCommunes(data.wards || []);
      } catch (error) {
        console.error('Error fetching communes:', error);
      } finally {
      }
    };

    fetchCommunes();
  }, [selectedDistrict]);


  const handleProvinceChange = (value: string) => {
    setSelectedProvince(value);
    setSelectedDistrict('');
    setSelectedCommune('');
  };

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
    setSelectedCommune('');
  };

  const handelCommuneChange = (value: string) => {
    setSelectedCommune(value);
  };

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
                      onValueChange={(value) => {
                        setSelectedProvince(value);
                        setSelectedDistrict("");
                        setSelectedCommune("");
                      }}
                      items={[
                        { label: "Chọn Tỉnh/Thành phố", value: "" },
                        ...provinces.map((p) => ({ label: p.name, value: p.code })),
                      ]}
                      placeholder={{
                        label: "Chọn tỉnh/thành phố...",
                        value: null,
                      }}
                      disabled={!isChecked}

                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.text2}>Quận/ Huyện</Text>
                  <View style={styles.inputBlock}>
                    <RNPickerSelect
                      onValueChange={(value) => {
                        setSelectedDistrict(value);
                        setSelectedCommune("");
                      }}
                      items={[
                        { label: "Chọn Quận/Huyện", value: "" },
                        ...districts.map((d) => ({ label: d.name, value: d.code })),
                      ]}
                      value={selectedDistrict}
                      placeholder={{
                        label: "Chọn Quận/ Huyện",
                        value: null,
                      }}
                      disabled={!isChecked || !selectedProvince}
                    />
                  </View>
                </View>
                <View>
                  <Text style={styles.text2}>Phường/ Xã</Text>
                  <View style={styles.inputBlock}>
                    <RNPickerSelect
                      onValueChange={(value) => setSelectedCommune(value)}
                      items={[
                        { label: "Chọn Phường/Xã", value: "" },
                        ...communes.map((c) => ({ label: c.name, value: c.code })),
                      ]}
                      value={selectedCommune}
                      placeholder={{
                        label: "Chọn Phường/ Xã",
                        value: null,
                      }}
                      disabled={!isChecked || !selectedDistrict}
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
