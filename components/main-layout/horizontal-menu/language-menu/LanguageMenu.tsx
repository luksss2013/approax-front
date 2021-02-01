import { Menu } from "antd";
import React, { useContext, useEffect } from "react";
import { i18n, withTranslation } from "../../../../pages/i18n";
import { I18nContext } from "next-i18next";
import styled from "styled-components";
import { useRouter } from "next/router";

const FlexMenu = styled(Menu)`
  display: flex;
  place-content: flex-end;
`;

const { SubMenu, Item } = Menu;

const LanguageMenu = (props) => {
  const { t } = props;
  const {
    i18n: { language },
  } = useContext(I18nContext);

  return (
    <FlexMenu
      {...props}
      mode="horizontal"
      onClick={({ key }) => i18n.changeLanguage(key.toString())}
    >
      <SubMenu key="1" title={t(language)}>
        <Item key="en">{t("en")}</Item>
        <Item key="pt">{t("pt")}</Item>
      </SubMenu>
    </FlexMenu>
  );
};

LanguageMenu.getInitialProps = async () => ({
  namespacesRequired: ["language-menu"],
});

export default withTranslation("language-menu")(LanguageMenu);
