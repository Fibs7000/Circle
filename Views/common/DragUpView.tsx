import React, { useState, useRef } from 'react'
import { View, Text, SafeAreaView, ScrollView, Animated, } from 'react-native'

export const DragUpView = ({ children, Draggable, headerHeight }: { Draggable: JSX.Element, children: any, headerHeight: number }) => {
    const [parentHeight, setParentHeight] = useState(headerHeight);
    var [scroll, setScroll] = useState(new Animated.Value(0));
    const scrollView = useRef<ScrollView>();
    return (
        <View style={{ flex: 1 }} onLayout={e => setParentHeight(e.nativeEvent.layout.height)}>
            <Animated.ScrollView
                ref={scrollView}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scroll}}}], { useNativeDriver: true })}
                bounces={true}
                snapToStart={false}
                decelerationRate="normal"
                snapToEnd={false}
                snapToOffsets={[parentHeight - headerHeight]}
                showsVerticalScrollIndicator={false}>
                <Animated.View style={{height: parentHeight - headerHeight, transform: [{translateY: Animated.multiply(scroll, 0.8)}]}}>
                    {children}
                </Animated.View>
                {Draggable}
            </Animated.ScrollView>
        </View>
    )
}
