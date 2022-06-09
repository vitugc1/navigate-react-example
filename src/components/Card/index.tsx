import React, { memo } from "react"
import { Text, View } from "react-native"

type Props = {
  id: number;
  name: string
}

export const CardProfile = (data: Props) => {
  return (
    <View style={{ width: 400, height: 50, justifyContent: 'center', backgroundColor: '#f3b1b1'}}>
      <Text style={{ color: '#000', fontSize: 15}}>{data.name}</Text>
    </View>
  )
}





