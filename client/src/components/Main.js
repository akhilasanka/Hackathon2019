import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Result from './Result';
import ShareExperience from './ShareExperience';

class Main extends Component {
    

    render(){
        return(
            
            <div>
                {/*Render Different Component based on Route*/}
                <Route exact path="/" component={Home}/>
                <Route path="/result" component={Result}/>
                <Route path="/submit-experience" component={ShareExperience}/>
            </div>
        )
    }
}
//Export The Main Component
export default Main;