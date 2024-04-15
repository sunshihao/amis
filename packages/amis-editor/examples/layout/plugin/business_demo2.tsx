import {ContainerWrapper, JSONPipeOut} from 'amis-editor-core';
import {registerEditorPlugin} from 'amis-editor-core';
import {
  BaseEventContext,
  BasePlugin,
  getSchemaTpl,
  defaultValue
} from 'amis-editor-core';
// import {getEventControlConfig} from '../../renderer/event-control/helper';
import {getEventControlConfig} from '../../../src/renderer/event-control/helper';

import {RendererPluginAction, RendererPluginEvent} from 'amis-editor-core';
import type {SchemaObject} from 'amis';
import {tipedLabel} from 'amis-editor-core';
import {jsonToJsonSchema, EditorNodeType} from 'amis-editor-core';
import omit from 'lodash/omit';

const default_page = {
  type: 'page',
  body: [
    {
      type: 'crud',
      id: 'u:b177ad50e373',
      syncLocation: false,
      api: {
        method: 'post',
        url: '/infra/dynamic/page/1'
      },
      columns: [
        {
          name: 'id',
          label: '岗位编号',
          type: 'text',
          id: 'u:9ca787fe78b9',
          placeholder: '-',
          sortable: false
        },
        {
          name: 'name',
          label: '岗位名称',
          type: 'text',
          id: 'u:a2420766f453'
        },
        {
          type: 'text',
          label: '岗位编码',
          name: 'code',
          id: 'u:f486f1dfc9bb',
          placeholder: '-',
          sortable: true,
          copyable: false
        },
        {
          type: 'text',
          label: '岗位顺序',
          name: 'sort',
          id: 'u:9f074482d4ee'
        },
        {
          type: 'text',
          label: '岗位备注',
          name: 'remark',
          id: 'u:2b70a8a3b55f',
          placeholder: '-',
          copyable: false
        },
        {
          type: 'status',
          label: '状态',
          name: 'status',
          id: 'u:84f2479564c6'
        },
        {
          type: 'tpl',
          name: 'createTime',
          label: '创建时间',
          className: '',
          labelClassName: '',
          tpl: '<%formatDate(data[\'createTime\'], "YYYY-MM-DD HH:mm:ss")%>',
          id: 'u:b3aa8cc83ec7'
        },
        {
          type: 'operation',
          label: '操作',
          buttons: [
            {
              label: '编辑',
              type: 'button',
              actionType: 'dialog',
              level: 'link',
              dialog: {
                type: 'dialog',
                title: '编辑',
                body: [
                  {
                    type: 'form',
                    api: {
                      method: 'put',
                      url: '/infra/dynamic/update/1',
                      messages: {}
                    },
                    body: [
                      {
                        name: 'id',
                        label: '岗位编号',
                        type: 'input-text',
                        id: 'u:4b075e56ba3e',
                        readOnly: true
                      },
                      {
                        name: 'name',
                        label: '岗位名称',
                        type: 'input-text',
                        id: 'u:881ab8a2e8eb'
                      },
                      {
                        label: '岗位编码',
                        name: 'code',
                        type: 'input-text',
                        id: 'u:2959589a9dbc'
                      },
                      {
                        label: '岗位顺序',
                        name: 'sort',
                        type: 'input-text',
                        id: 'u:00639235b3e9'
                      },
                      {
                        label: '岗位备注',
                        name: 'remark',
                        type: 'input-text',
                        id: 'u:5f4c290b136f'
                      },
                      {
                        label: '状态',
                        name: 'status',
                        type: 'select',
                        id: 'u:f487a82f9e4c',
                        options: [
                          {
                            label: '选项A',
                            value: 0
                          },
                          {
                            label: '选项B',
                            value: 1
                          }
                        ],
                        multiple: false,
                        value: ''
                      }
                    ],
                    id: 'u:8079256a4c59'
                  }
                ],
                id: 'u:5b822c7c29af'
              },
              id: 'u:d6abc6d8a5d8'
            },
            {
              type: 'button',
              label: '删除',
              actionType: 'ajax',
              level: 'link',
              className: 'text-danger',
              confirmText: '确定要删除${name}？',
              api: {
                method: 'delete',
                url: '/infra/dynamic/delete/1/',
                data: '${id}'
              },
              id: 'u:e33854ba9b23',
              reload: ''
            }
          ],
          id: 'u:4afc5bd50a17'
        }
      ],
      bulkActions: [],
      itemActions: [],
      features: ['create', 'bulkDelete', 'update', 'delete', 'filter'],
      filterColumnCount: 3,
      headerToolbar: [
        {
          label: '新增',
          type: 'button',
          actionType: 'dialog',
          level: 'primary',
          dialog: {
            type: 'dialog',
            title: '新增',
            body: [
              {
                type: 'form',
                api: {
                  method: 'post',
                  url: '/infra/dynamic/create/1'
                },
                body: [
                  {
                    type: 'input-text',
                    name: 'id',
                    label: '岗位编号',
                    id: 'u:2eccdc004130'
                  },
                  {
                    type: 'input-text',
                    name: 'name',
                    label: '岗位名称',
                    id: 'u:4ff836d6d84b'
                  },
                  {
                    type: 'input-text',
                    name: 'code',
                    label: '岗位编码',
                    id: 'u:70b9fb44a1b5'
                  },
                  {
                    type: 'input-text',
                    name: 'sort',
                    label: '岗位顺序',
                    id: 'u:781ad885af3a'
                  },
                  {
                    type: 'input-text',
                    name: 'remark',
                    label: '岗位备注',
                    id: 'u:fadcc9dd8f5b'
                  },
                  {
                    type: 'select',
                    name: 'status',
                    label: '状态',
                    id: 'u:4d1e09d7c1e5',
                    multiple: false,
                    options: [
                      {
                        label: 'A',
                        value: '0'
                      },
                      {
                        label: 'B',
                        value: '1'
                      }
                    ]
                  }
                ],
                id: 'u:2bd3a3446681'
              }
            ],
            id: 'u:4cd8aef1c434'
          },
          id: 'u:afbf53c0617f'
        },
        'bulkActions'
      ],
      perPageAvailable: [10],
      messages: {},
      filter: {
        title: '',
        body: [
          {
            type: 'grid',
            columns: [
              {
                body: [
                  {
                    type: 'input-text',
                    label: '岗位名称',
                    name: 'name',
                    id: 'u:14af6293e9b2',
                    size: 'md',
                    mode: 'inline'
                  }
                ],
                id: 'u:840eaa455087'
              },
              {
                id: 'u:a94fe152fcbf',
                body: [
                  {
                    type: 'select',
                    label: '状态',
                    name: 'status',
                    options: [
                      {
                        label: '选项A',
                        value: '0'
                      },
                      {
                        label: '选项B',
                        value: '1'
                      }
                    ],
                    id: 'u:f3131b12370a',
                    multiple: false,
                    clearable: true,
                    className: '',
                    size: 'md',
                    mode: 'inline'
                  }
                ]
              }
            ],
            id: 'u:84258f283994'
          }
        ],
        id: 'u:9caf0fcb0dc6',
        preventEnterSubmit: true
      },
      filterTogglable: true,
      pageField: 'pageNo',
      perPageField: 'pageSize',
      syncResponse2Query: false,
      draggable: true
    }
  ],
  id: 'u:560eb8d924eb',
  regions: ['body']
};

