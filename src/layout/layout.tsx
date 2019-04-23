import { AppContent } from './content';
import { AppBreadcrumb } from './breadcrumb';
import React, { Component } from 'react'

import { Icon, Layout, Menu } from 'antd';
import {AppSidebar} from './sidebar'
import {AppHeader} from './header'
const { SubMenu } = Menu

export interface AppLayoutProps {
    children: React.ReactNode
}

/* Responsive main layout of app. */
export function AppLayout(props: AppLayoutProps) {
  return (
      <Layout>
          <AppHeader />
          <Layout>
              <AppSidebar />
              <Layout style={{ padding: '0 24px 24px' }}>
                  <AppBreadcrumb />
                  <AppContent>{props.children}</AppContent>
              </Layout>
          </Layout>
      </Layout>
  )
}
