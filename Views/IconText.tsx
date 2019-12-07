import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'

const IconText = ({Icon, text }: {Icon: ReactElement, text: string}) => {
    return (
        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", height: 40}}>
            {Icon}
            <Text style={{fontSize: 20,}}>{text}</Text>
        </View>
    )
}

export default IconText
