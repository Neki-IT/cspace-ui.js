import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      loanOutNumber: {
        messages: defineMessages({
          label: {
            id: 'column.loanout.default.loanOutNumber',
            defaultMessage: 'Número do Empréstimo Enviado',
          },
        }),
        order: 10,
        sortBy: 'loansout_common:loanOutNumber',
        width: 250,
      },
      borrower: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.loanout.default.borrower',
            defaultMessage: 'Devedor',
          },
        }),
        order: 20,
        sortBy: 'loansout_common:borrower',
        width: 400,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.loanout.default.updatedAt',
            defaultMessage: 'Atualizado',
          },
        }),
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
