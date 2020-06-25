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
    { id: 5, titre: "article 4", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 6, titre: "article 4", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 7, titre: "article 4", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 8, titre: "article 4", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
    { id: 9, titre: "article 4", content: "lorem ipsum", url: "https://source.unsplash.com/random/400x20" },
];

// si je veux pouvoir utiliser data dans un autre fichier 
// je dois mettre le mot clé javascript export 

/* récupérer un nombre maximum d'article */
export function getLastArticles(nbArticle) {
    let resultat = []
    for (let i = 0; i < nbArticle; i++) {
        resultat.push(data[i]);
    }
    return resultat;
}

/*
récupérer un article via son id
*/

export function findArticleById(id) {
    const resultat = data.find(function (el) {
        return el.id === parseInt(id)
    });
    return resultat;
}


// formulaire

// API => service nous même
// 
// mis en ligne !