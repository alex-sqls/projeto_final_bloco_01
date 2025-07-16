import { Lanche } from "./Lanche";

export class LancheSalgado extends Lanche {

    constructor(nome: string, nomeDoLanche: string, pagamento: number, tipo: number, quantidade: number) {
        super(nome, nomeDoLanche, pagamento, tipo, quantidade)
    }

    public listar(): void {
        super.listar();
    }
}