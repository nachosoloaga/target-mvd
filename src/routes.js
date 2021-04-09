import React from 'react';

import routesPaths from 'constants/routesPaths';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import NotFoundPage from 'pages/NotFoundPage';
import SocialMediaContainer from 'components/common/SocialMediaContainer/SocialMediaContainer';

const routes = [
  {
    path: routesPaths.index,
    component: <HomePage />,
    exact: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: <LoginPage />
  },
  {
    path: '/test',
    component: <SocialMediaContainer />
  },
  {
    path: routesPaths.signUp,
    component: <SignUpPage />
  },
  {
    component: <NotFoundPage />
  }
];

export default routes;
