const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
    user: '*****',
    host: 'localhost',
    database: '*****',
    password: '****',
    port: 5432,
});

// Define a route for the root path ("/")
app.get('/', (req, res) => {
    res.send('Welcome to the root path!');
});

app.get('/Acronyms', (req, res) => {
    const { page, pageSize } = req.query;
    const offset = (page - 1) * pageSize;
    pool.query('SELECT * FROM Acronyms ORDER BY id LIMIT $1 OFFSET $2', [pageSize, offset], (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results.rows);
    });
});

app.post('/Acronyms', (req, res) => {
    const { acronym, definition } = req.body;

    pool.query('INSERT INTO Acronyms (acronym, definition) VALUES ($1, $2) RETURNING *', [acronym, definition], (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results.rows[0]);
    });
});

app.patch('/Acronyms/:id', (req, res) => {
    const id = req.params.id;
    const { acronym, definition } = req.body;

    pool.query('UPDATE Acronyms SET Acronym = $1, Definition = $2 WHERE id = $3 RETURNING *', [acronym, definition, id], (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results.rows[0]);
    });
});

app.delete('/Acronyms/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM Acronyms WHERE id = $1', [id], (err, results) => {
        if (err) {
            throw err;
        }
        res.send('Acronym deleted successfully');
    });
});

app.listen(port, () => {
    console.log('Server is running on port ${ port }');
});
