import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      conservationNumber: {
        messages: defineMessages({
          label: {
            id: 'column.conservation.default.conservationNumber',
            defaultMessage: 'Número de Referência',
          },
        }),
        order: 10,
        sortBy: 'conservation_common:conservationNumber',
        width: 250,
      },
      status: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.conservation.default.status',
            defaultMessage: 'Status',
          },
        }),
        order: 20,
        sortBy: 'conservation_common:conservationStatusGroupList/0/status',
        width: 400,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.conservation.default.updatedAt',
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
