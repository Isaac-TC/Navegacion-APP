import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'


interface Props extends StackScreenProps <any, any> {}

export const pantalla1screnn = ({navigation}: Props) => {
  //console.log(props)
  return (
    <View>
        <Text> pantalla 1</Text>
        <Button
          title= 'ir pag'
          onPress={()=> navigation.navigate('Pantalla2') }
        />
    </View>
  )
}
