const Hello = ({ color, name }) => {
  // 비구조화 할당
  return <div style={{ color }}>안녕하세요 {name}</div>;
};

// 기본값 설정
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
