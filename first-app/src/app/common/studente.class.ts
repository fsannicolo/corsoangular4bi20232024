export class Studente {
    nome: string;
    cognome: string;
    classe: string;

    constructor(nome: string, cognome: string, classe: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.classe = classe;
    }

    public toString(): string {
        return this.nome + ' ' + this.cognome + ' ' + this.classe;
    }
}
