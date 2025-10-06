document.addEventListener('DOMContentLoaded', () => {
    const menuData = {
        mainCategories: [
            {
                id: 'principal', name: 'Menu Principal',
                subCategories: [
                    { id: 'entradas', name: 'Entradas' },
                    { id: 'petiscos', name: 'Petiscos' },
                    { id: 'saladas', name: 'Saladas' },
                    { id: 'chapas', name: 'Chapas e Cortes' },
                    { id: 'pratos_individuais', name: 'Individuais' },
                    { id: 'pratos_dois', name: 'Para Dois' },
                    { id: 'compartilhar', name: 'Para Compartilhar' },
                    { id: 'burgers', name: 'Hambúrgueres' },
                    { id: 'acompanhamentos', name: 'Acompanhamentos' },
                    
                ]
            },
            {
                id: 'bebidas', name: 'Bebidas',
                subCategories: [
                    { id: 'nao_alcoolicos', name: 'Não Alcoólicas' },
                    { id: 'chopp', name: 'Chopp & Cervejas' },
                    { id: 'drinks_gin', name: 'Drinks com Gin' },
                    { id: 'drinks_autorais', name: 'Drinks Autorais' },
                    { id: 'caipirinhas', name: 'Caipirinhas' },
                    { id: 'drinks_gerais', name: 'Outros Drinks' },
                    { id: 'combos', name: 'Combos' },
                    { id: 'shots', name: 'Doses & Shots' },
                    { id: 'destilados', name: 'Destilados' },
                    { id: 'whisky', name: 'Whisky' },
                ]
            },
            {
                id: 'executivo', name: 'Menu Executivo',
                subCategories: [
                    { id: 'menu_executivo', name: 'Executivo Completo' },
                ]
            }
        ],
        products: [
            // Entradas
            { id: 1, category: 'entradas', name: 'Carpaccio', description: 'Carpaccio de carne temperada, molho de mostarda.', price: 59.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Carpaccio' },
            { id: 2, category: 'entradas', name: 'Ceviche', description: 'Ceviche de peixe branco marinado no suco de limão.', price: 54.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ceviche' },
            { id: 3, category: 'entradas', name: 'Tábua de Frios', description: 'Palmito, salaminho, azeitona preta e verde, queijo prato.', price: 89.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Tábua+de+Frios' },
            // Saladas
            { id: 4, category: 'saladas', name: 'Salada Caesar', description: 'Alface americana, tomate cereja, peito de frango.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Salada+Caesar' },
            { id: 5, category: 'saladas', name: 'Salada Bahrem', description: 'Mix de folhas, rúcula, queijo frescal, cebola roxa, tomatinho.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Salada+Bahrem' },
            { id: 6, category: 'saladas', name: 'Salada Bahrem com Filé', description: 'Mix de folhas, queijo muçarela, tomate cereja, palmito e cubos de filé.', price: 49.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Salada+com+Filé' },
            // Chapas e Cortes
            { id: 7, category: 'chapas', name: 'Chapa Mista Bahrem', description: 'Picanha, filet mignon, filet de frango, calabresa, batata frita.', price: 169.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Chapa+Mista' },
            { id: 8, category: 'chapas', name: 'Chapa Tirolês', description: 'Filé mignon com molho gorgonzola, frango com bacon.', price: 149.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Chapa+Tirolês' },
            { id: 9, category: 'chapas', name: 'Cupim Grelhado', description: 'Cupim Fatiado servido com pão de alho, vinagrete e farofa.', price: 79.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Cupim+Grelhado' },
            { id: 10, category: 'chapas', name: 'Picanha Baby', description: 'Fatias do corte nobre da picanha, sabor e maciez.', price: 99.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Picanha+Baby' },
            { id: 73, category: 'chapas', name: 'Chapa de Coraçãozinho', description: 'Coração de frango na chapa.', price: 49.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Coraçãozinho' },
            { id: 74, category: 'chapas', name: 'Linguiça Caipira', description: 'Carne suína picada na ponta da faca.', price: 42.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Linguiça' },
            { id: 75, category: 'chapas', name: 'Petisco de Medalhão', description: 'Carne de sol na manteiga do sertão envolto do queijo.', price: 79.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Medalhão' },
            // Petiscos
            { id: 11, category: 'petiscos', name: 'Batata Frita', description: 'Porção de batata frita crocante.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Batata+Frita' },
            { id: 12, category: 'petiscos', name: 'Batata frita com Cheddar', description: 'Batata frita com muito queijo cheddar e bacon.', price: 54.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Batata+Cheddar' },
            { id: 13, category: 'petiscos', name: 'Bolinho de Mandioca', description: 'Bolinhos com casquinha crocante, recheado de carne.', price: 44.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bolinho+Mandioca' },
            { id: 14, category: 'petiscos', name: 'Caldo de Feijão', description: 'Caldo de feijão servido no copo americano, crispy de couve.', price: 24.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Caldo+Feijão' },
            { id: 15, category: 'petiscos', name: 'Fish and Chips', description: 'Peixe empanado e chips de batata asterix e molho tártaro.', price: 69.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Fish+and+Chips' },
            { id: 16, category: 'petiscos', name: 'Frango à Passarinho', description: 'Frango frito acebolado com alho frito.', price: 48.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Frango+Passarinho' },
            { id: 76, category: 'petiscos', name: 'Bolinho de Rabada', description: 'Bolinhos recheados de rabada desfiada.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bolinho+Rabada' },
            { id: 77, category: 'petiscos', name: 'Choripan', description: 'Pão francês, aioli, queijo mussarela.', price: 29.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Choripan' },
            { id: 78, category: 'petiscos', name: 'Croqueta de Costela', description: 'Costela bovina desfiada, recheada com requeijão.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Croqueta' },
            { id: 79, category: 'petiscos', name: 'Disquinho de Carne', description: '10 Unidades do nosso delicioso disquinho de carne.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Disquinho' },
            { id: 80, category: 'petiscos', name: 'Isca de Frango Empanado', description: 'Deliciosas iscas de frango.', price: 44.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Isca+de+Frango' },
            { id: 81, category: 'petiscos', name: 'Milanesa de Filé', description: 'Milanesa de filé mignon, bacon empanado crocante.', price: 62.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Milanesa' },
            { id: 82, category: 'petiscos', name: 'Torresmo à Pururuca', description: 'Crocante e sequinho.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Torresmo' },
            { id: 83, category: 'petiscos', name: 'Trio Bahrem', description: 'Pastel de queijo, croqueta e...', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Trio+Bahrem' },
            // Pratos para Compartilhar
            { id: 17, category: 'compartilhar', name: 'Ancho Supremo', description: 'Bife Ancho grelhado, queijo coalho tostado, mandioca.', price: 159.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ancho+Supremo' },
            { id: 18, category: 'compartilhar', name: 'Bora de Picanha', description: 'Picanha grelhada (1kg in natura), batata rústica.', price: 179.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bora+de+Picanha' },
            { id: 19, category: 'compartilhar', name: 'Picanha Brasileira', description: 'Picanha grelhada, linguiça toscana, mandioca cozida.', price: 169.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Picanha+Brasileira' },
            // Acompanhamentos
            { id: 20, category: 'acompanhamentos', name: 'Arroz Biro-Biro', description: 'Arroz, bacon, ovos, cebolinha e batata palha.', price: 26.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Arroz+Biro-Biro' },
            { id: 21, category: 'acompanhamentos', name: 'Arroz à Piamontese', description: 'Arroz, creme de leite, queijo parmesão e presunto.', price: 26.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Arroz+Piamontese' },
            { id: 22, category: 'acompanhamentos', name: 'Arroz Branco', description: 'Porção de arroz branco.', price: 16.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Arroz+Branco' },
            // Pratos para Dois
            { id: 23, category: 'pratos_dois', name: 'Carne de Sol Bahrem', description: 'Carne de sol suculenta. Acompanha arroz com brócolis.', price: 149.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Carne+de+Sol' },
            { id: 24, category: 'pratos_dois', name: 'Picanha Bahrem', description: 'Picanha grelhada. Acompanha arroz biro-biro, batata frita.', price: 169.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Picanha+Bahrem' },
            // Pratos Individuais
            { id: 25, category: 'pratos_individuais', name: 'Bife Ancho', description: '350g De bife ancho. Acompanha farofa, molho.', price: 79.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bife+Ancho' },
            { id: 26, category: 'pratos_individuais', name: 'Risoto de Camarão', description: 'Arroz arbóreo com camarões, queijo grana padano.', price: 69.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Risoto+Camarão' },
            // Burgers
            { id: 27, category: 'burgers', name: 'Cheese Burger', description: 'Pão brioche, blend Angus 160g e queijo cheddar.', price: 36.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Cheese+Burger' },
            { id: 28, category: 'burgers', name: 'Cheddar Bacon', description: 'Pão brioche, blend Angus 160g, regado com molho de cheddar.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Cheddar+Bacon' },
            { id: 29, category: 'burgers', name: 'Big Bahrem', description: 'Pão Brioche, 2 blends de 180gr cada, queijo cheddar, cebola.', price: 42.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Big+Bahrem' },
            // Chopp e Cervejas
            { id: 33, category: 'chopp', name: 'Chopp Império', description: 'Chopp pilsen cremoso.', price: 11.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Chopp+Império' },
            { id: 34, category: 'chopp', name: 'Chopp Heineken', description: 'O clássico chopp Heineken.', price: 14.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Chopp+Heineken' },
            { id: 35, category: 'chopp', name: 'Cozumel', description: 'Cerveja com limão e sal na borda.', price: 13.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Cozumel' },
            { id: 37, category: 'chopp', name: 'Império Puro Malte 600ml', description: 'Cerveja puro malte.', price: 13.95, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Império+600ml' },
            { id: 38, category: 'chopp', name: 'Heineken 600ml', description: 'Cerveja premium.', price: 18.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Heineken+600ml' },
            { id: 40, category: 'chopp', name: 'Heineken Long Neck', description: 'Long neck premium.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Heineken+LN' },
            // Combos
            { id: 43, category: 'combos', name: 'Combo Old Parr', description: 'Garrafa de Old Parr + 6 energéticos.', price: 440.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Combo+Old+Parr' },
            { id: 44, category: 'combos', name: 'Combo Black Label', description: 'Garrafa de Black Label + 6 energéticos.', price: 490.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Combo+Black' },
            { id: 45, category: 'combos', name: 'Combo Smirnoff', description: 'Garrafa de Smirnoff + 6 energéticos.', price: 230.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Combo+Smirnoff' },
            // Shots
            { id: 46, category: 'shots', name: 'Licor 43', description: 'Dose do licor espanhol.', price: 17.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Licor+43' },
            { id: 84, category: 'shots', name: 'Ballena', description: 'Licor de morango com tequila.', price: 17.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ballena' },
            { id: 86, category: 'shots', name: 'Don Luiz - Doce de Leite', description: 'Licor delicioso de doce de leite.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Don+Luiz' },
            // Destilados
            { id: 48, category: 'destilados', name: 'Gin Tanqueray', description: 'Dose ou Garrafa.', price: 17.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Gin+Tanqueray' },
            { id: 49, category: 'destilados', name: 'Cachaça Seleta', description: 'Dose da famosa cachaça.', price: 12.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Cachaça+Seleta' },
            // Whisky
            { id: 50, category: 'whisky', name: 'Johnnie Walker Red Label', description: 'Dose ou Garrafa.', price: 20.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Red+Label' },
            { id: 51, category: 'whisky', name: 'Old Parr', description: 'Dose ou Garrafa.', price: 22.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Old+Parr' },
            // Caipirinhas
            { id: 56, category: 'caipirinhas', name: 'Caipi de Cachaça', description: 'Cachaça, limão e açúcar.', price: 15.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Caipi+Cachaça' },
            { id: 57, category: 'caipirinhas', name: 'Caipi de Absolut', description: 'Vodka Absolut, limão e açúcar.', price: 18.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Caipi+Absolut' },
            { id: 90, category: 'caipirinhas', name: 'Caipicolé Cajá', description: 'Licor maracujá, vodka, picolé de cajá e maracujá fruta.', price: 19.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Caipicolé+Cajá' },
            // Drinks Autorais
            { id: 59, category: 'drinks_autorais', name: 'Bahrem & Berries', description: 'Gin, morango, amora, sumo de limão tahiti, creme de cassis.', price: 36.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bahrem+Berries' },
            { id: 61, category: 'drinks_autorais', name: 'Bahrem Sunset', description: 'Gin, sumo de limão, syrup de maracujá com capim limão.', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bahrem+Sunset' },
            // Drinks com Gin
            { id: 62, category: 'drinks_gin', name: 'Árvore de Gins Clássicos', description: 'Gin laranja, gin tangerina, gin limão siciliano e gin maracujá.', price: 109.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Árvore+Gins' },
            { id: 63, category: 'drinks_gin', name: 'Gin Tônica', description: 'Gin nacional, água tônica, limão siciliano e alecrim.', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Gin+Tônica' },
            // Outros Drinks
            { id: 64, category: 'drinks_gerais', name: 'Aperol Spritz', description: 'Aperol, espumante brut, agua com gás finalizado com laranja.', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Aperol+Spritz' },
            { id: 65, category: 'drinks_gerais', name: 'Moscow Mule', description: 'Vodka, sumo de limão, shrub de gengibre com toque de...', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Moscow+Mule' },
            // Não Alcoólicos
            { id: 67, category: 'nao_alcoolicos', name: 'Suco de Laranja', description: 'Suco natural feito na hora.', price: 13.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Suco+Laranja' },
            { id: 70, category: 'nao_alcoolicos', name: 'Coca-Cola KS', description: 'Garrafa de vidro 290ml.', price: 8.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Coca-Cola' },
            { id: 71, category: 'nao_alcoolicos', name: 'Red Bull Energy Drink', description: 'Energético tradicional.', price: 18.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Red+Bull' },
            // Menu Executivo
            { id: 95, category: 'menu_executivo', name: 'Principal: Ancho Oswaldo Aranha', description: 'Ancho 200gr coberto com alho frito, arroz branco, farofa...', price: 52.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ancho' },
            { id: 98, category: 'menu_executivo', name: 'Sobremesa: Mini Brownie', description: 'Um mini brownie com sorvete para coroar o almoço.', price: 15.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Brownie' },
            { id: 99, category: 'menu_executivo', name: 'Sobremesa: Mini Pudim', description: 'Um delicioso pudim de leite para completar o almoço.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Pudim' },
        ]
    };

    const mainCategoryLinksContainer = document.getElementById('mainCategoryLinks');
    const subCategoryLinksContainer = document.getElementById('subCategoryLinks');
    const menuItemsContainer = document.getElementById('menuItems');
    const categoryTitleEl = document.getElementById('categoryTitle');
    const searchInput = document.getElementById('searchInput');
    const noResultsEl = document.getElementById('noResults');
    const cartCountEl = document.getElementById('cartCount');

    let activeMainCategory = menuData.mainCategories[0].id;
    let activeSubCategory = menuData.mainCategories[0].subCategories[0].id;
    let cart = [];

    const renderMainCategories = () => {
        mainCategoryLinksContainer.innerHTML = '';
        menuData.mainCategories.forEach(cat => {
            const button = document.createElement('button');
            button.textContent = cat.name;
            button.className = `main-category-btn ${cat.id === activeMainCategory ? 'active' : ''}`;
            button.dataset.categoryId = cat.id;
            button.addEventListener('click', () => {
                activeMainCategory = cat.id;
                activeSubCategory = menuData.mainCategories.find(c => c.id === cat.id).subCategories[0].id;
                searchInput.value = '';
                renderAll();
            });
            mainCategoryLinksContainer.appendChild(button);
        });
    };

    const renderSubCategories = () => {
        const mainCategory = menuData.mainCategories.find(c => c.id === activeMainCategory);
        subCategoryLinksContainer.innerHTML = '';
        if (mainCategory && mainCategory.subCategories) {
            mainCategory.subCategories.forEach(subCat => {
                const button = document.createElement('button');
                button.textContent = subCat.name;
                button.className = `sub-category-btn ${subCat.id === activeSubCategory ? 'active' : ''}`;
                button.dataset.categoryId = subCat.id;
                button.addEventListener('click', () => {
                    activeSubCategory = subCat.id;
                    searchInput.value = '';
                    renderAll();
                });
                subCategoryLinksContainer.appendChild(button);
            });
        }
    };

    const renderMenuItems = (searchTerm = '') => {
        menuItemsContainer.innerHTML = '';
        
        let productsToShow;
        if (searchTerm) {
            productsToShow = menuData.products.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            categoryTitleEl.textContent = `Resultados para "${searchTerm}"`;
        } else {
            const mainCat = menuData.mainCategories.find(mc => mc.id === activeMainCategory);
            const subCat = mainCat.subCategories.find(sc => sc.id === activeSubCategory);
            productsToShow = menuData.products.filter(p => p.category === activeSubCategory);
            categoryTitleEl.textContent = subCat ? subCat.name : '';
        }

        noResultsEl.style.display = productsToShow.length === 0 ? 'block' : 'none';
        
        productsToShow.forEach(product => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="item-image" onerror="this.src='https://placehold.co/400x300/1a1a1a/ffffff?text=Imagem'">
                <div class="item-details">
                    <h3 class="item-name">${product.name}</h3>
                    <p class="item-description">${product.description}</p>
                    <div class="item-footer">
                        <p class="item-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                        <button class="add-to-cart-btn" data-product-id="${product.id}">+</button>
                    </div>
                </div>
            `;
            menuItemsContainer.appendChild(itemCard);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(button.dataset.productId);
            });
        });
    };

    const addToCart = (productId) => {
        const product = menuData.products.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            updateCartCount();
            const cartButton = document.getElementById('cartButton');
            cartButton.style.transform = 'scale(1.2)';
            setTimeout(() => {
                 cartButton.style.transform = 'scale(1)';
            }, 200);
        }
    };

    const updateCartCount = () => {
        cartCountEl.textContent = cart.length;
    };

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        if (searchTerm) {
            document.querySelectorAll('.main-category-btn, .sub-category-btn').forEach(b => b.classList.remove('active'));
            renderMenuItems(searchTerm);
        } else {
            renderAll();
        }
    });
    
    const renderAll = () => {
        renderMainCategories();
        renderSubCategories();
        renderMenuItems();
        lucide.createIcons();
    }

    renderAll();
});

