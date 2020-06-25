// Au lieu de stocker les données directement dans le state du composant 
// sortir ces données dans un autre fichier 
// dans le dossier src => services 
// dans ce dossier => créer un fichier ArticlesFictifs.js 
// ce fichier va contenir nos données que nous avions stockées dans le state de Home

export const data = [
    { id: 1, titre: "article 1", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 2, titre: "article 2", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 3, titre: "article 3", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 4, titre: "article 4", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 5, titre: "article 4", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" }
];

// si je veux pouvoir utiliser data dans un autre fichier 
// je dois mettre le mot clé javascript export 