import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { components as inputComponents } from 'cspace-input';
import styles from '../../../styles/cspace-ui/CreateButton.css';

const { Button } = inputComponents;

const messages = defineMessages({
  label: {
    id: 'createButton.label',
    description: 'Label of the create button.',
    defaultMessage: 'Criar novo',
  },
});

const propTypes = {
  onClick: PropTypes.func,
};

export default function CreateButton(props) {
  const {
    onClick,
  } = props;

  return (
    <Button
      className={styles.common}
      icon
      name="create"
      onClick={onClick}
    >
      <FormattedMessage {...messages.label} />
    </Button>
  );
}

CreateButton.propTypes = propTypes;
