const app = document.getElementById("app");
const baseUrl = "https://api.theniitettey.live/api/v1";
let courses = [];

const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
  updateThemeIcon();
});

function updateThemeIcon() {
  const isDark = html.classList.contains("dark");
  themeToggle.innerHTML = isDark
    ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>';
}

updateThemeIcon();

function disableButton(buttonSelector = "button[type='submit']") {
  const button = document.querySelector(buttonSelector);
  if (button) {
    button.setAttribute("disabled", true);
    button.classList.add("opacity-50");
    button.classList.add("cursor-not-allowed");
  }
}

function enableButton(buttonSelector = "button[type='submit']") {
  const button = document.querySelector(buttonSelector);
  if (button) {
    button.removeAttribute("disabled");
    button.classList.remove("opacity-50");
    button.classList.remove("cursor-not-allowed");
  }
}

async function fetchUserProfile() {
  try {
    const response = await fetch(`${baseUrl}/user/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (response.ok) {
      const profile = await response.json();
      document.getElementById("profile-section").classList.remove("hidden");
      document.getElementById("profile-name").textContent = profile.user.name;
      document.getElementById("profile-email").textContent = profile.user.email;
      document.getElementById("profile-avatar").textContent = profile.user.name
        .charAt(0)
        .toUpperCase();
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

async function fetchCourses() {
  try {
    const response = await fetch(`${baseUrl}/courses`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      courses = data.courses;
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
}

function renderLogin() {
  document.getElementById("profile-section").classList.add("hidden");
  app.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Login</h2>
        <form id="login-form" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input type="text" id="username" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your username">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input type="password" id="password" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your password">
          </div>
          <button type="submit"
            class="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors">
            Login
          </button>
        </form>
        <p class="mt-4 text-center text-gray-600 dark:text-gray-400">
          Don't have an account? 
          <a href="#" class="text-green-600 hover:text-green-500 font-medium" id="to-register">Register</a>
        </p>
      `;

  document
    .getElementById("to-register")
    .addEventListener("click", renderRegister);
  document.getElementById("login-form").addEventListener("submit", handleLogin);
}

function renderRegister() {
  app.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Register</h2>
        <form id="register-form" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input type="text" id="name" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input type="text" id="username" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Choose a username">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" id="email" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input type="password" id="password" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Choose a password">
          </div>
          <button type="submit"
            class="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors">
            Register
          </button>
        </form>
        <p class="mt-4 text-center text-gray-600 dark:text-gray-400">
          Already have an account? 
          <a href="#" class="text-green-600 hover:text-green-500 font-medium" id="to-login">Login</a>
        </p>
      `;

  document.getElementById("to-login").addEventListener("click", renderLogin);
  document
    .getElementById("register-form")
    .addEventListener("submit", handleRegister);
}

function renderUploadChoice() {
  fetchUserProfile();
  fetchCourses();
  app.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Choose Upload Type</h2>
        <div class="space-y-4">
          <button id="file-upload-btn"
            class="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors">
            Upload File
          </button>
          <button id="link-upload-btn"
            class="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium rounded-lg transition-colors">
            Upload Link
          </button>
        </div>
        <div class="mt-4 text-center">
          <a href="#" id="contact-admin" class="text-violet-600 hover:text-violet-500 font-medium">Can't find your course? Contact admin</a>
        </div>
        <div class="mt-4 flex justify-between text-sm">
          <a href="#" class="text-green-600 hover:text-green-500 font-medium" id="to-payment">Go to Payment</a>
          <a href="#" class="text-red-600 hover:text-red-500 font-medium" id="to-logout">Logout</a>
        </div>
      `;

  document
    .getElementById("file-upload-btn")
    .addEventListener("click", () => renderUpload("file"));
  document
    .getElementById("link-upload-btn")
    .addEventListener("click", () => renderUpload("link"));
  document
    .getElementById("contact-admin")
    .addEventListener("click", contactAdmin);
  document
    .getElementById("to-payment")
    .addEventListener("click", renderPayment);
  document.getElementById("to-logout").addEventListener("click", handleLogout);
}

function renderUpload(type) {
  const isFile = type === "file";
  app.innerHTML = `
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Upload ${
          isFile ? "File" : "Link"
        }</h2>
        <form id="upload-form" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Course</label>
            <select id="courseId" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white">
              <option value="">Select a course</option>
              ${courses
                .map(
                  (course) =>
                    `<option value="${course._id}">${course.code}</option>`
                )
                .join("")}
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
            <input type="text" id="title" required
              class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter material title">
          </div>
          ${
            isFile
              ? `
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">File</label>
              <input type="file" id="file" required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-gray-700 dark:file:text-gray-200">
            </div>
          `
              : `
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Link</label>
              <input type="url" id="link" required
                class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter material link">
            </div>
          `
          }
          <button type="submit"
            class="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium rounded-lg transition-colors">
            Upload
          </button>
        </form>
        <div class="mt-4 flex justify-between text-sm">
          <a href="#" class="text-green-600 hover:text-green-500 font-medium" id="back-to-choice">Back to Upload Choice</a>
          <a href="#" class="text-red-600 hover:text-red-500 font-medium" id="to-logout">Logout</a>
        </div>
      `;

  document
    .getElementById("back-to-choice")
    .addEventListener("click", renderUploadChoice);
  document.getElementById("to-logout").addEventListener("click", handleLogout);
  document
    .getElementById("upload-form")
    .addEventListener("submit", (e) => handleUpload(e, type));
}

function contactAdmin() {
  showToast("Contacting admin at admin@theniitettey.live", "success");
  window.location.href =
    "https://wa.me/233208860872?text=Hi%20Admin%20%40%20BBF%20Labs%2C%0A%0AI%20hope%20you%27re%20doing%20well.%20I%20am%20currently%20trying%20to%20access%20my%20course%20on%20the%20platform%2C%20but%20it%20seems%20that%20my%20course%20isn%27t%20listed%20or%20available.%20Could%20you%20please%20assist%20in%20adding%20it%20or%20provide%20guidance%20on%20how%20to%20proceed%3F%0A%0AThank%20you%20for%20your%20help%21%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D";
}

async function handleUpload(event, type) {
  event.preventDefault();

  const courseId = courses.filter(
    (course) => course._id === document.getElementById("courseId").value
  )[0]._id;

  const title = document.getElementById("title").value;

  const formData = new FormData();
  formData.append("courseId", courseId);
  formData.append("title", title);

  let body = {
    title: title,
    courseId: courseId,
  };

  if (type === "file") {
    const file = document.getElementById("file").files[0];
    formData.append("file", file);
  } else {
    const link = document.getElementById("link").value;
    body.link = link;
  }

  try {
    let response;
    disableButton();
    if (type === "file") {
      response = await fetch(`${baseUrl}/materials/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    } else {
      const data = JSON.stringify(body);
      response = await fetch(`${baseUrl}/materials/li/upload`, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    }

    const data = await response.json();

    if (response.ok) {
      showToast(
        `${type === "file" ? "File" : "Link"} uploaded successfully`,
        "success"
      );
      renderUploadChoice();
    } else {
      showToast("Failed" + data.message || "Upload failed", "error");
    }

    enableButton();
  } catch (error) {
    showToast(`Error uploading ${type}`, "error");
    enableButton();
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const username = document
    .getElementById("username")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("password").value;

  try {
    disableButton();
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("accessToken", data.accessToken);
      showToast("Login successful", "success");
      renderUploadChoice();
    } else {
      showToast(data.message || "Login failed", "error");
    }
    enableButton();
  } catch (error) {
    showToast("Error logging in", "error");
    enableButton();
  }
}

async function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const username = document
    .getElementById("username")
    .value.trim()
    .toLowerCase();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  try {
    disableButton();
    const response = await fetch(`${baseUrl}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      showToast("Registration successful", "success");
      renderLogin();
    } else {
      showToast(data.message || "Registration failed", "error");
    }
    enableButton();
  } catch (error) {
    showToast("Error registering", "error");
    enableButton();
  }
}

function handleLogout() {
  localStorage.removeItem("accessToken");
  showToast("Logged out successfully", "success");
  renderLogin();
}

function renderPayment() {
  showToast("Watch this space", "error");
}

const toastContainer = document.getElementById("toast-container");

function showToast(message, type = "default", duration = 3000) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  toast.offsetHeight;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, duration);
}

//renderLogin();
