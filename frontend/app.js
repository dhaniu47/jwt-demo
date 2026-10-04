const statusBox = document.getElementById("status");
let accessToken = sessionStorage.getItem("access_token");

function show(value) {
  statusBox.textContent = typeof value === "string" ? value : JSON.stringify(value, null, 2);
}

async function request(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {"Content-Type": "application/json", ...(options.headers || {})}
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.detail || "Request failed");
  return data;
}

document.getElementById("register").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  try {
    show(await request("/auth/register", {
      method:"POST",
      body:JSON.stringify({username:form.get("username"), password:form.get("password")})
    }));
  } catch (error) { show(error.message); }
});

document.getElementById("login").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  try {
    const data = await request("/auth/login", {
      method:"POST",
      body:JSON.stringify({username:form.get("username"), password:form.get("password")})
    });
    accessToken = data.access_token;
    sessionStorage.setItem("access_token", accessToken);
    show("Login successful. JWT stored for this browser session.");
  } catch (error) { show(error.message); }
});

async function authenticated(path) {
  if (!accessToken) return show("Please log in first.");
  try {
    show(await request(path, {headers:{Authorization:"Bearer " + accessToken}}));
  } catch (error) { show(error.message); }
}

document.getElementById("me").onclick = () => authenticated("/auth/me");
document.getElementById("protected").onclick = () => authenticated("/api/protected");
document.getElementById("logout").onclick = () => {
  accessToken = null;
  sessionStorage.removeItem("access_token");
  show("Logged out.");
};
