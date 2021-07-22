// == Import npm
import React from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import MessageUI from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

import reposData from 'src/data/repos';

// == Composant
const App = () => (
  <div className="app">
    <SearchBar />
    <MessageUI />
    <ReposResults reposData={reposData} />
  </div>
);

// == Export
export default App;
