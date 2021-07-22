import React from 'react';
// import PropTypes from 'prop-types';
import { Message, Icon } from 'semantic-ui-react';

const MessageUI = () => (
  <Message icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>Juste une seconde</Message.Header>
      Nous récupérons ce contenu pour vous.
    </Message.Content>
  </Message>
);

// Message.propTypes = {
// };

export default MessageUI;
