const app = require("");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Servidor local corriendo en http://localhost:${PORT}`);
});
