import ContentHeader from "../../components/content-header/ContentHeader";
import React, { useState } from "react";
import { Button, Table } from "antd";
import {
  DeleteOutlined,
  DeleteTwoTone,
  EditTwoTone,
  PlusOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { withTranslation } from "../i18n";

const FlexContainer = styled.div`
  display: flex;
  font-size: 20px;
`;
const SeparatorSpacing = styled.div`
  margin-right: 15px;
`;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: () => {
      return (
        <FlexContainer>
          <a>
            <EditTwoTone />
          </a>
          <SeparatorSpacing />
          <a>
            <DeleteTwoTone />
          </a>
        </FlexContainer>
      );
    },
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];

const SpacedButton = styled(Button)`
  margin-bottom: 10px;
`;

const SpacedRemoveButton = styled(Button)`
  margin-bottom: 10px;
  margin-left: 10px;
`;

const Users = ({ t }) => {
  const [selectionType] = useState<"checkbox">("checkbox");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (rowKeys) => setSelectedRowKeys(rowKeys),
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <ContentHeader>{t("back-to-home")}</ContentHeader>

      <SpacedButton type="primary" icon={<PlusOutlined />}>
        Add new user
      </SpacedButton>

      {hasSelected ? (
        <SpacedRemoveButton type="primary" danger icon={<DeleteOutlined />}>
          Remove selected users
        </SpacedRemoveButton>
      ) : (
        <></>
      )}

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

Users.getInitialProps = async () => ({
  namespacesRequired: ["users"],
});

export default withTranslation("users")(Users);
