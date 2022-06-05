import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, FlatList, Text } from "react-native";
import { Container } from "./styles";
import { api } from '../../services/api';

type DataProps = {
  id: number;
  title: string;
}

export const Home = () => {
  const [data, setData] = useState<DataProps[]>()
  const navigation = useNavigation();

  const handleOpenScreen = () => {
    navigation.navigate('profile', {
      user: 'Rafael'
    })
  }

  useEffect(() => {
    const getAlldata = async () => {
      const response = await api.get('/posts')
      setData(response.data)
    }
    getAlldata()
  }, [])
  

  return (
    <Container>
      <Button
        title="Open screen"
        onPress={handleOpenScreen}
      />
      <Text>Home</Text>

      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </Container>
  )
}