export interface Aluno {
    id?: number;
    nome: string; 
    ra: string;         // Usando string em vez de String      // Usando string em vez de String
    cep: string;        // Usando string em vez de String
    numero: number;     // Correto
    complemento: string; // Usando string em vez de String
    notaAdo1: number;   // Correto
    notaPI: number;     // Correto
    ativo: boolean
}
