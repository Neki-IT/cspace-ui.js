import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    DateTimeInput,
    ObjectNameInput,
    OptionPickerInput,
    FieldTextInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    DATA_TYPE_DATETIME,
  } = configContext.dataTypes;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns3:audit_common': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/audit',
        },
        view: {
          type: CompoundInput,
        },
      },
      csid: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.audit_common.csid.name',
              defaultMessage: 'Identificador de Registro de Auditoria',
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
      idNumber: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.audit_common.idNumber.fullName',
              defaultMessage: 'ID do Registro de Auditoria',
            },
            name: {
              id: 'field.audit_common.idNumber.name',
              defaultMessage: 'ID',
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
      resourceType: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.audit_common.resourceType.fullName',
              defaultMessage: 'Tipo de Registro Relacionado',
            },
            name: {
              id: 'field.audit_common.resourceType.name',
              defaultMessage: 'Tipo de Registro',
            },
          }),
          view: {
            type: ObjectNameInput,
            props: {
              readOnly: true,
            },
          },
        },
      },
      resourceCSID: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.audit_common.resourceCSID.name',
              defaultMessage: 'Identificador de Registro Auditado',
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
      saveMessage: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.audit_common.saveMessage.name',
              defaultMessage: 'Mensagem de Salvamento',
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
      eventComment: {
        [config]: {
          messages: {
            name: {
              id: 'field.audit_common.eventComment.name',
              defaultMessage: 'Event comment',
            },
          },
          view: {
            type: TextInput,
            props: {
              readOnly: true,
            },
          },
        },
      },
      eventType: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.audit_common.eventType.name',
              defaultMessage: 'Tipo de Evento de Auditoria',
            },
          }),
          view: {
            type: OptionPickerInput,
            props: {
              source: 'eventTypes',
              readOnly: true,
            },
          },
        },
      },
      principal: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.audit_common.principal.name',
              defaultMessage: 'Atualizado por',
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
      eventDate: {
        [config]: {
          dataType: DATA_TYPE_DATETIME,
          messages: defineMessages({
            name: {
              id: 'field.audit_common.eventDate.name',
              defaultMessage: 'Atualizado em',
            },
          }),
          view: {
            type: DateTimeInput,
            props: {
              readOnly: true,
            },
          },
        },
      },
      fieldChangedGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        fieldChangedGroup: {
          [config]: {
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          key: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.audit_common.key.name',
                  defaultMessage: 'Chave',
                },
              }),
              view: {
                type: FieldTextInput,
                props: {
                  readOnly: true,
                },
              },
            },
          },
          fieldName: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.audit_common.fieldName.name',
                  defaultMessage: 'Campo',
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
          originalValue: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.audit_common.originalValue.name',
                  defaultMessage: 'Valor Original',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                  readOnly: true,
                },
              },
            },
          },
          newValue: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.audit_common.newValue.name',
                  defaultMessage: 'Novo Valor',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                  readOnly: true,
                },
              },
            },
          },
          changeReason: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.audit_common.changeReason.name',
                  defaultMessage: 'Razão da Mudança',
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
        },
      },
    },
  };
};
