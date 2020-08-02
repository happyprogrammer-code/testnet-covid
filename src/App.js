import React, { Component } from 'react'
import {BrowserRouter as Router,  Switch} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import {Nav, Home, Author, Updates, Footer} from './components'
import './global.css'



export class App extends Component {
    render() {
        return (
            // <Router>
            //     <Route path="/" component={Nav}/>
            //     <Route path="/" exact component={Home}/>
            //     <Route path="/updates" exact component={Updates} />
            //     <Route path="/author" exact component={Author} />
            //     <Route path="/" component={Footer}/>
            // </Router>
    
<>
  

  <Router>
      <Route path="/" 
      component={Nav}
      />
      
      
      <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/updates" exact component={Updates} />
            <Route path="/author" exact component={Author} />
            <Route path="/" render={
                () => <h1 style={{color:'red', fontSize:"172px", margin:'auto'}}>ERROR 404 NOT FOUND</h1>
            }/>
       </Switch>
  </Router>

  <Footer />
 
  </>

        )
    }
}

export default App
