import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      exhibitionNumber: {
        messages: defineMessages({
          label: {
            id: 'column.exhibition.default.exhibitionNumber',
            defaultMessage: 'Número da Exibição',
          },
        }),
        order: 10,
        sortBy: 'exhibitions_common:exhibitionNumber',
        width: 200,
      },
      title: {
        messages: defineMessages({
          label: {
            id: 'column.exhibition.default.title',
            defaultMessage: 'Título',
          },
        }),
        order: 20,
        sortBy: 'exhibitions_common:title',
        width: 450,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.exhibition.default.updatedAt',
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
