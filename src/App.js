import React from 'react';
import './App.css';

import Info from './components/Info';
import Form from './components/Form';
import Results from './components/Results';

const API_KEY = "963173a181d60009b68fe1705ee661a0";

class App extends React.Component {

  gettingWeather = async () => {
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Baranavichy,by&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form />
        <Results />
      </div>
    );
  }
}

export default App;
