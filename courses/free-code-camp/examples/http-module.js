const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
  } else if (req.url === "/hola") {
    res.write("hola mundo");
  } else {
    res.write(`
	 <h1>pagina no encontrada</h1>
	 `);
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
