import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import ContentHeader from "../common/ContentHeader";
import { Button, Modal, Space, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { connect } from "react-redux";
import {
  clearCategoryState,
  getCategory,
} from "../../redux/actions/categoryActions";
class ListCategory extends Component {
  constructor() {
    super();
    this.state = {
      // dataSource: [
      //   { categoryId: 1, name: "computer", status: 0 },
      //   { categoryId: 2, name: "laptop", status: 0 },
      //   { categoryId: 3, name: "pc", status: 1 },
      //   { categoryId: 4, name: "server", status: 0 },
      //   { categoryId: 5, name: "mouse", status: 1 },
      //   { categoryId: 6, name: "APi", status: 1 },
      //   { categoryId: 7, name: "CPU", status: 0 },
      // ],

      category: {},
    };
  }

  componentDidMount = () => {
    this.props.getCategory();
    console.log("didMount");
  };

  componentWillUnmount = () => {
    this.props.clearCategoryState();
    console.log("wil Unmount");
  };

  editCategory = (category) => {
    console.log(category);
  };

  deleteCategory = () => {
    console.log(this.state.category);
  };

  openDeleteConfirmModal = (category) => {
    this.setState({ ...this.state, category: category });
    console.log(category);
    const message = "Do you want to delete this category" + category.name;
    return Modal.confirm({
      title: "Confirm",
      icon: <AiFillExclamationCircle />,
      content: message,
      onOk: this.deleteCategory,
      okText: "Delete Category",
      cancelText: "Cancel",
    });
  };

  render() {
    const { navigate } = this.props.router;
    const { categories } = this.props;
    // console.log(categories);
    return (
      <div>
        <ContentHeader
          navigate={navigate}
          title="List category"
          className="site-page-header"
        />
        <Table dataSource={categories} size="small" rowKey="id">
          <Column
            title="Category ID"
            key="id"
            dataIndex="id"
            width={40}
            align="center"
          ></Column>
          <Column title="name" key="name" dataIndex="name"></Column>
          <Column
            title="Status"
            key="status"
            dataIndex="status"
            width={80}
            render={(_, { status }) => {
              let color = "volcano";
              let name = "In visible";
              if (status === 0) {
                color = "green";
                name = "visible";
              }
              return <Tag color={color}>{name}</Tag>;
            }}
          ></Column>
          <Column
            title="Action"
            key="action"
            dataIndex="action"
            width={150}
            align="center"
            render={(_, record) => (
              <Space size="middle">
                <Button
                  key={record.key}
                  type="primary"
                  size="small"
                  onClick={() => this.editCategory(record)}
                >
                  <MdOutlineModeEdit style={{ marginRight: 8 }} /> Edit
                </Button>
                <Button
                  key={record.key}
                  type="primary"
                  danger
                  size="small"
                  onClick={() => this.openDeleteConfirmModal(record)}
                >
                  <MdDelete style={{ marginRight: 8 }} /> Delete
                </Button>
              </Space>
            )}
          ></Column>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = {
  getCategory,
  clearCategoryState,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListCategory)
);
