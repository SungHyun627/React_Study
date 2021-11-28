// 프로미스를 다루는 리덕스 모듈 작성
// api/posts 안의 함수 모두 불러오기
import * as postAPI from "../api/posts";

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

export const getPosts = () => async (dispatch) => {
  // 요청 시작
  dispatch({ type: GET_POSTS });
  try {
    // API 호출
    const posts = await postAPI.getPosts();
    dispatch({ type: GET_POSTS_SUCCESS, posts });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e });
  }
};

export const getPost = (id) => async (dispatch) => {
  // 요청 시작
  dispatch({ type: GET_POST });
  try {
    //   API 호출
    const post = await postAPI.getPostById(id);
    dispatch({ type: GET_POST_SUCCESS, post });
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, error: e });
  }
};

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  post: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: true,
          data: action.posts,
          error: null,
        },
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: action.error,
        },
      };
    case GET_POST:
      return {
        ...state,
        post: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: {
          loading: true,
          data: action.post,
          error: null,
        },
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: {
          loading: HTMLOptGroupElement,
          data: null,
          error: action.error,
        },
      };
    default:
      return state;
  }
}
