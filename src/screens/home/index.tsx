import React, { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";
import { Container } from "./styles";
import { CardProfile } from '../../components/Card';
import axios from 'axios';


//type of the data that is being received from the API
type DataProps = {
  id: number;
  name: string;
}

export const Home = () => {
  const navigation = useNavigation();

  //state to store the data received from the API
  const [data, setData] = useState<DataProps[]>([]);
  //state to store the loading state
  const [ loading, setLoading ] = useState(false)
  //state to count pages
  const [page, setPage] = useState(1)
  // state that checks if it exists next page
  const [hasMoreData, setHasMoreData] = useState(true)

  // navigation next screen
  const handleOpenScreen = () => {
    navigation.navigate('profile', {
      user: 'Rafael'
    })
  }

  //hook to get the data from the API
  useEffect(() => {
    getAlldata()
  }, [])
  

  //function to get the data from the API
  const getAlldata = async () => {
    if(!hasMoreData) return;
    setLoading(true)

    //request of the api rick and morty
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)

    //if the data is empty, render new datas
    if(data.results) {
      const current = data.results;
      setData(prev => [...prev, ...current])

      //if the data is not empty, the user has more data
      if(data.info.next){
        setPage(prev => prev + 1)
      }else{
        setHasMoreData(false)
      }
    }
    setLoading(false)
  }



  return (
    <Container>
      <Button
        title="Open screen"
        onPress={handleOpenScreen}
      />
      <Text>Home</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CardProfile id={item.id} name={item.name} />}
        onEndReached={getAlldata}
        onEndReachedThreshold={0.1}
        ItemSeparatorComponent={() => <View style={{ marginTop: 15}} />}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#f3b1b1" /> : null}
      />
      
    </Container>
  )
}