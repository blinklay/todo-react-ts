import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TodoState {
  todos: Todo[];
  temp: Todo[];
  nextIndex: number;
}

interface TodoEditTitle {
  id: number;
  title: string;
}

const initialState: TodoState = {
  todos: localStorage.getItem("todos")
    ? (JSON.parse(localStorage.getItem("todos") as string) as Todo[])
    : [],
  temp: [],
  nextIndex: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") as string).length - 1
    : 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: state.nextIndex,
        title: action.payload,
        isCompleted: false,
      });
      state.nextIndex++;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeStatus: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTitle: (state, action: PayloadAction<TodoEditTitle>) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    filterTodo: (state, action: PayloadAction<string>) => {
      if (state.temp.length === 0) {
        state.temp = [...state.todos];
      }
      state.todos = state.todos.filter((item) =>
        item.title.includes(action.payload)
      );
    },
    cancelFiltered: (state) => {
      state.todos = [...state.temp];
      state.temp = [];
    },
  },
});

export const {
  addTodo,
  removeTodo,
  changeStatus,
  editTitle,
  filterTodo,
  cancelFiltered,
} = todoSlice.actions;
export default todoSlice.reducer;
