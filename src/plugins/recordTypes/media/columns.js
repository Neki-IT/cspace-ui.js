import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatTimestamp,
    thumbnailImage,
  } = configContext.formatHelpers;

  return {
    default: {
      blobCsid: {
        formatValue: thumbnailImage,
        messages: defineMessages({
          label: {
            id: 'column.media.default.blobCsid',
            defaultMessage: 'Miniatura',
          },
        }),
        order: 10,
        width: 70,
      },
      identificationNumber: {
        messages: defineMessages({
          label: {
            id: 'column.media.default.identificationNumber',
            defaultMessage: 'Número de Identificação',
          },
        }),
        order: 20,
        sortBy: 'media_common:identificationNumber',
        width: 200,
      },
      title: {
        messages: defineMessages({
          label: {
            id: 'column.media.default.title',
            defaultMessage: 'Título',
          },
        }),
        order: 30,
        sortBy: 'media_common:title',
        width: 380,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.media.default.updatedAt',
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
