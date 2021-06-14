export default (req, res) => {
  
  switch (req.method) {
    case 'GET':
      const name = req.query.name || 'World';
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ greeting: `Hello ${name}!` }));

      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}