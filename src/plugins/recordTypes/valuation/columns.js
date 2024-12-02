import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatOption,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      valuationcontrolRefNumber: {
        messages: defineMessages({
          label: {
            id: 'column.valuation.default.valuationcontrolRefNumber',
            defaultMessage: 'Número de Referência do Controle de Avaliação',
          },
        }),
        order: 10,
        sortBy: 'valuationcontrols_common:valuationcontrolRefNumber',
        width: 250,
      },
      valueType: {
        formatValue: (data, formatterContext) => formatOption('valueTypes', data, formatterContext),
        messages: defineMessages({
          label: {
            id: 'column.valuation.default.valueType',
            defaultMessage: 'Tipo',
          },
        }),
        order: 20,
        sortBy: 'valuationcontrols_common:valueType',
        width: 400,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.valuation.default.updatedAt',
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
