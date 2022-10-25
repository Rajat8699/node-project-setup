const express = require("express");
const app = express();

//if port is available in env
const PORT = "3001";

require("./startups/middleware")(app);
require("./startups/routes")(app);

app.listen(PORT || 3001, () => {
    console.log(`listening on port ${PORT}`);
});
