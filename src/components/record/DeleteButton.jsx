import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import { components as inputComponents } from 'cspace-input';
import styles from '../../../styles/cspace-ui/DeleteButton.css';

const { Button } = inputComponents;

const messages = defineMessages({
  label: {
    id: 'deleteButton.label',
    description: 'Label of the delete button.',
    defaultMessage: 'Excluir',
  },
});

const propTypes = {
  disabled: PropTypes.bool,
  isDeletable: PropTypes.bool,
  isSavePending: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function DeleteButton(props) {
  const {
    disabled,
    isDeletable,
    isSavePending,
    onClick,
  } = props;

  if (!isDeletable) {
    return null;
  }

  return (
    <Button
      className={styles.common}
      disabled={disabled || isSavePending}
      icon
      name="delete"
      onClick={onClick}
    >
      <FormattedMessage {...messages.label} />
    </Button>
  );
}

DeleteButton.propTypes = propTypes;
