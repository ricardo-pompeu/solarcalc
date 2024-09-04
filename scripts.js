function calcularOrcamento() {
    const consumoMensal = parseFloat(document.getElementById('consumoMensal').value); // Consumo mensal em kWh
    const irradSolar = parseFloat(document.getElementById('irradSolar').value); // Irradiação solar média em kWh/m²
    const potenciaPainel = parseFloat(document.getElementById('potenciaPainel').value); // Potência do painel em W
    const precoPainel = parseFloat(document.getElementById('precoPainel').value); // Preço por painel
    const precoInversor = parseFloat(document.getElementById('precoInversor').value); // Preço do inversor
    const quantInversor = parseFloat(document.getElementById('quantInversor').value); // Quantidade de inversores
    const maoDeObra = parseFloat(document.getElementById('maoDeObra').value); // Custo de mão de obra
    const licencasTaxas = parseFloat(document.getElementById('licencasTaxas').value); // Licenças e taxas

    // Cálculo da capacidade do sistema em kWp
    const capacidadeSistema = consumoMensal / 30 / irradSolar;

    // Convertendo kWp para Wp (multiplicando por 1000)
    const capacidadeSistemaWp = capacidadeSistema * 1000;

    // Cálculo do número de painéis necessários
    const numPaineis = Math.ceil(capacidadeSistemaWp / potenciaPainel);

    // Cálculo do custo total do sistema
    const custoTotal = (numPaineis * precoPainel) + (precoInversor * quantInversor) + maoDeObra + licencasTaxas;

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = `
        <p>Capacidade do Sistema: ${capacidadeSistema.toFixed(2)} kWp</p>
        <p>Número de Painéis Necessários: ${numPaineis}</p>
        <p>Custo Total Estimado: R$ ${custoTotal.toFixed(2)}</p>
    `;
}
