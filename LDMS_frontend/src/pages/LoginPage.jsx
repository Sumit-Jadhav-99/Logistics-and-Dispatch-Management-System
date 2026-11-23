import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // navigate("/dashboard");
      const role =
        data.user.roleId?.roleName;

      if (role === "SuperAdmin") {
        navigate("/dashboard");
      }

      else if (
        role === "Dispatcher"
      ) {
        navigate("/orders");
      }

      else if (
        role === "Driver"
      ) {
        navigate("/tracking");
      }

      else {
        navigate("/dashboard");
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">


      <form
        className="login-card"
        onSubmit={submitHandler}>


        <h2>LDMS Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button>
          Login
        </button>
        <a href="/" className="back-home">← Back To Home</a>


        {/* <Link to="/" className="back-home">
          ← Back To Home
        </Link> */}


      </form>

    </div>
  );
}

export default LoginPage;