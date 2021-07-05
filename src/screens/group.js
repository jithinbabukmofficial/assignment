import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Animated, Image, Modal, TouchableOpacity } from 'react-native';
import { PagerView } from 'react-native-pager-view';
import Header from './header';
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

import Rmenu from '../assets/rmenu.svg'
import Heart from '../assets/heart.svg'
import Comment from '../assets/comment.svg'

const Group = ({
    navigation,
}) => {
    const [page, setPage] = useState(0)
    const [open, setOpen] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Group alike" />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {page == 0 ? <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#0BA9B3',
                    marginHorizontal: 10
                }} /> : null}
                <Text style={{ color: page == 0 ? '#0BA9B3' : '#B4B4B4', marginRight: 10 }}>Local feed</Text>
                {page == 1 ? <View style={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#0BA9B3',
                    marginHorizontal: 10
                }} /> : null}
                <Text style={{ color: page == 1 ? '#0BA9B3' : '#B4B4B4' }}>Global feed</Text>
            </View>
            <AnimatedPagerView style={styles.pagerView}
                initialPage={0}
                onPageSelected={e => { setPage(e.nativeEvent.position) }}>
                <View key="1">
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 15, alignItems: 'center' }}>
                            <Image source={require('../assets/user.png')} />
                            <View style={{ flex: 1, marginLeft: 5 }}>
                                <Text style={{ color: '#0BA9B3' }}>10 Benefits Of Meeting People While Trave...</Text>
                                <Text style={{ color: '#B4B4B4', fontSize: 12 }}>Pooja Bhatia</Text>
                            </View>
                            <Rmenu />
                        </View>
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Image style={{ width: '100%', height: 200, marginTop: 10 }} source={require('../assets/post.png')} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginVertical: 10, marginHorizontal: 15 }}>
                            <Heart width={26} height={26} />
                            <Text style={{ color: '#0BA9B3', marginHorizontal: 7 }}>634</Text>
                            <Comment width={24} height={24} />
                            <Text style={{ color: '#0BA9B3', marginHorizontal: 7 }}>120</Text>
                        </View>
                    </View>
                </View>
                <View key="2">
                    <Text>Second page</Text>
                </View>
            </AnimatedPagerView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    setOpen(false)
                }}
            >
                <TouchableOpacity style={{ flex: 1 }} onPress={_ => setOpen(false)}>
                    <View style={{
                        flex: 1, justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.7);'
                    }}>
                        <Image
                            style={{ width: '100%', height: 200, marginTop: 10 }}
                            source={require('../assets/post.png')} />
                    </View>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
});
export default Group;
