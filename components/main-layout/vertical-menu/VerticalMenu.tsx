import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "../../../pages/i18n";

const Logo = styled.div`
  height: 32px;
  background: #ccc;
  margin: 16px;
`;

const VerticalMenu = () => {
  const { SubMenu } = Menu;

  return (
    <>
      <Logo />

      <Menu mode="inline">
        <SubMenu key="sub1" icon={<SettingOutlined />} title="Settings">
          <Menu.Item key="1">
            <Link href="/users">
              <a>Usuários</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">Subcontas</Menu.Item>
          <Menu.Item key="3">Projetos</Menu.Item>
          <Menu.Item key="4">Conta</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default VerticalMenu;
