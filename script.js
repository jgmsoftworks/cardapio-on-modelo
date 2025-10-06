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
            { id: 1, category: 'entradas', name: 'Carpaccio', description: 'Carpaccio de carne temperada, molho de mostarda.', price: 59.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Carpaccio' },
            { id: 2, category: 'entradas', name: 'Ceviche', description: 'Ceviche de peixe branco marinado no suco de limão.', price: 54.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ceviche' },
            { id: 4, category: 'saladas', name: 'Salada Caesar', description: 'Alface americana, tomate cereja, peito de frango.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Salada+Caesar' },
            { id: 7, category: 'chapas', name: 'Chapa Mista Bahrem', description: 'Picanha, filet mignon, filet de frango, calabresa, batata frita.', price: 169.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Chapa+Mista' },
            { id: 11, category: 'petiscos', name: 'Batata Frita', description: 'Porção de batata frita crocante.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Batata+Frita' },
            { id: 17, category: 'compartilhar', name: 'Ancho Supremo', description: 'Bife Ancho grelhado, queijo coalho tostado, mandioca.', price: 159.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ancho+Supremo' },
            { id: 20, category: 'acompanhamentos', name: 'Arroz Biro-Biro', description: 'Arroz, bacon, ovos, cebolinha e batata palha.', price: 26.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Arroz+Biro-Biro' },
            { id: 23, category: 'pratos_dois', name: 'Carne de Sol Bahrem', description: 'Carne de sol suculenta. Acompanha arroz com brócolis.', price: 149.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Carne+de+Sol' },
            { id: 25, category: 'pratos_individuais', name: 'Bife Ancho', description: '350g De bife ancho. Acompanha farofa, molho.', price: 79.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bife+Ancho' },
            { id: 27, category: 'burgers', name: 'Cheese Burger', description: 'Pão brioche, blend Angus 160g e queijo cheddar.', price: 36.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Cheese+Burger' },
            { id: 33, category: 'chopp', name: 'Chopp Império', description: 'Chopp pilsen cremoso.', price: 11.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Chopp+Império' },
            { id: 43, category: 'combos', name: 'Combo Old Parr', description: 'Garrafa de Old Parr + 6 energéticos.', price: 440.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Combo+Old+Parr' },
            { id: 46, category: 'shots', name: 'Licor 43', description: 'Dose do licor espanhol.', price: 17.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Licor+43' },
            { id: 48, category: 'destilados', name: 'Gin Tanqueray', description: 'Dose ou Garrafa.', price: 17.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Gin+Tanqueray' },
            { id: 50, category: 'whisky', name: 'Johnnie Walker Red Label', description: 'Dose ou Garrafa.', price: 20.00, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Red+Label' },
            { id: 56, category: 'caipirinhas', name: 'Caipi de Cachaça', description: 'Cachaça, limão e açúcar.', price: 15.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Caipi+Cachaça' },
            { id: 59, category: 'drinks_autorais', name: 'Bahrem & Berries', description: 'Gin, morango, amora, sumo de limão tahiti, creme de cassis.', price: 36.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Bahrem+Berries' },
            { id: 62, category: 'drinks_gin', name: 'Árvore de Gins Clássicos', description: 'Gin laranja, gin tangerina, gin limão siciliano e gin maracujá.', price: 109.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Árvore+Gins' },
            { id: 64, category: 'drinks_gerais', name: 'Aperol Spritz', description: 'Aperol, espumante brut, agua com gás finalizado com laranja.', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Aperol+Spritz' },
            { id: 67, category: 'nao_alcoolicos', name: 'Suco de Laranja', description: 'Suco natural feito na hora.', price: 13.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Suco+Laranja' },
            { id: 95, category: 'menu_executivo', name: 'Principal: Ancho Oswaldo Aranha', description: 'Ancho 200gr coberto com alho frito, arroz branco, farofa...', price: 52.90, image: 'https://placehold.co/400x300/1a1a1a/D4AC6E?text=Ancho' },
        ]
    };
    
     const wineData = {
        regions: ['Argentina', 'Brasil', 'Chile', 'França', 'Itália', 'Portugal', 'Espanha'],
        wines: [
            // Argentina
            { id: 101, region: 'Argentina', name: 'La Linda Torrontés', price: 153.00, volume: '750ml', description: 'Cor verde brilhante. Exótico e extremamente perfumado com notas de rosas e casca de laranja.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Torrontés' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Lujan de Cuyo, Luigi Bosca' }] },
            { id: 102, region: 'Argentina', name: 'La Linda Chardonnay', price: 159.00, volume: '750ml', description: 'Um vinho branco de cor amarelada brilhante com aromas expressivos de frutas tropicais.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Chardonnay' }, { type: 'alcohol', value: '12.80%' }, { type: 'location', value: 'Mendoza, Luigi Bosca Wines' }] },
            { id: 103, region: 'Argentina', name: 'La Linda Malbec', price: 153.00, volume: '750ml', description: 'Coloração violácea, brilhante. No nariz exibe grande pureza de fruta, com notas de ameixa.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Argentina', icon: '🇦🇷' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Malbec' }, { type: 'alcohol', value: '14.00%' }, { type: 'location', value: 'Mendoza, Luigi Bosca' }] },

            // Brasil
            { id: 104, region: 'Brasil', name: 'Bossa Moscatel', price: 98.00, volume: '750ml', description: 'Moscatel perfumado, de grande tipicidade. Cor limão claro, perlage abundante.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Brasil', icon: '🇧🇷' }, { type: 'color', value: 'Espumante' }, { type: 'grape', value: 'Moscatel' }, { type: 'alcohol', value: '7.50%' }, { type: 'location', value: 'Serra Gaúcha, Vinícola Hermann' }] },
            { id: 105, region: 'Brasil', name: 'Hermann Bossa Prosecco', price: 98.00, volume: '750ml', description: 'Com Amadurecimento de 20 dias sur lie, em tanques de inox, Bossa Prosecco é fresco e frutado.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Brasil', icon: '🇧🇷' }, { type: 'color', value: 'Espumante' }, { type: 'grape', value: 'Glera' }, { type: 'alcohol', value: '11.00%' }, { type: 'location', value: 'Serra Gaúcha, Hermann' }] },
            { id: 106, region: 'Brasil', name: 'Chandon Brut Rosé', price: 170.00, volume: '750ml', description: 'A degustação do Chandon Brut Rosé começa pela sedução da cor rosa com perlage fina.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Brasil', icon: '🇧🇷' }, { type: 'color', value: 'Espumante' }, { type: 'grape', value: 'Chardonnay, Pinot Noir' }, { type: 'alcohol', value: '12.00%' }, { type: 'location', value: 'Garibaldi, Chandon' }] },

            // Chile
            { id: 107, region: 'Chile', name: 'Valle De Chillán Chardonnay', price: 99.90, volume: '750ml', description: 'Com uma coloração amarelo-palha brilhante, o vinho apresenta aromas de frutas tropicais.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Chile', icon: '🇨🇱' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Chardonnay' }, { type: 'alcohol', value: '12.50%' }, { type: 'location', value: 'Maule, Valle Del Chile' }] },
            { id: 108, region: 'Chile', name: 'Terranoble Reserva Sauvignon Blanc', price: 109.00, volume: '750ml', description: 'Sauvignon muito típico, aromático e vibrante. Cor limão claro, com reflexos esverdeados.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Chile', icon: '🇨🇱' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Sauvignon Blanc' }, { type: 'alcohol', value: '12.00%' }, { type: 'location', value: 'Vale Central, Terranoble' }] },
            { id: 109, region: 'Chile', name: 'Valle de Chillán Cabernet Sauvignon', price: 99.90, volume: '750ml', description: 'Com notas intensas de frutas vermelhas maduras, como ameixa e amora.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Chile', icon: '🇨🇱' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Cabernet Sauvignon' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Maule, vallado' }] },

            // França
            { id: 110, region: 'França', name: 'Paul Mas Claude Val Rouge', price: 152.00, volume: '750ml', description: 'A versão tinta do Claude Val segue o estilo que consagrou esta como uma das mais bem sucedidas marcas.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'França', icon: '🇫🇷' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Carignan, Grenache' }, { type: 'alcohol', value: '13.50%' }, { type: 'location', value: 'Languedoc-Roussillon' }] },

            // Itália
            { id: 111, region: 'Itália', name: 'Borgo Selene / Nero D\'Avola', price: 169.00, volume: '750ml', description: 'Este 100% Nero d\'Avola foi elaborado com uvas totalmente orgânicas de vinhedos da Sicília.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Itália', icon: '🇮🇹' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Nero d\'Avola' }, { type: 'alcohol', value: '13.00%' }, { type: 'location', value: 'Sicilia, Curatolo Arini' }] },
            
            // Portugal
            { id: 112, region: 'Portugal', name: 'Tâmara White', price: 104.00, volume: '750ml', description: 'Cor palha com tons esverdeados. Nariz bem marcado com fruta tropical e notas cítricas.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Portugal', icon: '🇵🇹' }, { type: 'color', value: 'Branco' }, { type: 'grape', value: 'Arinto, Fernão Pires' }, { type: 'alcohol', 'value': '12.00%' }, { type: 'location', value: 'Tejo (Ribatejo), Falua' }] },
            { id: 113, region: 'Portugal', name: 'EA Tinto', price: 109.00, volume: '750ml', description: 'Quando as uvas atingem o estado de maturação ideal, são colhidas e transportadas para a adega.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Portugal', icon: '🇵🇹' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Alicante Bouschet' }, { type: 'alcohol', value: '14.50%' }, { type: 'location', value: 'Alentejo, Fundação Eugénio De Almeida' }] },

            // Espanha
            { id: 114, region: 'Espanha', name: 'Rey de Copas', price: 85.00, volume: '750ml', description: 'Púrpura médio. Belíssima expressão de fruta da Tempranillo, com notas de ameixas e cerejas.', image: 'https://placehold.co/100x300/f5f5f5/333333?text=Vinho', tags: [{ type: 'country', value: 'Espanha', icon: '🇪🇸' }, { type: 'color', value: 'Tinto' }, { type: 'grape', value: 'Tempranillo' }, { type: 'alcohol', value: '12.00%' }, { type: 'location', value: 'Castile - La Mancha' }] },
        ]
    };

    // --- Seletores de Elementos ---
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

    // --- Estado da Aplicação ---
    let activeMainCategory = menuData.mainCategories[0].id;
    let activeSubCategory = menuData.mainCategories[0].subCategories[0].id;
    let activeWineRegion = wineData.regions[0];
    let cart = [];

    // --- Funções de Renderização (Menu Principal) ---
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

    // --- Funções de Renderização (Carta de Vinhos) ---
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
        const winesToShow = wineData.wines.filter(wine => wine.region === activeWineRegion);

        winesToShow.forEach(wine => {
            const wineCard = document.createElement('div');
            wineCard.className = 'wine-card';

            const tagsHTML = wine.tags.map(tag => {
                let iconHTML = '';
                 if (tag.icon) {
                    iconHTML = `<span>${tag.icon}</span>`;
                } else {
                    let iconName = 'wine';
                    if(tag.type === 'color') iconName = 'palette';
                    if(tag.type === 'alcohol') iconName = 'gauge-circle';
                    if(tag.type === 'location') iconName = 'map-pin';
                    iconHTML = `<i data-lucide="${iconName}"></i>`;
                }
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

    // --- Lógica do Carrinho ---
    const addToCart = (productId) => {
        const product = menuData.products.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            updateCartCount();
            const cartButton = document.getElementById('cartButton');
            cartButton.style.transform = 'scale(1.2)';
            setTimeout(() => { cartButton.style.transform = 'scale(1)'; }, 200);
        }
    };
    const updateCartCount = () => { cartCountEl.textContent = cart.length; };

    // --- Event Listeners ---
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        if (searchTerm) {
            document.querySelectorAll('.main-category-btn, .sub-category-btn').forEach(b => b.classList.remove('active'));
            renderMenuItems(searchTerm);
        } else {
            renderAll();
        }
    });

    openWineModalBtn.addEventListener('click', () => {
        wineModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
        renderWineRegions();
        renderWines();
    });

    closeWineModalBtn.addEventListener('click', () => {
        wineModal.classList.add('hidden');
        document.body.style.overflow = ''; // Permite o scroll novamente
    });
    
    wineModal.addEventListener('click', (e) => {
        if (e.target === wineModal) {
             closeWineModalBtn.click();
        }
    });


    // --- Inicialização ---
    const renderAll = () => {
        renderMainCategories();
        renderSubCategories();
        renderMenuItems();
        lucide.createIcons();
    };

    renderAll();
});

