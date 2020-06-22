![Elasticsearch Logo](https://raw.githubusercontent.com/BenPag/elasticsearch-workshop/master/public/img/elastic-search-logo-color-horizontal.svg)
> Elasticsearch is a trademark of Elasticsearch BV, registered in the U.S. and in other countries.

# Workshop Getting Started in Elasticsearch
Der Workshop _Getting Started in Elasticsearch_ bietet den Teilnehmenden einen ersten Einblick in _Elasticsearch_.
Während des Workshops soll einerseits die Vielzahl der Möglichkeiten von Elasticsearch eröffnet werden, 
andererseits soll im praktischen Teil der allgemeine Umgang mit der Elasticsearch-APIs erläutert werden. 
Dabei lernen die Teilnehmenden, wie beispielsweise Dokumente in Elasticsearch gespeichert und durchsucht werden können. 

## Vorbereitung
Bei Fragen oder Problemen stehe ich jederzeit über Slack oder per Mail unter benjamin.pagelsdorf@th-koeln.de zur Verfügung.

### Docker 
Damit eine einfache Bereitstellung von Elasticsearch erfolgen kann, sollte Docker auf dem Computer installiert sein.
Sollte das nicht funktionieren bitte ich rechtzeitig Bescheid zu geben.

#### Links zur Installation von Docker
* Docker & Docker Compose for [Windows](https://docs.docker.com/docker-for-windows/install/)
* Docker & Docker Compose for [macOS](https://docs.docker.com/docker-for-mac/install/)
* Docker 4 GB Arbeitsspeicher zur Verfügung stellen
  * Settings &rarr; Resources &rarr; Advanced
  
![](https://github.com/BenPag/elasticsearch-workshop/blob/master/public/img/docker_settings.png)

### Workshop Projekt
1. Repository klonen `git clone https://github.com/BenPag/elasticsearch-workshop.git`
2. In das Repository-Verzeichnis wechseln
3. Abhängigkeiten installieren: `npm install` 
4. Elasticsearch & Kibana starten `docker-compose up -d`
5. Workshop Projekt starten `npm run serve`
6. Folgende URLs sollten verfügbar sein:
   * Workshop Frontend: http://localhost:3000/
   * Elasticsearch: http://localhost:9200/
   * Kibana: http://localhost:5601/

## Links
* [Elasticsearch REST APIs](https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html)
* [Elasticsearch Reference](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html)
* [Elasticsearch Clients](https://www.elastic.co/guide/en/elasticsearch/client/index.html)
* [Kibana Guide](https://www.elastic.co/guide/en/kibana/current/index.html)
