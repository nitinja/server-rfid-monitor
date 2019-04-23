import * as React from 'react'
import { Icon, Layout, Menu } from 'antd'

const { SubMenu } = Menu
const { Content, Sider } = Layout

export function AppSidebar() {
    return (
        <Sider
            width={200}
            style={{ background: '#fff' }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => console.log(broken)}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
            }}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            subnav 1
                        </span>
                    }
                >
                    <Menu.Item key="1">option 1.1</Menu.Item>
                    <Menu.Item key="2">option 1.2</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="laptop" />
                            subnav 2
                        </span>
                    }
                >
                    <Menu.Item key="3">option 2.1</Menu.Item>
                    <Menu.Item key="4">option 2.2</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                            <Icon type="notification" />
                            subnav 3
                        </span>
                    }
                >
                    <Menu.Item key="5">option 3.1</Menu.Item>
                    <Menu.Item key="6">option 3.2</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}
