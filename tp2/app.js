const { Client } = require('@elastic/elasticsearch')
const config = require('config');
const elasticConfig = config.get('elastic');
const express = require("express");
const app = express();

const client = new Client({
  cloud: {
    id: elasticConfig.cloudID
  },
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
  }
})

app.use(express.json());
app.use(express.static("public"));

// client.info()
//   .then(response => console.log(response))
//   .catch(error => console.error(error))


  app.post("/delete", (req, res) => {
    const { id } = req.body;
    client
      .delete({
        index: "films",
        id: id,
      })
      .then((resp) => {
        res.send("Delete done");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression");
      });
  });
  
  app.post("/update", (req, res) => {
    const { id, title, director, released } = req.body;
    client
      .update({
        index: "films",
        id: id,
        body: {
          doc: {
            title: title,
            director: director,
            released: released,
          },
        },
      })
      .then((resp) => {
        res.send("Update done");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la mise à jour");
      });
  });
  
  app.get("/getAllFilms", (req, res) => {
    client
      .search({
        index: "films",
        body: {
          query: {
            match_all: {},
          },
        },
      })
      .then(function (resp) {
        var hits = resp.hits.hits;
        res.send(hits);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la recherche");
      });
  });
  
  app.post("/submit", (req, res) => {
    res.send("Upload done");
  });
  
  app.post("/search", (req, res) => {
    const { search } = req.body;
    client
      .search({
        index: "films",
        body: {
          query: {
            multi_match: {
              query: search,
              type: "phrase_prefix",
              fields: ["title", "director", "released"],
            },
          },
        },
      })
      .then(function (resp) {
        var hits = resp.hits.hits;
        res.send(hits);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Erreur lors de la recherche");
      });
  });
  
  app.listen(3000, () => {
    console.log("Server running on port 3000" );
  });