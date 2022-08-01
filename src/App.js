import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import BlogContextProvider from "./contexts/BlogContext";
function App() {
  return (
    <AuthContextProvider>
      {/* <BlogContextProvider> */}
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      {/* </BlogContextProvider> */}
    </AuthContextProvider>
  );
}

export default App;
