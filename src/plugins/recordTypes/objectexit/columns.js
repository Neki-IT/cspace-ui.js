import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      exitNumber: {
        messages: defineMessages({
          label: {
            id: 'column.objectexit.default.exitNumber',
            defaultMessage: 'Número de Saída',
          },
        }),
        order: 10,
        sortBy: 'objectexit_common:exitNumber',
        width: 200,
      },
      currentOwner: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.objectexit.default.currentOwner',
            defaultMessage: 'Proprietário Atual',
          },
        }),
        order: 20,
        sortBy: 'objectexit_common:currentOwner',
        width: 450,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.objectexit.default.updatedAt',
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
