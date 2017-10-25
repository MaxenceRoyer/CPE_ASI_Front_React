# CPE_ASI
Ce TP a pour objectif de concevoir une application cross technologies permettant d’appréhender la fonction et l’usage de chaque technologie.
# STEP 0 : Création du socle de l’application
# 3.1.2 A quoi sert une telle organisation dans un projet Front ?
Cela permet d'organiser, de découper et de ségmenter les différentes parties nécessaires à notre application. Le dossier components/ par exemple servira de déclaration des différents composants utilisables sur l'app', le dossier lib/ à regrouper (afin de les inclure dans le projet) les librairies externes utiles à l'application, le dossier actions/ regroupera les actions utilisables dans le store et les reducers (dossier reducers/), etc.
# 3.1.3.Lors de la création d’un composant où positionneriez-vous les css spécifiques à ce composant ?
Un fichier CSS est créé dans chaque répertoire associé à un composant. Cela permet d'appeler ce CSS que dans le .js associé à ce composant et de ne pas importer tous les fichiers css dans le App.js. Les CSS associés à des composants non appelés ne seront ainsi pas chargés ce qui sera plus propre.
