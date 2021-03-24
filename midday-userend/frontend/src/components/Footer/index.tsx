import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from '../Navigation/homeStackScreen';
import ProfileStackScreen from '../Navigation/profileStackScreen';
import InvitationsStackScreen from '../Navigation/invitationStackScreen';
import { User } from 'src/models';
import { connect } from 'react-redux';

function setIcon (color:string) {
  const route = useRoute();
  switch (route.name) {
    case 'Profile':
      return <Icon name="person-outline"size={25} color={color}/>;
    case 'Landing':
      return <Icon name="home-outline"size={30} color={color}/>;
    case 'Invitations':
      return <Icon name="notifications-outline"size={30} color={color}/>;
  }
}

const Tab = createBottomTabNavigator();
function Footer ({ user }:{user:User}) {
  const count = user.invitations.length;
  return (

      <Tab.Navigator
      initialRouteName="Landing"
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}>

        <Tab.Screen name="Profile" component={ProfileStackScreen} options={() => (
          {
            tabBarIcon: ({ color }) => setIcon(color)
          })}/>
          <Tab.Screen name="Landing" component={HomeStackScreen} options={() => (
            {
              tabBarIcon: ({ color }) => setIcon(color)
            })}/>

        <Tab.Screen name="Invitations" component={InvitationsStackScreen} options={() => (
          {
            tabBarIcon: ({ color }) => setIcon(color),
            tabBarBadge: user.invitations.length === 0 ? undefined : count
          })}/>
      </Tab.Navigator>

  );
}

function mapStateToProps ({ user }:{user:User}) {
  return { user };
}

export default connect(mapStateToProps)(Footer);
