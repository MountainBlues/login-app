const hostname =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "http://localhost:3001";

export const invoke = (url, options = {}) => {
  console.log('API request ===============>', options)
  return fetch(`${hostname}${url}`, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
};