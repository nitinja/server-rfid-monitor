import * as React from 'react'
import { connect } from 'react-redux'
import styles from './Layout.module.css'
import { Breadcrumb, Icon, Layout, Menu } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export interface AppLayoutProps {
    // header: React.Component;
    // left: React.Component;
    // right: React.Component;
    // footer: React.Component;
}

/* Responsive main layout of app. */
class AppLayout extends React.Component<AppLayoutProps, any> {
    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Layout className={styles.mainLayout}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className={styles.logo}>
                        <Icon type="fire" theme="twoTone" twoToneColor="#58CCED" style={{ fontSize: '2rem'}}/>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="bar-chart" />
                            <span>Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Products CRUD</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="profile" />
                            <span>Forms</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default AppLayout
