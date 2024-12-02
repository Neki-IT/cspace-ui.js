import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    IDGeneratorInput,
    OptionPickerInput,
    StructuredDateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  const {
    validateNotInUse,
  } = configContext.validationHelpers;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:acquisitions_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:acquisitions_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/acquisition',
          },
        },
        acquisitionReferenceNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              inUse: {
                id: 'field.acquisitions_common.acquisitionReferenceNumber.inUse',
                defaultMessage: 'O número de referência {value} está em uso por outro registro.',
              },
              name: {
                id: 'field.acquisitions_common.acquisitionReferenceNumber.name',
                defaultMessage: 'Número de Referência',
              },
            }),
            required: true,
            searchView: {
              type: TextInput,
            },
            validate: (validationContext) => validateNotInUse({
              configContext,
              validationContext,
              fieldName: 'acquisitions_common:acquisitionReferenceNumber',
            }),
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'accession,archives,library',
              },
            },
          },
        },
        accessionDateGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.accessionDateGroup.name',
                defaultMessage: 'Data de Aquisição',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
        acquisitionAuthorizer: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.acquisitionAuthorizer.name',
                defaultMessage: 'Autorizador',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local',
              },
            },
          },
        },
        acquisitionAuthorizerDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.acquisitionAuthorizerDate.fullName',
                defaultMessage: 'Data da Autorização',
              },
              name: {
                id: 'field.acquisitions_common.acquisitionAuthorizerDate.name',
                defaultMessage: 'Data',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        acquisitionDateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionDateGroup: {
            [config]: {
              dataType: DATA_TYPE_STRUCTURED_DATE,
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_common.acquisitionDateGroup.name',
                  defaultMessage: 'Data de Aquisição',
                },
              }),
              repeating: true,
              view: {
                type: StructuredDateInput,
              },
            },
            ...extensions.structuredDate.fields,
          },
        },
        acquisitionMethod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.acquisitionMethod.name',
                defaultMessage: 'Método de Aquisição',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'acquisitionMethods',
              },
            },
          },
        },
        acquisitionSources: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionSource: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_common.acquisitionSource.name',
                  defaultMessage: 'Fonte de Aquisição',
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
        },
        owners: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          owner: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_common.owner.name',
                  defaultMessage: 'Proprietário',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
        transferOfTitleNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.transferOfTitleNumber.name',
                defaultMessage: 'Número de Transferência de Título',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        approvalGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          approvalGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_common.approvalGroup.name',
                  defaultMessage: 'Aprovação',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            approvalGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.approvalGroup.approvalGroup.fullName',
                    defaultMessage: 'Grupo de Aprovação',
                  },
                  name: {
                    id: 'field.acquisitions_common.approvalGroup.approvalGroup.name',
                    defaultMessage: 'Grupo',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'deaccessionapprovalgroup',
                  },
                },
              },
            },
            approvalIndividual: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.approvalIndividual.fullName',
                    defaultMessage: 'Indivíduo Aprovador',
                  },
                  name: {
                    id: 'field.acquisitions_common.approvalIndividual.name',
                    defaultMessage: 'Indivíduo',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local',
                  },
                },
              },
            },
            approvalStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.approvalStatus.fullName',
                    defaultMessage: 'Status de Aprovação',
                  },
                  name: {
                    id: 'field.acquisitions_common.approvalStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'deaccessionapprovalstatus',
                  },
                },
              },
            },
            approvalDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.approvalDate.fullName',
                    defaultMessage: 'Data do Status de Aprovação',
                  },
                  name: {
                    id: 'field.acquisitions_common.approvalDate.name',
                    defaultMessage: 'Data',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            approvalNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.acquisitions_common.approvalNote.name',
                    defaultMessage: 'Nota',
                  },
                  fullName: {
                    id: 'field.acquisitions_common.approvalNote.fullName',
                    defaultMessage: 'Nota de Aprovação',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    height: 23,
                    multiline: true,
                  },
                },
              },
            },
          },
        },
        creditLine: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.creditLine.name',
                defaultMessage: 'Linha de Crédito',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        groupPurchasePriceCurrency: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.groupPurchasePriceCurrency.fullName',
                defaultMessage: 'Moeda do Preço de Compra em Grupo',
              },
              name: {
                id: 'field.acquisitions_common.groupPurchasePriceCurrency.name',
                defaultMessage: 'Moeda',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        groupPurchasePriceValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.groupPurchasePriceValue.fullName',
                defaultMessage: 'Valor do Preço de Compra em Grupo',
              },
              name: {
                id: 'field.acquisitions_common.groupPurchasePriceValue.name',
                defaultMessage: 'Valor',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectOfferPriceCurrency: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.objectOfferPriceCurrency.fullName',
                defaultMessage: 'Moeda do Preço de Oferta do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.objectOfferPriceCurrency.name',
                defaultMessage: 'Moeda',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        objectOfferPriceValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.objectOfferPriceValue.fullName',
                defaultMessage: 'Valor do Preço de Oferta do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.objectOfferPriceValue.name',
                defaultMessage: 'Valor',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectPurchaseOfferPriceCurrency: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.objectPurchaseOfferPriceCurrency.fullName',
                defaultMessage: 'Moeda da Oferta de Compra do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.objectPurchaseOfferPriceCurrency.name',
                defaultMessage: 'Moeda',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        objectPurchaseOfferPriceValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.objectPurchaseOfferPriceValue.fullName',
                defaultMessage: 'Valor da Oferta de Compra do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.objectPurchaseOfferPriceValue.name',
                defaultMessage: 'Valor',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectPurchasePriceCurrency: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.objectPurchasePriceCurrency.fullName',
                defaultMessage: 'Moeda do Preço de Compra do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.objectPurchasePriceCurrency.name',
                defaultMessage: 'Moeda',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        objectPurchasePriceValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.objectPurchasePriceValue.fullName',
                defaultMessage: 'Valor do Preço de Compra do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.objectPurchasePriceValue.name',
                defaultMessage: 'Valor',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        originalObjectPurchasePriceCurrency: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.originalObjectPurchasePriceCurrency.fullName',
                defaultMessage: 'Moeda do Preço de Compra Original do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.originalObjectPurchasePriceCurrency.name',
                defaultMessage: 'Moeda',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        originalObjectPurchasePriceValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.acquisitions_common.originalObjectPurchasePriceValue.fullName',
                defaultMessage: 'Valor do Preço de Compra Original do Objeto',
              },
              name: {
                id: 'field.acquisitions_common.originalObjectPurchasePriceValue.name',
                defaultMessage: 'Valor',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        acquisitionReason: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.acquisitionReason.name',
                defaultMessage: 'Razão da Aquisição',
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
        acquisitionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.acquisitionNote.name',
                defaultMessage: 'Nota',
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
        acquisitionProvisos: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.acquisitions_common.acquisitionProvisos.name',
                defaultMessage: 'Provisões',
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
        acquisitionFundingList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionFunding: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_common.acquisitionFunding.name',
                  defaultMessage: 'Financiamento',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            acquisitionFundingCurrency: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.acquisitionFundingCurrency.fullName',
                    defaultMessage: 'Moeda do Financiamento',
                  },
                  name: {
                    id: 'field.acquisitions_common.acquisitionFundingCurrency.name',
                    defaultMessage: 'Moeda',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            acquisitionFundingValue: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.acquisitionFundingValue.fullName',
                    defaultMessage: 'Valor do Financiamento',
                  },
                  name: {
                    id: 'field.acquisitions_common.acquisitionFundingValue.name',
                    defaultMessage: 'Valor',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            acquisitionFundingSource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.acquisitionFundingSource.fullName',
                    defaultMessage: 'Fonte do Financiamento',
                  },
                  name: {
                    id: 'field.acquisitions_common.acquisitionFundingSource.name',
                    defaultMessage: 'Fonte',
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
            acquisitionFundingSourceProvisos: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.acquisitions_common.acquisitionFundingSourceProvisos.fullName',
                    defaultMessage: 'Provisões da Fonte de Financiamento',
                  },
                  name: {
                    id: 'field.acquisitions_common.acquisitionFundingSourceProvisos.name',
                    defaultMessage: 'Provisões da Fonte',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        fieldCollectionEventNames: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          fieldCollectionEventName: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.acquisitions_common.fieldCollectionEventName.name',
                  defaultMessage: 'Nome do Evento de Coleta de Campo',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
