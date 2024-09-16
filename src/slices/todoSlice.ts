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
  todos: [],
  temp: [],
  nextIndex: 0,
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
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    changeStatus: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    },
    editTitle: (state, action: PayloadAction<TodoEditTitle>) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
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
