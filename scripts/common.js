/* -------------------------------- Selectors ------------------------------- */
const labelHeader = document.getElementById("header");
const labelFooter = document.getElementById("footer");

const addHeader = () => {
  const html = `
  <img class="logo-img" src="assests/images/logo.png" alt="logo" />
        <button type="button" class="login-icon btn btn-light " onclick="handleLogin()">Login</button>
  `;
  labelHeader.insertAdjacentHTML("afterbegin", html);
};

const addFooter = () => {
  const html = `
      <div class="contact-us">
        <button type="button" class="btn btn-info d-flex align-items-center justify-content-center text-light" onclick="handleContactUs('this')" >Contact Us</button>
      </div>

      <div class="copy-right">
        <p>&copy; 2020 ROOM SEARCH PVT LTD.</p>
      </div>

      <div class="social-logo">
        <a href="https://www.facebook.com/" target="_blank"
          ><img
            src="assests/images/facebook.png"
            width="22px"
            height="20px"
        /></a>
        <a href="https://www.instagram.com" target="_blank"
          ><img
            src="assests/images/instagram.png"
            width="22px"
            height="20px"
        /></a>
        <a href="https://twitter.com" target="_blank"
          ><img src="assests/images/twitter.png" width="22px" height="20px"
        /></a>
      </div>
    `;

  labelFooter.insertAdjacentHTML("afterbegin", html);
};

const display = () => {
  addHeader();
  addFooter();
};

display();
