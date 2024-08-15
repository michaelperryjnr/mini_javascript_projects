let userName = localStorage.getItem("username");
const enterBtn = document.getElementById("enter-btn"),
  loader = document.getElementById("loader"),
  loader2 = document.getElementById("loader2"),
  authInput = document.getElementById("authInput"),
  authUsername = document.getElementById("authInputUsername"),
  authHeader = document.getElementById("auth-h2"),
  authKeyText = document.getElementById("auth-key-text"),
  authDiv = document.getElementById("authPage");
let authKey = "";
const authKeyCopy = document.getElementById("auth-key-text-copy"),
  authCopyContainer = document.getElementById("copy-container"),
  copyBtn = document.getElementById("copy-btn");
async function giveAuthKey() {
  try {
    (userName = authUsername.value.trim()),
      localStorage.setItem("username", userName);
    var e = userName.toLowerCase();
    (authKeyText.innerText = "Checking your account, " + e),
      (authHeader.innerText = ""),
      (authUsername.style.display = "none"),
      (enterBtn.style.display = "none"),
      (loader.style.display = "block");
    var t = await (
      await fetch(
        "https://bbf-backend.onrender.com/api/quiz/user/validate/" + e,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
        }
      )
    ).json();
    t.isValid ? await handleExistingUser(t) : await handleNewUser();
  } catch (e) {
    console.error("Fetch error:", e),
      (authHeader.innerText = e.message),
      (authKeyText.innerText = "Already have an auth key?"),
      (authHeader.style.display = "block"),
      (authUsername.style.display = "block"),
      (enterBtn.style.display = "block"),
      (loader.style.display = "none");
  }
}
async function handleExistingUser(e) {
  (authKeyText.innerText = "Auth Key Created!"),
    (authHeader.innerText = "Hold on..."),
    localStorage.setItem(
      "accessTokens",
      JSON.stringify({ username: userName, authKey: "" })
    );
  e = (authKey = e?.accessKey?.accessKey).slice(0, 12) + "...";
  await new Promise((e) => setTimeout(e, 1e3)),
    localStorage.setItem("authUser", userName),
    (loader.style.display = "none"),
    (authHeader.style.display = "none"),
    (authKeyText.style.display = "none"),
    (authCopyContainer.style.display = "flex"),
    (authKeyCopy.innerText = e);
}
async function handleNewUser() {
  (authKeyText.innerText = "Creating an account for you"),
    (authHeader.innerText = "Please wait..."),
    (loader.style.display = "block"),
    await createUser();
}
async function createUser() {
  try {
    (userName = authUsername.value.trim()),
      localStorage.setItem("username", userName);
    var e = JSON.stringify({ username: userName.toLowerCase(), role: "user" }),
      t = await fetch("https://bbf-backend.onrender.com/api/quiz/user/add/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: e,
        mode: "cors",
      });
    if (!t.ok) throw (console.log(t), new Error("Something went wrong"));
    if (!(await t.json()).success)
      throw new Error("Something went wrong on our end");
    giveAuthKey();
  } catch (e) {
    throw (console.log(e), new Error("Something went wrong"));
  }
}
enterBtn.addEventListener("click", () => {
  "" === authUsername.value.trim()
    ? alert("Please enter your username")
    : giveAuthKey();
}),
  copyBtn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(authKey)
      .then(() => {
        (copyBtn.innerText = "Copied!"),
          setTimeout(() => {
            copyBtn.textContent = "Copy";
          }, 2e3);
      })
      .catch((e) => {
        throw new Error("Failed to copy");
      });
  });
