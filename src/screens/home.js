import React from 'react';
import { Text, View, SafeAreaView, Image, Alert } from 'react-native';
import Slider from 'react-native-slide-to-unlock';

// icons imports
import Logo from "../assets/menu.svg";
import Notification from "../assets/notification.svg";
import Search from "../assets/search.svg";
import Star from "../assets/star.svg";
import Logout from "../assets/logout.svg";
import Slide from "../assets/slideicon.svg";
import Header from './header';



const Home = ({
    navigation,
}) => (
    <SafeAreaView>
        <Header title="Slide to match" />
    </SafeAreaView>
);

export default Home;
