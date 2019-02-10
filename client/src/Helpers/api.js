
const API = (() => {
     const serverAddr = "http://localhost:3000";
     const version   = "/api/v1.0.0";
     return {
               URL_LOGIN     : `${serverAddr}${version}/login`,
               URL_REGISTER  : `${serverAddr}${version}/register`,
               URL_FORGOTPWD : `${serverAddr}${version}/forgotpassword`,
               URL_RESETPWD  : `${serverAddr}${version}/resetpassword`
     };
})();
export { API };
