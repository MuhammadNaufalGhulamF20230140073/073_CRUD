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

db.connect(err => {
    if (err) {
        console.error('Gagal koneksi ke database' + err.stack);
        return;
    }
    console.log('Berhasil koneksi ke database');
});


//Buat Method GET dan POST 

//GET
app.get('api/users', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if (err) {
            console.error('Gagal mengambil data' + err.stack);
            res.status(500).send('Gagal mengambil data');
            return;
        }
        res.json(results);
    });
});