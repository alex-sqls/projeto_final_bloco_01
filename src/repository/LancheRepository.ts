import { Lanche } from "../model/Lanche";

export interface LancheRepository {

   listarPedidos() : void;

   deletar(nome: string): void;

   adicionarNaLista(lanche: Lanche) : void;

   atualizarPedido(nome: string, Lanche: Lanche) : void;

   ValidaBusca(nome: string): boolean;

}