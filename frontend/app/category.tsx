import { router, Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export function Category() {
  return (
    <Link href="/login">
        <Button onPress={() => {router.push("/login")}} title="đăng nhập"/>
    </Link>
  );
}

const styles = StyleSheet.create({});
