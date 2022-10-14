import React from "react";
import styled from "styled-components";
import { detailTodo } from "../redux/modules/Todos";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = () => {
  const todo = useSelector((state) => state.Todos.todo);

  console.log(todo.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(detailTodo(id));
  }, [dispatch, id]);
  return (
    <div>
      <DetailLayout>
        <DetailHeader>
          <IdStyle>id:{todo.id}</IdStyle>
          <BeforeButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </BeforeButton>
        </DetailHeader>
        <TextContainer>
          <TitleText>{todo.title}</TitleText>
          <ContentText>{todo.content} </ContentText>
        </TextContainer>
      </DetailLayout>
    </div>
  );
};

export default Detail;

const DetailLayout = styled.div`
  width: 100%;
  max-width: 800px;
  height: 800px;
  background-color: salmon;
  margin-left: auto;
  margin-right: auto;
`;

const DetailHeader = styled.div`
  width: 100%;
  max-width: 800px;
  height: 80px;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const IdStyle = styled.div`
  font-size: x-large;
  font-weight: 500;
  margin-left: 30px;
  margin-right: auto;
`;

const BeforeButton = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: yellowgreen;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

const TextContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-left: 50px;
  margin-top: 50px;
`;

const TitleText = styled.div`
  font-size: xx-large;
  font-family: 800;
  margin-bottom: 50px;
`;

const ContentText = styled.div`
  font-size: x-large;
  font-family: 500;
`;
