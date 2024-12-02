import { defineMessages } from 'react-intl';

import {
  formatRefNameAsRecordType,
  formatRefNameAsVocabularyName,
  formatSourceField,
} from '../../../helpers/formatHelpers';

export default {
  default: {
    itemDisplayName: {
      messages: defineMessages({
        label: {
          id: 'column.terms.itemDisplayName',
          defaultMessage: 'Termo',
        },
      }),
      order: 10,
      width: 250,
    },
    type: {
      dataKey: 'refName',
      formatValue: formatRefNameAsRecordType,
      messages: defineMessages({
        label: {
          id: 'column.terms.type',
          defaultMessage: 'Tipo',
        },
      }),
      order: 20,
      width: 150,
    },
    vocabulary: {
      dataKey: 'refName',
      formatValue: formatRefNameAsVocabularyName,
      messages: defineMessages({
        label: {
          id: 'column.terms.vocabulary',
          defaultMessage: 'Vocabulário',
        },
      }),
      order: 30,
      width: 150,
    },
    sourceField: {
      formatValue: formatSourceField,
      messages: defineMessages({
        label: {
          id: 'column.terms.sourceField',
          defaultMessage: 'Campo',
        },
      }),
      order: 40,
      width: 250,
    },
  },
  narrow: {
    itemDisplayName: {
      messages: defineMessages({
        label: {
          id: 'column.terms.itemDisplayName',
          defaultMessage: 'Termo',
        },
      }),
      order: 10,
      width: 250,
    },
    type: {
      dataKey: 'refName',
      formatValue: formatRefNameAsRecordType,
      messages: defineMessages({
        label: {
          id: 'column.terms.type',
          defaultMessage: 'Tipo',
        },
      }),
      order: 20,
      width: 150,
    },
    vocabulary: {
      dataKey: 'refName',
      formatValue: formatRefNameAsVocabularyName,
      messages: defineMessages({
        label: {
          id: 'column.terms.vocabulary',
          defaultMessage: 'Vocabulário',
        },
      }),
      order: 30,
      width: 150,
    },
    sourceField: {
      formatValue: formatSourceField,
      messages: defineMessages({
        label: {
          id: 'column.terms.sourceField',
          defaultMessage: 'Campo',
        },
      }),
      order: 40,
      width: 250,
    },
  },
};
