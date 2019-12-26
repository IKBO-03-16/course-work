import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = React.lazy(() => import('src/routes/Main'));
const SlinkinPage = React.lazy(() => import('src/routes/SlinkinPage'));
const KazhentsevPage = React.lazy(() => import('src/routes/KazhentsevPage'))
const IstratovPage = React.lazy(() => import('src/routes/IstratovPage'));
const YazikovPage = React.lazy(() => import('src/routes/YazikovPage'));
const BulgaruPage = React.lazy(() => import('src/routes/BulgaruPage'));
const EvtushenkoPage = React.lazy(() => import('src/routes/EvtushenkoPage'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/slinkin" component={SlinkinPage} />
          <Route exact path="/kazhentsev" component={KazhentsevPage} />
          <Route exact path="/istratov" component={IstratovPage} />
          <Route exact path="/yazikov" component={YazikovPage} />
          <Route exact path="/bulgaru" component={BulgaruPage} />
          <Route exact path="/evtushenko" component={EvtushenkoPage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
