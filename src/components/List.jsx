import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../redux/modules/Todos";
import { Link } from "react-router-dom";

const List = () => {
  const exTodo = useSelector((state) => state.Todos.exTodo);
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const onUpdateHandler = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <div>
      <ListContainer>
        <CardContainer>
          <TitleBox>
            <TitleType>하고 있엉! 할거야! 한다!</TitleType>
          </TitleBox>
          {exTodo.map((todo) => {
            if (!todo.isDone) {
              return (
                <CardBox key={todo.id}>
                  <DetailButton>
                    <StLink to={`/detail/${todo.id}`} key={todo.id}>
                      <div>상세보기</div>
                    </StLink>
                  </DetailButton>
                  <CardTitle>{todo.title}</CardTitle>
                  <CardContent>{todo.content}</CardContent>
                  <ButtonContainer>
                    <DeleteButton onClick={() => onDeleteHandler(todo.id)}>
                      삭제
                    </DeleteButton>
                    <DoneCancelButton onClick={() => onUpdateHandler(todo.id)}>
                      {todo.isDone ? "취소!" : "완료!"}
                    </DoneCancelButton>
                  </ButtonContainer>
                </CardBox>
              );
            } else {
              return null;
            }
          })}
        </CardContainer>
      </ListContainer>
      <ListContainer2>
        <TitleBox>
          <TitleType>해냈다!!!!!</TitleType>
        </TitleBox>
        <CardContainer2>
          {exTodo.map((todo) => {
            if (todo.isDone) {
              return (
                <CardBox key={todo.id}>
                  <DetailButton>
                    {" "}
                    <StLink to={`/detail/${todo.id}`} key={todo.id}>
                      <div>상세보기</div>
                    </StLink>{" "}
                  </DetailButton>
                  <CardTitle> {todo.title} </CardTitle>
                  <CardContent> {todo.content} </CardContent>
                  <ButtonContainer>
                    <DeleteButton onClick={() => onDeleteHandler(todo.id)}>
                      삭제
                    </DeleteButton>
                    <DoneCancelButton onClick={() => onUpdateHandler(todo.id)}>
                      {todo.isDone ? "취소!" : "완료!"}
                    </DoneCancelButton>
                  </ButtonContainer>
                </CardBox>
              );
            } else {
              return null;
            }
          })}
        </CardContainer2>
      </ListContainer2>
    </div>
  );
};

export default List;

const ListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  max-height: 300px;
  /* background-color: aqua; */
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
const ListContainer2 = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  max-height: 300px;
  /* background-color: aqua; */
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100px;
  /* background-color: beige; */
  display: flex;
  align-items: center;
`;
const TitleType = styled.div`
  font-weight: 900;
  font-size: xx-large;
  margin-left: 30px;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* background-color: lemonchiffon; */
`;
const CardContainer2 = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  max-height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* background-color: lemonchiffon; */
`;

const CardBox = styled.div`
  width: 300px;
  height: 200px;
  margin-left: 20px;
  margin-right: 20px;
  border: 2px solid forestgreen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const DetailButton = styled.div`
  width: 80px;
  height: 20px;
  border: 1px solid salmon;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-bottom: 10px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;
const CardTitle = styled.div`
  font-weight: 500;
  font-size: x-large;
  padding-left: 20px;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  font-weight: 300;
  font-size: large;
  padding-left: 20px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const DeleteButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: hotpink;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoneCancelButton = styled.button`
  width: 80px;
  height: 30px;
  background-color: lightblue;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
