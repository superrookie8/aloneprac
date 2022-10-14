import React from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Header from "../components/Hearder";
import List from "../components/List";

const TodoList = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </div>
  );
};

export default TodoList;
