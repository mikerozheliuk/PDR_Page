import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Auth, Home, Main, PageNotFound, Support, Theory } from 'pages';
import { Layout } from 'shared/ui';
import { PageLayout } from 'shared/ui/Layout';
import Profile from 'pages/profile';
import Tariffs from 'pages/tariffs';
import Instructions from 'pages/instructions';
import PrivateRoute from 'shared/ui/PrivateRoute';
import { AuthProvider } from 'pages/auth/AuthContext';
import Themes from 'pages/themes';

type WithRouterProps = { children?: React.ReactNode };

export const withRouter =
  <T extends WithRouterProps>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Cmp {...props}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route element={<PageLayout />}>
                  <Route path="/main" element={<Main />} />
                  <Route path="/theory" element={<Theory />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/tariffs" element={<Tariffs />} />
                  <Route path="/instructions" element={<Instructions />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/main/themes" element={<Themes />} />
                </Route>
              </Route>

              <Route path="/auth" element={<Auth />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Cmp>
        </BrowserRouter>
      </AuthProvider>
    );
  };
