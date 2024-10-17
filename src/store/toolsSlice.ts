import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tool } from '../types';

interface ToolsState {
  tools: Tool[];
  loading: boolean;
  error: string | null;
}

const initialState: ToolsState = {
  tools: [],
  loading: false,
  error: null,
};

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    fetchToolsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchToolsSuccess(state, action: PayloadAction<Tool[]>) {
      state.tools = action.payload;
      state.loading = false;
    },
    fetchToolsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addTool(state, action: PayloadAction<Tool>) {
      state.tools.push(action.payload);
    },
    updateTool(state, action: PayloadAction<Tool>) {
      const index = state.tools.findIndex(tool => tool.id === action.payload.id);
      if (index !== -1) {
        state.tools[index] = action.payload;
      }
    },
    deleteTool(state, action: PayloadAction<string>) {
      state.tools = state.tools.filter(tool => tool.id !== action.payload);
    },
  },
});

export const { 
  fetchToolsStart, 
  fetchToolsSuccess, 
  fetchToolsFailure, 
  addTool, 
  updateTool, 
  deleteTool 
} = toolsSlice.actions;

export default toolsSlice.reducer;