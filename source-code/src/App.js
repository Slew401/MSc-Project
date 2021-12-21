import React from 'react'
import { Navigation, TeamFinder, PlayerFinder, Glossary, Home, Analysis, PlayerDetails, Teamdetails } from './components'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Layout } from "antd"; 

import "./App.css";

const App = () => {
    return (
        <div className = "app" style = {{backgroundColor: "#f1ede5"}}>
           <div className = "header">
                <Navigation/>
           </div>
            <div className = "main-body">
            <Container >
                <>
                    <Switch>
                        <Route path = "/Home">
                            <Home/>
                        </Route>
                        <Route path = "/PlayerFinder">
                            <PlayerFinder/>
                        </Route>
                        <Route path = "/TeamFinder">
                            <TeamFinder/>
                        </Route>
                        <Route path = "/Glossary">
                            <Glossary/>
                        </Route>
                        <Route path = "/Analysis/SAS">
                            <Analysis/>
                        </Route>
                        <Route path = "/teams/:teamid">
                            <Teamdetails/>
                        </Route>
                        <Route path = "/players/:playerid">
                            <PlayerDetails/>
                        </Route>
                        {/* Default Route */}
                        <Route path = "/">
                            <Home/>
                        </Route>
                    </Switch>
                </>
            </Container>
            </div>
        </div>
    )
}

export default App
