const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const path = require('path');
const app = express();
const port = 4000;

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: './client' });
const handle = nextApp.getRequestHandler();

const users = []; // In-memory user store, replace with a database in production
const secretKey = 'your_secret_key'; // Replace with a secure key in production

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../client/public')));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js server!');
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected endpoint example
app.get('/api/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      } else {
        res.json({ message: 'Protected data', user: decoded.username });
      }
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
});

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, () => {
    console.log(`Node.js server running on port ${port}`);
  });
});