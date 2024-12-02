import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatOption,
    formatRefNameAsVocabularyName,
    formatTimestamp,
    formatWorkflowStateIcon,
  } = configContext.formatHelpers;

  return {
    default: {
      workflowState: {
        flexGrow: 0,
        flexShrink: 0,
        formatValue: formatWorkflowStateIcon,
        order: 10,
        width: 32,
      },
      termDisplayName: {
        messages: defineMessages({
          label: {
            id: 'column.work.default.termDisplayName',
            defaultMessage: 'Nome de Exibição',
          },
        }),
        order: 20,
        sortBy: 'works_common:workTermGroupList/0/termDisplayName',
        width: 250,
      },
      termStatus: {
        formatValue: (data, formatterContext) => formatOption('workTermStatuses', data, formatterContext),
        messages: defineMessages({
          label: {
            id: 'column.work.default.termStatus',
            defaultMessage: 'Status do Termo',
          },
        }),
        order: 30,
        sortBy: 'works_common:workTermGroupList/0/termStatus',
        width: 250,
      },
      vocabulary: {
        dataKey: 'refName',
        formatValue: formatRefNameAsVocabularyName,
        messages: defineMessages({
          label: {
            id: 'column.work.default.vocabulary',
            defaultMessage: 'Vocabulário',
          },
        }),
        order: 40,
        width: 150,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.work.search.updatedAt',
            defaultMessage: 'Atualizado',
          },
        }),
        order: 50,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
