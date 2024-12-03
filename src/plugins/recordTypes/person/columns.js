import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
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
            id: 'column.person.default.termDisplayName',
            defaultMessage: 'Nome de Exibição',
          },
        }),
        order: 20,
        sortBy: 'persons_common:personTermGroupList/0/termDisplayName',
        width: 250,
      },
      surName: {
        messages: defineMessages({
          label: {
            id: 'column.person.default.surName',
            defaultMessage: 'Sobrenome',
          },
        }),
        order: 30,
        sortBy: 'persons_common:personTermGroupList/0/surName',
        width: 125,
      },
      foreName: {
        messages: defineMessages({
          label: {
            id: 'column.person.default.foreName',
            defaultMessage: 'Primeiro Nome',
          },
        }),
        order: 40,
        sortBy: 'persons_common:personTermGroupList/0/foreName',
        width: 125,
      },
      vocabulary: {
        dataKey: 'refName',
        formatValue: formatRefNameAsVocabularyName,
        messages: defineMessages({
          label: {
            id: 'column.person.default.vocabulary',
            defaultMessage: 'Vocabulário',
          },
        }),
        order: 50,
        width: 150,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.object.search.updatedAt',
            defaultMessage: 'Atualizado',
          },
        }),
        order: 60,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
