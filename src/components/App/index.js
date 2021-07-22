// == Import npm
import React, { useState } from 'react';

// == Import
import SearchBar from 'src/components/SearchBar';
import MessageLoading from 'src/components/MessageLoading';
import MessageResults from 'src/components/MessageResults';
import ReposResults from 'src/components/ReposResults';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';

import reposData from 'src/data/repos';

// == Composant
const App = () => {
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="app">
      <SearchBar />
      {loadingSearch && <MessageLoading />}
      {!loadingSearch && <MessageResults reposData={reposData} />}
      <ReposResults reposData={reposData} />
    </div>
  );
};

// == Export
export default App;
