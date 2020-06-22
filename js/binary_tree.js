class BinaryTree {
    // construtor da classe onde será criado o nó da raiz da árvore
    constructor() {
        this.root = null
    }

    /* essa função exibe o menor valor da árvore, dentro dela criamos a váriavel current que recebe toda a árvore
       - se current estiver vazia então retorna null, acabou-se não tem mais o que fazer
       - se ela não estiver vazia, percorremos dentro dos nós da árvore
         enquanto o current.left(lado da árvore onde estão os valores menores que a raiz)
         for diferente de nulo, current vai receber sempre o current na posição left até cairmos no ultimo nó
         quando caímos no último nó, significa que esse é o menor valor da aŕvore
         no final retornamos o conteúdo presente no último nó da arvore - o menor
    */
    min() {
        let current = this.root
        if (current == null)
            return null
        while (current.left != null)
            current = current.left
        return current.content
    }

    /* essa função exibe o maior valor da árvore, dentro dela criamos a váriavel current que recebe toda a árvore
       - se current estiver vazia então retorna null, acabou-se não tem mais o que fazer
       - se ela não estiver vazia, percorremos dentro dos nós da árvore
         enquanto o current.right(lado da árvore onde estão os valores maiores que a raiz)
         for diferente de nulo, current vai receber sempre o current na posição right até cairmos no ultimo nó,
         ao caírmos no último nó, significa que esse é o maior valor da aŕvore
         no final retornamos o conteúdo presente no último nó da arvore - o maior
    */
    max() {
        let current = this.root
        if (current == null)
            return null
        while (current.right != null)
            current = current.right
        return current.content
    }

    /*insere o elemento da arvore diretamente na raiz e com a chamada da função insertNode consegue-se 
    fazer todo aquele processo de verificação se a raiz está vazia ou não e inserir na posição correta
    */
    insert(element) {
        this.root = this.insertNode(this.root, element)
    }

    /*A função insertNode é uma função recursiva, significa que ela faz chamada a si mesmo dentro do seu escopo
        - em seu parâmetros ela recebe um nó raiz e um elemento(valor), se a raiz for nula então é onde deve ser
        inserido o novo nó com o elemento
       
        -se já existir uma raiz, é verificado se o elemento que está sendo inserido é maior que o da raiz, se sim:
            então o nó raiz na posição right vai receber a chamada da função insertNode e em seu parametro passamos
            a raiz na posição righ e o elemento que desejamos inserir. A chamada faz o mesmo processo de verificação
            até encontrar uma raiz nula.

        -se o elemento for menor que a raiz que já existe, então a raiz na posição left recebe a chamada da função insertNode
        e acontece mais uma vez a revificação descrita acima até encontrar uma raiz nula para fazer a criação de uma nova
        raiz com esse elemento
    */
    insertNode(rootNode, element) {
        if (rootNode == null)
            return new Node(element)
        if (element > rootNode.content)
            rootNode.right = this.insertNode(rootNode.right, element)
        else
            rootNode.left = this.insertNode(rootNode.left, element)
        return rootNode
    }

    /*função para exibir a arvore em ordem
    chama a função inOrderVIsitor e coloca todo a arvore dentro dela
    e também passa o callback para exibir os conteudos
    */
    inOrderTraverse(callback) {
        this.inOrderVisitor(this.root, callback)
    }

    /* recebe um nó e uma callback, se o nó for nulo ele encerra pois não tem mais o que percorrer
       -se node não for nulo, é chamada a função inOrderVisitor passando o (node.left)
       e a callback para exibir o nó esquerdo primeiramente
       -para exibir a raiz callback recebe o node.content
       -para exibir o nó direito é chamada a função inOrderVisitor passando o (node.right) e a callback para exibir o nó direito
    */
    inOrderVisitor(node, callback) {
        if (node == null)
            return
        this.inOrderVisitor(node.left, callback)
        callback(node.content)
        this.inOrderVisitor(node.right, callback)
    }

    /*função para exibir a arvore em pré-ordem
    chama a função preOrderVIsitor e coloca todo a arvore dentro dela
    e também passa o callback para exibir os conteudos
    */
    preOrderTraverse(callback) {
        this.preOrderVisitor(this.root, callback)
    }


    /* recebe um nó e uma callback, se o nó for nulo ele encerra pois não tem mais o que percorrer
       -se node não for nulo, é chamada a função preOrderVisitor passando o (node.contexnt) para exibir primeiro a raiz
       -para exibir o conteudo do nó esquerdo é chamada a função preOrderVisitor
        passando o (node.left) e a callback para exibir conteudo do node.left
       -para exibir o conteúdo do nó direito é chamada a função preOrderVisitor
        passando o (node.right) e a callback para exibir conteudo do node.right
    */
    preOrderVisitor(node, callback) {
        if (node == null)
            return
        callback(node.content)
        this.preOrderVisitor(node.left, callback)
        this.preOrderVisitor(node.right, callback)
    }

    /*função para exibir a arvore em pós-ordem
    chama a função posOrderVIsitor e coloca todo a arvore dentro dela
    e também passa o callback para exibir os conteudos
    */
    postOrderTraverse(callback) {
        this.postOrderVisitor(this.root, callback)
    }


    /* recebe um nó e uma callback, se o nó for nulo ele encerra pois não tem mais o que percorrer
       -se node não for nulo, é chamada a função preOrderVisitor passando o (node.left)
        para exibir primeiro do conteudo do nó esquerdo
       -em seguida faz a chamada de postOrderVisitor para exibir o conteudo do nó direito passando o node.right
       - e por fim para exibir a raiz passamos o node.content na callback que irá mostrar o conteudo
    */
    postOrderVisitor(node, callback) {
        if (node == null)
            return
        this.postOrderVisitor(node.left, callback)
        this.postOrderVisitor(node.right, callback)
        callback(node.content)
    }

    /* funcção para buscar na árvore
       retorna a chamada da função searchVisitor, e nessa função é passado nos paramatros
       toda a arvore e o valor que estamos procurando. Na função "searchVisitor" quando
       o valor é encontrado é retornado TRUE ou FALSE caso não seja.
       Ou seja, a função search retorna o retorno da função searchVisitor 
    */
    search(value) {
        return this.searchVisitor(this.root, value)
    }

    /* seachVisitor é uma função recursiva que percorre por dentro da arvore para encontrar o valor
       recebe o nó e o elemento como parâmetros
       -se o nó for nulo então retorna falso, pois não existe nenhum elemento lá
       -se o node.content for igual ao elemento então já achamos nosso valor procurado, retorna true
       -se o elemento procurado for maior que o node.content então fazemos a chamada da própria função
        porém passando o node.right e o elemento, para verificar se o node.element que está dentro
        do node.right é igual ao valor buscado, se sim então retorna true
       -caso não seja maior, fazemos a chamada da própria função porém passando o node.right e o elemento
        para verificar se o node.element que está dentro do node.right é igual ao valor buscado, se sim retorna true
        
        E assim a recursão faz com que conseguimos acessar todos os nós da arvore
    */
    searchVisitor(node, element) {
        if (node == null)
            return false
        if (node.content == element)
            return true;
        if (element > node.content)
            return this.searchVisitor(node.right, element)
        else
            return this.searchVisitor(node.left, element)
    }



    /*faz a chamada da função removeVisitor e passamos
     a arvore e o valor que queremos exluir nela e o root recebe a nova arvore que será criada*/
    remove(value) {
        this.root = this.removeVisitor(this.root, value)
    }

    /*  -se o valor contido no node for igual ao value então é esse que desejamos remover
            -se o node.left for igual ao node.right significa que são nullo, então nada se faz e retorna null 
            -se não forem amboms nulo então verifica se o node.left e o node.right são nulos
             se o node.left for nulo então retornamos o node.right pos ele não está nulo e vice-versa
            -se nenhuma das opções acima forem verdadeiras então temos valores tanto no right quanto left - Grau 2
                criamos uma variavel newRoot que será o novo nó e atrubuimos todos nós presente no node.right a ela
                e uma variavel current para receber o node.right tambem
                entuando o current na posição left for diferente de null, current receberá o que existe no proximo current.left 
                quando o current.left for nulo então current na posição left vai receber o que está na posição left de node
                no firnal retornamos o novo nó criado 

        -se o valor que desejamos remover for menor que o valor contido no node então fazemos a chamada
         da função removeVisitor novamente passando como parametro o node.left e o valor que buscamos remover
         e atribuindo ao node.left a criação da nova arvore
         -senão, o valor que desejamos remover é maior que o valor contido no node, então fazemos a chamada
         da função removeVisitor novamente passando como parametro o node.right e o vavlor que buscamos remover
         e atribuindo ao node.right a criação da nova arvore

         No final retornamos o node atualizado, e é esse node que
         a variavel this.root vai receber na função remove, que fez chamada a removeVisitor
    */
    removeVisitor(node, value) {
        if (node.content == value) {
            if (node.left == node.right) {
                //nao tem filhos - Grau 0
                return null
            } else if (node.right == null) {
                //não tem filhos na direita, e tem nó na esqueda - Grau 1
                return node.left
            } else if (node.left == null) {
                //não tem filhos da esquerda, e tem nó da direita - Grau 1
                return node.right
            } else {
                // tem os dois ramos - Grau 2
                const newRoot = node.right
                let current = node.right;
                while (current.left != null)
                    current = current.left
                current.left = node.left
                return newRoot;
            }
        } else if (value < node.content) {
            node.left = this.removeVisitor(node.left, value)
        } else {
            node.right = this.removeVisitor(node.right, value)
        }
        return node;
    }

    //exibe a altura da arvore atraves da chamada da função recursica "heightVisitor"
    height() {
        return this.heightVisitor(this.root)
    }

    /* a funcao recebe um nód, verificamos se esse nó é nulo, se for então retornamos -1
       - definimos a variavel leftHeight que vai receber a chamada da propria
       função passando como parametro agora o nó da esquerda
       - definimos a variavel righttHeight que vai receber a chamada da propria
       função passando como parametro agora o nó da esquerda
       com o uso da classe prórpia do JS = Math e usamos o método max dessa classe para
       comparar o maior valor dentro das duas variaveis e somar 1 á maior, assim temos a altura da arvore
    */
    heightVisitor(node) {
        if (!node)
            return -1
        let leftHeight = this.heightVisitor(node.left),
            rightHeight = this.heightVisitor(node.right)
        return Math.max(leftHeight, rightHeight) + 1
    }

    // a função size utiliza a função recursiva sizeVisitor que serve para sabermos a quantidade de nós na arvore
    size() {
        return this.sizeVisitor(this.root)
    }
    
    /* a função basicamente retorna a chamada a ela mesma caso o nó não seja null, se for null retorna 0
       e nessa chamada passamos o nós a esqueda e a direita da raiz fazendo a soma deles caso exista 1 nó, no final
       somamos 1 para contar também com o nó inicial da árvore
    */
    sizeVisitor(node) {
        if (!node)
            return 0
        return this.sizeVisitor(node.left) + this.sizeVisitor(node.right) + 1
    }
}