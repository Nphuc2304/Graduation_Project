import CategoryProduct from "@/components/category_product";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { data } from "react-router-dom";

const Category = () => {
  ///////////////////////////
  // data mẫu
  const data1 = [
    {
      id: 1,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Điện thoại",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Laptop",
    },
    {
      id: 3,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Máy ảnh",
    },
    {
      id: 4,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Thời trang nam",
    },
    {
      id: 5,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Thời trang nữ",
    },
    {
      id: 6,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Đồ gia dụng",
    },
    {
      id: 7,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Thực phẩm",
    },
    {
      id: 8,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Sách & Văn phòng phẩm",
    },
    {
      id: 9,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Thể thao & Ngoài trời",
    },
    {
      id: 10,
      image:
        "https://png.pngtree.com/png-clipart/20230511/original/pngtree-plush-bear-toy-white-illustration-png-image_9157825.png",
      name: "Mẹ & Bé",
    },
  ];
  const data2 = [
    {
      id: 1,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Điện thoại",
    },
    {
      id: 2,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Laptop",
    },
    {
      id: 3,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Máy ảnh",
    },
    {
      id: 4,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Thời trang nam",
    },
    {
      id: 5,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Thời trang nữ",
    },
    {
      id: 6,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Đồ gia dụng",
    },
    {
      id: 7,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Thực phẩm",
    },
    {
      id: 8,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Sách & Văn phòng phẩm",
    },
    {
      id: 9,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Thể thao & Ngoài trời",
    },
    {
      id: 10,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/018/743/022/small/laptop-computer-with-blank-transparent-screen-and-background-format-png.png",
      name: "Mẹ & Bé",
    },
  ];
  ///////////////////////////

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.appDfColor}>
      <View style={styles.header}>
        <View style={styles.search}>
          <Image
            style={styles.icon}
            source={require("@/assets/icons/search.png")}
          />
          <Text numberOfLines={1}>
            Sản phẩm, thương hiệu và mọi thứ bạn cần
          </Text>
        </View>
        <Image
          style={styles.icon}
          source={require("@/assets/icons/shopping-cart.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.colCategory}>
          <FlashList
            data={data1}
            horizontal={false}
            refreshing={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedIndex(index);
                }}
                style={[
                  styles.container,
                  selectedIndex == index && {
                    backgroundColor: "#fff",
                    borderColor: "blue",
                    borderBottomWidth: 0,
                    borderLeftWidth: 2,
                  },
                ]}
              >
                <Image
                  style={styles.img}
                  source={{ uri: item.image.toLocaleString() }}
                />
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
            )}
            extraData={selectedIndex}
          />
        </View>
        <View style={styles.colProduct}>
          <FlashList
            data={data2}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            refreshing={false}
            numColumns={3}
            renderItem={({ item }) => (
              <CategoryProduct
                id={item.id.toLocaleString()}
                imageCategory={item.image}
                nameCategory={item.name}
              />
            )}
          />
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
  body: {
    flexDirection: "row",
    flex: 1,
    marginTop: 20,
  },
  colCategory: {
    width: "25%",
    borderRadius: 5,
  },
  colProduct: {
    width: "70%",
    marginHorizontal: "2.5%",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  container: {
    backgroundColor: "rgb(240,255,255)",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.7,
    borderColor: "rgb(220,220,220)",
  },
  img: {
    width: 70,
    height: 70,
  },
  name: {
    color: "#000",
    fontSize: 14,
  },
});

export default Category;
