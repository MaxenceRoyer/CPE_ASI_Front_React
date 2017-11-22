# CPE_ASI
Ce TP a pour objectif de concevoir une application cross technologies permettant d’appréhender la fonction et l’usage de chaque technologie.
# STEP 0 : Création du socle de l’application
# 3.1.2 A quoi sert une telle organisation dans un projet Front ?
Cela permet d'organiser, de découper et de ségmenter les différentes parties nécessaires à notre application. Le dossier components/ par exemple servira de déclaration des différents composants utilisables sur l'app', le dossier lib/ à regrouper (afin de les inclure dans le projet) les librairies externes utiles à l'application, le dossier actions/ regroupera les actions utilisables dans le store et les reducers (dossier reducers/), etc.
# 3.1.3 Lors de la création d’un composant où positionneriez-vous les css spécifiques à ce composant ?
Un fichier CSS est créé dans chaque répertoire associé à un composant. Cela permet d'appeler ce CSS que dans le .js associé à ce composant et de ne pas importer tous les fichiers css dans le App.js. Les CSS associés à des composants non appelés ne seront ainsi pas chargés ce qui sera plus propre.
# 3.2.1 Proposer un découpage en composants de ce projet
![alt text](./src/assets/Projet_decoupage_en_composants.png)
# STEP 1 : Création des premiers composants : MainPanel, BrowseContentPanel
# 4.2.1 A quoi sert la extends React.Component ?
Cela permet d'étendre la classe React.Component qui est une classe abtraite permettant de créer et de gérer des composants créés avec ReactJS. Les classes qui étendent React.Component doivent redéfinir la méthode render() donnant la vue qui sera affichée sur l'application.
# 4.2.2 Que représente props ? à quoi sert-il ?
```
The main difference between state and props is that props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.
```
Les props représentent les données envoyées aux composants enfants, ces données ne sont pas modifiables. Cela sert à échanger des données immuables afin de les réutiliser dans les composants fils. Props : on se contente de récupérer/afficher des données immutables.
# 4.2.3 Que représente state ? à quoi sert-il ?
```
State is the place where the data comes from. We should always try to make our state as simple as possible and minimize the number of stateful components. If we have, for example, ten components that need data from the state, we should create one container component that will keep the state for all of them.
```
 Il s'agit de l'initialisation des données utiles au composant et à ses éventuels enfants. State : responsabilité des données, on les affiche, les modifie, etc.
# 4.2.4 Quelle est la fonction principale de render() ?
La méthode render() permet la création et le retour d'éléments à afficher sur le WebBrowser, avec principe d'inclusion de composants enfants éventuels (intéractions, etc.). Cette méthode permet de renvoyer des composants react, des strings et nombres, des booléens, etc. Il examine this.props et this.state afin de les retourner. Appliquer les modifications du Virtual DOM sur le DOM.
# 4.3.3 Pourquoi est-il intéressant de proposer des composants « visuels» ?
Ces composants permètent de gêrer l'affichage du composant en fonction du type. Pour chaque types (image, vidéo, page web) que l'on veut gérer, on crée un  composant visuel.
L'intéret est de découpé les composant pour qu'ils soient le plus petit possible, ansi, l'élément qui appel le bon composant visuel délègue la gestion de l'affichage à ce sous composant.
# 4.3.4 Que représente les différents répertoires de componants/common/Container (containers, components) ?
Containers : defintition du comportement de l'objet et ça présentation.
Component : Contient les différents composents que l'on peut trouver à l'interieur de l'objet.
# 4.3.5 Pourquoi le composant Container a-t-il été placé dans un répertoire common ?
Le composant Container à été placé dans common car il va être réutilsé par plusieurs autres composants dans différentes partie de la page web. On voit là toute l'utilité des composans : la réutilisabilité. 
#STEP 2 : Création de composants de composants
#5.3.1.Pourquoi ce composant est-il considéré comme un composant visuel?
C'est un composant visuel car il sert simplement à afficher, la gestion des modification dans les champs de saisie se font par l'objet qui l'appel. Les données sont transmis au père et c'est le père qui les gères.
#5.3.2.A quoi correspond l’attribut onChange ? que se passe-t-il si cet attribut n’est pas setté ?
OnChange sert à indiquer la fonction JavaScript qui va être appelée lorsqu'une modification du text aura lieux dans la zone de saisie.
Si l'attribut n'est pas setté, il est impossible de modifier le texte.
#5.3.3.A quoi servent les fonctions this.props.handleChangeTxt et this.props.handleChangeTitle ? qui définit ces fonctions ?
Elle servent à transmettre appliquer les modifications du titre et du text dans les zones de saisie aux attribut Titre et Texte du slide.
C'est le composant qui appel EditMetaDataSlid (Slid) qui définit ces fonctions et transmet la fonction dans les props.
#STEP 3 : Manipulation des actions et des reducers
#6.4.2.A quoi sert la ligne connect()(Slid) ? Pourquoi n’y a-t-il pas d’argument à connect() ?