<template>
  <body>
    <header class="header-container">
      <div class="header">
        <img src="../assets/logo.svg" alt="Netflix"/>
        <div class="language-login">
          <div class="selector-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              role="img"
              data-icon="LanguagesSmall"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 
                        8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 
                        5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 
                        7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 
                        4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 
                        0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 
                        4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 
                        7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="currentColor"
              ></path>
            </svg>
            <select id="language-selector">
              <option>中文</option>
              <option>English</option>
            </select>
          </div>
          <button class="login-button" @click="goToLogin">登入</button>
        </div>
      </div>
    </header>
    <main class="content-container">
      <div class="content">
        <h1>看不完的電影與節目，還有更多精彩內容</h1>
        <p class="subscription">隨處都能觀賞，可隨時取消。</p>
        <p class="email-request">
          想觀賞這部嗎？請輸入您的電子郵件地址，以建立或重新啟用會員資格。
        </p>
        <div class="content-controls">
          <div class="email-input-container">
            <input type="text" id="email-input" name="email" required />
            <label for="email-input">電子郵件地址</label>
          </div>
          <button class="start-button">
            開始使用
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="ChevronRightStandard"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5859 12L8.29303 19.2928L9.70725 
                        20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 
                        17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </main>
  </body>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// 導向登入畫面
const goToLogin = () => {
    router.push('/login');
};

</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans TC", sans-serif;

  background: url("../assets/login/netflix-background.jpg") no-repeat center
    center fixed;
  background-size: auto 125%;
  color: white;
  position: relative;
}

body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0) 65%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0) 65%),
    linear-gradient(to left, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0) 65%),
    linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0) 65%);
  background-blend-mode: screen;
  z-index: 1;
}

.header-container {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 111px;
  padding: 17px 60px;
  box-sizing: border-box;
}

.header img {
  height: 57px;
}
.selector-box {
  position: relative;
}
.selector-box svg {
  position: absolute;
  top: 8px;
  left: 8px;
}
.language-login {
  display: flex;
  align-items: center;
}

#language-selector {
  height: 32px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
  padding: 0 25px;
  width: 123px;
}

#language-selector:focus {
  outline: none;
}

.login-button {
  width: 60px;
  height: 32px;
  border: none;
  border-radius: 3px;
  background-color: #e50914;
  color: white;
  font-size: 14px;
}

.content-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  overflow-y: auto;
}

.content {
  width: 100%;
  max-width: 1000px;
  text-align: center;
  padding-top: 90px;
}

.content h1 {
  width: fit-content;
  font-size: 3rem;
  margin: 0 auto;
}

.subscription {
  font-size: 25px;
  margin-top: 1rem;
}

.email-request {
  font-size: 20px;
  margin-top: 1.5rem;
}

.content-controls {
  width: 590px;
  margin: 16px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
}

.email-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 396px;
  height: 54px;
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 3px;
}

#email-input {
  height: 24px;
  width: 366px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  padding: 24px 16px 8px;
  background: transparent;
}

.email-input-container:focus-within {
  border: 2px solid white;
}

.email-input-container label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
  color: #bbbbbb;
  transition: all 0.1s ease;
}

#email-input:focus ~ label,
#email-input:valid ~ label {
  font-size: 0.75rem;
  transform: translateY(-120%);
}

.start-button {
  width: 180px;
  height: 56px;
  background-color: red;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-button > svg {
  margin-left: 0.75rem;
}

@media (max-width: 1280px) {
  .header {
    margin: 0;
    padding: 17px 30px;
  }
}

@media (max-width: 960px) {
  .header img {
    width: 95px;
  }
  .content {
    padding-top: 0px;
  }
  .content h1 {
    font-size: 32px;
  }
  .subscription,
  .email-request {
    font-size: 18px;
  }
}

@media (max-width: 600px) {
  #language-selector {
    width: 0px;
  }
  .content-controls {
    width: 90%;
    flex-direction: column;
  }
  .email-input-container {
    width: 100%;
    margin-bottom: 15px;
  }
  .start-button {
    width: 136px;
    height: 48px;
    font-size: 1.2rem;
  }
}

@media (max-width: 375px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 197px) {
  .language-login {
    flex-direction: column;
  }
  .content-container {
    align-items: start;
  }
  .header-container {
    position: relative;
  }
}
</style>
