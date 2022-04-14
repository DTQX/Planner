import { Switch, Route } from '@modern-js/runtime/router';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.less';
// import './App.css';
import { Layout } from 'antd';
import HeaderContent from './components/header';

const { Header, Content } = Layout;
const App = () => (
  <Layout>
    <Header className="header">
      <HeaderContent />
    </Header>
    <Content>
      <Switch>
        <Route exact={true} path="/test/select">
          <div className="container">3333</div>
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Content>
  </Layout>
);

export default App;
