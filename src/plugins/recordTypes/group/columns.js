import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      title: {
        messages: defineMessages({
          label: {
            id: 'column.group.default.title',
            defaultMessage: 'Título',
          },
        }),
        order: 10,
        sortBy: 'groups_common:title',
        width: 250,
      },
      owner: {
        messages: defineMessages({
          label: {
            id: 'column.group.default.owner',
            defaultMessage: 'Proprietário',
          },
        }),
        formatValue: formatRefName,
        order: 20,
        sortBy: 'groups_common:owner',
        width: 400,
      },
      updatedAt: {
        messages: defineMessages({
          label: {
            id: 'column.group.default.updatedAt',
            defaultMessage: 'Atualizado',
          },
        }),
        formatValue: formatTimestamp,
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
