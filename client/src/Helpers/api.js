
const API = (() => {
     const serverAddr = "http://localhost:3000";
     const version   = "/api/v1.0.0";
     return {
               URL_LOGIN : `${ serverAddr + version }/login`
     };
})();
export { API };
