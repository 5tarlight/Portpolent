export const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const handleRegEx = /[a-z0-9]{4,20}/;
export const usernameRegEx = /[\w가-힣]{2,10}/;
export const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/;

export const validateEmail = (email: string) =>
  emailRegEx.test(email) && email.length <= 100;

export const validateHandle = (handle: string) => handleRegEx.test(handle);

export const validateUsername = (username: string) =>
  usernameRegEx.test(username);

export const validatePassword = (pw: string) => passwordRegEx.test(pw);
