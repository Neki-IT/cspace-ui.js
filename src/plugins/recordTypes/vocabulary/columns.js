import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    displayName: {
      messages: defineMessages({
        label: {
          id: 'column.vocabulary.default.displayName',
          defaultMessage: 'Nome',
        },
      }),
      order: 10,
      sortBy: 'vocabularies_common:displayName',
      width: 250,
    },
  },
});
