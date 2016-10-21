import React from 'react'
import { Row, Col, Card, Button,Icon } from 'antd';
import '../style/buttonPage.css';
import '../style/markdown.css';
const ButtonGroup = Button.Group;

export default class ButtonPage extends React.Component {
    state = {
        loading: false,
        iconLoading: false
    }
    enterLoading() {
        this.setState({ loading: true });
    }
    enterIconLoading() {
        this.setState({ iconLoading: true });
    }
    render() {
        return (
            <div className="buttons">
            <Row><div style={{height:'20px'}}></div></Row>
            <Row>
                <Col span={1}></Col>
                <Col span={10}>
                    <Card title="按钮类型">
                        <section className="code-box-demo">
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                            <Button type="ghost">Ghost</Button>
                            <Button type="dashed">Dashed</Button>
                         </section>
                        <div className="code-box-meta markdown">
                            <p>按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。</p>
                            <p>通过设置 <code>type</code> 为 <code>primary</code> <code>ghost</code> <code>dashed</code> 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 <code>type</code> 值则为次按钮。不同的样式可以用来区别其重要程度。</p>
                            <p>主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。</p>
                        </div>
                    </Card>
                    <Card title="加载中状态">
                        <section className="code-box-demo">
                            <Button type="primary" loading>
                              Loading
                            </Button>
                            <Button type="primary" size="small" loading>
                              Loading
                            </Button>
                            <br />
                            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>
                              Click me!
                            </Button>
                            <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading.bind(this)}>
                              Click me!
                            </Button>
                         </section>
                        <div className="code-box-meta markdown">
                            <p>添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态</p>
                        </div>
                    </Card>
                </Col>
                <Col span={1}></Col>
                <Col span={10}>
                    <Card title="图标按钮">
                        <section className="code-box-demo">
                            <Button type="primary" shape="circle" icon="search" />
                            <Button type="primary" icon="search">Search</Button>
                            <br />
                            <Button type="ghost" shape="circle-outline" icon="search" />
                            <Button type="ghost" icon="search">Search</Button>
                         </section>
                        <div className="code-box-meta markdown">
                            <p>当需要在 <code>Button</code> 内嵌入 <code>Icon</code> 时，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。</p><p>如果想控制 <code>Icon</code> 具体的位置，只能直接使用 <code>Icon</code> 组件，而非 <code>icon</code> 属性。</p>
                        </div>
                    </Card>
                    <Card title="图标按钮">
                        <section className="code-box-demo">
                           <h4>Basic</h4>
                            <ButtonGroup>
                              <Button>Cancel</Button>
                              <Button type="primary">OK</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                              <Button disabled>L</Button>
                              <Button disabled>M</Button>
                              <Button disabled>R</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                              <Button type="primary">L</Button>
                              <Button>M</Button>
                              <Button type="ghost">M</Button>
                              <Button type="dashed">R</Button>
                            </ButtonGroup>

                            <h4>With Icon</h4>
                            <ButtonGroup>
                              <Button type="primary">
                                <Icon type="left" />Go back
                              </Button>
                              <Button type="primary">
                                Go forward<Icon type="right" />
                              </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                              <Button type="primary" icon="cloud" />
                              <Button type="primary" icon="cloud-download" />
                            </ButtonGroup>

                            <h4>Size</h4>
                            <ButtonGroup size="large">
                              <Button type="ghost">Large</Button>
                              <Button type="ghost">Large</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                              <Button type="ghost">Default</Button>
                              <Button type="ghost">Default</Button>
                            </ButtonGroup>
                            <ButtonGroup size="small">
                              <Button type="ghost">Small</Button>
                              <Button type="ghost">Small</Button>
                            </ButtonGroup>
                         </section>
                    </Card>
                </Col>
                <Col span={1}></Col>
            </Row>
            </div>
        );
    }
}
