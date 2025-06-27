// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /api/posts che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

const express = require("express");
const app = express();
const port = 3030;

app.listen(port, () => {
    console.log(`Server del mio blog in ascolto su http://localhost:${port}`);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

const posts = [
    {
        title: "Ciambellone",
        content: "Ciambellone semplice e veloce",
        image: "/ciambellone.jpeg",
        tags: ["tag1", "tag2"],
    },
    {
        title: "Crackers alla barbabietola",
        content: "Crackers alla barbabietola",
        image: "/cracker_barbabietola.jpeg",
        tags: ["tag2", "tag3"],
    },
    {
        title: "Pane fritto dolce",
        content: "Pane fritto dolce",
        image: "/pane_fritto_dolce.jpeg",
        tags: ["tag1", "tag3"],
    },
    {
        title: "Pasta alla barbabietola",
        content: "Pasta alla barbabietola",
        image: "/pasta_barbabietola.jpeg",
        tags: ["tag2", "tag4"],
    },
    {
        title: "Torta paesana",
        content: "Torta paesana",
        image: "/torta_paesana.jpeg",
        tags: ["tag1", "tag4"],
    },
];

app.get("/api/posts", (req, res) => {
    res.json(posts);
});
