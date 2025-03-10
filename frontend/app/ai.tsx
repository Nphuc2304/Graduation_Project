import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions, SafeAreaView } from "react-native";

const { width } = Dimensions.get("window");
const messages = [
  "Làm thế nào để wifi trong nhà mạnh hơn?",
  "Giảm ồn khi hàng xóm hay to tiếng",
  "Ô cũng di động loại nào tốt?",
  "Máy ảnh nào phù hợp với người đi phượt?",
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image source={require('../assets/images/send.jpg')} style={styles.avatar} />
          <Text style={styles.headerText}>Trợ lý AI</Text>
          <TouchableOpacity>
            <Text style={styles.moreOptions}>⋮</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.subHeaderText}>Chọn trợ lý bạn muốn trò chuyện</Text>
        
        <View style={styles.assistantOptions}>
          <TouchableOpacity style={styles.option}>
            <Image source={require('../assets/images/send.jpg')} style={styles.optionIcon} />
            <Text style={styles.optionText}>Hỏi Trợ lý AI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Image source={require('../assets/images/person.jpg')} style={styles.optionIcon} />
            <Text style={styles.optionText}>Hỏi Trợ lý cá nhân</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Chat Section */}
      <View style={styles.chatContainer}>
        <View style={styles.aiMessageContainer}>
          <Image source={require('../assets/images/send.jpg')} style={styles.chatBubble} />
          <View style={styles.aiMessage}>
          <Text style={styles.aiText1}>
              Trợ lý AI
            </Text>
            <Text style={styles.aiText}>
              Xin chào! Mình là trợ lý AI của bạn tại Tiki. Mình đang phát triển nên không phải lúc nào cũng đúng. Bạn có thể phản hồi để giúp mình cải thiện tốt hơn.
            </Text>
            <Text style={styles.aiText}>
              Mình sẵn sàng giúp bạn với câu hỏi về chính sách và tìm kiếm sản phẩm. Hôm nay bạn cần mình hỗ trợ gì không? ^^
            </Text>
          </View>
        </View>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.messageButton}>
              <Text style={styles.messageText}>{item}</Text>
              <Image source={require('../assets/images/AI.jpg')} style={styles.messageIcon} />
            </TouchableOpacity>
          )}
        />
      </View>
      
      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Nhập nội dung chat" style={styles.input} />
        <TouchableOpacity style={styles.sendButton}>
          <Image source={require('../assets/images/AI.jpg')} style={styles.sendIcon} />
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: 'center',
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    position: 'relative',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    left: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  moreOptions: {
    fontSize: 18,
    // position: 'fixed',
    left:130,
    top: '80%'
       
  },
  subHeaderText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    color: "#777",
  },
  assistantOptions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 70,
  },
  option: {
    alignItems: "center",
  },
  optionIcon: {
    borderWidth:1,
    borderColor: "rrgba(219, 219, 219, 0.77)",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  optionText: {
    marginTop: 5,
    fontSize: 12,
    color: "#007AFF"
  },
  chatContainer: {
    padding: 10,
    flex: 1,
  },
  aiMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  chatBubble: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 50,
  },
  aiMessage: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: '70%',
  },
  aiText: {
    fontSize: 14,
  },
  aiText1: {
     color: "#007AFF",
    fontSize: 12,
  },
  messageButton: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft:40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: '70%',
  },
  messageIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  messageText: {
    color: "#007AFF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});

export default App;