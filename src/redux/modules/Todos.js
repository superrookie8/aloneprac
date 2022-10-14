//Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DETAIL_TODO = "DETAIL_TODO";

//Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const detailTodo = (payload) => {
  return {
    type: DETAIL_TODO,
    payload,
  };
};

const initialState = {
  exTodo: [
    {
      id: 1,
      title: "리액트 뿌셔 먹기",
      content: "뿌셔지는것은 나였다",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 발라 먹기",
      content: "발려지는것은 나였다",
      isDone: false,
    },
  ],
  todo: {
    id: 0,
    title: "",
    content: "",
    isDone: false,
  },
};

//리듀서 - 이름을 configStore 과 통일해야 함다.

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        exTodo: [...state.exTodo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        exTodo: state.exTodo.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        exTodo: state.exTodo.map((editTodo) => {
          if (editTodo.id === action.payload) {
            return {
              ...state,
              ...editTodo,
              isDone: !editTodo.isDone,
            };
          } else {
            return editTodo;
          }
        }),
      };
    case DETAIL_TODO:
      console.log(action.payload);
      return {
        ...state,
        todo: state.exTodo.find((todo) => {
          return todo.id == action.payload;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
