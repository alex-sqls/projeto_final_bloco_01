import readlinesync = require("readline-sync");
import { LancheDoce } from "./src/model/LancheDoce";
import { LancheSalgado } from "./src/model/LancheSalgado";
import { LancheController } from "./src/controller/LancheController";

export function main() {

    let opcao, tipo, pagamento, quantidade: number;
    let nome, nomeLanche: string;
    let lanche: LancheController = new LancheController();

    const tipoLanche = ['lanche doce', 'lanche salgado'];
    const formaPagamento = ['pix', 'dinheiro', 'cartao debito/credito'];

    while (true) {

        console.log("Bem-vindo a lanchonete brigadeirete! Lanches doces e salgados por encomenda");

        console.log("Entre com a opcao 1 para agendar o pedido: ");
        console.log("Entre com a opção 2 para visualizar pedidos: ");
        console.log("Entre com a opção 3 para excluir um pedido:");
        console.log("Entre com a opção 4 para atualizar:");
        console.log("Entre com a opção 5 para sair: \n\n");
        console.log("Entre com a opção desejada: ");

        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log("Obrigado por nos visitar! :) ")

            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nAgende seu pedido conosco: \n\n");

                console.log("Digite seu nome: ");
                nome = readlinesync.question("").toLowerCase();

                console.log("Forma de pagamento: ");
                pagamento = readlinesync.keyInSelect(formaPagamento, "", { cancel: false }) + 1;

                console.log("\n Trabalhamos com lanches doces e salgados! Qual a opcao? ");
                tipo = readlinesync.keyInSelect(tipoLanche, "", { cancel: false }) + 1;

                console.log("Informe a quantidade: ");
                quantidade = readlinesync.questionInt("");

                switch (tipo) {
                    case 1:
                        console.log("Fale o nome do lanche doce que deseja: ");
                        nomeLanche = readlinesync.question("");
                        lanche.adicionarNaLista(new LancheDoce(nome, nomeLanche, pagamento, tipo, quantidade));

                        break;
                    case 2:
                        console.log("Fale o nome do lanche salgado que deseja: ");
                        nomeLanche = readlinesync.question("");
                        lanche.adicionarNaLista(new LancheSalgado(nome, nomeLanche, pagamento, tipo, quantidade));

                        break;
                }

                keyPress();
                break
            case 2:
                console.log("\n\nListar todos os pedidos: \n\n");
                lanche.listarPedidos();

                keyPress()
                break;
            case 3:
                console.log("\n\nExcluir pedido: \n");
                console.log("Digite o nome do cliente que deseja excluir: ");
                nome = readlinesync.question("").toLowerCase();

                if (lanche.ValidaBusca(nome)) {
                    lanche.deletar(nome);
                } else {
                    console.log('Nao foi possivel excluir! ' + nome);
                }

                keyPress();
                break;
            case 4:

                console.log("\n\nDigite o nome do cliente que deseja atualizar: \n");
                nome = readlinesync.question("").toLowerCase();

                if (lanche.ValidaBusca(nome)) {

                    console.log("Forma de pagamento: ");
                    pagamento = readlinesync.keyInSelect(formaPagamento, "", { cancel: false }) + 1;

                    console.log("\n Trabalhamos com lanches doces e salgados! Qual a opcao? ");
                    tipo = readlinesync.keyInSelect(tipoLanche, "", { cancel: false }) + 1;

                    console.log("Informe a quantidade: ");
                    quantidade = readlinesync.questionInt("");

                    switch (tipo) {
                        case 1:
                            console.log("Fale o nome do lanche doce que deseja: ");
                            nomeLanche = readlinesync.question("");
                            lanche.atualizarPedido(nome, new LancheDoce(nome, nomeLanche, pagamento, tipo, quantidade));

                            break;
                        case 2:
                            console.log("Fale o nome do lanche salgado que deseja: ");
                            nomeLanche = readlinesync.question("");
                            lanche.atualizarPedido(nome, new LancheSalgado(nome, nomeLanche, pagamento, tipo, quantidade));

                            break;
                    }

                } else {
                    console.log('Cliente Nao encontrado!');
                }

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress();
                break;
        }

    }
    function keyPress(): void {
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }
}
main();