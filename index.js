const express = require('express');
let myspl = require('mysql');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const db = myspl.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Keluarga123',
    database: 'mahasiswa',
    port: 3309
})