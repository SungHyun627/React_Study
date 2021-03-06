import { Route } from "react-router-dom";
// import CounterContainer from "./containers/CounterContainer";
// import PostListContainer from "./containers/PostListContainer";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <>
      <CounterContainer />
      {/* <PostListContainer /> */}
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
