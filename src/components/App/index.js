// == Import npm
import React, { useState, useEffect } from 'react';

// Composant axios : permet de faire des requets vers une API
import Axios from 'axios';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// == Import
import NavBar from 'src/components/NavBar';
import SearchBar from 'src/components/SearchBar';
import MessageLoading from 'src/components/MessageLoading';
import MessageResults from 'src/components/MessageResults';
import ReposResults from 'src/components/ReposResults';
import NotFound from 'src/components/NotFound';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

import reposData from 'src/data/repos';
import gitHubLogo from 'src/assets/images/logo-github.png';

// == Composant
const App = () => {
  const [loadingSearch, setLoadingSearch] = useState(true);
  const [inputSearch, setInputSearch] = useState('');
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState({});

  const getReposByInputSearch = () => {
    setLoadingSearch(true);
    Axios.get(`https://api.github.com/search/repositories?q=${inputSearch}`)
      .then((response) => {
        // handle success
        console.log(response.data);
        setRepos(response.data);
        setInputSearch('');
      })
      .catch((errorRequest) => {
        // handle error
        setError(errorRequest);
      })
      .then(() => {
        setLoadingSearch(false);
      });
  };

  // const getRepos = () => {
  //   setLoadingSearch(false);
  //   Axios.get('https://api.github.com/search/repositories?q=java')
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data);
  //       setRepos(response.data);
  //     })
  //     .catch((errorRequest) => {
  //       // handle error
  //       setError(errorRequest);
  //     })
  //     .then(() => {
  //       setLoadingSearch(false);
  //     });
  // };

  useEffect(() => {
    setRepos(reposData);
    setLoadingSearch(false);
  }, []);

  return (
    <div className="app">
      <img src={gitHubLogo} alt="gitHub logo" />
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SearchBar
              inputSearch={inputSearch}
              setInputSearch={setInputSearch}
              getReposByInputSearch={getReposByInputSearch}
            />
            {loadingSearch && <MessageLoading />}
            {!loadingSearch && <MessageResults reposData={repos} />}
            {!loadingSearch && <ReposResults reposData={repos} />}
          </Route>
          <Route path="/faq" exact>
            <h2>ici bientot la FAQ</h2>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// == Export
export default App;
