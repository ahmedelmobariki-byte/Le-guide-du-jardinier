// Fichier: constants.ts
// Base de connaissances pour le projet "Guide du Jardinier Débutant".

export const KNOWLEDGE_BASE_CONTEXT = `
# Base de Connaissances : Le Guide du Jardinier Débutant

## 1. Introduction
Bienvenue dans le guide du jardinier débutant ! Ce document a pour but de vous aider à démarrer votre premier potager, que ce soit sur un balcon ou dans un petit jardin. L'objectif est d'éviter les erreurs communes et de vous donner les clés pour réussir vos premières récoltes.

## 2. Les Principes de Base du Jardinage
Pour réussir, trois éléments sont essentiels : le soleil, l'eau et la terre.
- **Soleil :** La plupart des légumes (tomates, courgettes, poivrons) ont besoin d'au moins 6 à 8 heures de soleil direct par jour. Si vous avez moins de soleil, privilégiez les salades, les épinards ou les radis.
- **Eau :** L'arrosage doit être régulier mais pas excessif. Le meilleur indicateur est la terre : touchez-la. Si elle est sèche sur 2-3 cm de profondeur, il est temps d'arroser. Arrosez de préférence le matin ou le soir pour éviter l'évaporation. Ne mouillez pas les feuilles pour éviter les maladies.
- **Terre :** Utilisez un terreau de bonne qualité, riche en nutriments. Pour la culture en pots, choisissez un "terreau pour potager". Un bon drainage est crucial : assurez-vous que vos pots ont des trous au fond.

## 3. Les 3 Légumes les Plus Faciles pour Commencer
### a) Les Tomates Cerises
- **Quand planter :** Au printemps, après les dernières gelées (avril-mai).
- **Exposition :** Plein soleil.
- **Arrosage :** Régulier. Le sol doit rester frais mais jamais détrempé. Arrosez au pied de la plante.
- **Conseil :** Plantez-les dans un pot d'au moins 30 cm de diamètre. Installez un tuteur dès la plantation pour soutenir la plante.

### b) Les Radis
- **Quand planter :** Du printemps à la fin de l'été.
- **Exposition :** Soleil ou mi-ombre.
- **Arrosage :** Très régulier. Le sol doit toujours être humide, sinon les radis deviennent piquants.
- **Récolte :** Très rapide ! Environ 3 à 4 semaines après le semis. Récoltez-les dès qu'ils sont formés.
- **Conseil :** C'est le légume le plus rapide à pousser, idéal pour les enfants et les impatients.

### c) La Laitue à couper
- **Quand planter :** Printemps et automne. Elle n'aime pas les fortes chaleurs.
- **Exposition :** Mi-ombre.
- **Arrosage :** Régulier pour garder le sol frais.
- **Récolte :** Au fur et à mesure de vos besoins. Coupez les feuilles extérieures, le cœur de la plante en produira de nouvelles.
- **Conseil :** Parfait pour la culture en jardinière sur un balcon.

## 4. FAQ - Questions Fréquentes
- **Q : J'ai des petits insectes verts sur mes plantes, que faire ?**
  - R : Ce sont probablement des pucerons. Une solution écologique est de pulvériser un mélange d'eau et de savon noir (1 cuillère à soupe de savon pour 1 litre d'eau).
- **Q : Mes feuilles de tomates jaunissent, pourquoi ?**
  - R : Cela peut être dû à un arrosage excessif ou un manque de nutriments. Assurez-vous que le pot est bien drainé et espacez les arrosages. Vous pouvez ajouter un peu d'engrais pour plantes potagères.
- **Q : Ai-je besoin de beaucoup d'outils pour commencer ?**
  - R : Non, pour débuter, une petite pelle (transplantoir), un arrosoir et une bonne paire de gants suffisent amplement.
`;


export type Plant = {
  emoji: string;
  name: string;
  type: 'Légume' | 'Fleur' | 'Fruit';
  description: string;
};

