document.addEventListener('DOMContentLoaded', () => {
    // --- CHAVE DA API (IMPORTANTE!) ---
    const UNSPLASH_API_KEY = 'diHk1eYC4w-mm41jPDsJBNmAozLoF8v0kHBpFLtT5BI';

    // --- BASE DE DADOS SIMULADA ---
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
            { id: 1, category: 'entradas', name: 'Carpaccio', description: 'Finas fatias de carne crua, temperadas com alcaparras, queijo parmesão e um molho especial.', price: 59.90, image: 'https://images.unsplash.com/photo-1598515214211-89d3c7373058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Branco Leve', 'Espumante'] },
            { id: 2, category: 'entradas', name: 'Ceviche Clássico', description: 'Cubos de peixe branco fresco marinados em sumo de limão, coentros, cebola roxa e pimenta.', price: 54.90, image: 'https://images.unsplash.com/photo-1574960810343-6232a321c172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Branco Cítrico', 'Rosé'] },

            // Saladas
            { id: 4, category: 'saladas', name: 'Salada Caesar com Camarão', description: 'Alface romana, croutons, parmesão e camarões grelhados ao molho Caesar.', price: 46.90, image: null, pairing: ['Branco Leve', 'Sauvignon Blanc'] },

            // Chapas e Cortes
            { id: 7, category: 'chapas', name: 'Chapa Mista Aurum', description: 'Picanha, filet mignon, frango e linguiça artesanal, com batata frita e farofa.', price: 169.90, image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true, pairing: ['Tinto Encorpado', 'Malbec'] },

            // Petiscos
            { id: 11, category: 'petiscos', name: 'Batata Frita com Alecrim', description: 'Batatas crocantes por fora e macias por dentro, com um toque aromático de alecrim fresco.', price: 39.90, image: null, pairing: ['Cerveja', 'Espumante'] },

             // Para Compartilhar
            { id: 17, category: 'compartilhar', name: 'Ancho Supremo', description: 'Generoso Bife Ancho grelhado, com queijo coalho tostado e mandioca cremosa.', price: 159.90, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true, pairing: ['Tinto Encorpado', 'Cabernet Sauvignon'] },
            
            // Acompanhamentos
            { id: 20, category: 'acompanhamentos', name: 'Arroz Biro-Biro', description: 'Arroz, ovos mexidos, bacon crocante, batata palha e um toque de salsa.', price: 26.90, image: null },

            // Para Dois
            { id: 23, category: 'pratos_dois', name: 'Carne de Sol do Sertão', description: 'Carne de sol desfiada na manteiga de garrafa. Acompanha arroz com brócolis e puré de abóbora.', price: 149.90, image: null, pairing: ['Tinto Médio', 'Cerveja'] },

            // Individuais
            { id: 25, category: 'pratos_individuais', name: 'Bife Ancho Individual', description: '350g de Bife Ancho grelhado. Acompanha farofa de ovos e molho chimichurri.', price: 79.90, image: 'https://images.unsplash.com/photo-1594041684533-7d5a5b542b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', pairing: ['Tinto Encorpado', 'Malbec'] },

            // Hambúrgueres
            { id: 27, category: 'burgers', name: 'Aurum Burger', description: '180g de blend Angus, queijo cheddar, bacon e maionese de ervas no pão brioche.', price: 36.90, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true, pairing: ['Cerveja', 'Tinto Leve'] },
           
            // Bebidas
            { id: 33, category: 'chopp', name: 'Chopp Império Lager', description: 'Chopp pilsen de baixa fermentação, leve, cremoso e refrescante.', price: 11.90, image: null },
            { id: 43, category: 'combos', name: 'Combo Old Parr', description: 'Uma garrafa de Whisky Old Parr 12 anos e 6 energéticos Red Bull.', price: 440.00, image: null },
            { id: 46, category: 'shots', name: 'Licor 43', description: 'Dose do famoso licor espanhol, com as suas 43 especiarias secretas.', price: 17.90, image: 'https://images.unsplash.com/photo-1623932982136-2479f6a2e40b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 48, category: 'destilados', name: 'Gin Tanqueray', description: 'A dose perfeita do clássico London Dry Gin, servido à sua preferência.', price: 17.00, image: 'https://images.unsplash.com/photo-1614834139283-01ab1a19616d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 50, category: 'whisky', name: 'Johnnie Walker Red Label', description: 'Dose ou Garrafa do pioneiro blend da Johnnie Walker.', price: 20.00, image: null },
            { id: 56, category: 'caipirinhas', name: 'Caipirinha de Cachaça Leblon', description: 'A autêntica caipirinha brasileira com cachaça Leblon, limão fresco e açúcar.', price: 15.90, image: null },
            { id: 59, category: 'drinks_autorais', name: 'Aurum & Berries', description: 'Drink autoral com gin, morango, amora, sumo de limão tahiti e creme de cassis.', price: 36.90, image: 'https://images.unsplash.com/photo-1607610534292-b8a3e7b89e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', chefSuggestion: true },
            { id: 62, category: 'drinks_gin', name: 'Árvore de Gins Clássicos', description: 'Uma experiência para compartilhar: gin laranja, tangerina, limão siciliano e maracujá.', price: 109.90, image: null },
            { id: 64, category: 'drinks_gerais', name: 'Aperol Spritz', description: 'O clássico italiano: Aperol, espumante brut, água com gás e uma fatia de laranja.', price: 32.90, image: 'https://images.unsplash.com/photo-1626383383364-a134c264a13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
            { id: 67, category: 'nao_alcoolicos', name: 'Suco de Laranja Natural', description: 'Sumo de laranja espremido na hora, sem adição de açúcar.', price: 13.90, image: null },
            { id: 95, category: 'menu_executivo', name: 'Ancho Oswaldo Aranha', description: '200g de Bife Ancho com alho frito, arroz, farofa e batata portuguesa.', price: 52.90, image: null, pairing: ['Tinto Médio', 'Malbec'] },
        ]
    };

    const wineData = {
        regions: ['Argentina', 'Brasil', 'Chile', 'França', 'Itália', 'Portugal', 'Espanha'],
        wines: [
             // Argentina
            { id: 101, region: 'Argentina', name: 'La Linda Torrontés', price: 153.00, volume: '750ml', description: 'Cor verde brilhante. Exótico e perfumado com notas de rosas e casca de laranja.', image: null, pairing: ['Peixes e Frutos do Mar', 'Saladas'], tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Torrontés' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Lujan de Cuyo, Luigi Bosca' }] },
            { id: 102, region: 'Argentina', name: 'La Linda Chardonnay', price: 159.00, volume: '750ml', description: 'Um vinho branco de cor amarelada brilhante com aromas expressivos de frutas tropicais.', image: null, pairing: ['Aves', 'Massas com Molho Branco'], tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Chardonnay' }, { type: 'alcohol', value: '12.80%' }, { type: 'location', value: 'Mendoza, Luigi Bosca Wines' }] },
            { id: 103, region: 'Argentina', name: 'La Linda Malbec', price: 153.00, volume: '750ml', description: 'Coloração violácea, brilhante. No nariz exibe grande pureza de fruta, com notas de ameixa.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', pairing: ['Carnes Vermelhas', 'Queijos'], tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Malbec' }, { type: 'alcohol', value: '14.00%' }, { type: 'location', value: 'Mendoza, Luigi Bosca' }] },

            // Brasil
            { id: 104, region: 'Brasil', name: 'Bossa Moscatel', price: 98.00, volume: '750ml', description: 'Moscatel perfumado, de grande tipicidade. Cor limão claro, perlage abundante.', image: null, pairing: ['Sobremesas', 'Aperitivos'], tags: [{ type: 'country', value: 'Brasil', icon: '🇧🇷' }, { type: 'color', value: 'Espumante' }, { type: 'grape', value: 'Moscatel' }, { type: 'alcohol', value: '7.50%' }, { type: 'location', value: 'Serra Gaúcha, Vinícola Hermann' }] },
            { id: 105, region: 'Brasil', name: 'Hermann Bossa Prosecco', price: 98.00, volume: '750ml', description: 'Com Amadurecimento de 20 dias sur lie, em tanques de inox, Bossa Prosecco é fresco e frutado.', image: null, pairing: ['Aperitivos', 'Peixes e Frutos do Mar'], tags: [{ type: 'country', value: 'Brasil', icon: '🇧🇷' }, { type: 'color', value: 'Espumante' }, { type: 'grape', value: 'Glera' }, { type: 'alcohol', value: '11.00%' }, { type: 'location', value: 'Serra Gaúcha, Hermann' }] },
            
            // Chile
            { id: 107, region: 'Chile', name: 'Valle De Chillán Chardonnay', price: 99.90, volume: '750ml', description: 'Com uma coloração amarelo-palha brilhante, o vinho apresenta aromas de frutas tropicais.', image: null, pairing: ['Aves', 'Peixes e Frutos do Mar'], tags: [{ type: 'country', value: 'Chile', icon: '🇨🇱' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Chardonnay' }, { type: 'alcohol', value: '12.50%' }, { type: 'location', value: 'Maule, Valle Del Chile' }] },
            { id: 109, region: 'Chile', name: 'Valle de Chillán Cabernet Sauvignon', price: 99.90, volume: '750ml', description: 'Com notas intensas de frutas vermelhas maduras, como ameixa e amora.', image: null, pairing: ['Carnes Vermelhas', 'Queijos'], tags: [{ type: 'country', value: 'Chile', icon: '🇨🇱' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Cabernet Sauvignon' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Maule, vallado' }] },

            // França
            { id: 110, region: 'França', name: 'Paul Mas Claude Val Rouge', price: 152.00, volume: '750ml', description: 'A versão tinta do Claude Val segue o estilo que consagrou esta como uma das mais bem sucedidas marcas.', image: null, pairing: ['Carnes Vermelhas', 'Massas com Molho Vermelho'], tags: [{ type: 'country', value: 'França', icon: '🇫🇷' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Carignan' }, { type: 'alcohol', value: '13.50%' }, { type: 'location', value: 'Languedoc-Roussillon' }] },

            // Itália
            { id: 111, region: 'Itália', name: 'Borgo Selene / Nero D\'Avola', price: 169.00, volume: '750ml', description: 'Este 100% Nero d\'Avola foi elaborado com uvas totalmente orgânicas de vinhedos da Sicília.', image: null, pairing: ['Carnes Vermelhas', 'Massas com Molho Vermelho'], tags: [{ type: 'country', value: 'Itália', icon: '🇮🇹' }, { type: 'color', value: 'Tinto' }, { type: 'grape', 'value': 'Nero d\'Avola' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Sicilia, Curatolo Arini' }] },
            
            // Portugal
            { id: 112, region: 'Portugal', name: 'Tâmara White', price: 104.00, volume: '750ml', description: 'Cor palha com tons esverdeados. Nariz bem marcado com fruta tropical e notas cítricas.', image: null, pairing: ['Peixes e Frutos do Mar', 'Aperitivos'], tags: [{ type: 'country', value: 'Portugal', icon: '🇵🇹' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Arinto' }, { type: 'alcohol', 'value': '12.00%' }, { type: 'location', value: 'Tejo (Ribatejo), Falua' }] },
            
            // Espanha
            { id: 114, region: 'Espanha', name: 'Rey de Copas', price: 85.00, volume: '750ml', description: 'Púrpura médio. Belíssima expressão de fruta da Tempranillo, com notas de ameixas e cerejas.', image: null, pairing: ['Carnes Vermelhas', 'Queijos'], tags: [{ type: 'country', value: 'Espanha', icon: '🇪🇸' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Tempranillo' }, { type: 'alcohol', value: '12.00%' }, { type: 'location', value: 'Castile - La Mancha' }] },
        ]
    };

    // --- CACHE DE IMAGENS ---
    const imageCache = {};

    // --- FUNÇÃO OTIMIZADA PARA BUSCAR IMAGENS AUTOMATICAMENTE POR CATEGORIA ---
    async function fetchImagesForCategory(categoryName, count) {
        if (imageCache[categoryName] && imageCache[categoryName].length >= count) {
            return imageCache[categoryName];
        }
         if (UNSPLASH_API_KEY === 'SUA_CHAVE_DE_API_AQUI') {
             console.warn("API Key do Unsplash não configurada. Usando imagens de placeholder.");
             return Array(count).fill(null).map((_, i) => `https://placehold.co/220x220/1a1a1a/ffffff?text=${encodeURIComponent(categoryName)}+${i+1}`);
        }

        try {
            const query = encodeURIComponent(`${categoryName} gourmet food`);
            // Pedimos mais imagens do que o necessário para ter variedade
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=${count > 20 ? 20 : count}&client_id=${UNSPLASH_API_KEY}`);
            if (!response.ok) throw new Error(`Erro na API Unsplash: ${response.statusText}`);

            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const imageUrls = data.results.map(img => img.urls.regular);
                imageCache[categoryName] = imageUrls;
                return imageUrls;
            }
        } catch (error) {
            console.error(`Falha ao buscar imagens para a categoria ${categoryName}:`, error);
        }
        
        // Retorno padrão em caso de falha
        return Array(count).fill(null).map((_, i) => `https://placehold.co/220x220/1a1a1a/ffffff?text=${encodeURIComponent(categoryName)}+${i+1}`);
    }


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

    const renderMenuItems = async (searchTerm = '') => {
        menuItemsContainer.innerHTML = '<div class="loader"></div>'; // Mostra um loader enquanto carrega
        let productsToShow;
        let categoryName = 'Resultados da Busca';

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
            categoryName = subCat ? subCat.name : '';
            categoryTitleEl.textContent = categoryName;
        }

        noResultsEl.style.display = productsToShow.length === 0 ? 'block' : 'none';
        if(productsToShow.length === 0){
            menuItemsContainer.innerHTML = '';
            return;
        }

        // --- Lógica Otimizada de Imagens ---
        const productsNeedingImage = productsToShow.filter(p => !p.image);
        if (productsNeedingImage.length > 0) {
            const fetchedImages = await fetchImagesForCategory(categoryName, productsNeedingImage.length);
            productsNeedingImage.forEach((product, index) => {
                // Atribui uma imagem da lista de forma circular para garantir que todos recebam uma
                product.tempImage = fetchedImages[index % fetchedImages.length];
            });
        }

        menuItemsContainer.innerHTML = ''; // Limpa o loader

        productsToShow.forEach((product, index) => {
            const imageUrl = product.image || product.tempImage || `https://placehold.co/220x220/1a1a1a/ffffff?text=Aurum`;
            const chefSuggestionHTML = product.chefSuggestion ? `<div class="chef-suggestion"><i data-lucide="crown"></i> Chef</div>` : '';
            
            const itemHTML = `
                <div class="item-card" style="animation-delay: ${index * 0.05}s;" data-product-id="${product.id}">
                    <div class="item-card-image">
                        <img src="${imageUrl}" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/220x220/1a1a1a/ffffff?text=Aurum'">
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
                </div>`;
            menuItemsContainer.innerHTML += itemHTML;
        });
        
        lucide.createIcons();
        attachCardEventListeners();
    };

    const attachCardEventListeners = () => {
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

    const renderWines = async () => {
        wineItemsGrid.innerHTML = '<div class="loader"></div>';
        
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
            wineItemsGrid.innerHTML = '<p class="no-results" style="display:block;">Nenhum vinho encontrado.</p>';
            return;
        }
        
        const winesNeedingImage = winesToShow.filter(w => !w.image);
        if (winesNeedingImage.length > 0) {
            const fetchedImages = await fetchImagesForCategory(`garrafa de vinho ${activeWineRegion}`, winesNeedingImage.length);
            winesNeedingImage.forEach((wine, index) => {
                wine.tempImage = fetchedImages[index % fetchedImages.length];
            });
        }
        
        wineItemsGrid.innerHTML = '';

        winesToShow.forEach(wine => {
            const imageUrl = wine.image || wine.tempImage || `https://placehold.co/100x300/1a1a1a/ffffff?text=Vinho`;
            const tagsHTML = wine.tags.map(tag => {
                let iconHTML = tag.icon ? `<span>${tag.icon}</span>` : `<i data-lucide="info"></i>`;
                return `<div class="wine-tag">${iconHTML} ${tag.value}</div>`;
            }).join('');
            
            const wineHTML = `
                <div class="wine-card">
                    <img src="${imageUrl}" alt="${wine.name}" class="wine-image" loading="lazy" onerror="this.src='https.placehold.co/100x300/1a1a1a/ffffff?text=Vinho'">
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
                </div>`;
            wineItemsGrid.innerHTML += wineHTML;
        });

        lucide.createIcons();
    };

    // --- LÓGICA DO CARRINHO ---
    const addToCart = (productId) => {
        const product = menuData.products.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            updateCartCount();
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

    const openDetailsModal = async (productId) => {
        const product = menuData.products.find(p => p.id == productId);
        if (!product) return;

        const imageUrl = product.image || product.tempImage || `https://placehold.co/400x400/1a1a1a/ffffff?text=${encodeURIComponent(product.name)}`;

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
                <img src="${imageUrl}" alt="${product.name}" class="details-image" loading="lazy" onerror="this.src='https.placehold.co/400x400/1a1a1a/ffffff?text=Aurum'">
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

    [wineModal, detailsModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        document.querySelectorAll('.main-category-btn, .sub-category-btn').forEach(b => b.classList.remove('active'));
        if (!searchTerm) {
            renderAll();
        } else {
            renderMenuItems(searchTerm);
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

