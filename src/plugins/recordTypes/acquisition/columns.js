import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      acquisitionReferenceNumber: {
        messages: defineMessages({
          label: {
            id: 'column.acquisition.default.acquisitionReferenceNumber',
            defaultMessage: 'Número de Referência',
          },
        }),
        order: 10,
        sortBy: 'acquisitions_common:acquisitionReferenceNumber',
        width: 250,
      },
      acquisitionSource: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.acquisition.default.acquisitionSource',
            defaultMessage: 'Fonte de Aquisição',
          },
        }),
        order: 20,
        sortBy: 'acquisitions_common:acquisitionSources/0',
        width: 400,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.acquisition.default.updatedAt',
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