type SeasonalSuggestions = {
  spring: Plant[];
  summer: Plant[];
  autumn: Plant[];
  winter: Plant[];
};

export const SEASONAL_SUGGESTIONS: SeasonalSuggestions = {
  spring: [
    { emoji: '🍓', name: 'Fraise', type: 'Fruit', description: 'Facile à cultiver en pot ou en pleine terre, adore le soleil.' },
    { emoji: '🥬', name: 'Laitue', type: 'Légume', description: 'Pousse rapidement et préfère les températures douces du printemps.' },
    { emoji: '🥕', name: 'Carotte', type: 'Légume', description: 'Nécessite un sol meuble et profond pour bien se développer.' },
    { emoji: '🌷', name: 'Tulipe', type: 'Fleur', description: 'Bulbe à planter en automne pour une floraison printanière colorée.' },
    { emoji: '🌱', name: 'Petit Pois', type: 'Légume', description: 'Plante grimpante qui a besoin d\'un support pour s\'accrocher.' },
    { emoji: '🌿', name: 'Persil', type: 'Légume', description: 'Herbe aromatique très populaire, parfaite en pot sur un balcon.' },
    { emoji: '🌸', name: 'Primevère', type: 'Fleur', description: 'Une des premières fleurs à apparaître, annonçant le retour du beau temps.' },
    { emoji: '🥔', name: 'Pomme de Terre', type: 'Légume', description: 'À cultiver en terre ou dans de grands sacs spéciaux.' },
    { emoji: '🌹', name: 'Rose', type: 'Fleur', description: 'Plantez les rosiers au début du printemps pour une belle floraison estivale.' },
    { emoji: '🧅', name: 'Oignon', type: 'Légume', description: 'Plantez les bulbes au printemps pour une récolte en été.' },
    { emoji: '🌼', name: 'Pâquerette', type: 'Fleur', description: 'Fleur simple et charmante qui pousse facilement dans les pelouses.' },
    { emoji: '☀️', name: 'Souci (Calendula)', type: 'Fleur', description: 'Fleur comestible aux couleurs vives, attire les pollinisateurs.' },
    { emoji: '💜', name: 'Lilas', type: 'Fleur', description: 'Arbuste au parfum envoûtant qui fleurit abondamment au printemps.' },
    { emoji: '🥗', name: 'Roquette', type: 'Légume', description: 'Salade au goût poivré, très facile et rapide à faire pousser.' },
    { emoji: '🫛', name: 'Fève', type: 'Légume', description: 'Légumineuse robuste qui se sème dès la fin de l\'hiver.' }
  ],
  summer: [
    { emoji: '🍅', name: 'Tomate', type: 'Légume', description: 'La star du potager d\'été, demande beaucoup de soleil et d\'eau.' },
    { emoji: '🥒', name: 'Concombre', type: 'Légume', description: 'Plante grimpante ou rampante, très rafraîchissante.' },
    { emoji: '🍆', name: 'Aubergine', type: 'Légume', description: 'Adore la chaleur et le soleil pour donner de beaux fruits violets.' },
    { emoji: '🌻', name: 'Tournesol', type: 'Fleur', description: 'Grande fleur majestueuse qui suit le soleil tout au long de la journée.' },
    { emoji: '🍉', name: 'Pastèque', type: 'Fruit', description: 'Fruit volumineux qui a besoin de chaleur, d\'espace et d\'eau.' },
    { emoji: '🌶️', name: 'Poivron', type: 'Légume', description: 'Comme la tomate, il est gourmand en soleil et en chaleur.' },
    { emoji: '🌿', name: 'Basilic', type: 'Légume', description: 'Herbe aromatique indispensable en été, parfaite avec les tomates.' },
    { emoji: '🎃', name: 'Courgette', type: 'Légume', description: 'Très productive, une seule plante peut suffire pour une famille.' },
    { emoji: '🌺', name: 'Hibiscus', type: 'Fleur', description: 'Offre de grandes fleurs exotiques durant tout l\'été.' },
    { emoji: '🫑', name: 'Piment', type: 'Légume', description: 'Pour ceux qui aiment les saveurs relevées, il existe de nombreuses variétés.' },
    { emoji: '🫛', name: 'Haricot Vert', type: 'Légume', description: 'Facile à semer en ligne, la récolte est abondante.' },
    { emoji: '💜', name: 'Lavande', type: 'Fleur', description: 'Très parfumée, elle résiste bien à la sécheresse et attire les abeilles.' },
    { emoji: '🌽', name: 'Maïs', type: 'Légume', description: 'A besoin d\'espace et d\'être planté en groupe pour une bonne pollinisation.' },
    { emoji: '🍈', name: 'Melon', type: 'Fruit', description: 'Demande beaucoup de chaleur et un sol riche pour développer ses sucres.' },
    { emoji: '🌹', name: 'Dahlia', type: 'Fleur', description: 'Fleurs spectaculaires aux formes et couleurs très variées.' }
  ],
  autumn: [
    { emoji: '🎃', name: 'Potiron', type: 'Légume', description: 'Symbole de l\'automne, il se récolte avant les premières gelées.' },
    { emoji: '🥬', name: 'Épinard', type: 'Légume', description: 'Se sème à la fin de l\'été pour une récolte tout l\'automne.' },
    { emoji: '🥦', name: 'Brocoli', type: 'Légume', description: 'Préfère les températures fraîches de l\'automne pour former sa tête.' },
    { emoji: '🌼', name: 'Chrysanthème', type: 'Fleur', description: 'La fleur reine de l\'automne, avec une floraison longue et colorée.' },
    { emoji: '🍇', name: 'Vigne', type: 'Fruit', description: 'Le raisin se récolte à la fin de l\'été et au début de l\'automne.' },
    { emoji: '🍄', name: 'Champignon', type: 'Légume', description: 'Cultivez vos propres pleurotes ou champignons de Paris avec des kits.' },
    { emoji: '🍐', name: 'Poire', type: 'Fruit', description: 'Les variétés d\'automne sont juteuses et sucrées.' },
    { emoji: '🍁', name: 'Aster', type: 'Fleur', description: 'Petites fleurs ressemblant à des marguerites, très florifères.' },
    { emoji: '🌰', name: 'Châtaigne', type: 'Fruit', description: 'À ramasser en forêt ou à cultiver si vous avez un grand jardin.' },
    { emoji: '🥬', name: 'Mâche', type: 'Légume', description: 'Salade d\'hiver par excellence, très résistante au froid.' },
    { emoji: '🍏', name: 'Pomme', type: 'Fruit', description: 'C\'est la pleine saison de la cueillette des pommes.' },
    { emoji: '🧡', name: 'Capucine', type: 'Fleur', description: 'Fleurs et feuilles sont comestibles, avec un goût poivré.' },
    { emoji: '💜', name: 'Chou-fleur', type: 'Légume', description: 'Il existe des variétés colorées (violet, orange) à planter en été.' },
    { emoji: '🌿', name: 'Sauge', type: 'Légume', description: 'Herbe aromatique robuste dont le feuillage est persistant.' },
    { emoji: '🥕', name: 'Panais', type: 'Légume', description: 'Légume racine au goût sucré, meilleur après les premières gelées.' }
  ],
  winter: [
    { emoji: '🥬', name: 'Chou Kale', type: 'Légume', description: 'Très résistant au froid, ses feuilles sont encore meilleures après un gel.' },
    { emoji: '🤍', name: 'Perce-neige', type: 'Fleur', description: 'L\'une des premières fleurs à braver le froid pour annoncer le printemps.' },
    { emoji: '🌿', name: 'Thym', type: 'Légume', description: 'Aromate résistant qui garde ses feuilles en hiver.' },
    { emoji: '💜', name: 'Pensée', type: 'Fleur', description: 'Fleurit même par temps froid, ajoutant de la couleur aux jardinières.' },
    { emoji: '🍋', name: 'Citron', type: 'Fruit', description: 'Les agrumes se récoltent en hiver, à cultiver en pot à l\'abri du gel.' },
    { emoji: ' Brussel', name: 'Chou de Bruxelles', type: 'Légume', description: 'Se récolte tout au long de l\'hiver sur sa haute tige.' },
    { emoji: '💛', name: 'Jasmin d\'hiver', type: 'Fleur', description: 'Fleurit sur bois nu, offrant de petites fleurs jaunes lumineuses.' },
    { emoji: '🌿', name: 'Romarin', type: 'Légume', description: 'Arbuste aromatique qui supporte bien le froid sec.' },
    { emoji: '🧡', name: 'Crocus', type: 'Fleur', description: 'Bulbes qui fleurissent dès la fin de l\'hiver, parfois dans la neige.' },
    { emoji: '🥬', name: 'Poireau', type: 'Légume', description: 'Légume d\'hiver par excellence, se récolte au fur et à mesure des besoins.' },
    { emoji: '❤️', name: 'Hellébore', type: 'Fleur', description: 'Aussi appelée "Rose de Noël", elle fleurit au cœur de l\'hiver.' },
    { emoji: '🍊', name: 'Orange', type: 'Fruit', description: 'Comme le citron, à protéger du gel dans les régions froides.' },
    { emoji: '🌱', name: 'Endive', type: 'Légume', description: 'Se cultive à l\'intérieur, dans l\'obscurité, pour obtenir des feuilles blanches.' },
    { emoji: '💙', name: 'Iris d\'Alger', type: 'Fleur', description: 'Iris parfumé qui fleurit durant les mois d\'hiver.' },
    { emoji: '💖', name: 'Cyclamen', type: 'Fleur', description: 'Plante d\'extérieur qui offre des fleurs colorées pendant la saison froide.' }
  ]
};

