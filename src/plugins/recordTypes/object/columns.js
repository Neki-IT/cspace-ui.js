import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
    formatServiceObjectName,
  } = configContext.formatHelpers;

  return {
    default: {
      docNumber: {
        // The value -might- be a refname.
        // FIXME: It could also be an option list value. How to tell?
        formatValue: (value) => formatRefName(value) || value,
        messages: defineMessages({
          label: {
            id: 'column.object.default.docNumber',
            defaultMessage: 'Registro',
          },
        }),
        order: 10,
        width: 200,
      },
      docName: {
        // The value -might- be a refname.
        // FIXME: It could also be an option list value. How to tell?
        formatValue: (value) => formatRefName(value) || value,
        messages: defineMessages({
          label: {
            id: 'column.object.default.docName',
            defaultMessage: 'Resumo',
          },
        }),
        order: 20,
        width: 300,
      },
      docType: {
        formatValue: formatServiceObjectName,
        messages: defineMessages({
          label: {
            id: 'column.object.default.docType',
            defaultMessage: 'Tipo',
          },
        }),
        order: 30,
        width: 150,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.object.default.updatedAt',
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
