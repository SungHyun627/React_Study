// 액션 타입 생성
// Ducks 패턴을 따라 이름에 접두사 삽입
// 이를 통해 다른 모듈과 이름이 중복되는 것을 방지할 수 있다.
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성함수 만들기
// 액션 생성함수를 만들고 exprort하기
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0,
  diff: 1,
};

// reducer 선언하여 export default로 export
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECRAESE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
