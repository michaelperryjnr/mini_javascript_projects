let userName = "" || localStorage.getItem("username");
const enterBtn = document.getElementById("enter-btn");
const loader = document.getElementById("loader");
const loader2 = document.getElementById("loader2");
const authInput = document.getElementById("authInput");
const authUsername = document.getElementById("authInputUsername");
const authHeader = document.getElementById("auth-h2");
const authKeyText = document.getElementById("auth-key-text");
const authDiv = document.getElementById("authPage");
let authKey = "";
const authKeyCopy = document.getElementById("auth-key-text-copy");
const authCopyContainer = document.getElementById("copy-container");
const copyBtn = document.getElementById("copy-btn");

async function giveAuthKey() {
  try {
    userName = authUsername.value.trim();
    localStorage.setItem("username", userName);

    let payload = userName.toLowerCase();

    authKeyText.innerText = `Checking your account, ${payload}`;
    authHeader.innerText = "";
    authUsername.style.display = "none";
    enterBtn.style.display = "none";
    loader.style.display = "block";

    const response = await fetch(
      `https://bbf-backend.onrender.com/api/quiz/user/validate/${payload}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );

    const data = await response.json();

    if (data.isValid) {
      await handleExistingUser(data);
    } else {
      await handleNewUser();
    }
  } catch (error) {
    console.error("Fetch error:", error);
    authHeader.innerText = error.message;
    authKeyText.innerText = "Already have an auth key?";
    authHeader.style.display = "block";
    authUsername.style.display = "block";
    enterBtn.style.display = "block";
    loader.style.display = "none";
  }
}

async function handleExistingUser(data) {
  authKeyText.innerText = "Auth Key Created!";
  authHeader.innerText = "Hold on...";
  localStorage.setItem(
    "accessTokens",
    JSON.stringify({ username: userName, authKey: "" })
  );

  authKey = data?.accessKey?.accessKey;

  let tempKey = authKey.slice(0, 12) + "...";

  await new Promise((resolve) => setTimeout(resolve, 1000));
  localStorage.setItem("authUser", userName);
  loader.style.display = "none";
  authHeader.style.display = "none";
  authKeyText.style.display = "none";
  authCopyContainer.style.display = "flex";
  authKeyCopy.innerText = tempKey;
}

async function handleNewUser() {
  authKeyText.innerText = "Creating an account for you";
  authHeader.innerText = "Please wait...";
  loader.style.display = "block";

  await createUser();
  return;
}

enterBtn.addEventListener("click", () => {
  if (authUsername.value.trim() === "") {
    alert("Please enter your username");
    return;
  }

  if (
    authUsername.value.trim().toLowerCase().includes("bbflabs".toLowerCase())
  ) {
    authHeader.innerText = "Username cannot contain 'bbflabs'";
    authUsername.value = "";
    return;
  }

  if (authUsername.value.trim().length < 4) {
    authHeader.innerText = "Username must be at least 4 characters long";
    authUsername.value = "";
    return;
  }
  giveAuthKey();
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(authKey)
    .then(() => {
      copyBtn.innerText = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 2000);
    })
    .catch((err) => {
      throw new Error("Failed to copy");
    });
});

async function createUser() {
  try {
    userName = authUsername.value.trim();
    localStorage.setItem("username", userName);

    let payload = JSON.stringify({
      username: userName.toLowerCase(),
      role: "user",
    });

    const response = await fetch(
      `https://bbf-backend.onrender.com/api/quiz/user/add/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
        mode: "cors",
      }
    );

    if (!response.ok) {
      console.log(response);
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    if (data.success) {
      giveAuthKey();
    } else {
      throw new Error("Something went wrong on our end");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}
