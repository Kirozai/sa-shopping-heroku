import { createSlice } from "@reduxjs/toolkit";

const commentsratingsSlice = createSlice({
  name: "commentsratings",
  initialState: {
    commentsratings: [],
    editmode: false
  },
  reducers: {
    addCommentStart: (state) => {
      state.isFetching = true;
    },
    addCommentSuccess: (state, action) => {
      state.isFetching = false;
      state.commentsratings.push(action.payload)
      state.error = false;
    },
    addCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteCommentStart: (state) => {
      state.isFetching = true;
    },
    deleteCommentSuccess: (state, action) => {
      state.isFetching = false;
      state.commentsratings.splice(
        state.commentsratings.findIndex((comment) => comment._id === action.payload),
        1
      );
    },
    deleteCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    editCommentStart: (state) => {
      state.isFetching = true;
    },

    editCommentSuccess: (state, action) => {
      state.isFetching = false;
      const commentIndex = state.commentsratings.findIndex((comment) => comment._id === action.payload.commentid)
      state.commentsratings[commentIndex].text = action.payload.text
      state.commentsratings[commentIndex].rating = action.payload.rating
      state.editmode = false
    },
    editCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    getCommentStart: (state) => {
      state.isFetching = true;
    },
    getCommentSuccess: (state, action) => {
      state.isFetching = false;
      state.commentsratings = action.payload
    },
    getCommentFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    setEditModeStart: (state) => {
      state.isFetching = true;
    },
    setEditModeSuccess: (state) => {
      state.isFetching = false;
      state.editmode = true
    },
    setEditModeFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

  },
});

export const { setEditModeStart, setEditModeSuccess, setEditModeFailure, addCommentStart, addCommentSuccess, addCommentFailure, getCommentStart, getCommentSuccess, getCommentFailure, deleteCommentStart, deleteCommentSuccess, deleteCommentFailure, editCommentStart, editCommentSuccess, editCommentFailure } = commentsratingsSlice.actions;

export default commentsratingsSlice.reducer;
