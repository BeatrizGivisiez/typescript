// Utility Types - Partial, Required, Readonly, Record, Pick e Omit.

// são alguns tipos feitos com algum comportamentos;

// Partial - Ele transforma as propriedades em opcionais.
// type Usuario = {
//     nome: string
//     idade: number
// }
// function atualizarUsuario(u: Partial<Usuario>){
//     //update
// }
// const user = {
//     nome: "Beatriz Givisiez"
// }
// atualizarUsuario(user)


// Required - ele transforma as propriedades em obrigatório.
// type Usuario = {
//     nome?: string
//     idade?: number
// }
// const user : Usuario = {
//     nome: "Beatriz Givisiez"
// }
// const userCompleto: Required<Usuario> = {
//     nome: 'Beatriz Givisiez',
//     idade: 28
// }


// Readonly - Ele não deixa modificar.
// type Usuario = {
//     nome: string
//     idade: number
// }
// const user : Readonly<Usuario> = {
//     nome: "Beatriz Givisiez",
//     idade: 28
// }
// // ele dar erro pois a propriedade desse obj são readonly.
// user.nome = "Matheus"


// Record<Keys, Type> - Deixar explícito o que você está fazendo.
// type Gato = {
//     raca: string
//     idade: number
// }
// type Gatos = 'Frajola' | 'Tom' | 'Garfield'
// const gatos: Record<Gatos, Gato> = {
//     Frajola: {
//         idade: 4,
//         raca: 'persa'
//     },
//     Tom: {
//         idade: 3,
//         raca: 'Siamês'
//     },
//     Garfield: {
//         idade: 5,
//         raca: 'qualquer'
//     }    
// }


// Pick - Seleciona somente atributo que deseja usar "dentro do meu tipo".
// type Usuario = {
//     nomeCompleto: string
//     nomeDeUsuário: string
//     senha: string
// }
// type Pessoa = Pick<Usuario, 'nomeCompleto' | 'senha'>
// const p: Pessoa = {
//     nomeCompleto: 'Beatriz Givisiez',
//     senha: '123456'
// }


// Omit - Ele diz o que ele não quer usar, ignora o atributo dentro do tipo.
type Usuario = {
    nomeCompleto: string
    nomeDeUsuário: string
    senha: string
}

type Pessoa = Omit<Usuario, 'nomeCompleto'>
const p: Pessoa = {
    nomeDeUsuário: 'bgivisiez',
    senha: '123456'
}