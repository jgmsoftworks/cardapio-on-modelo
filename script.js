document.addEventListener('DOMContentLoaded', () => {
    // --- BASE DE DADOS SIMULADA ---
    const menuData = {
        // ... (resto dos dados do menu)
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
            { id: 1, category: 'entradas', name: 'Carpaccio', description: 'Finas fatias de carne crua, temperadas com alcaparras, queijo parmesão e um molho especial de mostarda e azeite.', price: 59.90, image: 'https://images.unsplash.com/photo-1598515214211-89d3c7373058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Branco Leve', 'Espumante'] },
            { id: 2, category: 'entradas', name: 'Ceviche Clássico', description: 'Cubos de peixe branco fresco marinados em sumo de limão, coentros, cebola roxa e um toque de pimenta.', price: 54.90, image: 'https://images.unsplash.com/photo-1574960810343-6232a321c172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Branco Cítrico', 'Rosé'] },

            // Saladas
            { id: 4, category: 'saladas', name: 'Salada Caesar com Camarão', description: 'Alface romana, croutons, queijo parmesão e camarões grelhados ao molho Caesar tradicional.', price: 46.90, image: 'https://images.unsplash.com/photo-1551248429-40974011e722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Branco Leve', 'Sauvignon Blanc'] },

            // Chapas e Cortes
            { id: 7, category: 'chapas', name: 'Chapa Mista Aurum', description: 'Seleção nobre de picanha, filet mignon, peito de frango e linguiça artesanal, servida na chapa com batata frita e farofa.', price: 169.90, image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true, pairing: ['Tinto Encorpado', 'Malbec'] },

            // Petiscos
            { id: 11, category: 'petiscos', name: 'Batata Frita com Alecrim e Sal Grosso', description: 'Batatas crocantes por fora e macias por dentro, com um toque aromático de alecrim fresco.', price: 39.90, image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e06399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Cerveja', 'Espumante'] },

             // Para Compartilhar
            { id: 17, category: 'compartilhar', name: 'Ancho Supremo', description: 'Generoso Bife Ancho grelhado na perfeição, acompanhado de queijo coalho tostado e mandioca cremosa.', price: 159.90, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true, pairing: ['Tinto Encorpado', 'Cabernet Sauvignon'] },
            
            // Acompanhamentos
            { id: 20, category: 'acompanhamentos', name: 'Arroz Biro-Biro', description: 'Uma mistura irresistível de arroz, ovos mexidos, bacon crocante, batata palha e um toque de salsa.', price: 26.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Arroz+Biro-Biro' },

            // Para Dois
            { id: 23, category: 'pratos_dois', name: 'Carne de Sol do Sertão', description: 'Carne de sol de primeira qualidade, desfiada e refogada na manteiga de garrafa. Acompanha arroz com brócolis e puré de abóbora.', price: 149.90, image: 'https://images.unsplash.com/photo-1645515291209-785945a557c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Tinto Médio', 'Cerveja'] },

            // Individuais
            { id: 25, category: 'pratos_individuais', name: 'Bife Ancho Individual', description: '350g do mais suculento Bife Ancho, grelhado ao ponto desejado. Acompanha farofa de ovos e molho chimichurri.', price: 79.90, image: 'https://images.unsplash.com/photo-1594041684533-7d5a5b542b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Tinto Encorpado', 'Malbec'] },

            // Hambúrgueres
            { id: 27, category: 'burgers', name: 'Aurum Burger', description: 'Hambúrguer de 180g de blend Angus, queijo cheddar maturado, bacon crocante e maionese de ervas no pão brioche.', price: 36.90, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true, pairing: ['Cerveja', 'Tinto Leve'] },
           
            // Bebidas
            { id: 33, category: 'chopp', name: 'Chopp Império Lager', description: 'Chopp pilsen de baixa fermentação, leve, cremoso e refrescante.', price: 11.90, image: 'https://images.unsplash.com/photo-1586993451228-098b8b211445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 43, category: 'combos', name: 'Combo Old Parr', description: 'Uma garrafa de Whisky Old Parr 12 anos acompanhada de 6 energéticos Red Bull.', price: 440.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Combo+Old+Parr' },
            { id: 46, category: 'shots', name: 'Licor 43', description: 'Dose do famoso licor espanhol, conhecido pelas suas 43 especiarias secretas.', price: 17.90, image: 'https://images.unsplash.com/photo-1623932982136-2479f6a2e40b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 48, category: 'destilados', name: 'Gin Tanqueray', description: 'A dose perfeita do clássico London Dry Gin, servido à sua preferência.', price: 17.00, image: 'https://images.unsplash.com/photo-1614834139283-01ab1a19616d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 50, category: 'whisky', name: 'Johnnie Walker Red Label', description: 'Dose ou Garrafa do pioneiro blend da Johnnie Walker.', price: 20.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Red+Label' },
            { id: 56, category: 'caipirinhas', name: 'Caipirinha de Cachaça Leblon', description: 'A autêntica caipirinha brasileira com cachaça Leblon, limão fresco e açúcar.', price: 15.90, image: 'https://images.unsplash.com/photo-1551538855-58c4f1a239fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 59, category: 'drinks_autorais', name: 'Aurum & Berries', description: 'Drink autoral com gin, morango, amora, sumo de limão tahiti e um toque de creme de cassis.', price: 36.90, image: 'https://images.unsplash.com/photo-1607610534292-b8a3e7b89e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true },
            { id: 62, category: 'drinks_gin', name: 'Árvore de Gins Clássicos', description: 'Uma experiência para compartilhar: gin laranja, gin tangerina, gin limão siciliano e gin maracujá.', price: 109.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Árvore+Gins' },
            { id: 64, category: 'drinks_gerais', name: 'Aperol Spritz', description: 'O clássico aperitivo italiano: Aperol, espumante brut, água com gás e uma fatia de laranja.', price: 32.90, image: 'https://images.unsplash.com/photo-1626383383364-a134c264a13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 67, category: 'nao_alcoolicos', name: 'Suco de Laranja Natural', description: 'Sumo de laranja espremido na hora, sem adição de açúcar.', price: 13.90, image: 'https://images.unsplash.com/photo-1613482228335-b108b3e37452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 95, category: 'menu_executivo', name: 'Ancho Oswaldo Aranha', description: 'Bife Ancho de 200g coberto com alho frito, acompanhado de arroz branco, farofa de ovos e batata portuguesa.', price: 52.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ancho', pairing: ['Tinto Médio', 'Malbec'] },
        ]
    };

    const wineData = {
        regions: ['Argentina', 'Brasil', 'Chile', 'França', 'Itália', 'Portugal', 'Espanha'],
        wines: [
             // Argentina
            { id: 101, region: 'Argentina', name: 'La Linda Torrontés', price: 153.00, volume: '750ml', description: 'Cor verde brilhante. Exótico e extremamente perfumado com notas de rosas e casca de laranja.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Peixes e Frutos do Mar', 'Saladas'], tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Torrontés' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Lujan de Cuyo, Luigi Bosca' }] },
            { id: 102, region: 'Argentina', name: 'La Linda Chardonnay', price: 159.00, volume: '750ml', description: 'Um vinho branco de cor amarelada brilhante com aromas expressivos de frutas tropicais.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Aves', 'Massas com Molho Branco'], tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Chardonnay' }, { type: 'alcohol', value: '12.80%' }, { type: 'location', value: 'Mendoza, Luigi Bosca Wines' }] },
            { id: 103, region: 'Argentina', name: 'La Linda Malbec', price: 153.00, volume: '750ml', description: 'Coloração violácea, brilhante. No nariz exibe grande pureza de fruta, com notas de ameixa.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Carnes Vermelhas', 'Queijos'], tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Malbec' }, { type: 'alcohol', value: '14.00%' }, { type: 'location', value: 'Mendoza, Luigi Bosca' }] },

            // Brasil
            { id: 104, region: 'Brasil', name: 'Bossa Moscatel', price: 98.00, volume: '750ml', description: 'Moscatel perfumado, de grande tipicidade. Cor limão claro, perlage abundante.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Sobremesas', 'Aperitivos'], tags: [{ type: 'country', value: 'Brasil', icon: '🇧🇷' }, { type: 'color', value: 'Espumante' }, { type: 'grape', value: 'Moscatel' }, { type: 'alcohol', value: '7.50%' }, { type: 'location', value: 'Serra Gaúcha, Vinícola Hermann' }] },
            { id: 105, region: 'Brasil', name: 'Hermann Bossa Prosecco', price: 98.00, volume: '750ml', description: 'Com Amadurecimento de 20 dias sur lie, em tanques de inox, Bossa Prosecco é fresco e frutado.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Aperitivos', 'Peixes e Frutos do Mar'], tags: [{ type: 'country', value: 'Brasil', icon: '🇧🇷' }, { type: 'color', value: 'Espumante' }, { type: 'grape', value: 'Glera' }, { type: 'alcohol', value: '11.00%' }, { type: 'location', value: 'Serra Gaúcha, Hermann' }] },
            
            // Chile
            { id: 107, region: 'Chile', name: 'Valle De Chillán Chardonnay', price: 99.90, volume: '750ml', description: 'Com uma coloração amarelo-palha brilhante, o vinho apresenta aromas de frutas tropicais.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Aves', 'Peixes e Frutos do Mar'], tags: [{ type: 'country', value: 'Chile', icon: '🇨🇱' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Chardonnay' }, { type: 'alcohol', value: '12.50%' }, { type: 'location', value: 'Maule, Valle Del Chile' }] },
            { id: 109, region: 'Chile', name: 'Valle de Chillán Cabernet Sauvignon', price: 99.90, volume: '750ml', description: 'Com notas intensas de frutas vermelhas maduras, como ameixa e amora.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Carnes Vermelhas', 'Queijos'], tags: [{ type: 'country', value: 'Chile', icon: '🇨🇱' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Cabernet Sauvignon' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Maule, vallado' }] },

            // França
            { id: 110, region: 'França', name: 'Paul Mas Claude Val Rouge', price: 152.00, volume: '750ml', description: 'A versão tinta do Claude Val segue o estilo que consagrou esta como uma das mais bem sucedidas marcas.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Carnes Vermelhas', 'Massas com Molho Vermelho'], tags: [{ type: 'country', value: 'França', icon: '🇫🇷' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Carignan' }, { type: 'alcohol', value: '13.50%' }, { type: 'location', value: 'Languedoc-Roussillon' }] },

            // Itália
            { id: 111, region: 'Itália', name: 'Borgo Selene / Nero D\'Avola', price: 169.00, volume: '750ml', description: 'Este 100% Nero d\'Avola foi elaborado com uvas totalmente orgânicas de vinhedos da Sicília.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Carnes Vermelhas', 'Massas com Molho Vermelho'], tags: [{ type: 'country', value: 'Itália', icon: '🇮🇹' }, { type: 'color', value: 'Tinto' }, { type: 'grape', 'value': 'Nero d\'Avola' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Sicilia, Curatolo Arini' }] },
            
            // Portugal
            { id: 112, region: 'Portugal', name: 'Tâmara White', price: 104.00, volume: '750ml', description: 'Cor palha com tons esverdeados. Nariz bem marcado com fruta tropical e notas cítricas.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Peixes e Frutos do Mar', 'Aperitivos'], tags: [{ type: 'country', value: 'Portugal', icon: '🇵🇹' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Arinto' }, { type: 'alcohol', 'value': '12.00%' }, { type: 'location', value: 'Tejo (Ribatejo), Falua' }] },
            
            // Espanha
            { id: 114, region: 'Espanha', name: 'Rey de Copas', price: 85.00, volume: '750ml', description: 'Púrpura médio. Belíssima expressão de fruta da Tempranillo, com notas de ameixas e cerejas.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Carnes Vermelhas', 'Queijos'], tags: [{ type: 'country', value: 'Espanha', icon: '🇪🇸' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Tempranillo' }, { type: 'alcohol', value: '12.00%' }, { type: 'location', value: 'Castile - La Mancha' }] },
        ]
    };


    // --- SELETORES DE ELEMENTOS ---
    const mainCategoryLinksContainer = document.getElementById('mainCategoryLinks');
    const subCategoryLinksContainer = document.getElementById('subCategoryLinks');
    const menuItemsContainer = document.getElementById('menuItems');
    const categoryTitleEl = document.getElementById('categoryTitle');
    const searchInput = document.getElementById('searchInput');
    const noResultsEl = document.getElementById('noResults');
    const cartCountEl = document.getElementById('cartCount');
    
    // --- Seletores Modal Vinhos ---
    const wineModal = document.getElementById('wineModal');
    const openWineModalBtn = document.getElementById('openWineModalBtn');
    const closeWineModalBtn = document.getElementById('closeWineModalBtn');
    const wineRegionNav = document.getElementById('wineRegionNav');
    const wineItemsGrid = document.getElementById('wineItemsGrid');
    const wineGrapeFilter = document.getElementById('wineGrapeFilter');
    const winePairingFilter = document.getElementById('winePairingFilter');

    // --- Seletores Modal Detalhes ---
    const detailsModal = document.getElementById('detailsModal');
    const closeDetailsModalBtn = document.getElementById('closeDetailsModalBtn');
    const detailsModalBody = document.getElementById('detailsModalBody');


    // --- ESTADO DA APLICAÇÃO ---
    let activeMainCategory = menuData.mainCategories[0].id;
    let activeSubCategory = menuData.mainCategories[0].subCategories[0].id;
    let activeWineRegion = wineData.regions[0];
    let cart = [];

    // --- FUNÇÕES DE RENDERIZAÇÃO (MENU PRINCIPAL) ---
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
        setTimeout(() => {
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

            productsToShow.forEach((product, index) => {
                const itemCard = document.createElement('div');
                itemCard.className = 'item-card';
                itemCard.style.animationDelay = `${index * 0.05}s`;
                itemCard.dataset.productId = product.id;

                const chefSuggestionHTML = product.chefSuggestion ? `
                    <div class="chef-suggestion">
                        <i data-lucide="crown"></i> Chef
                    </div>
                ` : '';

                itemCard.innerHTML = `
                    <div class="item-card-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/220x220/1a1a1a/ffffff?text=Aurum'">
                        ${chefSuggestionHTML}
                    </div>
                    <div class="item-card-content">
                        <div>
                           <h3 class="item-name">${product.name}</h3>
                           <p class="item-description">${product.description}</p>
                        </div>
                        <div class="item-footer">
                            <p class="item-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                            <button class="add-to-cart-btn" data-product-id="${product.id}">+</button>
                        </div>
                    </div>
                `;
                menuItemsContainer.appendChild(itemCard);
            });
            
            lucide.createIcons();
            
            document.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addToCart(button.dataset.productId);
                });
            });

            document.querySelectorAll('.item-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (e.target.closest('.add-to-cart-btn')) return;
                    openDetailsModal(card.dataset.productId);
                });
            });

        }, 150);
    };

    // --- FUNÇÕES DE RENDERIZAÇÃO (CARTA DE VINHOS) ---
    
    const populateWineFilters = () => {
        const grapes = [...new Set(wineData.wines.flatMap(w => w.tags.find(t => t.type === 'grape')?.value).filter(Boolean))];
        const pairings = [...new Set(wineData.wines.flatMap(w => w.pairing).filter(Boolean))];

        wineGrapeFilter.innerHTML = '<option value="all">Todas as Uvas</option>';
        grapes.sort().forEach(grape => {
            const option = document.createElement('option');
            option.value = grape;
            option.textContent = grape;
            wineGrapeFilter.appendChild(option);
        });

        winePairingFilter.innerHTML = '<option value="all">Todas as Harmonizações</option>';
        pairings.sort().forEach(pairing => {
            const option = document.createElement('option');
            option.value = pairing;
            option.textContent = pairing;
            winePairingFilter.appendChild(option);
        });
    };
    
    const renderWineRegions = () => {
        wineRegionNav.innerHTML = '';
        wineData.regions.forEach(region => {
            const button = document.createElement('button');
            button.textContent = region;
            button.className = `wine-region-btn ${region === activeWineRegion ? 'active' : ''}`;
            button.addEventListener('click', () => {
                activeWineRegion = region;
                renderWineRegions();
                renderWines();
            });
            wineRegionNav.appendChild(button);
        });
    };

    const renderWines = () => {
        wineItemsGrid.innerHTML = '';
        
        const selectedGrape = wineGrapeFilter.value;
        const selectedPairing = winePairingFilter.value;

        let winesToShow = wineData.wines.filter(wine => wine.region === activeWineRegion);
        
        if (selectedGrape !== 'all') {
            winesToShow = winesToShow.filter(w => w.tags.some(t => t.type === 'grape' && t.value === selectedGrape));
        }
        if (selectedPairing !== 'all') {
            winesToShow = winesToShow.filter(w => w.pairing.includes(selectedPairing));
        }

        if (winesToShow.length === 0) {
            wineItemsGrid.innerHTML = '<p class="no-results" style="display:block;">Nenhum vinho encontrado com os filtros selecionados.</p>';
            return;
        }

        winesToShow.forEach(wine => {
            const wineCard = document.createElement('div');
            wineCard.className = 'wine-card';

            const tagsHTML = wine.tags.map(tag => {
                let iconHTML = tag.icon ? `<span>${tag.icon}</span>` : `<i data-lucide="info"></i>`;
                return `<div class="wine-tag">${iconHTML} ${tag.value}</div>`;
            }).join('');

            wineCard.innerHTML = `
                <img src="${wine.image}" alt="${wine.name}" class="wine-image">
                <div class="wine-details">
                    <div class="wine-header">
                        <h3 class="wine-name">${wine.name}</h3>
                        <div class="wine-price-volume">
                            R$ ${wine.price.toFixed(2).replace('.', ',')}
                            <span>${wine.volume}</span>
                        </div>
                    </div>
                    <p class="wine-description">${wine.description}</p>
                    <div class="wine-tags">${tagsHTML}</div>
                </div>
            `;
            wineItemsGrid.appendChild(wineCard);
        });
        lucide.createIcons();
    };

    // --- LÓGICA DO CARRINHO ---
    const addToCart = (productId) => {
        const product = menuData.products.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            updateCartCount();
            const cartButton = document.getElementById('cartButton');
            cartButton.classList.add('animate');
            setTimeout(() => { cartButton.classList.remove('animate'); }, 300);
        }
    };
    const updateCartCount = () => { cartCountEl.textContent = cart.length; };

    // --- LÓGICA DOS MODAIS ---
    const openModal = (modalEl) => {
        modalEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (modalEl) => {
        modalEl.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // --- Modal de Vinhos
    const openWineModal = () => {
        openModal(wineModal);
        renderWineRegions();
        populateWineFilters();
        renderWines();
    };
    openWineModalBtn.addEventListener('click', openWineModal);
    closeWineModalBtn.addEventListener('click', () => closeModal(wineModal));
    wineGrapeFilter.addEventListener('change', renderWines);
    winePairingFilter.addEventListener('change', renderWines);


    // --- Modal de Detalhes do Prato
    const openDetailsModal = (productId) => {
        const product = menuData.products.find(p => p.id == productId);
        if (!product) return;

        let pairingHTML = '';
        if (product.pairing && product.pairing.length > 0) {
            const pairingList = product.pairing.map(p => `<li class="pairing-item">- ${p}</li>`).join('');
            pairingHTML = `
                <div class="wine-pairing">
                    <h4>Sugestão de Harmonização</h4>
                    <ul class="pairing-list">${pairingList}</ul>
                </div>
            `;
        }

        detailsModalBody.innerHTML = `
            <div class="details-modal-body">
                <img src="${product.image}" alt="${product.name}" class="details-image">
                <div class="details-info">
                    <h3 class="item-name">${product.name}</h3>
                    <p class="item-description">${product.description}</p>
                    <p class="item-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                    <button class="details-add-to-cart" data-product-id="${product.id}">
                        <i data-lucide="plus"></i> Adicionar ao Pedido
                    </button>
                    ${pairingHTML}
                </div>
            </div>
        `;

        lucide.createIcons();
        openModal(detailsModal);

        document.querySelector('.details-add-to-cart').addEventListener('click', (e) => {
            addToCart(e.currentTarget.dataset.productId);
            closeModal(detailsModal);
        });
    };
    closeDetailsModalBtn.addEventListener('click', () => closeModal(detailsModal));

    // Fecha modais ao clicar no overlay
    [wineModal, detailsModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });


    // --- EVENT LISTENERS GERAIS ---
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        if (searchTerm) {
            document.querySelectorAll('.main-category-btn, .sub-category-btn').forEach(b => b.classList.remove('active'));
            renderMenuItems(searchTerm);
        } else {
            renderAll();
        }
    });

    // --- INICIALIZAÇÃO ---
    const renderAll = () => {
        renderMainCategories();
        renderSubCategories();
        renderMenuItems();
    };

    renderAll();
});

