import React from 'react';
import { connect } from 'react-redux';
import { User } from 'src/models';
import Footer from '../Footer';
import AuthStackScreen from './authStackNavigation';

function AppRoutes ({ user }:{user:User}) {
  return (

    user.name ? <Footer></Footer> : <AuthStackScreen></AuthStackScreen>

  );
}

function mapStateToProps ({ user }:{user:User}) {
  return { user };
}

export default connect(mapStateToProps)(AppRoutes);
