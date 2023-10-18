import { IStudente } from "./studente.interface";

export class Studente {
    private nome: string;
    private cognome: string;
    private classe: string;

    public get Nome(): string {
        return this.nome;
    }

    public set Nome(nuovoNome: string) {
        this.nome = nuovoNome;
    }

    constructor(nome: string, cognome: string, classe: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.classe = classe;
    }

    public toString(): string {
        return this.nome + ' ' + this.cognome + ' ' + this.classe;
    }

    public cambiaClasse(nuovaClasse: string) {
        this.classe = nuovaClasse;
    }
}
