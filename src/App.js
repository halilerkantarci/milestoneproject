import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import BlogContextProvider from "./contexts/BlogContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <AuthContextProvider>
      {/* <BlogContextProvider> */}
      <BrowserRouter>
        <AppRouter />
        <ToastContainer />
      </BrowserRouter>
      {/* </BlogContextProvider> */}
    </AuthContextProvider>
  );
}

export default App;
