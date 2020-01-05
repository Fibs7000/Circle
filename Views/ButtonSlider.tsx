import React, { useState, ReactElement } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, IconNode } from 'react-native-elements'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
export type DataType = {title: string, icon: ReactElement, type: string, iconType: typeof Icon};

const ButtonSlider = ({data, onChange, height=null}: {data: DataType[], onChange: (value: boolean, index: number)=> void, height?: number}) => {
    return (
        <View style={[height&&{height}, {justifyContent: "center", marginTop: 70}]}>
            <FlatList 
        horizontal 
        renderItem={({item, index})=> <Switch key={index} text={item.title} icon={item.icon} onChange={v=> onChange(v, index)} />} 
        data={data} showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: "center"}} />
        </View>
    )
}

const Switch = ({icon, text, onChange}:{icon: ReactElement, text: string, onChange: (value: boolean)=>void })=>{
    const [on, setOn] = useState(false);
    return (
        <TouchableOpacity onPress={()=> {setOn(!on); onChange(!on)}} style={{height: 50, borderRadius: 100,marginHorizontal: 10, backgroundColor: on ? "#0785F2" : "#DEE0E3", flexDirection: "row", paddingHorizontal: 30, alignItems: "center"}}>
            {icon}
            <Text style={{color: on? "white": "black", marginLeft: 10}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonSlider
