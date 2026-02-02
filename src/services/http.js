// services/http.js

export async function httpGet(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error GET");
  return await res.json();
}

export async function httpPost(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Error POST");
  return await res.json();
}

export async function httpPut(url, data) {
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Error PUT");
  return await res.json();
}

export async function httpPatch(url, data) {
  const res = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Error PATCH");
  return await res.json();
}

export async function httpDelete(url) {
  const res = await fetch(url, { method: "DELETE" });
  if (!res.ok) throw new Error("Error DELETE");
}
