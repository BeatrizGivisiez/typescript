//= Interfaces

// Interface (Quando tem funcões)
// Type (Só variáveis, tipagem) - tipos primitivos

// interface IPessoa {
//     name: string
//     idade: number
// }

// const pe: IPessoa = {
//     name: 'Beatriz Givisiez',
//     idade: 28
// }

// interface IRelogio {
//     dataAtual(): Date
// }

// class Relogio implements IRelogio{
//     dataAtual(): Date {
//         return new Date()
//     }
// }

interface IRelogio {
  dataAtual(): void;
}

class Relogio implements IRelogio {
  dataAtual(): void {}
}

interface IAluno {
  name: string;
}

interface IAluno {
  idade: number;
}

const aluno: IAluno = {
  name: "Beatriz Givisiez",
  idade: 28,
};

// Funciona
// type Third = number

// Não funciona
// interface Third = number
