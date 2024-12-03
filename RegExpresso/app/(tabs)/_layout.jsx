import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View
            className='items-center justify-center gap-1'
            style={{ minWidth: 50 }}
        >
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />

            <Text
                className=
                {`${focused ?
                    'font-poppinsMedium' :
                    'font-poppinsRegular'} text-xs`}
                style={{ color: color }}
                numberOfLines={1}
                ellipsizeMode='tail'>
                {name}
            </Text>
        </View >
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#3d2413',
                    tabBarInactiveTintColor: '#3e241380',
                    tabBarStyle: {
                        backgroundColor: "#e8cdad",
                        borderTopWidth: 0,
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name='tuples'
                    options={{
                        title: 'Tuples',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.tuple}
                                color={color}
                                name="Tuples"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name='history'
                    options={{
                        title: 'History',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.history}
                                color={color}
                                name="History"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout