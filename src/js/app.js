// JS Goes here - ES6 supported

// Attempt to grab user.
const user = auth.currentUser();

// Netlify CMS.
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/";
      });
    }
  });
}
