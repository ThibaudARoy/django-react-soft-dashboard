let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "https://django-api-test-2713-85f86601-sy3y2cbo.onporter.run/api/"; //not ideal
}
export const API_SERVER = BACKEND_SERVER;
