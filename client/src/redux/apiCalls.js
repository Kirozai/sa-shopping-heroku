import { updateCredentialsStart, updateCredentialsSuccess, updateCredentialsSuccess2, getUserOrdersStart, getUserOrdersSuccess, getUserOrdersFailure, updateCredentialsFailure, loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure, newsletterregisterStart,  newsletterregisterSuccess, newsletterregisterFailure, checkCurrentPasswordStart, checkCurrentPasswordSuccess, checkCurrentPasswordFailure} from "./userRedux";
import { addCommentStart, addCommentSuccess, addCommentFailure, getCommentStart, getCommentSuccess, getCommentFailure, deleteCommentStart, deleteCommentSuccess, deleteCommentFailure, editCommentStart, editCommentSuccess, editCommentFailure, setEditModeStart, setEditModeSuccess, setEditModeFailure } from "./commentsratingsRedux";

import { publicRequest } from "../requestMethods";
const CryptoJS = require("crypto-js");

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const unconfirmPassword = async (dispatch) => {
  dispatch(checkCurrentPasswordStart());
  try {
    dispatch(checkCurrentPasswordSuccess(null));
  } catch (err) {
    dispatch(checkCurrentPasswordFailure());
  }
};

export const checkCurrentPassword = async (dispatch, id, currentPassword) => {
  dispatch(checkCurrentPasswordStart());
  try {
    const res = await publicRequest.post("/auth/checkpassword", {id: id, currentPassword: currentPassword});
    dispatch(checkCurrentPasswordSuccess(res.data));
  } catch (err) {
    dispatch(checkCurrentPasswordFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const addComment = async (dispatch, username, id, rating, text) => {
  dispatch(addCommentStart());
  try {
    const res = await publicRequest.post("/commentsratings/addcommentrating", {
      username: username, 
      id: id, 
      rating: rating, 
      text: text
    });
    dispatch(addCommentSuccess(res.data));
  } catch (err) {
    dispatch(addCommentFailure());
  }
};

export const deleteComment = async (dispatch, commentid) => {
  dispatch(deleteCommentStart());
  try {
    const res = await publicRequest.delete(`/commentsratings/deletecommentrating/${commentid}`);
    dispatch(deleteCommentSuccess(commentid));
  } catch (err) {
    dispatch(deleteCommentFailure());
  }
};


export const getCommentsratings = async (dispatch, id) => {
  dispatch(getCommentStart());
  try {
    const res = await publicRequest.get(`/commentsratings/find/${id}`);
    dispatch(getCommentSuccess(res.data));
  } catch (err) {
    dispatch(getCommentFailure());
  }
};

export const updateComment = async (dispatch, commentid, text, rating) => {
  dispatch(editCommentStart());
  try {
    const res = await publicRequest.put(`/commentsratings/editcommentrating/${commentid}`, {
      text: text,
      rating: rating
    });
    dispatch(editCommentSuccess({commentid, text, rating}));
  } catch (err) {
    dispatch(editCommentFailure());
  }
};

export const setEditMode = async (dispatch) => {
  dispatch(setEditModeStart());
  try {
    dispatch(setEditModeSuccess());
  } catch (err) {
    dispatch(setEditModeFailure());
  }
};


export const updateCredentials = async (dispatch, id, type, username, email, password) => {
  dispatch(updateCredentialsStart())
  try {
    if (type === "username") {
      const res = await publicRequest.put("/auth/updateUsername", {id: id, username: username});
      dispatch(updateCredentialsSuccess(username))
    } else if (type === "email") {
      const res = await publicRequest.put("/auth/updateEmail", {id: id, email: email});
      dispatch(updateCredentialsSuccess2(email))
    } else if (type === "password") {
      const res = await publicRequest.put("/auth/updatePassword", {id: id, password: password});
    }   
  } catch (err) {
    dispatch(updateCredentialsFailure())
  }
};

export const newsletterregister = async (dispatch, user) => {
  dispatch(newsletterregisterStart());
  try {
    const res = await publicRequest.post("/auth/newsletterregister", user);
    dispatch(newsletterregisterSuccess(res.data));
  } catch (err) {
    dispatch(newsletterregisterFailure());
  }
};

export const getUserOrders = async (dispatch, userId) => {
  dispatch(getUserOrdersStart());
  try {
    const res = await publicRequest.get(`/orders/find/${userId}`);
    dispatch(getUserOrdersSuccess(res.data));
  } catch (err) {
    dispatch(getUserOrdersFailure());
  }
};