import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';

type Props = {
  user: string
}

export const Profile = () => {
  const route = useRoute();
  const { user } = route.params as Props
  return (
    <Text>{user}</Text>
  )
}