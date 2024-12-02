import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    name: {
      messages: defineMessages({
        label: {
          id: 'column.batch.default.name',
          defaultMessage: 'Nome',
        },
      }),
      order: 10,
      sortBy: 'batch_common:name',
      width: 400,
    },
  },
});
