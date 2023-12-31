import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import ForgetPassword from "./pages/ForgetPassword";
import SubmitCod from "./pages/SubmitCod.tsx";
import NewPassword from "./pages/NewPassword.tsx";
import UserPage from "./pages/GeneralPage.tsx";
import Statistics from "./pages/Statistics.tsx";
import UserProfile from "./pages/UserProfile.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store.ts";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/submitCod" element={<SubmitCod />} />
                <Route path="/newPassword" element={<NewPassword />} />
                <Route path="/general" element={<UserPage />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/user" element={<UserProfile />} />
              </Routes>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}

export default App;
