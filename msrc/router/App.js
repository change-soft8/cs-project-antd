import { Drawer, List, NavBar, Icon, Popup, Button, Menu } from 'antd-mobile';
import "../style/App.css";
import Footer from '../components/footer/footer'
import LeftSider from '../components/leftSider/leftSider'

const SelectorDataForPopup = [{
    label: '中文',
    value: '21',
}, {
    label: '英文',
    value: '22',
    disabled: true,
}, {
    label: '日文',
    value: 'jp',
}];

export default class App extends React.Component {
        constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
        }

        state = {
            drawer: {
                open: false,
                position: 'left'
            },
            setting: {
                sel: ''
            }
        }

        /**
         * 打开左滑窗
         * @param  {Boolean} isOpen [description]
         * @return {[type]}         [description]
         */
        onOpenChange(isOpen) {
            this.setState({
                drawer: {
                    open: !this.state.drawer.open
                }
            });
        }

        /**
         * 弹出设置框
         * @return {[type]} [description]
         */
        onClick() {
            Popup.show(
                <List
        renderHeader={() => '账户总览 (已绑定3个）'}
      >
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          onClick={() => { this.onClose('cancel'); }}
        >关于新致云</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => { this.onClose('cancel'); }}
        >清理空间</List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          arrow="horizontal"
          onClick={() => { this.onClose('opt 1'); }}
        >多语音</List.Item>
      </List>, { animationType: 'slide-up' }
            );
        }

        /**
         * 关闭设置框
         * @return {[type]} [description]
         */
        onClose(sel) {
            if (sel === 'opt 1') {
                this.newInstance();
                return;
            }
            this.setState({ sel });
            Popup.hide();
        }

        newInstance() {
            const ins = Popup.newInstance();
            const hide
 = (value) => {
                if (value[0] === 'qx') {
                    ins.hide();
                }
            };
            ins.show(<Menu
              level={1}
              value={[SelectorDataForPopup[0]]}
              data={SelectorDataForPopup}
              onChange={hide}
            />, { animationType: 'slide-up', maskClosable: true });
        }

        render() {

                const sidebar = (<LeftSider />)

                const drawerProps = {
                    open: this.state.drawer.open,
                    position: this.state.drawer.position,
                    onOpenChange: this.onOpenChange.bind(this),
                };

                return (<div style={{ height: '100%' }}>
          <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange.bind(this)} 
          rightContent={<Icon type="user" onClick={this.onClick} />} >新致云 < /NavBar>  < div className = "drawer-container" >
          < Drawer sidebar = { sidebar } dragHandleStyle = {{ display: 'none' }}
            contentStyle = {{ color: '#A6A6A6', textAlign: 'center'}
            } {...drawerProps } >

            <Footer />

            < /Drawer> < /div >  < /div>
    )
}
}
