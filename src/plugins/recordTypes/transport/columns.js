import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      transportReferenceNumber: {
        messages: defineMessages({
          label: {
            id: 'column.transport.default.transportReferenceNumber',
            defaultMessage: 'Número de Referência do Transporte',
          },
        }),
        order: 10,
        sortBy: 'transports_common:transportReferenceNumber',
        width: 200,
      },
      transporter: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.transport.default.transporter',
            defaultMessage: 'Transportador',
          },
        }),
        order: 20,
        sortBy: 'transports_common:transporter',
        width: 400,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.transport.default.updatedAt',
            defaultMessage: 'Atualizado',
          },
        }),
        order: 30,
        sortBy: 'transports_core:updatedAt',
        width: 150,
      },
    },
  };
};
