import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageResults = ({ reposData }) => (
  <Message>
    <Message.Header>Résultat de la recherche</Message.Header>
    <p>
      Nous avons trouvé {reposData.total_count} résultats
    </p>
  </Message>
);

export default MessageResults;
