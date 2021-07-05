import React from 'react';
import { Text, View, Alert } from 'react-native';

import Slider from 'react-native-slide-to-unlock';

// icons imports
import Logo from "../assets/menu.svg";
import Notification from "../assets/notification.svg";
import Search from "../assets/search.svg";
import Star from "../assets/star.svg";
import Logout from "../assets/logout.svg";
import Slide from "../assets/slideicon.svg";


const Header = ({
    title,
}) => (
    <View>
        <View style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            justifyContent: 'space-between',
        }}>
            <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                <Logo width={20} height={20} fill={"#fff"} style={{ marginRight: 15, }} />
                <Notification width={20} height={20} fill={"#fff"} style={{ marginRight: 15, }} />
                <Search width={20} height={20} fill="#fff" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Star width={20} height={20} fill={"#fff"} style={{ marginRight: 10, }} />
                <Text style={{ color: '#0BA9B3', marginRight: 10 }}>11</Text>
                <Logout width={20} height={20} fill={"#fff"} style={{ marginRight: 10, }} />
                <Text style={{ color: '#0BA9B3', marginRight: 10 }}>1900</Text>
            </View>
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
            <Slider
                // childrenContainer={{ backgroundColor: 'red' }}
                onEndReached={() => {
                    // Alert.alert('Attention', 'onEndReached!');
                }}

                containerStyle={{
                    margin: 8,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                    borderColor: '#0BA9B3',
                    borderWidth: 1,
                    borderRadius: 20,
                }}
                sliderElement={
                    <Slide height={40} width={40} />
                }
            >
                <Text style={{ color: '#707070' }}>{title}</Text>
            </Slider>
        </View>
    </View>
);

export default Header;
