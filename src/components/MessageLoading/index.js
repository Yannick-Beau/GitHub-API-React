import React from 'react';

import { Message, Icon } from 'semantic-ui-react';

const MessageLoading = () => (
  <Message icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>Juste une seconde</Message.Header>
      Nous récupérons ce contenu pour vous.
    </Message.Content>
  </Message>
);

export default MessageLoading;
