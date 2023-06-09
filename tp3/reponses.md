# TP3 


***Schéma global représentant le fonctionnement des concecpts lié a ELasticsearch**
![image](https://github.com/Kaayn/ElasticSearch/assets/47184542/0a737a7c-0b7e-40e0-a6e4-6aaa24ebe147)

Elasticsearch assure la robustesse, la sauvegarde et l'intégrité des données grâce à plusieurs mécanismes.

Les donnée sont répartie sur plusieurs nœuds, assurant la redondance et la disponibilité en cas de panne d'un nœud.
Les index sont divisés en fragments appelés shards, qui sont répartis sur les nœud du cluster pour équilibrer la charge et garantir la disponibilité des donné.

Des réplicas des shards sont créés, ce qui permet d'avoir des copies des données sur différent nœuds, améliorant ainsi la disponibilité en cas de défaillance.
Elasticsearch propose des fonctionnalités de sauvegarde et de restauration, permettant de prendre des instantanés des données et de les restaurer en cas d besoin.
Les mécanismes de réplication asynchrone assurent le transfert fiable des données entre ls nœuds, même dans des environnements réseau instables.
Ces mesures garantissent une haute disponibilité des données, une résilience face aux pannes et la possibilité de récupérer les données en cas de problème.
En résumé, Elasticsearch utilise la distribution des données, la réplication, les sauvegardes et d'autres mécanismes pour assurer la fiabilité et la disponibilité des données.

**D’après vos recherches pourquoi l’utiliser ? Est-ce le bon paramètre de recherche pour effectuer de la recherche paginée ?**  

Le but de Scroll Api est de retournée un grand nombre de données voire toutes en une seule requete. Non ce n'est pas le bon parametre il faut utiliser search after pour faire une recherche paginée


**Quel est l’usage principal de Kibana ?**

Kibana est utilisé pour visualiser, explorer et analyser les données stockées dans Elasticsearch, offrant des fonctionnalités avancées pour créer des visualisations personnalisées, des tableaux de bord interactifs et faciliter l'analyse des données et des logs.

**Qu’est-ce qu’un Dashboard ?**

Un dashboard dans Kibana est une interface visuelle personnalisée qui permet de regrouper différentes visualisations pour fournir une vue synthétique des données et faciliter l'analyse, le suivi et la présentation des informations clés.

![image](https://github.com/Kaayn/ElasticSearch/assets/47184542/363a906c-84e2-42ab-a937-ade214e5afba)
![image](https://github.com/Kaayn/ElasticSearch/assets/47184542/2b6af0b7-7050-44b4-9a6d-b572764675d4)
![image](https://github.com/Kaayn/ElasticSearch/assets/47184542/75c2a799-a981-4ba7-b9e8-2c92724b2fa1)

