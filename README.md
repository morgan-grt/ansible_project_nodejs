GUERET Morgan  
CARDOSO Simon  

***

# Projet annuel serveur *nodejs*

Ce projet consiste en la mise en place d'un ensemble de serveurs web exécutant *nodejs* pouvant recevoir des  
tâches à l'aide de *Ansible*.  
Le projet permet de présenter l'automatisation de tâches en direction d'un ensemble de machines (serveurs)  
Les fichiers et dossiers disponibles sont utilisés pour faire tourner un site avec *nodejs* à distance.  

## Organisation :

Le dossier comporte:
- *ui/* : contient les fichiers de style pour le site web ainsi que la page principale  
- *index.js* : le code pour exécuter le serveur *nodejs* sous *express*  
- *package.json* : contient les dépendances à installer pour le serveur *nodejs*  
ainsi que la déclaration des scripts utilisés par *ansible*

- *update.py* : le code pour modifier la page principale  


## Lancement :

Ce serveur *nodejs* n'est pas censé être utilisé directement, il est utilisé par *ansible.  
Cependant vous pouvez néanmoins l'utiliser comme ceci :
- pour le démarrer
``` bash
npm run pm2r
``` 

- pour le stopper
``` bash
npm run pm2s
``` 

- pour le redémarrer
``` bash
npm run pm2u
```

- pour afficher les status
``` bash
npm run pm2status
``` 

- pour supprimer les processus *nodejs*
``` bash
npm run pm2del
``` 
