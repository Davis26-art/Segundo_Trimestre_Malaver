function clasificarNota(nota) {
  if (nota >= 70) return "Aprobado";
  else if (nota >= 50) return "Requiere mejora";
  else return "Reprobado";
}
console.log(clasificarNota(60));
