import { View, Text, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View
            className='items-center justify-center gap-1 py-4'
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
                    'font-poppinsMedium'
                    :
                    'font-poppinsRegular'} 
                    text-xs`}
                style={{ color: color }}
                numberOfLines={1}
                ellipsizeMode='tail'>
                {name}
            </Text>
        </View >
    )
}

const tabScreens = [
    {
        name: 'home',
        title: 'Home',
        icon: icons.home,
    },
    {
        name: 'tuples',
        title: 'Tuples',
        icon: icons.tuple,
    },
    {
        name: 'history',
        title: 'History',
        icon: icons.history,
    },
    {
        name: 'profile',
        title: 'Profile',
        icon: icons.profile,
    },
];

const TabsLayout = () => {
    return (
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
            {tabScreens.map(({ name, title, icon }) => (
                <Tabs.Screen
                    key={name}
                    name={name}
                    options={{
                        title: title,
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icon} color={color} name={title} focused={focused} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabsLayout;