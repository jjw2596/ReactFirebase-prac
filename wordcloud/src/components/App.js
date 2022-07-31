import React from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import AppShell from './AppShell';
import Home from './Home';
import Texts from './Texts';
import Words from './Words';

class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route exact path="/texts" element={<Texts/>}/>
                            <Route exact path="/words" element={<Words/>}/>
                        </Routes>
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;