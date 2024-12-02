import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      entryNumber: {
        messages: defineMessages({
          label: {
            id: 'column.intake.default.entryNumber',
            defaultMessage: 'Número de Entrada',
          },
        }),
        order: 10,
        sortBy: 'intakes_common:entryNumber',
        width: 200,
      },
      currentOwner: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.intake.default.currentOwner',
            defaultMessage: 'Proprietário Atual',
          },
        }),
        order: 20,
        sortBy: 'intakes_common:currentOwners/0',
        width: 450,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.intake.default.updatedAt',
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
