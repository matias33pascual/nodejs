const serverSimpleExample = require("./simple_example/server_simple_example");

const port = process.env.PORT || 3000;
serverSimpleExample.listen(port, () =>
    console.log(`Server on in port ${port}`)
);
