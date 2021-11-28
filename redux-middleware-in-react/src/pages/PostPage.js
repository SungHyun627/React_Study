import PostContainer from "../containers/PostContainer";

function PostPage({ match }) {
  // URL 파라미터 조회
  const { id } = match.params;

  // 숫자로 변환
  return <PostContainer postId={parseInt(id, 10)} />;
}

export default PostPage;
