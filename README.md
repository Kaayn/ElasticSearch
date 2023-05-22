# ElasticSearch

### Install ElasticSearch 

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.7.1
```

### Install Kibana

```
docker network create elastic
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.7.1
```

### Launch ElasticSearch
```
docker run --name es-node01 --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node"  -t docker.elastic.co/elasticsearch/elasticsearch:8.7.1
```

### Connect to ElasticSearch x Kibana
Se connecter au lien donner a la suite de l'ouverture du container ElasticSearch

``` 
ndc : elastic
mdp : i_aYD1wmADqLfXPBCWii
```

### Create Index 
``` 
PUT /user_index
{
  "mappings": {
    "properties": {
      "age":    { "type": "integer" },  
      "email":  { "type": "keyword"  }, 
      "name":   { "type": "text"  }     
    }
  }
}
```
