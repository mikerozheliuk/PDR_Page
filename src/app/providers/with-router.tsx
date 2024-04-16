import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Auth, Home, Main, PageNotFound } from 'pages';

import { Layout } from 'shared/ui';
import { PageLayout } from 'shared/ui/Layout/PageLayout';

export const withRouter =
  <T extends React.PropsWithChildren>(Cmp: React.ComponentType<T>) =>
  (props: T): React.ReactElement => {
    return (
      <BrowserRouter>
        <Cmp {...props}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route element={<PageLayout />}>
              <Route path="/main" element={<Main />} />
            </Route>

            <Route path="/auth" element={<Auth />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Cmp>
      </BrowserRouter>
    );
  };
