// Tipos Primitivos

// String
let nomeDeUsuario: string = "Beatriz";

// Number
const pedoDeUsuario: number = 75.6;

// Boolean (Não passa como string)
const ehMaiorDeIdade: boolean = true;

// Arrays
const animaisDeEstimacao: Array<string> = ["cachorro", "gato", "passáro"];
const nomesDeUsuario: string[] = ["Rafaela", "Bárbara", "Raissa"];
const numerosDaSorte: number[] = [21, 16, 3, 6.5];

// Any (conexao com uma api que não sabe o que retorna, mas quando descobrir "tipa")
let variavelSemTipo: any = 10;
variavelSemTipo = "Beatriz Givisiez";
const variavelString: string = variavelSemTipo;
