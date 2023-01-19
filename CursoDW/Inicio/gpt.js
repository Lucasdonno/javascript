var loginPage = document.createElement('div');
loginPage.innerHTML = '<form action="login.php" method="post">' +
  '<input type="text" name="username" placeholder="Username" />' +
  '<input type="password" name="password" placeholder="Password" />' +
  '<input type="submit" value="Login" />' +
  '</form>' +
  '<a href="forgot.php">Forgot my password</a>' +
  '<a href="register.php">Register</a>';
document.body.appendChild(loginPage)