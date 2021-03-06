import React from 'react';
import { Route } from 'react-router-dom';
import AppLayout from 'components/AppLayout';
import About from './About';
import Home from './Home';
import AccountsRoutes from './acounts';

// 모든 페이지들을 연결해주는 최상위 컴포넌트
const Root = () => {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />

      {/* account와 관련된 url 라우팅 */}
      <Route path="/accounts" component={AccountsRoutes} />
    </AppLayout>
  );
};

export default Root;
