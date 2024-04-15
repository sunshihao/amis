import {BasePlugin} from 'amis-editor-core';
import '../../renderer/MyRenderer';

export default class businessDemo extends BasePlugin {
  rendererName = 'page';

  // 暂时只支持这个，配置后会开启代码编辑器
  // $schema = '/schemas/UnkownSchema.json';
  $schema = '/schemas/PageSchema.json';

  // 用来配置名称和描述
  name = '自定义业务页面';
  description = '这只是个示例';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['自定义', '业务页面2'];

  // 图标
  icon = 'fa fa-user';

  // 用来生成预览图的
  previewSchema = {
    type: 'page',
    target: 'demo' // 复杂业务组件拖动
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: 'page',
    target: '233'
  };

  // 右侧面板相关
  panelTitle = '自定义业务组件';
  panelControls = [
    {
      type: 'tabs',
      tabsMode: 'line',
      className: 'm-t-n-xs',
      contentClassName: 'no-border p-l-none p-r-none',
      tabs: [
        {
          title: '常规',
          controls: [
            {
              name: 'target',
              label: 'Target',
              type: 'text'
            }
          ]
        },

        {
          title: '外观',
          controls: []
        }
      ]
    }
  ];
}
