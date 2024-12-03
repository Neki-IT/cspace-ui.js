import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      loanInNumber: {
        messages: defineMessages({
          label: {
            id: 'column.loanin.default.loanInNumber',
            defaultMessage: 'Número do Empréstimo Recebido',
          },
        }),
        order: 10,
        sortBy: 'loansin_common:loanInNumber',
        width: 250,
      },
      lender: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.loanin.default.lender',
            defaultMessage: 'Credor',
          },
        }),
        order: 20,
        sortBy: 'loansin_common:lenderGroupList/0/lender',
        width: 400,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.loanin.default.updatedAt',
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
