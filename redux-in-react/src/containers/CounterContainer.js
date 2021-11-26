// 컨테이너 컴포넌트 : 리덕스 스토어의 상태를 조회하거나, 액션의 디스패치를 할 수 있는 컴포넌트
// HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트를 불러와서 샤용

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
  // useSelector는 리덕스 store의 상태를 조회하는 hook
  // state의 값은 store.getState() 함수를 호출했을 나타나는 결과와 동일
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    // shallowEqual을 통해 useSelector 최적화
    shallowEqual
  );

  // uiseDispatch는 리덕스 store의 dispatch를 함수에서 사용할 수 있게 해주는 hook

  const dispatch = useDispatch();
  // 각 액션을 dispatch하는 함수 생성
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
