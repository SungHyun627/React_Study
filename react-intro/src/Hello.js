const Hello = ({ color, name, isSpecial }) => {
  // 비구조화 할당
  return (
    <div style={{ color }}>
      {/* 조건부 렌더링 */}
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
};

// 기본값 설정
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
