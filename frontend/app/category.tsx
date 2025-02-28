import CategoryProduct from "@/components/category_product";
import { getAllCategories, getSubCate } from "@/src/services/productsServices";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
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

  const [categoryData, setCategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
      const fetchCategory = async () => {
        try {
          const data = await getAllCategories();
          console.log("Fetched products: ", data.categories);
          setCategoryData(data.categories);
        } catch (error) {
          console.error("Failed to fetch category", error);
        }
      };
      fetchCategory();
    }, []);

    useEffect(()=>{
      const fetchSubCate = async ()=>{
        try {
          const data = await getSubCate(selectedCategoryId);
          console.log("Fetched sub category: ", data);
          setSubCategory(data.subCate);
        } catch (error) {
          console.error("Failed to fetch subcategories", error);
        }
      };
      fetchSubCate();
    }, [selectedCategoryId])
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
            data={categoryData}
            horizontal={false}
            refreshing={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedIndex(index);
                  setSelectedCategoryId(item._id);
                  console.log(selectedCategoryId);
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
                  source={{ uri: item.categoryImage}}
                />
                <Text style={styles.name}>{item.categoryName}</Text>
              </TouchableOpacity>
            )}
            extraData={selectedIndex}
          />
        </View>
        <View style={styles.colProduct}>
          <FlashList
            data={subCategory}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            refreshing={false}
            numColumns={3}
            renderItem={({ item }) => (
              <CategoryProduct
                id={item._id}
                imageCategory={item.subCateImage}
                nameCategory={item.subCateName}
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
