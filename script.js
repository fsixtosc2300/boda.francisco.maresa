async function verificarCodigo() {
  const codigo = document.getElementById("codigo").value.trim().toUpperCase();
  const response = await fetch("data/invitados.json");
  const data = await response.json();

  if (data[codigo]) {
    window.location.href = `invitados/${codigo}.html`;
  } else {
    alert("Código incorrecto. Verifica con los novios 😅");
  }
}