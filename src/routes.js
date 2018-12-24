import React from 'react';
import Layout from './HOC/Layout';
import { Switch } from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Home from './Components/Home';
import SignIn from './Components/signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/UI/not_found';

import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/matches';
import AddEditMatch from './Components/Admin/matches/addEditMatch';
import AdminPlayers from './Components/Admin/players';
import AddEditPlayers from './Components/Admin/players/addEditPlayers';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
        <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
        <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
        <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
        <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
        <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
        <PublicRoute {...props} restricted={false} component={NotFound}/>
      </Switch>
    </Layout>
  )
}

export default Routes; 