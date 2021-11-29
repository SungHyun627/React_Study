// 프로미스를 다루는 리덕스 모듈 작성
// api/posts 안의 함수 모두 불러오기
import * as postsAPI from "../api/posts";
import {
  // createPromiseThunk,
  createPromiseSaga,
  createPromiseSagaById,
  reducerUtils,
  handleAsyncActions,
  // createPromiseThunkById,
  handleAsyncActionsById,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

// 포스트 여러개 조회
// 요청 시작
const GET_POSTS = "GET_POSTS";
// 요청 성공
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
// 요청 실패
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

// 포스트 하나 조회
const GET_POST = "GET_POST";
// 요청 성공
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
// 요청 실패
const GET_POST_ERROR = "GET_POST_ERROR";

// thunk 함수 리팩토링
// export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
// export const getPost = createPromiseThunkById(GET_POST, postAPI.getPostById);

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, meta: id });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

// function* getPostsSaga() {
//   try {
//     // 특정 함수 호출후 결과물이 반환 될 때까지 기다린다.
//     const posts = yield call(postAPI.getPosts);
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POSTS_ERROR,
//       error: true,
//       payload: e,
//     });
//   }
// }

// // 액션이 지니고 있는 값을 조회하고 싶을 때, action을 파라미터로 받아와서 사용
// function* getPostSaga(action) {
//   const param = action.payload;
//   const id = action.meta;
//   try {
//     const post = yield call(postAPI.getPostById, param);
//     yield put({
//       type: GET_POST_SUCCESS,
//       paylaod: post,
//       meta: id,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_ERROR,
//       error: true,
//       payload: e,
//       meta: id,
//     });
//   }
// }

// 사가 합치기
export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}

// initial()함수를 이용해서 리팩토링
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, "post", true)(state, action);
    default:
      return state;
  }
}

// 홈 화면으로 가는 thunk 작성
// 3번째 인자를 사용하여 withExtraArgument에서 넣어준 값 사용
export const goToHome =
  () =>
  (dispatch, getState, { history }) => {
    history.push("/");
  };
