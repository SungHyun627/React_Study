// 프로미스를 다루는 리덕스 모듈 작성
// api/posts 안의 함수 모두 불러오기
import * as postAPI from "../api/posts";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

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
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postAPI.getPostById);

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
      return handleAsyncActions(GET_POSTS, 'posts')(state, action)
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, 'post')(state, action)
    default:
      return state;
  }
}
