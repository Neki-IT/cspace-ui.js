import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CheckboxInput,
    TextInput,
    CompoundInput,
    ObjectNameInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:batch_common',
          },
        },
      },
      'ns2:batch_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/batch',
          },
          view: {
            type: CompoundInput,
          },
        },
        name: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.batch_common.name.name',
                defaultMessage: 'Nome',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        className: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.batch_common.className.name',
                defaultMessage: 'Classe Java',
              },
            }),
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        notes: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.batch_common.notes.name',
                defaultMessage: 'Descrição',
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
        supportsNoContext: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.batch_common.supportsNoContext.name',
                defaultMessage: 'Todos os Registros',
              },
            }),
            view: {
              type: CheckboxInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        supportsGroup: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.batch_common.supportsGroup.name',
                defaultMessage: 'Grupo',
              },
            }),
            view: {
              type: CheckboxInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        supportsDocList: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.batch_common.supportsDocList.name',
                defaultMessage: 'Lista de Registros',
              },
            }),
            view: {
              type: CheckboxInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        supportsSingleDoc: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.batch_common.supportsSingleDoc.name',
                defaultMessage: 'Registro Único',
              },
            }),
            view: {
              type: CheckboxInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        forDocTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          forDocType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.batch_common.forDocType.name',
                  defaultMessage: 'Para o Tipo de Registro',
                },
              }),
              repeating: true,
              view: {
                type: ObjectNameInput,
                props: {
                  readOnly: true,
                },
              },
            },
          },
        },
        createsNewFocus: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.batch_common.createsNewFocus.name',
                defaultMessage: 'Navegar para o novo registro ao concluir',
              },
            }),
            view: {
              type: CheckboxInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
      },
    },
  };
};
