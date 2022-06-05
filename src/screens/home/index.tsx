import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "react-native";
import { Container } from "./styles";

export const Home = () => {
  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate('profile', {
      user: 'Victor'
    })
  }

  return (
    <Container>
      <Button
        title="Open screen"
        onPress={handleOpenScreen}
      />
      <Text>Home</Text>
    </Container>
  )
}