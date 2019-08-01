const address = {
  state: {
    address: [
      {
        id: 'a1',
        name: '阿木来提.阿不都热西提',
        local:
          '新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团乎热郭姆村9连5区13号',
        phone: 18645629876,
        phoneImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        localImg:
          'https://github.com/Loving-xinxin/vue-mozan/blob/master/src/assets/location.png',
        userImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        showdel: false,
        checkedLi: true,
        changeDefault: true
      },
      {
        id: 'a2',
        name: '买买提艾力',
        local: '新疆维吾尔自治区伊犁州新源县提镇农场科勒布拉克二组',
        phone: 18712354259,
        phoneImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        localImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        userImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        showdel: false,
        checkedLi: false,
        changeDefault: false
      },
      {
        id: 'a3',
        name: '爱丽木拉提',
        local: '广西壮族自治区柳州市柳南区',
        phone: 18964123589,
        phoneImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        localImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        userImg:
          'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        showdel: false,
        checkedLi: false,
        changeDefault: false
      }
    ],
    selectS: true,
    selectP: true,
    selectB: true,
    selectUb: true,
    checkedone: false,
    checkedtwo: false,
    checkedthree: false,
    checkedfour: false,
    showAddress: false,
    gou: false,
    value: [],
    options: [
      {
        value: 'zhinan',
        label: '河北省',
        children: [
          {
            value: 'shejiyuanze',
            label: '秦皇岛',
            children: [
              {
                value: 'yizhi',
                label: '海港区'
              },
              {
                value: 'fankui',
                label: '反馈'
              },
              {
                value: 'xiaolv',
                label: '效率'
              },
              {
                value: 'kekong',
                label: '可控'
              }
            ]
          },
          {
            value: 'daohang',
            label: '导航',
            children: [
              {
                value: 'cexiangdaohang',
                label: '侧向导航'
              },
              {
                value: 'dingbudaohang',
                label: '顶部导航'
              }
            ]
          }
        ]
      },
      {
        value: 'zujian',
        label: '组件',
        children: [
          {
            value: 'basic',
            label: 'Basic',
            children: [
              {
                value: 'layout',
                label: 'Layout 布局'
              },
              {
                value: 'color',
                label: 'Color 色彩'
              },
              {
                value: 'typography',
                label: 'Typography 字体'
              },
              {
                value: 'icon',
                label: 'Icon 图标'
              },
              {
                value: 'button',
                label: 'Button 按钮'
              }
            ]
          },
          {
            value: 'form',
            label: 'Form',
            children: [
              {
                value: 'radio',
                label: 'Radio 单选框'
              },
              {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              },
              {
                value: 'input',
                label: 'Input 输入框'
              },
              {
                value: 'input-number',
                label: 'InputNumber 计数器'
              },
              {
                value: 'select',
                label: 'Select 选择器'
              },
              {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              },
              {
                value: 'switch',
                label: 'Switch 开关'
              },
              {
                value: 'slider',
                label: 'Slider 滑块'
              },
              {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              },
              {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              },
              {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              },
              {
                value: 'upload',
                label: 'Upload 上传'
              },
              {
                value: 'rate',
                label: 'Rate 评分'
              },
              {
                value: 'form',
                label: 'Form 表单'
              }
            ]
          },
          {
            value: 'data',
            label: 'Data',
            children: [
              {
                value: 'table',
                label: 'Table 表格'
              },
              {
                value: 'tag',
                label: 'Tag 标签'
              },
              {
                value: 'progress',
                label: 'Progress 进度条'
              },
              {
                value: 'tree',
                label: 'Tree 树形控件'
              },
              {
                value: 'pagination',
                label: 'Pagination 分页'
              },
              {
                value: 'badge',
                label: 'Badge 标记'
              }
            ]
          },
          {
            value: 'notice',
            label: 'Notice',
            children: [
              {
                value: 'alert',
                label: 'Alert 警告'
              },
              {
                value: 'loading',
                label: 'Loading 加载'
              },
              {
                value: 'message',
                label: 'Message 消息提示'
              },
              {
                value: 'message-box',
                label: 'MessageBox 弹框'
              },
              {
                value: 'notification',
                label: 'Notification 通知'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'menu',
                label: 'NavMenu 导航菜单'
              },
              {
                value: 'tabs',
                label: 'Tabs 标签页'
              },
              {
                value: 'breadcrumb',
                label: 'Breadcrumb 面包屑'
              },
              {
                value: 'dropdown',
                label: 'Dropdown 下拉菜单'
              },
              {
                value: 'steps',
                label: 'Steps 步骤条'
              }
            ]
          },
          {
            value: 'others',
            label: 'Others',
            children: [
              {
                value: 'dialog',
                label: 'Dialog 对话框'
              },
              {
                value: 'tooltip',
                label: 'Tooltip 文字提示'
              },
              {
                value: 'popover',
                label: 'Popover 弹出框'
              },
              {
                value: 'card',
                label: 'Card 卡片'
              },
              {
                value: 'carousel',
                label: 'Carousel 走马灯'
              },
              {
                value: 'collapse',
                label: 'Collapse 折叠面板'
              }
            ]
          }
        ]
      },
      {
        value: 'ziyuan',
        label: '资源',
        children: [
          {
            value: 'axure',
            label: 'Axure Components'
          },
          {
            value: 'sketch',
            label: 'Sketch Templates'
          },
          {
            value: 'jiaohu',
            label: '组件交互文档'
          }
        ]
      }
    ]
  },
  mutations: {
    selectStyle(state) {
      state.selectS = !state.selectS;
    },
    selectPay(state) {
      state.selectP = !state.selectP;
    },
    selectBill(state) {
      state.selectB = !state.selectB;
    },
    selectUbill(state) {
      state.selectUb = !state.selectUb;
    },
    showGou(state) {
      state.gou = !state.gou;
    },
    delwin(state, id) {
      state.address.find(item => item.id === id).showdel = !state.address.find(
        item => item.id === id
      ).showdel;
    },
    payCheckedone(state) {
      state.checkedone = !state.checkedone;
    },
    payCheckedtwo(state) {
      state.checkedtwo = !state.checkedtwo;
    },
    payCheckedthree(state) {
      state.checkedthree = !state.checkedthree;
    },
    payCheckedfour(state) {
      state.checkedfour = !state.checkedfour;
    },
    delAddress(state, id) {
      state.address = state.address.filter(item => item.id != id);
    },
    showdizhi(state) {
      state.showAddress = !state.showAddress;
    },
    checkedshouhuo(state, id) {
      state.address.find(item => item.checkedLi === true).checkedLi = false;
      state.address.find(item => item.changeDefault === true);
      state.address.find(
        item => item.id === id
      ).checkedLi = !state.address.find(item => item.id === id).checkedLi;
    },
    changefont(state, id) {
      state.address.find(
        item => item.changeDefault === true
      ).changeDefault = false;
      state.address.find(
        item => item.id === id
      ).changeDefault = !state.address.find(item => item.id === id)
        .changeDefault;
      console.log(id);
    }
  }
};
export default address;
