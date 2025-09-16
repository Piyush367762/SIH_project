app.use(cors());
app.use(express.json());

// GET all colleges
app.get('/api/colleges', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM colleges;');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});
// GET a single college by name
app.get('/api/colleges/:name', async (req, res, next) => {
  try {
    const { name } = req.params;
    const result = await pool.query(
      'SELECT * FROM colleges WHERE college_name = $1;',
      [name]
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});
