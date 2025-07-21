import { LancheRepository } from "../repository/LancheRepository";
import { Lanche } from "../model/Lanche";
import { off } from "process";

export class LancheController implements LancheRepository {

    private colecaoPedidos: Array<Lanche> = new Array<Lanche>;

    deletar(nome: string): void {

            const novoArray = this.colecaoPedidos.filter(objeto => objeto.nome !== nome);
            this.colecaoPedidos = novoArray;
        
    }

    listarPedidos(): void {
        if(this.colecaoPedidos.length == 0) console.log('A lista esta vazia!')
        
        for (let pedidos of this.colecaoPedidos) pedidos.listar();
    
    }

    adicionarNaLista(lanche: Lanche): void {
        this.colecaoPedidos.push(lanche);
    }

    atualizarPedido(nome: string, lanche: Lanche): void {
        let novoPedido = lanche;
        for (let i = 0; i < this.colecaoPedidos.length; i++) {
            if(nome == this.colecaoPedidos[i].nome) {
                this.colecaoPedidos[i] = novoPedido;
            }
        }
       
    }

    ValidaBusca(nome: string): any {
        
        for (let pedidos of this.colecaoPedidos) {
            if(nome == pedidos.nome) {
                return true;
            } else {
                return false;
            }
        }
    }

}