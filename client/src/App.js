
import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Details from './components/Details';
import Activities from './components/Activity';
import CreateActivity from './components/CreateActivity';
import AllActivities from './components/AllActivities';
import style from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={style.App}>
        <Switch>
          <Route exact path= '/' component={LandingPage}/>
          <Route exact path= '/home'  component={Home}/>
          <Route exact path= '/home/:id'  component={Details}/>
          <Route exact path= '/home/:id/activity' component={Activities}/>
          <Route extac path= '/home/activity/create' component={CreateActivity} />
          <Route exact path= '/home/activity/all' component={AllActivities} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
