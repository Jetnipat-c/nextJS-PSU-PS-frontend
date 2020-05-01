import { Layout, Menu, Breadcrumb } from 'antd'
import { useState, useEffect } from 'react'
import OptionPage from './Option'
import ProfilePage from './Profile'
const Footer = (prop) => {
const { Header, Content, Footer } = Layout

  return (
    <div>

      <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>

    </div>
  )
}
export default Footer