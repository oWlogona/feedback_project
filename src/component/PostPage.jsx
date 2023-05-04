import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function PostPage() {
  const status = 200;
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post</h1>

      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>HERE</h1>} />
      </Routes>
    </div>
  );
}

export default PostPage;
