import React from 'react'
import { Icon, Layout, Menu } from 'antd'
const { Content, Sider } = Layout


type AppContentProps = {
    children: React.ReactNode
}
export function AppContent(props: AppContentProps) {
    return (
        <Content
            style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
        >
            {props.children}
        </Content>
    )
}
