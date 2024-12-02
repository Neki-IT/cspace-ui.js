import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    displayName: {
      messages: defineMessages({
        label: {
          id: 'column.authRole.default.displayName',
          defaultMessage: 'Nome',
        },
      }),
      order: 10,
      width: 250,
    },
  },
});
