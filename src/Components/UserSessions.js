var UserSessions = (function() {
    var UserEmail = "";
  
    var getEmail = function() {
      return UserEmail;    // Or pull this from cookie/localStorage
    };
  
    var setEmail = function(email) {
        UserEmail = email;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getEmail: getEmail,
      setEmail: setEmail
    }
  
  })();

  
export default UserSessions;