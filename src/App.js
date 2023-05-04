import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./component/AboutIconLink";
import PostPage from "./component/PostPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/post/*" element={<PostPage />}></Route>
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
