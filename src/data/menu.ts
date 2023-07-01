export type Product = {
    productTitle: string
    productIngredients: string[] | null
    productPrice: string
}

export type Menu = {
    menuTitle: string
    menuTitleLocoScrollValues: number[]
    products: Product[]
    customClass: string
}

const menu: Menu[] = [
    {
        menuTitle: 'cocktails',
        menuTitleLocoScrollValues: [0.4, 0.8, 0.41, 0.75, 1, 0.9, 0.3, 0.52, 0.8],
        products: [
            {
                productTitle: 'Just a Spicy Tequila',
                productIngredients: ['Tequila', 'menthe', 'habañero', 'agave'],
                productPrice: '12',
            },
            {
                productTitle: 'Bitter Mai Tai',
                productIngredients: ['Rhum', 'dry curaçao', 'amer italien', 'orgeat'],
                productPrice: '12',
            },
            {
                productTitle: 'Suzie Green',
                productIngredients: ['Gin', 'Suze', 'concombre', 'club soda', 'citron vert'],
                productPrice: '12',
            },
            {
                productTitle: 'Disco Sour',
                productIngredients: ['Pisco', 'triple sec', 'agave', 'citron vert', 'blanc d\'oeuf'],
                productPrice: '12',
            },
            {
                productTitle: 'Please Go Home',
                productIngredients: ['Rye', 'liqueur herbacée', 'scotch et miel'],
                productPrice: '12',
            },
            {
                productTitle: 'Monty\'s Passion',
                productIngredients: ['Rhum', 'Amaro', 'fruit de la passion', 'blanc d\'oeuf'],
                productPrice: '12',
            },
            {
                productTitle: 'Closing Argument',
                productIngredients: ['Mezcal', 'Chartreuse', 'marasquin', 'citron vert'],
                productPrice: '14',
            },
            {
                productTitle: 'Les Classiques',
                productIngredients: null,
                productPrice: '10',
            },
        ],
        customClass: 'cocktails',
    },
    {
        menuTitle: 'apéritifs & bières',
        menuTitleLocoScrollValues: [0.5, -0.2, 0.2, -0.1, -0.25, 0.4, -0.1, 0.6, 0.5, 0, 0.4, 0, 0.92, 0.22, 0.3, -0.15, -0.2, 0.6],
        products: [
            {
                productTitle: 'Blonde pression',
                productIngredients: null,
                productPrice: '3.50/7',
            },
            {
                productTitle: 'IPA pression',
                productIngredients: null,
                productPrice: '4/8',
            },
            {
                productTitle: 'Blanche pression',
                productIngredients: null,
                productPrice: '4.50/9',
            },
            {
                productTitle: 'Blanche bouteille',
                productIngredients: null,
                productPrice: '6',
            },
            {
                productTitle: 'Ricard',
                productIngredients: null,
                productPrice: '3',
            },
            {
                productTitle: 'Spritz',
                productIngredients: null,
                productPrice: '8',
            },
            {
                productTitle: 'Get 27',
                productIngredients: null,
                productPrice: '6',
            },
            {
                productTitle: 'Negroni',
                productIngredients: null,
                productPrice: '10',
            },
        ],
        customClass: 'beers',
    },
    {
        menuTitle: 'au verre',
        menuTitleLocoScrollValues: [0.3, -0.1, 0, 0.35, -0.2, 0.4, 0.1, 0.1],
        products: [
            {
                productTitle: 'Amour de Fruits',
                productIngredients: ['Rhône', 'Grenache', 'Cinsault', '2022'],
                productPrice: '6',
            },
            {
                productTitle: 'Calcarius',
                productIngredients: ['Puglia IGT (Italie)', 'Negroamaro', '2020'],
                productPrice: '6',
            },
            {
                productTitle: 'P\'tit Grobis',
                productIngredients: ['Beaujolais', 'Gamay', '2022'],
                productPrice: '6',
            },
            {
                productTitle: 'Amour de Fruits',
                productIngredients: ['VDF', 'Rhône', '2021'],
                productPrice: '6',
            },
            {
                productTitle: 'Calcarius',
                productIngredients: ['Puglia IGT (Italie)', 'Bombino', '2020'],
                productPrice: '6',
            },
            {
                productTitle: 'Calcarius',
                productIngredients: ['Puglia IGT (Italie)', 'Falanghina', '2020'],
                productPrice: '6',
            },
        ],
        customClass: 'glass',
    },
    {
        menuTitle: 'rouge',
        menuTitleLocoScrollValues: [0.7, 0.9, 0.4, 0.6, 0.45],
        products: [
            {
                productTitle: 'Amour de Fruits, 75cl',
                productIngredients: ['Rhône', 'Grenache', 'Syrah', '2022'],
                productPrice: '25',
            },
            {
                productTitle: 'Une Tranche d\'Amour, 75cl',
                productIngredients: ['Saint-Amour', 'Gamay', '2020-2021'],
                productPrice: '30',
            },
            {
                productTitle: 'Les Enfants Sauvages, 75cl',
                productIngredients: ['Côtes Catalanes', 'Mourvèdre', '2021'],
                productPrice: '30',
            },
            {
                productTitle: 'La Fleur Garderose, 75cl',
                productIngredients: ['Bordeaux', 'Merlot', 'Cabernet Franc', '2021'],
                productPrice: '32',
            },
            {
                productTitle: 'L\'Iserand Alliance, 75cl',
                productIngredients: ['Ardèche & Corbières', 'Syrah', 'Carignan', 'Grenache', '2021'],
                productPrice: '32',
            },
            {
                productTitle: 'Prémices, 75cl',
                productIngredients: ['Rhônes', 'Grenache', 'Syrah', '2021'],
                productPrice: '33',
            },
            {
                productTitle: 'P\'tit Grobis, 75cl',
                productIngredients: ['Beaujolais', 'Gamay', '2022'],
                productPrice: '33',
            },
            {
                productTitle: 'Yohann Moreno, 75cl',
                productIngredients: ['Languedoc', 'Syrah', 'Grenache', '2021'],
                productPrice: '35',
            },
            {
                productTitle: 'Zulu, 75cl',
                productIngredients: ['VDF Roussilon', 'Carignan', '2021'],
                productPrice: '35',
            },
            {
                productTitle: 'Harvest, 75cl',
                productIngredients: ['Languedoc VDF', 'Grenache', '2018'],
                productPrice: '35',
            },
            {
                productTitle: 'Ami, 1L',
                productIngredients: ['Bourgogne', 'Pinot Noir', 'Alligoté', '2021'],
                productPrice: '40',
            },
            {
                productTitle: 'Domaine Bonnet-Cotton, 75cl',
                productIngredients: ['Beaujolais', 'Gamay', '2021'],
                productPrice: '40',
            },
            {
                productTitle: 'El Rall, 75cl',
                productIngredients: ['DOC Allela', 'Catalogne', 'Syrah', 'Merlot', 'GFrenache Noir', '2021'],
                productPrice: '40',
            },
            {
                productTitle: 'Calcarius, 75cl',
                productIngredients: ['Puglia IGT (Italie)', 'Negroamaro', '2020'],
                productPrice: '42',
            },
            {
                productTitle: 'Calcarius Cuvée Hellen, 75cl',
                productIngredients: ['Puglia IGT (Italie)', 'Nero di Troia', '2020'],
                productPrice: '42',
            },
            {
                productTitle: 'Amo, 1L',
                productIngredients: ['Puglia IGT (Italie)', 'Nero di Troia', '2020'],
                productPrice: '42',
            },
        ],
        customClass: 'red-wine',
    },
    {
        menuTitle: 'blanc',
        menuTitleLocoScrollValues: [0.4, 0.6, 0.8, 0.3, -0.3],
        products: [
            {
                productTitle: 'Amour de Fruits, 75cl',
                productIngredients: ['VDF', 'Rhône', '2021'],
                productPrice: '23',
            },
            {
                productTitle: 'De L\'autre côté, 75cl',
                productIngredients: ['Alsace', 'Auxerrois', '2021'],
                productPrice: '30',
            },
            {
                productTitle: 'Attention Chenin Méchant, 75cl',
                productIngredients: ['AOC Anjou', 'Loire', 'Chenin blanc', '2021'],
                productPrice: '35',
            },
            {
                productTitle: 'P\'tit Grobis, 75cl',
                productIngredients: ['Beaujolais', 'Chardonnay', '2022'],
                productPrice: '35',
            },
            {
                productTitle: 'Oriental Blanco, 75cl',
                productIngredients: ['DOC Allela', 'Catalogne', 'Muscat d\'alexandrie', '2021'],
                productPrice: '40',
            },
            {
                productTitle: 'Famiglia, 75cl',
                productIngredients: ['Puglia IGT', 'Italie', ' Bombino & Fiano', '2020'],
                productPrice: '40',
            },
            {
                productTitle: 'Calcarius, 1L',
                productIngredients: ['Puglia IGT', 'Italie', 'Bombino', '2020'],
                productPrice: '42',
            },
            {
                productTitle: 'Ami, 75cl',
                productIngredients: ['Bourgogne', 'Chardonnay', '2017'],
                productPrice: '45',
            },
            {
                productTitle: 'La Rumbera, 75cl',
                productIngredients: ['DOC Allela', 'Catalogne', 'Pansa Blanca', '2021'],
                productPrice: '45',
            },
        ],
        customClass: 'white-wine',
    },
    {
        menuTitle: 'pétillant & autre',
        menuTitleLocoScrollValues: [0.1, 0.23, 0.55, 0.5, 0.55, 0.6, 0.65, 0.7, 0.9, 0, 0.5, 0, -0.1, 0.3, 0.45, 0.67, 0.8],
        products: [
            {
                productTitle: 'Ça Gazouille, 75cl',
                productIngredients: ['Loire', 'Sauvignon', '2022'],
                productPrice: '30',
            },
            {
                productTitle: 'Gaz de Schiste, 75cl',
                productIngredients: ['VDF', 'Loire', 'Chenin', '2021'],
                productPrice: '35',
            },
            {
                productTitle: 'Cuvée Camille, 75cl',
                productIngredients: ['Bourgogne', 'Pinot Noir', '2022'],
                productPrice: '35',
            },
            {
                productTitle: 'Loop, 75cl',
                productIngredients: ['Languedoc VDF', 'Grenache Noir', '2018'],
                productPrice: '35',
            },
            {
                productTitle: 'Recerca Golem, 75cl',
                productIngredients: ['Catalogne Nord', 'VDF', 'Macabeu', '2021'],
                productPrice: '38',
            },
            {
                productTitle: 'Freccia Bomb, 75cl',
                productIngredients: ['Puglia IGT (Italie)', 'Bombino', '2020'],
                productPrice: '43',
            },
            {
                productTitle: 'A Coco, 1L',
                productIngredients: ['DOC Allela', 'Catalogne', 'Pansa Blanca', 'Grenache Noir', '2021'],
                productPrice: '45',
            },
        ],
        customClass: 'sparkling',
    },
    {
        menuTitle: 'boissons sans alcool',
        menuTitleLocoScrollValues: [0.4, 0.55, 0.1, 0.2, -0.10, 0.3, 0.2, 0.6, 0, 0.5, 0.7, 0.8, 1, 0, 0.3, 0.5, 0.1, -0.2, 0.2, 0.4],
        products: [
            {
                productTitle: 'Eau minérale',
                productIngredients: null,
                productPrice: '4.50',
            },
            {
                productTitle: 'Eau pétillante',
                productIngredients: null,
                productPrice: '4.50',
            },
            {
                productTitle: 'Coca-Cola, Coca-Cola Zero, Limonade',
                productIngredients: null,
                productPrice: '4.50',
            },
            {
                productTitle: 'Ice-tea, Orangina',
                productIngredients: null,
                productPrice: '3.50',
            },
            {
                productTitle: 'Sirops',
                productIngredients: null,
                productPrice: '2.50',
            },
            {
                productTitle: 'DATXA Kombucha',
                productIngredients: ['Fleur D\'Osmanthus', 'Darjeeling Grenade'],
                productPrice: '5.50',
            },
        ],
        customClass: 'alcool-free',
    },
    {
        menuTitle: 'café',
        menuTitleLocoScrollValues: [0.2, -0.2, -0.4, -0.3],
        products: [
            {
                productTitle: 'Espresso/Double Espresso',
                productIngredients: null,
                productPrice: '2/3',
            },
            {
                productTitle: 'Macchiato',
                productIngredients: null,
                productPrice: '3',
            },
            {
                productTitle: 'Americano',
                productIngredients: null,
                productPrice: '3',
            },
            {
                productTitle: 'Cappuccino',
                productIngredients: null,
                productPrice: '4',
            },
            {
                productTitle: 'Flat White',
                productIngredients: null,
                productPrice: '4.50',
            },
            {
                productTitle: 'Latte',
                productIngredients: null,
                productPrice: '4.50',
            },
            {
                productTitle: 'Thés',
                productIngredients: null,
                productPrice: '4',
            },
            {
                productTitle: 'Supp. lait végétal',
                productIngredients: null,
                productPrice: '+0.50',
            },
        ],
        customClass: 'coffee',
    },
];

export default menu;
