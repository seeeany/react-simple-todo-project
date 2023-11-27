import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToTodoPage = () => {
      return setTimeout(() => {
        navigate("/todo")
      }, 1000);
    };
    redirectToTodoPage();
  }, []);

  return <div>Welcome to my simple To Do list project</div>;
};

export default LandingPage;
