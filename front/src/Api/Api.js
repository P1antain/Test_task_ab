import axios from "axios";

const interfaceApi = axios.create({
  baseURL: "http://p1antain.api.nomoredomains.club/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const settingApi = {
  getUserApi() {
    return interfaceApi.get("card");
  },
  postUserApi(users) {
    return interfaceApi.post("card", users);
  },
  deleteUserApi() {
    return interfaceApi.delete("card");
  },
};
