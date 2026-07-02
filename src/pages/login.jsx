import { useNavigate } from "react-router-dom"

function Login({ setIsLogin }) {
  const navigate = useNavigate()

  return (
    <>
      <div className="login">
        <h1>LOGIN FORM</h1>
        <form method="post">
          <label>Username</label>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            id="name"
            required
          />
          <br />
          <br />
          <label>Password</label>
          <input
            type="password"
            placeholder="enter password"
            name="pass"
            id="pass"
            required
          />
          <br />
          <br />
          <br />
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault()
              localStorage.setItem("islogin", "true")
              setIsLogin(true)
              navigate("/home", { replace: true })
            }}
          >
            LOGIN
          </button>
        </form>
      </div>
      <style>
        {`
          h1{
            text-align: center;
            color:#e8e8ff;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
            margin-bottom: 24px;
          }
          body{
            background-image: url("https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-willpicturethis-1954524.jpg&fm=jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
          }
          .login{
            width: min(420px, 90vw);
            margin: 6vh auto;
            padding: 34px 28px;
            background: rgba(255, 255, 255, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.35);
            border-radius: 28px;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            display: flex;
            flex-direction: column;
            gap: 18px;
          }
          .btn{
            width: 100%;
            padding: 12px 16px;
            border-radius: 24px;
            background-color: rgba(20, 36, 170, 0.9);
            color: white;
            font-weight: 700;
            font-size: 15px;
            border: none;
            cursor: pointer;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.13);
            transition: transform 0.2s ease, background-color 0.2s ease;
          }
          .btn:hover {
            transform: translateY(-1px);
            background-color: rgba(32, 55, 235, 0.95);
          }
          label{
            font-weight: 700;
            font-size: 18px;
            color: #f7f7ff;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          }
          input{
            width: 100%;
            padding: 12px 14px;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.45);
            background: rgba(255, 255, 255, 0.85);
            outline: none;
            font-size: 15px;
            color: #1a1b26;
          }
          input:focus{
            border-color: rgba(100, 116, 255, 0.8);
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
          }
        `}
      </style>
    </>
  )
}

export default Login;