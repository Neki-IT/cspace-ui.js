import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
    IDGeneratorInput,
    TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_DATETIME,
    DATA_TYPE_LIST,
  } = pluginContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:loansout_common',
          },
        },
      },
      // TODO: Define core fields in one place.
      'ns2:collectionspace_core': {
        createdAt: {
          [config]: {
            dataType: DATA_TYPE_DATETIME,
            view: {
              type: DateInput,
            },
          },
        },
        createdBy: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        updatedAt: {
          [config]: {
            dataType: DATA_TYPE_DATETIME,
            messages: defineMessages({
              name: {
                id: 'field.collectionspace_core.updatedAt.name',
                defaultMessage: 'Last updated time',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        updatedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionspace_core.updatedBy.name',
                defaultMessage: 'Last updated by',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      'ns2:loansout_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout',
          },
        },
        loanOutNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.loanOutNumber.name',
                defaultMessage: 'Loan Out Number',
              },
            }),
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                idGeneratorName: 'loanout',
              },
            },
          },
        },
        loanPurpose: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.loanPurpose.name',
                defaultMessage: 'Loan Purpose',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'loanPurposes',
              },
            },
          },
        },
        lendersAuthorizer: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.lendersAuthorizer.name',
                defaultMessage: 'Lender\'s Authorizer',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared',
              },
            },
          },
        },
        lendersContact: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.lendersContact.name',
                defaultMessage: 'Lender\'s Contact',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared',
              },
            },
          },
        },
        lendersAuthorizationDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.lendersAuthorizationDate.name',
                defaultMessage: 'Lender\'s Authorization Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        borrower: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.borrower.name',
                defaultMessage: 'Borrower',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,organization/local,organization/shared',
              },
            },
          },
        },
        borrowersContact: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.borrowersContact.name',
                defaultMessage: 'Borrower\'s Contact',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared',
              },
            },
          },
        },
        borrowersAuthorizer: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.borrowersAuthorizer.name',
                defaultMessage: 'Borrower\'s Authorizer',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared',
              },
            },
          },
        },
        borrowersAuthorizationDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.borrowersAuthorizationDate.name',
                defaultMessage: 'Borrower\'s Authorization Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        specialConditionsOfLoan: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.specialConditionsOfLoan.name',
                defaultMessage: 'Loan Out Conditions',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        loanOutNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.loanOutNote.name',
                defaultMessage: 'Loan Out Note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        loanStatusGroupList: {
          [config]: {
            dataType: DATA_TYPE_LIST,
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.loanStatusGroupList.name',
                defaultMessage: 'Loan Status',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          loanStatusGroup: {
            [config]: {
              view: {
                type: CompoundInput,
                props: {
                  repeating: true,
                  tabular: true,
                },
              },
            },
            loanStatus: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.loansout_common.loanStatus.name',
                    defaultMessage: 'Loan Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'loanoutstatus',
                  },
                },
              },
            },
            loanStatusDate: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.loansout_common.loanStatusDate.name',
                    defaultMessage: 'Loan Status Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            loanStatusNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.loansout_common.loanStatusNote.name',
                    defaultMessage: 'Loan Status Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        loanOutDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.loanOutDate.name',
                defaultMessage: 'Loan Out Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        loanReturnDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.loanReturnDate.name',
                defaultMessage: 'Loan Return Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        loanRenewalApplicationDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_common.loanRenewalApplicationDate.name',
                defaultMessage: 'Loan Renewal Application Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
      },
    },
  };
};
