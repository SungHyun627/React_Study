const myLogger = (store) => (next) => (action) => {
  console.log(action);
  //   다음 미들웨어에게 액션 전달
  const result = next(action);
  //   반환하는 값은 dispatch의 결과물

  //   업데이트 이후 상태 조회
  console.log("\t", store.getState());
  return result;
};
export default myLogger;