const allPlantsWithDuplicates = Object.values(SEASONAL_SUGGESTIONS).flat();
export const ALL_PLANTS = allPlantsWithDuplicates.filter(
  (plant, index, self) => index === self.findIndex((p) => p.name === plant.name)
).sort((a, b) => a.name.localeCompare(b.name));


export type CommunityPost = {
  author: string;
  avatar: string;
  timestamp: string;
  message: string;
  imageUrl: string;
};

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    author: 'Marie Dubois',
    avatar: 'MD',
    timestamp: 'Il y a 2 heures',
    message: 'Mon premier plant de tomate cerise commence à donner des fruits ! Tellement fière du résultat. 🍅',
    imageUrl: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?q=80&w=1964&auto=format&fit=crop'
  },
  {
    author: 'Julien Petit',
    avatar: 'JP',
    timestamp: 'Hier',
    message: 'Quelqu\'un a des astuces contre les limaces ? Elles dévorent mes plants de laitue...',
    imageUrl: 'https://images.unsplash.com/photo-1587351239086-4434297a8103?q=80&w=1974&auto=format&fit=crop'
  },
  {
    author: 'Chloé Martin',
    avatar: 'CM',
    timestamp: 'Il y a 3 jours',
    message: 'La floraison de ma lavande est incroyable cette année ! Le parfum est envoûtant. 💜',
    imageUrl: 'https://images.unsplash.com/photo-1598460629553-7a2e858a91cb?q=80&w=1974&auto=format&fit=crop'
  },
  {
    author: 'Lucas Bernard',
    avatar: 'LB',
    timestamp: 'Il y a 1 semaine',
    message: 'Récolte de radis réussie ! Rapide, facile et délicieux. Je recommande à tous les débutants.',
    imageUrl: 'https://images.unsplash.com/photo-1593030644991-ea525746f35b?q=80&w=1974&auto=format&fit=crop'
  }
];
