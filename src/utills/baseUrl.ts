const getBaseUrl = () => {
  // return "https://books-store-app-backend.vercel.app";
  // return "http://localhost:3000";
  console.log(import.meta.env.VITE_BASE_URL);
  return import.meta.env.VITE_BASE_URL == "production"
    ? "https://books-store-app-backend.vercel.app"
    : "http://localhost:3000";
};

export default getBaseUrl;
