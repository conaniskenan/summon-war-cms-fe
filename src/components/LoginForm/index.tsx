/*
 * @Author: hypocrisy
 * @Date: 2024-03-12 14:25:34
 * @LastEditors: hypocrisy
 * @LastEditTime: 2024-03-21 17:21:41
 * @FilePath: \summon-war-cms-fe\src\components\LoginForm\index.tsx
 */
import NormalLoginForm from "@/components/NormalLoginForm"
import PhoneLoginForm from "@/components/PhoneLoginForm"
import styles from "./style/index.module.styl"
import { useState } from "react"
import Captcha from "../Captcha"
import { useStores } from "@/store"
const LoginForm: React.FC = () => {
  const [isNormalLogin, setIsNormalLogin] = useState(true)
  const { userStore } = useStores()
  const { verify, normalLogin } = userStore
  return (
    <div style={{ width: 300 }}>
      <div className={styles.login_tab}>
        <button
          className={styles.login_tab_item}
          onClick={() => {
            setIsNormalLogin(true)
          }}
        >
          账号登录
        </button>
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            backgroundColor: "#eee",
            color: "#eee",
          }}
        >
          |
        </span>
        <button
          className={styles.login_tab_item}
          onClick={() => {
            setIsNormalLogin(false)
          }}
        >
          手机号登录
        </button>
      </div>
      <div>
        {isNormalLogin ? <NormalLoginForm /> : <PhoneLoginForm />}
      </div>
      <div>
        <button
          className={styles.login_btn}
          onClick={() => {
            isNormalLogin ? normalLogin() : console.log("phone login")
          }}
          id='login-button'
        >
          登&nbsp;&nbsp;&nbsp;录
        </button>
      </div>
      {verify && <Captcha />}
    </div>
  )
}
export default LoginForm
