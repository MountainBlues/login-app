const hostname =
  process.env.NODE_ENV === "development" ? "https://backend.slogover.com:9443" : "https://backend.slogover.com:9443";

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