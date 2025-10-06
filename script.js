document.addEventListener('DOMContentLoaded', () => {
    // --- DADOS DO CARDÁPIO ---
    const menuData = {
        categories: [
            { id: 'menu_executivo', name: '🍽️ Menu Executivo' },
            { id: 'entradas', name: ' appetizers Entradas' },
            { id: 'saladas', name: '🥗 Saladas' },
            { id: 'chapas', name: '🔥 Chapas e Cortes' },
            { id: 'petiscos', name: '🍤 Petiscos' },
            { id: 'compartilhar', name: '👨‍👩‍👧‍👦 Pratos para Compartilhar' },
            { id: 'acompanhamentos', name: '🍚 Acompanhamentos' },
            { id: 'pratos_dois', name: '👫 Pratos para Dois' },
            { id: 'pratos_individuais', name: '👤 Pratos Individuais' },
            { id: 'burgers', name: '🍔 Hambúrgueres' },
            { id: 'espetinhos', name: '🍢 Espetinhos' },
            { id: 'chopp', name: '🍺 Chopp e Cozumel' },
            { id: 'cervejas', name: '🍻 Cervejas' },
            { id: 'long_necks', name: '🍾 Long Necks' },
            { id: 'combos', name: '🎉 Combos' },
            { id: 'caipirinhas', name: '🍹 Caipirinhas' },
            { id: 'drinks_autorais', name: '✨ Drinks Autorais' },
            { id: 'drinks_gin', name: '🍸 Drinks com Gin' },
            { id: 'drinks_gerais', name: '🍹 Outros Drinks' },
            { id: 'shots', name: '🥃 Shots e Doses' },
            { id: 'destilados', name: '🍸 Destilados' },
            { id: 'whisky', name: '🥃 Whisky' },
            { id: 'vodka', name: '🍸 Vodka' },
            { id: 'ices', name: '🍹 Ices' },
            { id: 'nao_alcoolicos', name: '🥤 Não Alcoólicos' },
        ],
        products: [
            // Entradas
            { id: 1, category: 'entradas', name: 'Carpaccio', description: 'Carpaccio de carne temperada, molho de mostarda.', price: 59.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Carpaccio' },
            { id: 2, category: 'entradas', name: 'Ceviche', description: 'Ceviche de peixe branco marinado no suco de limão.', price: 54.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Ceviche' },
            { id: 3, category: 'entradas', name: 'Tábua de Frios', description: 'Palmito, salaminho, azeitona preta e verde, queijo prato.', price: 89.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Tábua+de+Frios' },
            // Saladas
            { id: 4, category: 'saladas', name: 'Salada Caesar', description: 'Alface americana, tomate cereja, peito de frango.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Salada+Caesar' },
            { id: 5, category: 'saladas', name: 'Salada Bahrem', description: 'Mix de folhas, rúcula, queijo frescal, cebola roxa, tomatinho.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Salada+Bahrem' },
            { id: 6, category: 'saladas', name: 'Salada Bahrem com Filé', description: 'Mix de folhas, queijo muçarela, tomate cereja, palmito e cubos de filé.', price: 49.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Salada+com+Filé' },
            // Chapas e Cortes
            { id: 7, category: 'chapas', name: 'Chapa Mista Bahrem', description: 'Picanha, filet mignon, filet de frango, calabresa, batata frita.', price: 169.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Chapa+Mista' },
            { id: 8, category: 'chapas', name: 'Chapa Tirolês', description: 'Filé mignon com molho gorgonzola, frango com bacon.', price: 149.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Chapa+Tirolês' },
            { id: 9, category: 'chapas', name: 'Cupim Grelhado', description: 'Cupim Fatiado servido com pão de alho, vinagrete e farofa.', price: 79.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Cupim+Grelhado' },
            { id: 10, category: 'chapas', name: 'Picanha Baby', description: 'Fatias do corte nobre da picanha, sabor e maciez.', price: 99.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Picanha+Baby' },
            { id: 73, category: 'chapas', name: 'Chapa de Coraçãozinho', description: 'Coração de frango na chapa.', price: 49.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Coraçãozinho' },
            { id: 74, category: 'chapas', name: 'Linguiça Caipira', description: 'Carne suína picada na ponta da faca.', price: 42.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Linguiça' },
            { id: 75, category: 'chapas', name: 'Petisco de Medalhão', description: 'Carne de sol na manteiga do sertão envolto do queijo.', price: 79.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Medalhão' },
            // Petiscos
            { id: 11, category: 'petiscos', name: 'Batata Frita', description: 'Porção de batata frita crocante.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Batata+Frita' },
            { id: 12, category: 'petiscos', name: 'Batata frita com Cheddar', description: 'Batata frita com muito queijo cheddar e bacon.', price: 54.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Batata+Cheddar' },
            { id: 13, category: 'petiscos', name: 'Bolinho de Mandioca', description: 'Bolinhos com casquinha crocante, recheado de carne.', price: 44.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bolinho+Mandioca' },
            { id: 14, category: 'petiscos', name: 'Caldo de Feijão', description: 'Caldo de feijão servido no copo americano, crispy de couve.', price: 24.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caldo+Feijão' },
            { id: 15, category: 'petiscos', name: 'Fish and Chips', description: 'Peixe empanado e chips de batata asterix e molho tártaro.', price: 69.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Fish+and+Chips' },
            { id: 16, category: 'petiscos', name: 'Frango à Passarinho', description: 'Frango frito acebolado com alho frito.', price: 48.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Frango+Passarinho' },
            { id: 76, category: 'petiscos', name: 'Bolinho de Rabada', description: 'Bolinhos recheados de rabada desfiada.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bolinho+Rabada' },
            { id: 77, category: 'petiscos', name: 'Choripan', description: 'Pão francês, aioli, queijo mussarela.', price: 29.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Choripan' },
            { id: 78, category: 'petiscos', name: 'Croqueta de Costela', description: 'Costela bovina desfiada, recheada com requeijão.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Croqueta' },
            { id: 79, category: 'petiscos', name: 'Disquinho de Carne', description: '10 Unidades do nosso delicioso disquinho de carne.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Disquinho' },
            { id: 80, category: 'petiscos', name: 'Isca de Frango Empanado', description: 'Deliciosas iscas de frango.', price: 44.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Isca+de+Frango' },
            { id: 81, category: 'petiscos', name: 'Milanesa de Filé', description: 'Milanesa de filé mignon, bacon empanado crocante.', price: 62.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Milanesa' },
            { id: 82, category: 'petiscos', name: 'Torresmo à Pururuca', description: 'Crocante e sequinho.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Torresmo' },
            { id: 83, category: 'petiscos', name: 'Trio Bahrem', description: 'Pastel de queijo, croqueta e...', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Trio+Bahrem' },
            // Pratos para Compartilhar
            { id: 17, category: 'compartilhar', name: 'Ancho Supremo', description: 'Bife Ancho grelhado, queijo coalho tostado, mandioca.', price: 159.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Ancho+Supremo' },
            { id: 18, category: 'compartilhar', name: 'Bora de Picanha', description: 'Picanha grelhada (1kg in natura), batata rústica.', price: 179.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bora+de+Picanha' },
            { id: 19, category: 'compartilhar', name: 'Picanha Brasileira', description: 'Picanha grelhada, linguiça toscana, mandioca cozida.', price: 169.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Picanha+Brasileira' },
            // Acompanhamentos
            { id: 20, category: 'acompanhamentos', name: 'Arroz Biro-Biro', description: 'Arroz, bacon, ovos, cebolinha e batata palha.', price: 26.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Arroz+Biro-Biro' },
            { id: 21, category: 'acompanhamentos', name: 'Arroz à Piamontese', description: 'Arroz, creme de leite, queijo parmesão e presunto.', price: 26.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Arroz+Piamontese' },
            { id: 22, category: 'acompanhamentos', name: 'Arroz Branco', description: 'Porção de arroz branco.', price: 16.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Arroz+Branco' },
            // Pratos para Dois
            { id: 23, category: 'pratos_dois', name: 'Carne de Sol Bahrem', description: 'Carne de sol suculenta. Acompanha arroz com brócolis.', price: 149.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Carne+de+Sol' },
            { id: 24, category: 'pratos_dois', name: 'Picanha Bahrem', description: 'Picanha grelhada. Acompanha arroz biro-biro, batata frita.', price: 169.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Picanha+Bahrem' },
            // Pratos Individuais
            { id: 25, category: 'pratos_individuais', name: 'Bife Ancho', description: '350g De bife ancho. Acompanha farofa, molho.', price: 79.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bife+Ancho' },
            { id: 26, category: 'pratos_individuais', name: 'Risoto de Camarão', description: 'Arroz arbóreo com camarões, queijo grana padano.', price: 69.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Risoto+Camarão' },
            // Burgers
            { id: 27, category: 'burgers', name: 'Cheese Burger', description: 'Pão brioche, blend Angus 160g e queijo cheddar.', price: 36.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Cheese+Burger' },
            { id: 28, category: 'burgers', name: 'Cheddar Bacon', description: 'Pão brioche, blend Angus 160g, regado com molho de cheddar.', price: 39.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Cheddar+Bacon' },
            { id: 29, category: 'burgers', name: 'Big Bahrem', description: 'Pão Brioche, 2 blends de 180gr cada, queijo cheddar, cebola.', price: 42.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Big+Bahrem' },
            // Espetinhos
            { id: 30, category: 'espetinhos', name: 'Carne de Sol com Queijo', description: 'Acompanha mandioca cozida, farofa do bahrem e vinagrete.', price: 28.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Espetinho+Sol' },
            { id: 31, category: 'espetinhos', name: 'Cupim', description: 'Acompanha mandioca cozida, farofa do bahrem e vinagrete.', price: 25.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Espetinho+Cupim' },
            { id: 32, category: 'espetinhos', name: 'Picanha', description: 'Acompanha mandioca cozida, farofa do bahrem e vinagrete.', price: 31.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Espetinho+Picanha' },
            // Chopp e Cozumel
            { id: 33, category: 'chopp', name: 'Chopp Império', description: 'Chopp pilsen cremoso.', price: 11.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Chopp+Império' },
            { id: 34, category: 'chopp', name: 'Chopp Heineken', description: 'O clássico chopp Heineken.', price: 14.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Chopp+Heineken' },
            { id: 35, category: 'chopp', name: 'Cozumel', description: 'Cerveja com limão e sal na borda.', price: 13.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Cozumel' },
            { id: 36, category: 'chopp', name: 'Serviço de Cozumel', description: 'Taça preparada com borda de sal, gelo e caldo de limão.', price: 7.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Serviço+Cozumel' },
            // Cervejas
            { id: 37, category: 'cervejas', name: 'Império Puro Malte Pilsen 600ml', description: 'Cerveja puro malte.', price: 13.95, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Império+600ml' },
            { id: 38, category: 'cervejas', name: 'Heineken 600ml', description: 'Cerveja premium.', price: 18.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Heineken+600ml' },
            { id: 39, category: 'cervejas', name: 'Antarctica Original 600ml', description: 'A original do Brasil.', price: 15.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Original+600ml' },
            // Long Necks
            { id: 40, category: 'long_necks', name: 'Heineken', description: 'Long neck premium.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Heineken+LN' },
            { id: 41, category: 'long_necks', name: 'Heineken 0.0%', description: 'Cerveja sem álcool.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Heineken+0.0' },
            { id: 42, category: 'long_necks', name: 'Império Lager', description: 'Long neck puro malte.', price: 9.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Império+LN' },
            // Combos
            { id: 43, category: 'combos', name: 'Combo Old Parr', description: 'Garrafa de Old Parr + 6 energéticos.', price: 440.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Combo+Old+Parr' },
            { id: 44, category: 'combos', name: 'Combo Black Label', description: 'Garrafa de Black Label + 6 energéticos.', price: 490.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Combo+Black' },
            { id: 45, category: 'combos', name: 'Combo Smirnoff', description: 'Garrafa de Smirnoff + 6 energéticos.', price: 230.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Combo+Smirnoff' },
            // Shots
            { id: 46, category: 'shots', name: 'Licor 43', description: 'Dose do licor espanhol.', price: 17.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Licor+43' },
            { id: 47, category: 'shots', name: 'Bananazinha', description: 'Dose de cachaça de banana.', price: 12.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bananazinha' },
            { id: 84, category: 'shots', name: 'Ballena', description: 'Licor de morango com tequila.', price: 17.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Ballena' },
            { id: 85, category: 'shots', name: 'Licor 43 Chocolate', description: 'Dose de licor de chocolate.', price: 18.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Licor+Chocolate' },
            { id: 86, category: 'shots', name: 'Don Luiz - Doce de Leite', description: 'Licor delicioso de doce de leite.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Don+Luiz' },
            { id: 87, category: 'shots', name: 'Shot Bahrem', description: 'Shot especial da casa.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Shot+Bahrem' },
            { id: 88, category: 'shots', name: 'Hot Shot Bahrem', description: 'Licor 43, syrup de cranberry e curacau blue.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Hot+Shot' },
            // Destilados
            { id: 48, category: 'destilados', name: 'Gin Tanqueray', description: 'Dose ou Garrafa.', price: 17.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Gin+Tanqueray' },
            { id: 49, category: 'destilados', name: 'Cachaça Seleta', description: 'Dose da famosa cachaça.', price: 12.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Cachaça+Seleta' },
            // Whisky
            { id: 50, category: 'whisky', name: 'Johnnie Walker Red Label', description: 'Dose ou Garrafa.', price: 20.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Red+Label' },
            { id: 51, category: 'whisky', name: 'Old Parr', description: 'Dose ou Garrafa.', price: 22.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Old+Parr' },
            // Vodka
            { id: 52, category: 'vodka', name: 'Absolut', description: 'Dose ou Garrafa.', price: 18.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Absolut' },
            { id: 53, category: 'vodka', name: 'Smirnoff', description: 'Dose ou Garrafa.', price: 12.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Smirnoff' },
            // Ices
            { id: 54, category: 'ices', name: 'Smirnoff Ice', description: 'A clássica ice.', price: 14.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Smirnoff+Ice' },
            { id: 55, category: 'ices', name: 'Ice Leev Sabores', description: 'Maracujá, Maçã Verde, Morango, etc.', price: 11.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Ice+Leev' },
            // Caipirinhas
            { id: 56, category: 'caipirinhas', name: 'Caipi de Cachaça', description: 'Cachaça, limão e açúcar.', price: 15.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caipi+Cachaça' },
            { id: 57, category: 'caipirinhas', name: 'Caipi de Absolut', description: 'Vodka Absolut, limão e açúcar.', price: 18.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caipi+Absolut' },
            { id: 58, category: 'caipirinhas', name: 'Caipi de Smirnoff', description: 'Vodka Smirnoff, limão e açúcar.', price: 18.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caipi+Smirnoff' },
            { id: 89, category: 'caipirinhas', name: 'Caipicolé Limão', description: 'Limão siciliano, limão Taiti, vodka, picolé de limão.', price: 19.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caipicolé+Limão' },
            { id: 90, category: 'caipirinhas', name: 'Caipicolé Cajá', description: 'Licor maracujá, vodka, picolé de cajá e maracujá fruta.', price: 19.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caipicolé+Cajá' },
            { id: 91, category: 'caipirinhas', name: 'Caipi de Ciroc', description: 'Vodka Ciroc, limão e açúcar.', price: 19.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caipi+Ciroc' },
            { id: 92, category: 'caipirinhas', name: 'Caipi de Saquê', description: 'Saquê, limão e açúcar.', price: 18.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Caipi+Saquê' },
            // Drinks Autorais
            { id: 59, category: 'drinks_autorais', name: 'Bahrem & Berries', description: 'Gin, morango, amora, sumo de limão tahiti, creme de cassis.', price: 36.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bahrem+Berries' },
            { id: 60, category: 'drinks_autorais', name: 'Bahrem Spritz', description: 'Gin, sumo de limão, syrup de frutas vermelhas e espumante.', price: 31.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bahrem+Spritz' },
            { id: 61, category: 'drinks_autorais', name: 'Bahrem Sunset', description: 'Gin, sumo de limão, syrup de maracujá com capim limão.', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Bahrem+Sunset' },
            // Drinks com Gin
            { id: 62, category: 'drinks_gin', name: 'Árvore de Gins Clássicos', description: 'Gin laranja, gin tangerina, gin limão siciliano e gin maracujá.', price: 109.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Árvore+Gins' },
            { id: 63, category: 'drinks_gin', name: 'Gin Tônica', description: 'Gin nacional, água tônica, limão siciliano e alecrim.', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Gin+Tônica' },
            // Outros Drinks
            { id: 64, category: 'drinks_gerais', name: 'Aperol Spritz', description: 'Aperol, espumante brut, agua com gás finalizado com laranja.', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Aperol+Spritz' },
            { id: 65, category: 'drinks_gerais', name: 'Moscow Mule', description: 'Vodka, sumo de limão, shrub de gengibre com toque de...', price: 32.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Moscow+Mule' },
            { id: 66, category: 'drinks_gerais', name: 'Negroni', description: 'Gin, campari, vermute rosso e laranja bahia.', price: 29.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Negroni' },
             // Não Alcoólicos
            { id: 67, category: 'nao_alcoolicos', name: 'Suco de Laranja', description: 'Suco natural feito na hora.', price: 13.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Suco+Laranja' },
            { id: 68, category: 'nao_alcoolicos', name: 'Suco de Abacaxi c/ Hortelã', description: 'Suco natural e refrescante.', price: 14.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Suco+Abacaxi' },
            { id: 69, category: 'nao_alcoolicos', name: 'Creme de Morango', description: 'Creme de fruta gelado.', price: 16.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Creme+Morango' },
            { id: 70, category: 'nao_alcoolicos', name: 'Coca-Cola KS', description: 'Garrafa de vidro 290ml.', price: 8.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Coca-Cola' },
            { id: 71, category: 'nao_alcoolicos', name: 'Red Bull Energy Drink', description: 'Energético tradicional.', price: 18.00, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Red+Bull' },
            { id: 72, category: 'nao_alcoolicos', name: 'Água Mineral com Gás', description: 'Garrafa 500ml.', price: 7.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Água+com+Gás' },
             // Menu Executivo
            { id: 93, category: 'menu_executivo', name: 'Entrada: Croqueta de Rabada', description: '02 unidades da nossa deliciosa croqueta de rabada desfiada.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Croqueta' },
            { id: 94, category: 'menu_executivo', name: 'Entrada: Mini Carpaccio', description: 'Versão de entrada do nosso Carpaccio com rúcula, queijo...', price: 14.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Carpaccio' },
            { id: 95, category: 'menu_executivo', name: 'Principal: Ancho Oswaldo Aranha', description: 'Ancho 200gr coberto com alho frito, arroz branco, farofa...', price: 52.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Ancho' },
            { id: 96, category: 'menu_executivo', name: 'Principal: Carne de Sol', description: 'Carne de sol na manteiga do sertão. Acompanha arroz...', price: 49.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Carne+de+Sol' },
            { id: 97, category: 'menu_executivo', name: 'Principal: Strogonoff de Carne', description: 'Filé Mignon em cubos ao molho, arroz branco e batata.', price: 46.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Strogonoff' },
            { id: 98, category: 'menu_executivo', name: 'Sobremesa: Mini Brownie', description: 'Um mini brownie com sorvete para coroar o almoço.', price: 15.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Brownie' },
            { id: 99, category: 'menu_executivo', name: 'Sobremesa: Mini Pudim', description: 'Um delicioso pudim de leite para completar o almoço.', price: 12.90, image: 'https://placehold.co/400x300/1a1a1a/fbbf24?text=Pudim' },
        ]
    };

    // --- SELETORES DO DOM ---
    const categoryLinksContainer = document.getElementById('categoryLinks');
    const menuItemsContainer = document.getElementById('menuItems');
    const categoryTitleEl = document.getElementById('categoryTitle');
    const searchInput = document.getElementById('searchInput');
    const noResultsEl = document.getElementById('noResults');
    const cartCountEl = document.getElementById('cartCount');

    // --- ESTADO DA APLICAÇÃO ---
    let activeCategory = menuData.categories[0].id;
    let cart = [];

    // --- FUNÇÕES DE RENDERIZAÇÃO ---
    const renderCategories = () => {
        categoryLinksContainer.innerHTML = '';
        menuData.categories.forEach(cat => {
            const link = document.createElement('button');
            link.textContent = cat.name;
            link.className = `category-link ${cat.id === activeCategory ? 'active' : ''}`;
            link.dataset.categoryId = cat.id;
            link.addEventListener('click', () => {
                activeCategory = cat.id;
                searchInput.value = '';
                renderCategories();
                renderMenuItems();
            });
            categoryLinksContainer.appendChild(link);
        });
    };

    const renderMenuItems = (searchTerm = '') => {
        menuItemsContainer.innerHTML = '';
        
        const currentCategory = menuData.categories.find(c => c.id === activeCategory);
        if (!currentCategory && !searchTerm) return;

        let productsToShow;
        if (searchTerm) {
            productsToShow = menuData.products.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            categoryTitleEl.textContent = `Resultados para "${searchTerm}"`;
        } else {
            productsToShow = menuData.products.filter(p => p.category === activeCategory);
            categoryTitleEl.textContent = currentCategory.name;
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

        // Adiciona eventos aos novos botões
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(button.dataset.productId);
            });
        });
    };

    // --- LÓGICA DO CARRINHO ---
    const addToCart = (productId) => {
        const product = menuData.products.find(p => p.id == productId);
        if (product) {
            cart.push(product);
            updateCartCount();
            
            // Animação no botão do carrinho
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

    // --- EVENT LISTENERS ---
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        if (searchTerm) {
            document.querySelectorAll('.category-link').forEach(link => link.classList.remove('active'));
        } else if (!document.querySelector('.category-link.active')) {
             document.querySelector(`[data-category-id="${activeCategory}"]`).classList.add('active');
        }
        renderMenuItems(searchTerm);
    });

    // --- INICIALIZAÇÃO ---
    const init = () => {
        renderCategories();
        renderMenuItems();
        lucide.createIcons();
    };

    init();
});
