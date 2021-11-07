import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";     
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { todos } from '../todos/reducers';
import TodoList from '../todos/TodoList';


function App() {
  return (
    <ThemeProvider theme={theme} >
  

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={()=> <div>  <TodoList /></div> }></Route>
        <Route exact path="/services" component={()=> <div>Services3</div> }></Route>
        <Route exact path="/customsoftware" component={()=> <div>Custom Software</div> }></Route>
        <Route exact path="/mobileapps" component={()=> <div>Mobile Apps</div> }></Route>
        <Route exact path="/websites" component={()=> <div>Websites</div> }></Route>
        <Route exact path="/revolution" component={()=> <div>Revolution</div> }></Route>
        <Route exact path="/about" component={()=> <div>About</div> }></Route>
        <Route exact path="/contact" component={()=> <div>Contact</div> }></Route>
        <Route exact path="/estimate" component={()=> <div>Estimate</div> }></Route>
      </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
