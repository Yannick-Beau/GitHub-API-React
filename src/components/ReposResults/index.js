import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const ReposResults = ({ reposData }) => (
  <Card.Group centered>
    {reposData.items.map((repos) => (
      <Card
        key={repos.id}
        image={repos.owner.avatar_url}
        header={repos.name}
        meta={repos.owner.login}
        description={repos.description}
      />
    ))}
  </Card.Group>
);

ReposResults.propTypes = {
  reposData: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        owner: PropTypes.shape({
          login: PropTypes.string.isRequired,
          avatar_url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default ReposResults;
