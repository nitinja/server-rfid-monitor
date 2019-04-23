import { Layout, Menu, Avatar, Icon, Dropdown, Button } from 'antd'
import * as React from 'react'
import { ReactComponent as Logo } from '../media/app-logo.svg'

const { Header: AntHeader } = Layout

const menu = (
    <Menu>
        <Menu.Item key="1">
            <Icon type="setting" />
            Settings
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            My Profile
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3">
            <Icon type="logout" />
            Logout
        </Menu.Item>
    </Menu>
)

export function AppHeader() {
    return (
        <AntHeader
            className="header"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
            <div className="logo" style={{ width: 60, height: 40 }}>
                <Logo />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px', marginRight: 32 }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <Dropdown overlay={menu}>
                    <div>
                        <Avatar style={{ backgroundColor: '#87d068', justifySelf: 'flex-end' }} icon="user" />
                        <Icon type="caret-down" style={{ marginLeft:8, color: 'white' }} />
                    </div>
                </Dropdown>
            </div>
        </AntHeader>
    )
}
