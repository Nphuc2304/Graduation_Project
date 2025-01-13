import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductItem from "@/components/product_item";
import ProductItem1 from "@/components/product_item_1";
import ImageWithTextComponent from "@/components/feature_block";
import { Link, router } from "expo-router";

const Account = ({ navigation }: any) => {
  // data test
  const products = [
    {
      id: "1",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 1",
      rate: 4.5,
      price: 100000,
      sale: 10,
      brandName: "Thương hiệu A",
    },
    {
      id: "2",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 2",
      rate: 4.0,
      price: 150000,
      sale: 5,
      brandName: "Thương hiệu B",
    },
    {
      id: "3",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 3",
      rate: 4.7,
      price: 200000,
      sale: 15,
      brandName: "Thương hiệu C",
    },
    {
      id: "4",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 4",
      rate: 3.5,
      price: 120000,
      sale: 20,
      brandName: "Thương hiệu D",
    },
    {
      id: "5",
      image: require("../assets/images/img_def.jpg"),
      name: "Sản phẩm 5",
      rate: 4.8,
      price: 250000,
      sale: 25,
      brandName: "Thương hiệu E",
    },
  ];

  const data = [
    {
      id: "1",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "2",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "3",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "4",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
    {
      id: "5",
      title: "Product",
      image: require("../assets/images/banner1.jpg"),
    },
  ];

  const products2 = [
    {
      id: "1",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 1",
      rate: 4.5,
      price: 100000,
      sale: 10,
      brandName: "Thương hiệu A",
    },
    {
      id: "2",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 2",
      rate: 4.0,
      price: 150000,
      sale: 5,
      brandName: "Thương hiệu B",
    },
    {
      id: "3",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 3",
      rate: 4.7,
      price: 200000,
      sale: 0,
      brandName: "Thương hiệu C",
    },
    {
      id: "4",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 4",
      rate: 3.5,
      price: 120000,
      sale: 0,
      brandName: "Thương hiệu D",
    },
    {
      id: "5",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 5",
      rate: 4.8,
      price: 250000,
      sale: 0,
      brandName: "Thương hiệu E",
    },
    {
      id: "6",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 6",
      rate: 3.9,
      price: 180000,
      sale: 0,
      brandName: "Thương hiệu F",
    },
    {
      id: "7",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 7",
      rate: 4.2,
      price: 220000,
      sale: 0,
      brandName: "Thương hiệu G",
    },
    {
      id: "8",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 8",
      rate: 4.3,
      price: 160000,
      sale: 0,
      brandName: "Thương hiệu H",
    },
    {
      id: "9",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 9",
      rate: 4.0,
      price: 130000,
      sale: 0,
      brandName: "Thương hiệu I",
    },
    {
      id: "10",
      image: require("../assets/images/img_def_2.jpg"),
      name: "Sản phẩm 10",
      rate: 4.6,
      price: 210000,
      sale: 15,
      brandName: "Thương hiệu J",
    },
  ];
  //////////////////////////

  const renderItems = () => {
    const rows = [];
    const numberOfItemsPerRow = 5;

    for (let i = 0; i < data.length; i += numberOfItemsPerRow) {
      const rowItems = data.slice(i, i + numberOfItemsPerRow);
      rows.push(
        <View style={styles.featureContainer} key={i}>
          {rowItems.map((item) => (
            <ImageWithTextComponent
              key={item.id}
              image={item.image}
              text={item.title}
            />
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <ScrollView
      style={styles.appDfColor}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.textBold}>Tài khoản</Text>
        <View style={styles.rowBlock}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              source={require("../assets/icons/setting.png")}
              style={styles.iconBar}
            />
          </TouchableOpacity>

          <Image
            source={require("../assets/icons/shopping-cart.png")}
            style={styles.iconBar}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.accountContainer}>
          <Image
            source={require("../assets/images/default_img.jpg")}
            style={styles.accountImage}
          />
          <View>
            <Text style={styles.textBold}>
              Chào mừng bạn đến với TypeScript!
            </Text>
            <TouchableOpacity style={styles.logIn}>
              <Text style={styles.textLinkBlue}>Đăng nhập / tạo tài khoản</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.rowBlock, { marginTop: 10 }]}>
          <TouchableOpacity
            style={[styles.accountBlock, { backgroundColor: "#FFBBFF" }]}
          >
            <Text style={styles.textGray}>Astra</Text>
            <Text style={styles.text}>Tìm thêm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.accountBlock, { backgroundColor: "#FFFFE0" }]}
          >
            <Text style={styles.textGray}>Tiki xu</Text>
            <Text style={styles.text}>Tìm thêm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.accountBlock, { backgroundColor: "#C6E2FF" }]}
          >
            <Text style={styles.textGray}>Mã giảm giá</Text>
            <Text style={styles.text}>Tìm thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.rowBlock}>
          <Text style={styles.textBold}>Đơn hàng của tôi</Text>
          <Image
            source={require("../assets/icons/next.png")}
            style={styles.iconNext}
          />
        </View>
        <View style={[styles.rowBlock, { marginTop: 10 }]}>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/wallet.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Chờ thanh toán
            </Text>
          </View>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/file.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Đang xử lý
            </Text>
          </View>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/delivery.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Đang vận chuyển
            </Text>
          </View>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/delivered.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Đã giao
            </Text>
          </View>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/reload.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Đổi trả
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.rowBlock}>
          <Text style={styles.textBold}>Đánh giá sản phẩm</Text>
          <Image
            source={require("../assets/icons/next.png")}
            style={styles.iconNext}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.rowBlock}>
          <Text style={styles.textBold}>Bạn có thể thích</Text>
        </View>
      </View>
      <FlatList
        data={products}
        horizontal={true}
        refreshing={false}
        style={styles.listMaybeLove}
        renderItem={({ item }) => (
          <ProductItem
            id={item.id}
            image={item.image}
            name={item.name}
            rate={item.rate}
            price={item.price}
            sale={item.sale}
            brandName={item.brandName}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.container2}>
        <View style={styles.rowBlock}>
          <Text style={styles.textBold}>Trạm dịch vụ tiện ích</Text>
          <Image
            source={require("../assets/icons/next.png")}
            style={styles.iconNext}
          />
        </View>
        <Image
          source={require("../assets/images/img_banner_account.png")}
          style={styles.banner}
          resizeMode="contain"
        />
        {renderItems()}
      </View>
      <View style={styles.container2}>
        <View style={styles.rowBlock}>
          <Text style={styles.textBold}>Quan tâm</Text>
        </View>
        <View style={[styles.rowBlock2, { marginTop: 10 }]}>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/view.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Đã xem
            </Text>
          </View>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/love.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Yêu thích
            </Text>
          </View>
          <View style={styles.featureBlock}>
            <View style={styles.iconFeatureBlock}>
              <Image
                source={require("../assets/icons/checkout.png")}
                style={styles.iconFeature}
              />
            </View>
            <Text style={[styles.textGray, { textAlign: "center" }]}>
              Mua lại
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.rowBlock}>
          <Text style={styles.textBold}>Gợi ý hôm nay</Text>
        </View>
      </View>
      <FlatList
        data={products2}
        horizontal={false}
        numColumns={2}
        refreshing={false}
        style={styles.listTopDeal}
        renderItem={({ item }) => (
          <ProductItem1
            id={item.id}
            image={item.image}
            name={item.name}
            rate={item.rate}
            price={item.price}
            sale={item.sale}
            brandName={item.brandName}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appDfColor: {
    backgroundColor: "#F8F8FF",
  },
  header: {
    position: "absolute",
    width: "100%",
    padding: 10,
    height: 50,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 1,
  },
  textBold: {
    fontSize: 14,
    fontWeight: "bold",
  },
  iconBar: {
    margin: 10,
    width: 24,
    height: 24,
  },
  container: {
    marginTop: 50,
    padding: 10,
    backgroundColor: "#fff",
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountImage: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    marginRight: 20,
  },
  logIn: {
    width: "70%",
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textLinkBlue: {
    color: "blue",
    fontSize: 12,
  },
  rowBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountBlock: {
    padding: 6,
    width: "30%",
    borderRadius: 8,
    borderColor: "#F8F8FF",
    borderWidth: 1,
  },
  textGray: {
    fontSize: 10,
    color: "#333",
  },
  text: {
    color: "#000",
    fontSize: 10,
    fontWeight: "bold",
  },
  container2: {
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 8,
  },
  iconNext: {
    width: 20,
    height: 20,
  },
  featureBlock: {
    width: "20%",
    alignItems: "center",
  },
  iconFeatureBlock: {
    width: "60%",
    borderRadius: 10,
    padding: 8,
    marginBottom: 5,
    backgroundColor: "#C6E2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  iconFeature: {
    width: 23,
    height: 23,
  },
  listMaybeLove: {
    backgroundColor: "#fff",
    padding: 5,
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 10,
  },
  featureContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowBlock2: {
    flexDirection: "row",
  },
  listTopDeal: {
    padding: 5,
  },
});

export default Account;
