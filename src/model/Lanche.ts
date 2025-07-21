export abstract class Lanche {
    private _nome: string;
    private _nomeDoLanche: string; 
    private _pagamento: number;
    private _tipo: number;
    private _quantidade: number;

    constructor(nome: string, nomeDoLanche: string, pagamento: number, tipo: number, quantidade: number) {
        this._nome = nome;
        this._nomeDoLanche = nomeDoLanche;
        this._pagamento = pagamento;
        this._quantidade = quantidade;
        this._tipo = tipo;
    }

    //getters e setters
    //nome
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    //nome do lanche
    public get nomeDoLanche(): string {
        return this._nomeDoLanche;
    }
    public set nomeDoLanche(value: string) {
        this._nomeDoLanche = value;
    }

    //forma de pagamento
    public get pagamento(): number {
        return this._pagamento;
    }
    public set pagamento(value: number) {
        this._pagamento = value;
    }

    //tipo
    public get tipo(): number {
        return this._tipo;
    }
    public set tipo(value: number) {
        this._tipo = value;
    }

    //quantidade
    public get quantidade(): number {
        return this._quantidade;
    }
    public set quantidade(value: number) {
        this._quantidade = value;
    }

    public listar(): void {
        let tipoLanche: string = "";
        let tipoPagamento: string = "";


        if(this._tipo == 1) tipoLanche = "lanche doce";
        if(this._tipo == 2) tipoLanche = "lanche salgado";

        if(this._pagamento == 1) tipoPagamento = "pix";
        if(this._pagamento == 2) tipoPagamento = "dinheiro";
        if(this._pagamento == 3) tipoPagamento = "cartao credito/debito";
        
        console.log("*********************************");
        console.log("Lista de pedidos: ");
        console.log("*********************************");
        console.log("Nome do cliente: " + this._nome);
        console.log("Tipo do lanche: " + tipoLanche);
        console.log("Quantidade: " + this._quantidade);
        console.log("Nome do lanche: " + this._nomeDoLanche);
        console.log("forma de pagamento: " + tipoPagamento);

    }
    

}