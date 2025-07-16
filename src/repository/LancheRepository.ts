import { Lanche } from "../model/Lanche";

export interface LancheRepository {

   listarPedidos() : void;
   
   deletar(nome: string): void 

}