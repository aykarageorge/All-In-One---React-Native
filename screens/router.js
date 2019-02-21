import React, { Component } from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './home';
import LoginScreen from './login';
import { View, Image, TouchableOpacity } from 'react-native';
import SideMenu from './components/SideMenu';
import HomeScreen2 from './home2';
import CategoryItems from './categoryItems';
import SubCategoryItems from './categorySubItems';
import GridView from './components/GridView';
import { Text } from 'react-native';

const TabScreens = createBottomTabNavigator({
    Packages: SubCategoryItems,
    Vendors: GridView
},
    {
        tabBarOptions: {
            inactiveBackgroundColor: 'rgb(204, 169, 59)',
            activeBackgroundColor: 'rgb(252, 194, 5)',
            labelStyle: {
                color: '#fff',
                fontSize: 16,
                justifyContent: 'space-around',
                fontWeight: '900'
            }
        },
    }
)

const StackScreens = createStackNavigator(
    {
        Login: { screen: LoginScreen },
        Home: { screen: HomeScreen },
        Home2: { screen: HomeScreen2 },
        CategoryItems: { screen: CategoryItems },
        SubCategoryItems: { screen: SubCategoryItems },
        Service: { screen: TabScreens }
    }, {
        initialRouteName: 'Login',
        mode: 'card',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000',
                height: 35,
            },
            headerRight: <View>
                <TouchableOpacity>
                    <Image
                        source={require('./images/user.png')}
                        style={{ width: 30, height: 30, marginRight: 10 }}
                    />
                </TouchableOpacity>
            </View >,
            headerTintColor: '#fff',
            headerTitleStyle: {
                // fontWeight: 'bold',
                // fontSize: 12,
            },
        },
    },
);

const DrawerScreens = createDrawerNavigator({
    Draw: StackScreens,
}, {
        drawerPosition: 'right',
        contentComponent: props => <SideMenu {...props} />,
        drawerBackgroundColor: ''
    }
)

const MainNavigator = createStackNavigator({
    drawer: DrawerScreens
}, {
        headerMode: 'none',
        defaultNavigationOptions: {
            headerVisible: false,
        },
    });

export default AppNavigator = createAppContainer(MainNavigator)