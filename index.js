const express = require("express");
require("./services/passport");

/** Express server */
const app = express();

/**
 * authRoutes returns a function which we immediately call with app as an argument.
 */
require("./routes/authRoutes")(app);

/** Express tells Node to listen to port 5000 for any incoming traffic. */
const PORT = process.env.PORT || 5000;
app.listen(PORT);
