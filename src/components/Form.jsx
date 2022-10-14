import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import nextId from "react-id-generator";
import { addTodo } from "../redux/modules/Todos";

const Form = () => {
  const id = nextId();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    content: "",
    isDone: false,
  });
  const { title, content } = inputs;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  // console.log(inputs);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputs.title.length === 0 || inputs.content.length === 0) {
      alert("내용을 넣어주세요 ");
      return;
    }
    dispatch(
      addTodo({
        ...inputs,
        id,
      })
    );
    setInputs("");
  };
  return (
    <div>
      <FormContainer onSubmit={onSubmitHandler}>
        <FontStyle>제목</FontStyle>
        <InputStyleOne
          type="text"
          name="title"
          value={inputs.title || ""}
          onChange={onChangeHandler}
        ></InputStyleOne>
        <FontStyle2>내용</FontStyle2>
        <InputStyleTwo
          type="text"
          name="content"
          value={inputs.content || ""}
          onChange={onChangeHandler}
        ></InputStyleTwo>
        <AddButton>추가하기</AddButton>
      </FormContainer>
    </div>
  );
};

export default Form;

const FormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  height: 100px;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FontStyle = styled.div`
  width: 50px;
  /* margin-right: auto; */
  margin-left: auto;
`;
const FontStyle2 = styled.div`
  width: 50px;
  /* margin-right: auto; */
  margin-left: auto;
`;

const InputStyleOne = styled.input`
  width: 300px;
  height: 30px;
  border: 2px solid aqua;
  border-radius: 10px;
  margin-right: auto;
  /* margin-left: auto; */
`;

const InputStyleTwo = styled.input`
  width: 300px;
  height: 30px;
  border: 2px solid aqua;
  border-radius: 10px;
  margin-right: auto;
  /* margin-left: auto; */
`;
const AddButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: slateblue;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;