const default_body = [
  {
    type: 'crud',
    id: 'u:b177ad50e373',
    syncLocation: false,
    api: {
      method: 'post',
      url: '/infra/dynamic/page/1'
    },
    columns: [
      {
        name: 'id',
        label: '岗位编号',
        type: 'text',
        id: 'u:9ca787fe78b9',
        placeholder: '-',
        sortable: false
      },
      {
        name: 'name',
        label: '岗位名称',
        type: 'text',
        id: 'u:a2420766f453'
      },
      {
        type: 'text',
        label: '岗位编码',
        name: 'code',
        id: 'u:f486f1dfc9bb',
        placeholder: '-',
        sortable: true,
        copyable: false
      },
      {
        type: 'text',
        label: '岗位顺序',
        name: 'sort',
        id: 'u:9f074482d4ee'
      },
      {
        type: 'text',
        label: '岗位备注',
        name: 'remark',
        id: 'u:2b70a8a3b55f',
        placeholder: '-',
        copyable: false
      },
      {
        type: 'status',
        label: '状态',
        name: 'status',
        id: 'u:84f2479564c6'
      },
      {
        type: 'tpl',
        name: 'createTime',
        label: '创建时间',
        className: '',
        labelClassName: '',
        tpl: '<%formatDate(data[\'createTime\'], "YYYY-MM-DD HH:mm:ss")%>',
        id: 'u:b3aa8cc83ec7'
      },
      {
        type: 'operation',
        label: '操作',
        buttons: [
          {
            label: '编辑',
            type: 'button',
            actionType: 'dialog',
            level: 'link',
            dialog: {
              type: 'dialog',
              title: '编辑',
              body: [
                {
                  type: 'form',
                  api: {
                    method: 'put',
                    url: '/infra/dynamic/update/1',
                    messages: {}
                  },
                  body: [
                    {
                      name: 'id',
                      label: '岗位编号',
                      type: 'input-text',
                      id: 'u:4b075e56ba3e',
                      readOnly: true
                    },
                    {
                      name: 'name',
                      label: '岗位名称',
                      type: 'input-text',
                      id: 'u:881ab8a2e8eb'
                    },
                    {
                      label: '岗位编码',
                      name: 'code',
                      type: 'input-text',
                      id: 'u:2959589a9dbc'
                    },
                    {
                      label: '岗位顺序',
                      name: 'sort',
                      type: 'input-text',
                      id: 'u:00639235b3e9'
                    },
                    {
                      label: '岗位备注',
                      name: 'remark',
                      type: 'input-text',
                      id: 'u:5f4c290b136f'
                    },
                    {
                      label: '状态',
                      name: 'status',
                      type: 'select',
                      id: 'u:f487a82f9e4c',
                      options: [
                        {
                          label: '选项A',
                          value: 0
                        },
                        {
                          label: '选项B',
                          value: 1
                        }
                      ],
                      multiple: false,
                      value: ''
                    }
                  ],
                  id: 'u:8079256a4c59'
                }
              ],
              id: 'u:5b822c7c29af'
            },
            id: 'u:d6abc6d8a5d8'
          },
          {
            type: 'button',
            label: '删除',
            actionType: 'ajax',
            level: 'link',
            className: 'text-danger',
            confirmText: '确定要删除${name}？',
            api: {
              method: 'delete',
              url: '/infra/dynamic/delete/1/',
              data: '${id}'
            },
            id: 'u:e33854ba9b23',
            reload: ''
          }
        ],
        id: 'u:4afc5bd50a17'
      }
    ],
    bulkActions: [],
    itemActions: [],
    features: ['create', 'bulkDelete', 'update', 'delete', 'filter'],
    filterColumnCount: 3,
    headerToolbar: [
      {
        label: '新增',
        type: 'button',
        actionType: 'dialog',
        level: 'primary',
        dialog: {
          type: 'dialog',
          title: '新增',
          body: [
            {
              type: 'form',
              api: {
                method: 'post',
                url: '/infra/dynamic/create/1'
              },
              body: [
                {
                  type: 'input-text',
                  name: 'id',
                  label: '岗位编号',
                  id: 'u:2eccdc004130'
                },
                {
                  type: 'input-text',
                  name: 'name',
                  label: '岗位名称',
                  id: 'u:4ff836d6d84b'
                },
                {
                  type: 'input-text',
                  name: 'code',
                  label: '岗位编码',
                  id: 'u:70b9fb44a1b5'
                },
                {
                  type: 'input-text',
                  name: 'sort',
                  label: '岗位顺序',
                  id: 'u:781ad885af3a'
                },
                {
                  type: 'input-text',
                  name: 'remark',
                  label: '岗位备注',
                  id: 'u:fadcc9dd8f5b'
                },
                {
                  type: 'select',
                  name: 'status',
                  label: '状态',
                  id: 'u:4d1e09d7c1e5',
                  multiple: false,
                  options: [
                    {
                      label: 'A',
                      value: '0'
                    },
                    {
                      label: 'B',
                      value: '1'
                    }
                  ]
                }
              ],
              id: 'u:2bd3a3446681'
            }
          ],
          id: 'u:4cd8aef1c434'
        },
        id: 'u:afbf53c0617f'
      },
      'bulkActions'
    ],
    perPageAvailable: [10],
    messages: {},
    filter: {
      title: '',
      body: [
        {
          type: 'grid',
          columns: [
            {
              body: [
                {
                  type: 'input-text',
                  label: '岗位名称',
                  name: 'name',
                  id: 'u:14af6293e9b2',
                  size: 'md',
                  mode: 'inline'
                }
              ],
              id: 'u:840eaa455087'
            },
            {
              id: 'u:a94fe152fcbf',
              body: [
                {
                  type: 'select',
                  label: '状态',
                  name: 'status',
                  options: [
                    {
                      label: '选项A',
                      value: '0'
                    },
                    {
                      label: '选项B',
                      value: '1'
                    }
                  ],
                  id: 'u:f3131b12370a',
                  multiple: false,
                  clearable: true,
                  className: '',
                  size: 'md',
                  mode: 'inline'
                }
              ]
            }
          ],
          id: 'u:84258f283994'
        }
      ],
      id: 'u:9caf0fcb0dc6',
      preventEnterSubmit: true
    },
    filterTogglable: true,
    pageField: 'pageNo',
    perPageField: 'pageSize',
    syncResponse2Query: false,
    draggable: true
  }
];

