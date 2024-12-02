import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, FormattedMessage } from 'react-intl';
import get from 'lodash/get';
import TitleBar from '../sections/TitleBar';

import {
  ERR_API,
  ERR_NOT_ALLOWED,
  ERR_NOT_FOUND,
  ERR_MISSING_VOCABULARY,
  ERR_UNKNOWN_RECORD_TYPE,
  ERR_UNKNOWN_VOCABULARY,
  ERR_INVALID_CSID,
  ERR_INVALID_RELATED_TYPE,
  ERR_UNKNOWN_SUBRESOURCE,
} from '../../constants/errorCodes';

import styles from '../../../styles/cspace-ui/ErrorPage.css';

const messages = defineMessages({
  title: {
    id: 'errorPage.title',
    defaultMessage: 'Página Não Encontrada',
  },
  error: {
    id: 'errorPage.error',
    defaultMessage: 'Código de erro: {code}',
  },
  [ERR_NOT_ALLOWED]: {
    id: 'errorPage.ERR_NOT_ALLOWED',
    defaultMessage: 'Você não tem permissão para visualizar este tipo de registro.',
  },
  [ERR_NOT_FOUND]: {
    id: 'errorPage.ERR_NOT_FOUND',
    defaultMessage: 'O registro que você está procurando parece não existir.',
  },
  [ERR_MISSING_VOCABULARY]: {
    id: 'errorPage.ERR_MISSING_VOCABULARY',
    defaultMessage: 'Um vocabulário deve ser especificado para o tipo de registro de autoridade "{recordType}".',
  },
  [ERR_UNKNOWN_RECORD_TYPE]: {
    id: 'errorPage.ERR_UNKNOWN_RECORD_TYPE',
    defaultMessage: 'Não há tipo de registro chamado "{recordType}".',
  },
  [ERR_UNKNOWN_VOCABULARY]: {
    id: 'errorPage.ERR_UNKNOWN_VOCABULARY',
    defaultMessage: 'Não há vocabulário chamado "{vocabulary}" para o tipo de registro "{recordType}".',
  },
  [ERR_INVALID_CSID]: {
    id: 'errorPage.ERR_INVALID_CSID',
    defaultMessage: '"{csid}" não é um CSID válido.',
  },
  [ERR_INVALID_RELATED_TYPE]: {
    id: 'errorPage.ERR_INVALID_RELATED_TYPE',
    defaultMessage: 'O tipo de registro "{recordType}" não tem um tipo relacionado "{relatedRecordType}".',
  },
  [ERR_UNKNOWN_SUBRESOURCE]: {
    id: 'errorPage.ERR_UNKNOWN_SUBRESOURCE',
    defaultMessage: 'Não há sub-recurso chamado "{subresource}".',
  },
});

// TODO: The error prop should be an Immutable.Map. Most errors come from the store, so they are
// already immutable maps, which then have to be converted by the caller to an object before
// passing in to the error page. Errors coming from location validation are created as objects,
// but they can be changed to be created as immutable maps.

const propTypes = {
  error: PropTypes.shape({
    code: PropTypes.string,
  }),
};

export default function ErrorPage(props) {
  const {
    error,
  } = props;

  let { code } = error;

  if (code === ERR_API) {
    const status = get(error, ['error', 'response', 'status']);

    if (status === 404) {
      // Convert 404 from the REST API into ERR_NOT_FOUND.
      code = ERR_NOT_FOUND;
    } else if (status === 401 || status === 403) {
      // Convert 401 and 403 to ERR_NOT_ALLOWED.
      code = ERR_NOT_ALLOWED;
    }
  }

  const message = messages[code] || messages.error;

  return (
    <div className={styles.common}>
      <TitleBar title={<FormattedMessage {...messages.title} />} />
      <p><FormattedMessage {...message} values={error} /></p>
    </div>
  );
}

ErrorPage.propTypes = propTypes;
