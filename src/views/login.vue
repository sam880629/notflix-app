<template>
  <body>
    <header>
      <a href="/"><img src="../assets/logo.svg" alt="logo" /></a>
    </header>
    <div class="form-wrapper">
      <h2>登入</h2>
      <form action="" method="post">
        <div class="form-input-container">
          <input
            type="text"
            id="email-or-phone-input"
            name="email_or_phone"
            required
          />
          <label for="email_or_phone">電子郵件地址或手機號碼</label>
        </div>
        <div class="form-input-container">
          <input type="password" id="password-input" name="password" required />
          <label for="password">密碼</label>
        </div>
        <button type="submit">登入</button>
        <div class="form-help">
          <div class="forget-password">
            <a href="#">忘記密碼?</a>
          </div>
          <div class="remember-me">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">記住我</label>
          </div>
        </div>
      </form>
      <p>尚未加入Notflix? <a href="#">馬上註冊</a></p>
      <small>
        此頁面受到 Google reCAPTCHA 保護，以確認您不是機器人。
        <a href="#">進一步了解。</a>
      </small>
    </div>
  </body>
</template>
<script setup></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans TC", sans-serif;
  background: #000;
}

body::before {
  content: "";
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background: url("../images/netflix-background.jpg");
}

header {
  position: fixed;
  padding: 18px 150px;
  z-index: 1;
}

header a img {
  width: 150px;
}

.form-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 5px;
  padding: 48px 68px;
  width: min-content;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.65);
}

.form-wrapper h2 {
  color: #fff;
  font-size: 2rem;
}

.form-wrapper form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
}

form .form-input-container {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 314px;
  height: 56px;
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 3px;
}

#email-or-phone-input,
#password-input {
  height: 24px;
  width: 100%;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  padding: 24px 16px 8px;
  background: transparent;
}

.form-input-container:focus-within {
  border: 2px solid white;
}

.form-input-container label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  pointer-events: none;
  color: #bbbbbb;
  transition: all 0.1s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 40px);
}

#email-or-phone-input:focus ~ label,
#password-input:focus ~ label {
  font-size: 0.75rem;
  transform: translateY(-120%);
}

#email-or-phone-input:valid ~ label,
#password-input:valid ~ label {
  font-size: 0.75rem;
  transform: translateY(-120%);
}

form .error {
  padding-bottom: 10px;
}

form button {
  width: auto;
  height: 40px;
  font-size: 1rem;
  background: #e50914;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 6px 16px;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.1s ease;
}

form button:hover {
  background: #c40812;
}

.form-wrapper a {
  text-decoration: none;
}

.form-wrapper a:hover {
  text-decoration: underline;
}

.form-wrapper :where(label, p, small, a) {
  color: #b3b3b3;
}

form .form-help {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

form .forget-password {
  margin-inline: auto;
  padding-bottom: 30px;
}

form .remember-me {
  display: flex;
}

form .remember-me input {
  margin-right: 10px;
  accent-color: #b3b3b3;
  transform: scale(1.5);
  transform-origin: left;
}

form .remember-me label {
  padding-left: 7px;
  font-size: 1rem;
}

form .form-help :where(label, a) {
  color: #fff;
  font-size: 1rem;
}

.form-wrapper p a {
  color: #fff;
}

.form-wrapper small {
  display: block;
  margin-top: 15px;
  color: #b3b3b3;
}

.form-wrapper small a {
  color: #0071eb;
}

@media (max-width: 1080px) {
  header {
    padding: 18px 25px;
  }
}

@media (max-width: 960px) {
  header a img {
    width: 90px;
  }
}

@media (max-width: 600px) {
  body::before {
    display: none;
  }

  header,
  .form-wrapper {
    padding: 18px;
  }

  header a img {
    width: 90px;
  }

  .form-wrapper {
    width: 100%;
    top: 43%;
    padding: 0 5%;
    box-sizing: border-box;
  }

  form .form-input-container {
    width: 100%;
  }

  .form-wrapper form {
    margin: 25px 0 40px;
  }
}
</style>
