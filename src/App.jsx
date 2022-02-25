import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './componets/pages/Home';
import { useState } from 'react';
import axios from 'axios';
import RecipeCard from './componets/RecipeCard';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Paper, Typography } from '@mui/material';
import Header from './componets/layout/Header';
import Footer from './componets/layout/Footer';





const app_key = 'f26d7a2c';
const app_id = '918d1e12afd2e62ca25a967995ac35c3';
//https://api.edamam.com/search?q=${inputText}&app_id=${app_key}&app_key=${app_id}

function App() {
  const [timeOutPeriod, setTimeOutPeriod] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const [recipes, setRecipes] = useState([]);

  const getRecipe = async  (inputText) => {
    setIsLoading(true)
    const response = await axios.get(
        `https://api.edamam.com/search?q=${inputText}&app_id=${app_key}&app_key=${app_id}`
        );
   console.log(response)
   setRecipes(response.data.hits)
   setIsLoading(false)

}


  const getText = (e) => {
    clearTimeout(timeOutPeriod)
  
    const timeOut = setTimeout(() => {
        getRecipe(e.target.value)
    }, 1000)
    setTimeOutPeriod(timeOut)
    
  }

return (
  <div className="App">
      <Header getText = {getText} />
      <div className='card--section'>
            {recipes.length ? recipes.map((recip) => {
              
              return (
              
              <RecipeCard img = {recip.recipe.image}
                          name = {recip.recipe.label}
                          url = {recip.recipe.url}
                          
              />
              );

            }) : <img className='display--img' src='https://www.chicken-republic.com/wp-content/uploads/2021/11/Big-Crew-Meal.png' />}
      </div>
      
      
      <Router>
        <Switch>
          <Route exact path='/'>
            

          </Route>


        </Switch>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
