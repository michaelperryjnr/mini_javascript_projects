const baseurl = "https://bbfquestions.vercel.app/api";

const username = localStorage.getItem("username") || "anonymous";
const scores = JSON.parse(localStorage.getItem("scores")) || [];

async function updateDetailsOnReload() {}
