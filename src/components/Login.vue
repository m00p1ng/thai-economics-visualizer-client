<template>
  <div class="row" id="login-card">
    <div class="col s12 m8 offset-m2">
      <div class="card">
        <div class="card-content">
          <span class="card-title center"><h3>Login</h3></span>
          <div class="row">
            <form class="col s12 m8 offset-m2">
              <div class="row">
                <div class="input-field">
                  <input id="userth" type="text" class="validate">
                  <label for="userth">Userth</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field">
                  <input id="password" type="password" class="validate">
                  <label for="password">Password</label>
                </div>
              </div>
              <div class="right">
                <a href="/" class="btn-flat">Forgot password</a>
                <button type="submit" class="btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
            
</template>

<style>
#login-card {
  margin: 2.5em 0;
}
</style>

