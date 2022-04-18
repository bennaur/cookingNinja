import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Navbar, Home, DetailedRecipe, Footer } from './components';
import useFetch from "./hooks/useFetch";

function App() {

  const endp = "https://api.edamam.com/search";
  const app_id = "f8cb6bb3";
  const app_key = "ac78e40c183c470c3376a54fcc86689c";

  const [url, setUrl] = useState(`${endp}?q=random&app_id=${app_id}&app_key=${app_key}&random=true&from=0&to=15`);

  const [data, loading, error] = useFetch(url);
  

  //sets url and triggers useFetch
  const getHomeQuery = (text) => {

    //homepage default results

    if (text === "") {
      setUrl(`${endp}?q=random&app_id=${app_id}&app_key=${app_key}&random=true&from=0&to=15`)
      return;
    }
    
    // search values results

    setUrl(`${endp}?q=${text}&app_id=${app_id}&app_key=${app_key}&random=false&from=0&to=50`)

  }



  return (
    <div className="App">
      <BrowserRouter basename={"cookingNinja"}>

        <Navbar gHQuery={getHomeQuery} />
        <Routes>

          <Route path="/" element={<Home data={data} loading={loading} error={error} />} />
          <Route path="/recipe/:id" element={<DetailedRecipe />} />

        </Routes>
        <Footer/>


      </BrowserRouter>
    </div>
  );
}

export default App;
