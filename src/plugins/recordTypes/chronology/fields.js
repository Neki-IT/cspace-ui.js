import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    HierarchyInput,
    DateInput,
    TextInput,
    TermPickerInput,
    CheckboxInput,
    StructuredDateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:chronologies_common',
          },
        },
      },
      'rel:relations-common-list': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/relation',
          },
        },
        'relation-list-item': {
          [config]: {
            view: {
              type: HierarchyInput,
              props: {
                messages: defineMessages({
                  parent: {
                    id: 'hierarchyInput.chronology.parent',
                    defaultMessage: 'Broader chronology',
                  },
                  children: {
                    id: 'hierarchyInput.chronology.children',
                    defaultMessage: 'Narrower chronologies',
                  },
                  siblings: {
                    id: 'hierarchyInput.chronology.siblings',
                    defaultMessage: 'Adjacent chronologies',
                  },
                }),
              },
            },
          },
        },
      },
      ...extensions.core.fields,
      'ns2:chronologies_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/chronology',
          },
        },
        ...extensions.authItem.fields,
        ...extensions.associatedAuthority.fields,
        chronologyTermGroupList: {
          [config]: {
            messages: defineMessages({
              required: {
                id: 'field.chronologies_common.chronologyTermGroupList.required',
                defaultMessage: 'Pelo menos um nome de exibição do termo é necessário. Por favor, insira um valor.',
              },
            }),
            required: true,
            view: {
              type: CompoundInput,
            },
          },
          chronologyTermGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.chronologies_common.chronologyTermGroup.name',
                  defaultMessage: 'Termo',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            termDisplayName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termDisplayName.fullName',
                    defaultMessage: 'Nome de Exibição do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.termDisplayName.name',
                    defaultMessage: 'Nome de Exibição',
                  },
                }),
                required: true,
                view: {
                  type: TextInput,
                },
              },
            },
            termName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termName.fullName',
                    defaultMessage: 'Nome do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.termName.name',
                    defaultMessage: 'Nome',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termType.fullName',
                    defaultMessage: 'Tipo do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.termType.name',
                    defaultMessage: 'Tipo',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'chronologytermtype',
                  },
                },
              },
            },
            termFlag: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termFlag.fullName',
                    defaultMessage: 'Indicador do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.termFlag.name',
                    defaultMessage: 'Indicador',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'chronologytermflag',
                  },
                },
              },
            },
            termStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termStatus.fullName',
                    defaultMessage: 'Status do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.termStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'chronologytermstatus',
                  },
                },
              },
            },
            historicalStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.historicalStatus.fullName',
                    defaultMessage: 'Status Histórico do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.historicalStatus.name',
                    defaultMessage: 'Status Histórico',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'chronologyhistoricalstatus',
                  },
                },
              },
            },
            termQualifier: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termQualifier.fullName',
                    defaultMessage: 'Qualificador do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.termQualifier.name',
                    defaultMessage: 'Qualificador',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termLanguage: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termLanguage.fullName',
                    defaultMessage: 'Idioma do Termo',
                  },
                  name: {
                    id: 'field.chronologies_common.termLanguage.name',
                    defaultMessage: 'Idioma',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'languages',
                  },
                },
              },
            },
            termPrefForLang: {
              [config]: {
                dataType: DATA_TYPE_BOOL,
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termPrefForLang.fullName',
                    defaultMessage: 'Termo Preferido para o Idioma',
                  },
                  name: {
                    id: 'field.chronologies_common.termPrefForLang.name',
                    defaultMessage: 'Preferido para o Idioma',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            termSource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termSource.fullName',
                    defaultMessage: 'Fonte do Nome do Termo',
                  },
                  groupName: {
                    id: 'field.chronologies_common.termSource.groupName',
                    defaultMessage: 'Nome da Fonte',
                  },
                  name: {
                    id: 'field.chronologies_common.termSource.name',
                    defaultMessage: 'Fonte',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/shared,citation/worldcat',
                  },
                },
              },
            },
            termSourceDetail: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termSourceDetail.fullName',
                    defaultMessage: 'Detalhe da Fonte do Termo',
                  },
                  groupName: {
                    id: 'field.chronologies_common.termSourceDetail.groupName',
                    defaultMessage: 'Detalhe da Fonte',
                  },
                  name: {
                    id: 'field.chronologies_common.termSourceDetail.name',
                    defaultMessage: 'Detalhe',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceID: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termSourceID.fullName',
                    defaultMessage: 'ID da Fonte do Termo',
                  },
                  groupName: {
                    id: 'field.chronologies_common.termSourceID.groupName',
                    defaultMessage: 'ID da Fonte',
                  },
                  name: {
                    id: 'field.chronologies_common.termSourceID.name',
                    defaultMessage: 'ID',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.termSourceNote.fullName',
                    defaultMessage: 'Nota da Fonte do Termo',
                  },
                  groupName: {
                    id: 'field.chronologies_common.termSourceNote.groupName',
                    defaultMessage: 'Nota da Fonte',
                  },
                  name: {
                    id: 'field.chronologies_common.termSourceNote.name',
                    defaultMessage: 'Nota',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        primaryDateRangeStructuredDateGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              name: {
                id: 'field.chronologies_common.primaryDateRangeStructuredDateGroup.name',
                defaultMessage: 'Intervalo de Datas Principal',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
        },
        spatialCoverages: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          spatialCoverage: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.chronologies_common.spatialCoverage.name',
                  defaultMessage: 'Cobertura Espacial',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local,place/tgn',
                },
              },
            },
          },
        },
        chronologyType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.chronologies_common.chronologyType.name',
                defaultMessage: 'Tipo de Cronologia',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'chronologytypes',
              },
            },
          },
        },
        chronologyNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.chronologies_common.chronologyNote.name',
                defaultMessage: 'Nota da Cronologia',
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
        chronologyDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.chronologies_common.chronologyDescription.name',
                defaultMessage: 'Descrição da Cronologia',
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
        identifierGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          identifierGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.chronologies_common.identifierGroup.name',
                  defaultMessage: 'Identificador de Recurso',
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
            identifierValue: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.identifierValue.fullName',
                    defaultMessage: 'Valor do Identificador de Recurso',
                  },
                  name: {
                    id: 'field.chronologies_common.identifierValue.name',
                    defaultMessage: 'Valor',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            identifierCitation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.identifierCitation.fullName',
                    defaultMessage: 'Citação do Identificador de Recurso',
                  },
                  name: {
                    id: 'field.chronologies_common.identifierCitation.name',
                    defaultMessage: 'Citação',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/worldcat',
                  },
                },
              },
            },
            identifierDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.identifierDate.fullName',
                    defaultMessage: 'Data do Identificador de Recurso',
                  },
                  name: {
                    id: 'field.chronologies_common.identifierDate.name',
                    defaultMessage: 'Data',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        altDateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          altDateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.chronologies_common.altDateGroup.name',
                  defaultMessage: 'Data Alternativa',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            altDateRangeStructuredDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.altDateRangeStructuredDateGroup.fullName',
                    defaultMessage: 'Intervalo de Datas Alternativo',
                  },
                  name: {
                    id: 'field.chronologies_common.altDateRangeStructuredDateGroup.name',
                    defaultMessage: 'Intervalo',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            altDateSpatialCoverages: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              altDateSpatialCoverage: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.chronologies_common.altDateSpatialCoverage.fullName',
                      defaultMessage: 'Cobertura Espacial da Data Alternativa',
                    },
                    name: {
                      id: 'field.chronologies_common.altDateSpatialCoverage.name',
                      defaultMessage: 'Cobertura Espacial',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: AutocompleteInput,
                    props: {
                      source: 'place/local,place/tgn',
                    },
                  },
                },
              },
            },
            altDateCitations: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              altDateCitation: {
                [config]: {
                  messages: defineMessages({
                    fullName: {
                      id: 'field.chronologies_common.altDateCitation.fullName',
                      defaultMessage: 'Citação da Data Alternativa',
                    },
                    name: {
                      id: 'field.chronologies_common.altDateCitation.name',
                      defaultMessage: 'Citação',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: AutocompleteInput,
                    props: {
                      source: 'citation/local,citation/worldcat',
                    },
                  },
                },
              },
            },
            altDateNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.chronologies_common.altDateNote.fullName',
                    defaultMessage: 'Nota da Data Alternativa',
                  },
                  name: {
                    id: 'field.chronologies_common.altDateNote.name',
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
          },
        },
      },
    },
  };
};
