import bg from "@/assets/images/bg.png"
import LoginForm from "@/components/LoginForm"
const Login: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className=''>
        <LoginForm />
      </div>
    </div>
  )
}
export default Login
