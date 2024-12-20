import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    name: {
      messages: defineMessages({
        label: {
          id: 'column.report.default.name',
          defaultMessage: 'Nome',
        },
      }),
      order: 10,
      sortBy: 'reports_common:name',
      width: 400,
    },
  },
});
