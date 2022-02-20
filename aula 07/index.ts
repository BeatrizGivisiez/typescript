// Enums

// Funciona tipo away
enum TiposDePagamento {
  Pagarme = "PagarMe",
  Paypal = "PayPal",
  Pagseguro = "PagSeguro",
}

function processaPagamento(tipoDePagemento: TiposDePagamento) {
  console.log(`Processado pelo: ${tipoDePagemento}`);
}

processaPagamento(TiposDePagamento.Paypal);
