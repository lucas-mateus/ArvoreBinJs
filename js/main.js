let tree = new BinaryTree();
$().ready(() => {
    $('#btnInserir').click(inserir);
    $('#btnBuscar').click(buscar);
    $('#btnMenor').click(menor);
    $('#btnMaior').click(maior);
    $('#btnRemover').click(remover);
    $('#btnEmOrdem').click(mostrarEmOrdem);
    $('#btnPreOrdem').click(mostrarPreOrdem);
    $('#btnPosOrdem').click(mostrarPosOrdem);
    $('#btnAltura').click(mostrarAltura);
    $('#btnTamanho').click(mostrarTamanho);
});
function mostrarItem(item) {
    let el = $('#saida');
    el.empty();
    el.append(`<span class="ui label">${item}</span>`);
}
function incluir(item) {
    $('#saida').append(`<span class="ui label">${item}</span>`);
}

function inserir() {
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    if (tree.search(num))
        mostrarItem('O elemento já existe!');
    else {
        tree.insert(num);
        mostrarItem('Inserido: ' + num);
    }
}
function buscar() {
    let num = parseInt(prompt("informe o numero a ser buscado na arvore:"));
    if (tree.search(num)) {
        alert('Numero foi encontrado na arvore!');
    } else {
        alert('Numero não encontrado na arvore!');
    }
}
function menor() {
    alert('menor valor: ' + tree.min());
}
function maior() {
    alert('maior valor: ' + tree.max());
}
function remover() {
    let num = parseInt(prompt("informe o numero a ser removido na arvore:"));
    if (tree.search(num)) {
        tree.remove(num);
        mostrarItem('O elemento foi removido!');
    } else {
        mostrarItem('O elemento não existe');
    }
}
function mostrarEmOrdem() {
    $('#saida').empty();
    tree.inOrderTraverse(incluir);
}
function mostrarPreOrdem() {
    $('#saida').empty();
    tree.preOrderTraverse(incluir)
}
function mostrarPosOrdem() {
    $('#saida').empty();
    tree.postOrderTraverse(incluir)
}
function mostrarAltura() {
    mostrarItem("Altura: " + tree.height());
}

function mostrarTamanho() {
    mostrarItem("Tamanho: " + tree.size());
}