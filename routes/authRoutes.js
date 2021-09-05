const passport = require("passport");

module.exports = (app) => {
  /**
   * Express route handler using the http get method takes 2 arguments.
   * The first argument is the route definition.  Here it is a '/' route.
   * The second argument is an arrow callback function that
   * takes a request and response argument.
   * This function gets called whenever the get route is called.
   * In the function body a response using res.send() is created to send back to the request;
   */
  app.get("/", (req, res) => {
    res.send({ hey: "This is Emailman" });
  });

  /**
   * Route handler that will start the Google OAuth flow that we set up in Passport above.
   * GoogleStrategy has an internal indentifier called 'google' that is tied to the clientID
   * and clientSecret keys and callbackURL.
   */
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      /**
       * This tells Google that we want access to this users profile and email.
       * Google has a predefined list of categories that you can use in scope
       * that will give access to a user's account if used in the scope array.
       */
      scope: ["profile", "email"],
    })
    /*
     * This returns a "Sign in with Google" screen and a url that looks something like this:
     * https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=759496007968-ipooa6oqeehjgo3884l75ns7isti35ke.apps.googleusercontent.com&flowName=GeneralOAuthFlow
     * The user chooses a google email account and if successful we reach the route handler below:
     * /auth/google/callback.
     */
  );

  /**
   * Route handler that uses the Passport GoogleStrategy callbackURL with code string
   * identifier that Google just sent to this app after the user has granted permission.
   * This gets us to the 2nd argument in the GoogleStrategy where we have access to the
   * access token and the user's profile.
   */
  app.get("/auth/google/callback", passport.authenticate("google"));
};