export default class business_demo2 extends BasePlugin {
  static id = 'business_demo2';
  // 关联渲染器名字
  rendererName = 'page';
  $schema = '/schemas/PageSchema.json';

  // 组件名称
  name = '业务页面';
  // isBaseComponent = true;
  // 只有顶级才会用到这个page组件
  // disabledRendererPlugin = true;
  description =
    '页面渲染器，页面的顶级入口。包含多个区域，您可以选择在不同的区域里面放置不同的渲染器。';
  // docLink = '/amis/zh-CN/components/page';
  // tags = '容器';
  tags = ['自定义', '业务页面2'];

  icon = 'fa fa-desktop';
  // pluginIcon = 'page-plugin'; // 暂无新 icon
  scaffold: SchemaObject = default_page;
  previewSchema: SchemaObject = {
    type: 'page',
    className: 'text-left b-a',
    asideClassName: 'w-xs',
    title: '标题',
    subTitle: '副标题',
    aside: '边栏',
    body: default_body
  };

  events: RendererPluginEvent[] = [
    {
      eventName: 'init',
      eventLabel: '初始化',
      description: '组件实例被创建并插入 DOM 中时触发',
      dataSchema: [
        {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              title: '数据',
              description: '当前数据域，可以通过.字段名读取对应的值'
            }
          }
        }
      ]
    },
    {
      eventName: 'inited',
      eventLabel: '初始化数据接口请求完成',
      description: '远程初始化数据接口请求完成时触发',
      dataSchema: [
        {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              title: '数据',
              properties: {
                responseData: {
                  type: 'object',
                  title: '响应数据'
                },
                responseStatus: {
                  type: 'number',
                  title: '响应状态(0表示成功)'
                },
                responseMsg: {
                  type: 'string',
                  title: '响应消息'
                }
              }
            }
          }
        }
      ]
    },
    {
      eventName: 'pullRefresh',
      eventLabel: '下拉刷新',
      description: '开启下拉刷新后，下拉释放后触发（仅用于移动端）'
    }
  ];

  // 动作定义
  actions: RendererPluginAction[] = [
    {
      actionType: 'reload',
      actionLabel: '重新加载',
      description: '触发组件数据刷新并重新渲染'
    },
    {
      actionType: 'setValue',
      actionLabel: '变量赋值',
      description: '触发组件数据更新'
    }
  ];

  // 普通容器类渲染器配置
  regions = [
    {key: 'toolbar', label: '工具栏', preferTag: '工具栏内容'},
    {key: 'aside', label: '边栏', placeholder: '边栏内容'},
    {key: 'body', label: '内容区', placeholder: '页面内容'}
  ];
  wrapper = ContainerWrapper;

  panelTitle = '页面';
  panelJustify = true;

  panelBodyCreator = (context: BaseEventContext) => {
    return [
      getSchemaTpl('tabs', [
        {
          title: '属性',
          body: [
            getSchemaTpl('collapseGroup', [
              {
                title: '基本',
                body: [
                  {
                    type: 'checkboxes',
                    name: 'regions',
                    label: '区域展示',
                    pipeIn: (value: any) =>
                      Array.isArray(value)
                        ? value
                        : ['body', 'toolbar', 'aside', 'header'],
                    pipeOut: (value: any) => {
                      return Array.isArray(value) && value.length
                        ? value
                        : ['body', 'toolbar', 'aside', 'header'];
                    },
                    joinValues: false,
                    extractValue: true,
                    inline: false,
                    options: [
                      {
                        label: '内容区',
                        value: 'body'
                      },
                      {
                        label: '标题栏',
                        value: 'header'
                      },
                      {
                        label: '工具栏',
                        value: 'toolbar'
                      },
                      {
                        label: '边栏',
                        value: 'aside'
                      }
                    ]
                  },
                  getSchemaTpl('pageTitle'),
                  getSchemaTpl('pageSubTitle'),
                  getSchemaTpl('remark', {
                    label: '标题提示',
                    hiddenOn:
                      'data.regions && !data.regions.includes("header") || !data.title'
                  }),
                  {
                    type: 'ae-Switch-More',
                    name: 'asideResizor',
                    mode: 'normal',
                    label: '边栏宽度可调节',
                    hiddenOn: 'data.regions && !data.regions.includes("aside")',
                    value: false,
                    hiddenOnDefault: true,
                    formType: 'extend',
                    form: {
                      body: [
                        {
                          type: 'input-number',
                          label: '最小宽度',
                          min: 0,
                          name: 'asideMinWidth',
                          pipeIn: defaultValue(160),
                          pipeOut: (value: any) => value || 0
                        },
                        {
                          type: 'input-number',
                          label: '最大宽度',
                          min: 0,
                          name: 'asideMaxWidth',
                          pipeIn: defaultValue(350),
                          pipeOut: (value: any) => value || 0
                        }
                      ]
                    }
                  },
                  {
                    type: 'switch',
                    label: tipedLabel(
                      '边栏固定',
                      '边栏内容是否固定，即不跟随内容区滚动'
                    ),
                    name: 'asideSticky',
                    inputClassName: 'is-inline',
                    pipeIn: defaultValue(true),
                    hiddenOn: 'data.regions && !data.regions.includes("aside")'
                  }
                ]
              },
              {
                title: '数据',
                body: [
                  getSchemaTpl('pageData'),
                  getSchemaTpl('apiControl', {
                    name: 'initApi',
                    mode: 'row',
                    labelClassName: 'none',
                    label: tipedLabel(
                      '初始化接口',
                      '用来获取初始数据的 api, 返回的数据可以整个 page 级别使用'
                    )
                  })
                ]
              },
              ,
              {
                title: '移动端',
                body: [
                  {
                    type: 'combo',
                    name: 'pullRefresh',
                    mode: 'normal',
                    noBorder: true,
                    items: [
                      {
                        type: 'ae-Switch-More',
                        mode: 'normal',
                        label: '下拉刷新',
                        name: 'disabled',
                        formType: 'extend',
                        value: true,
                        trueValue: false,
                        falseValue: true,
                        autoFocus: false,
                        form: {
                          body: [
                            {
                              name: 'pullingText',
                              label: tipedLabel('下拉文案', '下拉过程提示文案'),
                              type: 'input-text'
                            },
                            {
                              name: 'loosingText',
                              label: tipedLabel('释放文案', '释放过程提示文案'),
                              type: 'input-text'
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ])
          ]
        },
        {
          title: '外观',
          className: 'p-none',
          body: [
            getSchemaTpl('collapseGroup', [
              ...getSchemaTpl('theme:common', {
                exclude: ['layout'],
                classname: 'baseControlClassName',
                baseTitle: '基本样式',
                extra: [
                  getSchemaTpl('theme:base', {
                    classname: 'bodyControlClassName',
                    title: '内容区样式',
                    hiddenOn: 'data.regions && !data.regions.includes("body")'
                  }),
                  getSchemaTpl('theme:base', {
                    classname: 'headerControlClassName',
                    title: '标题栏样式',
                    extra: [
                      getSchemaTpl('theme:font', {
                        label: '文字',
                        name: 'themeCss.titleControlClassName.font'
                      })
                    ],
                    hiddenOn: 'data.regions && !data.regions.includes("header")'
                  }),
                  getSchemaTpl('theme:base', {
                    classname: 'toolbarControlClassName',
                    title: '工具栏样式',
                    hiddenOn:
                      'data.regions && !data.regions.includes("toolbar")'
                  }),
                  getSchemaTpl('theme:base', {
                    classname: 'asideControlClassName',
                    title: '边栏样式',
                    hiddenOn: 'data.regions && !data.regions.includes("aside")'
                  })
                ]
              })
            ])
          ]
        },
        {
          title: '事件',
          className: 'p-none',
          body: [
            getSchemaTpl('eventControl', {
              name: 'onEvent',
              ...getEventControlConfig(this.manager, context)
            })
          ]
        }
      ])
    ];
  };

  async buildDataSchemas(
    node: EditorNodeType,
    region?: EditorNodeType,
    trigger?: EditorNodeType
  ) {
    let jsonschema = {
      ...jsonToJsonSchema(JSONPipeOut(node.schema.data))
    };

    const pool = node.children.concat();

    while (pool.length) {
      const current = pool.shift() as EditorNodeType;
      const schema = current.schema;

      if (current.rendererConfig?.isFormItem && schema?.name) {
        const tmpSchema = await current.info.plugin.buildDataSchemas?.(
          current,
          undefined,
          trigger,
          node
        );
        jsonschema.properties[schema.name] = {
          ...tmpSchema,
          ...(tmpSchema?.$id ? {} : {$id: `${current.id}-${current.type}`})
        };
      } else if (!current.rendererConfig?.storeType) {
        pool.push(...current.children);
      }
    }

    return jsonschema;
  }

  rendererBeforeDispatchEvent(node: EditorNodeType, e: any, data: any) {
    if (e === 'inited') {
      const scope = this.manager.dataSchema.getScope(`${node.id}-${node.type}`);
      const jsonschema: any = {
        $id: 'pageInitedData',
        ...jsonToJsonSchema(data.responseData)
      };

      scope?.removeSchema(jsonschema.$id);
      scope?.addSchema(jsonschema);
    }
  }
}

registerEditorPlugin(business_demo2);
