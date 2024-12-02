import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    HierarchyInput,
    OptionPickerInput,
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
            defaultChildSubpath: 'ns2:citations_common',
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
                    id: 'hierarchyInput.citation.parent',
                    defaultMessage: 'Broader citation',
                  },
                  children: {
                    id: 'hierarchyInput.citation.children',
                    defaultMessage: 'Narrower citations',
                  },
                  siblings: {
                    id: 'hierarchyInput.citation.siblings',
                    defaultMessage: 'Adjacent citations',
                  },
                }),
              },
            },
          },
        },
      },
      ...extensions.core.fields,
      'ns2:citations_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/citation',
          },
        },
        ...extensions.authItem.fields,
        citationTermGroupList: {
          [config]: {
            messages: defineMessages({
              required: {
                id: 'field.citations_common.citationTermGroupList.required',
                defaultMessage: 'Pelo menos um nome de exibição do termo é necessário. Por favor, insira um valor.',
              },
            }),
            required: true,
            view: {
              type: CompoundInput,
            },
          },
          citationTermGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.citations_common.citationTermGroup.name',
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
                    id: 'field.citations_common.termDisplayName.fullName',
                    defaultMessage: 'Nome de Exibição do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termDisplayName.name',
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
                    id: 'field.citations_common.termName.fullName',
                    defaultMessage: 'Nome do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termName.name',
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
                    id: 'field.citations_common.termType.fullName',
                    defaultMessage: 'Tipo do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termType.name',
                    defaultMessage: 'Tipo',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'citationtermtype',
                  },
                },
              },
            },
            termFlag: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termFlag.fullName',
                    defaultMessage: 'Indicador do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termFlag.name',
                    defaultMessage: 'Indicador',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'citationtermflag',
                  },
                },
              },
            },
            termStatus: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termStatus.fullName',
                    defaultMessage: 'Status do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'citationTermStatuses',
                  },
                },
              },
            },
            termQualifier: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termQualifier.fullName',
                    defaultMessage: 'Qualificador do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termQualifier.name',
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
                    id: 'field.citations_common.termLanguage.fullName',
                    defaultMessage: 'Idioma do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termLanguage.name',
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
                    id: 'field.citations_common.termPrefForLang.fullName',
                    defaultMessage: 'Termo Preferido para o Idioma',
                  },
                  name: {
                    id: 'field.citations_common.termPrefForLang.name',
                    defaultMessage: 'Preferido para o Idioma',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            termFullCitation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termFullCitation.fullName',
                    defaultMessage: 'Citação Completa do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termFullCitation.name',
                    defaultMessage: 'Citação Completa',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termTitle: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termTitle.fullName',
                    defaultMessage: 'Título do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termTitle.name',
                    defaultMessage: 'Título',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSubTitle: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termSubTitle.fullName',
                    defaultMessage: 'Subtítulo do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termSubTitle.name',
                    defaultMessage: 'Subtítulo',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSectionTitle: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termSectionTitle.fullName',
                    defaultMessage: 'Título da Seção do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termSectionTitle.name',
                    defaultMessage: 'Título da Seção',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termVolume: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termVolume.fullName',
                    defaultMessage: 'Volume do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termVolume.name',
                    defaultMessage: 'Volume',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termIssue: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termIssue.fullName',
                    defaultMessage: 'Edição do Termo',
                  },
                  name: {
                    id: 'field.citations_common.termIssue.name',
                    defaultMessage: 'Edição',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.termSource.fullName',
                    defaultMessage: 'Nome da Fonte do Termo',
                  },
                  groupName: {
                    id: 'field.citations_common.termSource.groupName',
                    defaultMessage: 'Nome da Fonte',
                  },
                  name: {
                    id: 'field.citations_common.termSource.name',
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
                    id: 'field.citations_common.termSourceDetail.fullName',
                    defaultMessage: 'Detalhe da Fonte do Termo',
                  },
                  groupName: {
                    id: 'field.citations_common.termSourceDetail.groupName',
                    defaultMessage: 'Detalhe da Fonte',
                  },
                  name: {
                    id: 'field.citations_common.termSourceDetail.name',
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
                    id: 'field.citations_common.termSourceID.fullName',
                    defaultMessage: 'ID da Fonte do Termo',
                  },
                  groupName: {
                    id: 'field.citations_common.termSourceID.groupName',
                    defaultMessage: 'ID da Fonte',
                  },
                  name: {
                    id: 'field.citations_common.termSourceID.name',
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
                    id: 'field.citations_common.termSourceNote.fullName',
                    defaultMessage: 'Nota da Fonte do Termo',
                  },
                  groupName: {
                    id: 'field.citations_common.termSourceNote.groupName',
                    defaultMessage: 'Nota da Fonte',
                  },
                  name: {
                    id: 'field.citations_common.termSourceNote.name',
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
        citationRecordTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          citationRecordType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.citations_common.citationRecordType.name',
                  defaultMessage: 'Tipo de Citação',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'citationtermtype',
                },
              },
            },
          },
        },
        citationPublicationInfoGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          citationPublicationInfoGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.citations_common.citationPublicationInfoGroup.name',
                  defaultMessage: 'Publicação',
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
            publisher: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.citations_common.publisher.name',
                    defaultMessage: 'Editora',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local',
                  },
                },
              },
            },
            publicationPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.publicationPlace.fullName',
                    defaultMessage: 'Local de Publicação',
                  },
                  name: {
                    id: 'field.citations_common.publicationPlace.name',
                    defaultMessage: 'Local',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/tgn',
                  },
                },
              },
            },
            publicationDate: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.publicationDate.fullName',
                    defaultMessage: 'Data de Publicação',
                  },
                  name: {
                    id: 'field.citations_common.publicationDate.name',
                    defaultMessage: 'Data',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            edition: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.edition.fullName',
                    defaultMessage: 'Edição da Publicação',
                  },
                  name: {
                    id: 'field.citations_common.edition.name',
                    defaultMessage: 'Edição',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            pages: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.pages.fullName',
                    defaultMessage: 'Página(s) da Publicação',
                  },
                  name: {
                    id: 'field.citations_common.pages.name',
                    defaultMessage: 'Página(s)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        citationAgentInfoGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          citationAgentInfoGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.citations_common.citationAgentInfoGroup.name',
                  defaultMessage: 'Agente',
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
            agent: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.agent.fullName',
                    defaultMessage: 'Nome do Agente',
                  },
                  name: {
                    id: 'field.citations_common.agent.name',
                    defaultMessage: 'Nome',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/ulan,organization/local',
                  },
                },
              },
            },
            role: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.role.fullName',
                    defaultMessage: 'Papel do Agente',
                  },
                  name: {
                    id: 'field.citations_common.role.name',
                    defaultMessage: 'Papel',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'agentinfotype',
                  },
                },
              },
            },
            note: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.note.fullName',
                    defaultMessage: 'Nota do Agente',
                  },
                  name: {
                    id: 'field.citations_common.note.name',
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
        citationNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.citations_common.citationNote.name',
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
        citationResourceIdentGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          citationResourceIdentGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.citations_common.citationResourceIdentGroup.name',
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
            resourceIdent: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.resourceIdent.fullName',
                    defaultMessage: 'Identificador de Recurso',
                  },
                  name: {
                    id: 'field.citations_common.resourceIdent.name',
                    defaultMessage: 'Identificador',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            type: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.type.fullName',
                    defaultMessage: 'Tipo de Identificador de Recurso',
                  },
                  name: {
                    id: 'field.citations_common.type.name',
                    defaultMessage: 'Tipo',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'resourceidtype',
                  },
                },
              },
            },
            captureDate: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.captureDate.fullName',
                    defaultMessage: 'Data de Captura do Identificador de Recurso',
                  },
                  name: {
                    id: 'field.citations_common.captureDate.name',
                    defaultMessage: 'Data de Captura',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
          },
        },
        citationRelatedTermsGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          citationRelatedTermsGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.citations_common.citationRelatedTermsGroup.name',
                  defaultMessage: 'Termo Relacionado',
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
            relatedTerm: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.relatedTerm.fullName',
                    defaultMessage: 'Termo Relacionado',
                  },
                  name: {
                    id: 'field.citations_common.relatedTerm.name',
                    defaultMessage: 'Termo',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated,concept/activity,concept/material',
                  },
                },
              },
            },
            relationType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.citations_common.relationType.fullName',
                    defaultMessage: 'Tipo de Termo Relacionado',
                  },
                  name: {
                    id: 'field.citations_common.relationType.name',
                    defaultMessage: 'Tipo',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'relationtypetype',
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
