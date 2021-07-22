import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const MessageResults = ({ reposData }) => (
  <Message>
    <Message.Header>Résultat de la recherche</Message.Header>
    <p>
      Nous avons trouvé {reposData.total_count} résultats
    </p>
  </Message>
);

MessageResults.propTypes = {
  reposData: PropTypes.shape({
    total_count: PropTypes.number.isRequired,
  }).isRequired,
};

export default MessageResults;
