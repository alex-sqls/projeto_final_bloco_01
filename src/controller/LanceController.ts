import { LancheRepository } from "../repository/LancheRepository";
import { Lanche } from "../model/Lanche";

export class LancheController implements LancheRepository {

    private colecaoPedidos: Array<Lanche> = new Array<Lanche>;

    deletar(nome: string): void {

            const novoArray = this.colecaoPedidos.filter(objeto => objeto.nome !== nome);
            this.colecaoPedidos = novoArray;
        
    }

    listarPedidos(): void {
        for (let pedidos of this.colecaoPedidos) {
            pedidos.listar();
        }
    
    }

    adicionarNaLista(lanche: Lanche): void {
        this.colecaoPedidos.push(lanche);
    }

}