import * as httpRequest from "~/utils/httpRequest";

export const login = async (data) => {
  const res = await httpRequest.post("/login", {
    ...data,
  });

  return res;
};

export const register = async (data) => {
  const res = await httpRequest.post("/register", {
    ...data,
  });

  return res;
};
