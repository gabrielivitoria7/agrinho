let temperatura;
let umidade;

function setup() {
  createCanvas(600, 400);
  textFont('Arial');
}

function draw() {
  background(220);

  // Simular dados com variação
  temperatura = 18 + sin(frameCount * 0.01) * 10; // entre 8°C e 28°C
  umidade = 30 + cos(frameCount * 0.015) * 40;     // entre 0% e 70%

  drawSensorDisplay();
  checkAlerts();
}

function drawSensorDisplay() {
  // Título
  fill(50);
  textSize(24);
  text("Horta Escolar - Monitoramento", 140, 40);

  // Temperatura
  fill(0);
  textSize(18);
  text(`Temperatura: ${temperatura.toFixed(1)}°C`, 50, 100);
  fill(255, 100, 100);
  rect(50, 110, temperatura * 10, 20);

  // Umidade
  fill(0);
  text(`Umidade do Solo: ${umidade.toFixed(1)}%`, 50, 180);
  fill(100, 150, 255);
  rect(50, 190, umidade * 5, 20);
}

function checkAlerts() {
  fill(0);
  textSize(16);

  // Verificar temperatura
  if (temperatura < 15) {
    fill(255, 0, 0);
    text("⚠️ Alerta: Temperatura muito baixa!", 50, 250);
  } else if (temperatura > 26) {
    fill(255, 100, 0);
    text("⚠️ Alerta: Temperatura muito alta!", 50, 250);
  }

  // Verificar umidade
  if (umidade < 25) {
    fill(255, 0, 0);
    text("⚠️ Alerta: Solo muito seco! Irrigar a horta.", 50, 280);
  } else if (umidade > 60) {
    fill(255, 150, 0);
    text("⚠️ Alerta: Umidade excessiva! Risco de fungos.", 50, 280);
  }
}
