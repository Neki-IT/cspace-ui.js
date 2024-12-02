import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
    formatRefNameAsVocabularyName,
    formatServiceObjectName,
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      docName: {
        formatValue: (value) => formatRefName(value) || value,
        messages: defineMessages({
          label: {
            id: 'column.authority.default.docName',
            defaultMessage: 'Item',
          },
        }),
        order: 10,
        width: 200,
      },
      docType: {
        formatValue: formatServiceObjectName,
        messages: defineMessages({
          label: {
            id: 'column.authority.default.docType',
            defaultMessage: 'Tipo',
          },
        }),
        order: 20,
        width: 150,
      },
      vocabulary: {
        dataKey: 'refName',
        formatValue: formatRefNameAsVocabularyName,
        messages: defineMessages({
          label: {
            id: 'column.authority.default.vocabulary',
            defaultMessage: 'Vocabulário',
          },
        }),
        order: 30,
        width: 150,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.authority.default.updatedAt',
            defaultMessage: 'Atualizado',
          },
        }),
        order: 40,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
