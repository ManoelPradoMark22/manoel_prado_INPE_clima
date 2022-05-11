/*mude a constante MES para saber a media das temperaturas maximas do mes que voce
desejar (valores entre 1 a 12).
MES=1 -> mostra a media das temp máx do mes de janeiro
MES=2 -> mostra a media das temp máx do mes de fevereiro
... e assim por diante*/
const MES = 2;

//Criando um array de 365 posicoes
var arrayINPE = new Array(365);

//Funcao que recebe o array vazio, o alimenta e o retorna
function criarArrayINPE(array) {
  /*array de objetos. cada objeto tem dados meteorologicos referentes ao dia e mes em questao 
  day=número do dia ; month=número do mês ; maxTemp = temperatura máxima ; minTemp = temperatura mínima ;
  rain=chuva (true->choveu; false-> não choveu)
  
  ATENÇÃO! Criei um site gerador de uma lista de objetos de forma randômica, que você pode
  dar o nome das chaves do objeto e escolher a faixa das temperatura. é retornado
  uma lista de 365 objetos
  site -> https://manoelpradomark22.github.io/gerador_array_objetos/
  gravei um vídeo curto ensinando a usar -> https://youtu.be/iqjPInJjKqA
  */

  array = [
    {
      day: 1,
      month: 1,
      maxTemp: 34.23,
      minTemp: 3.76,
      rain: false
      },
      {
      day: 2,
      month: 1,
      maxTemp: 33.2,
      minTemp: 2.66,
      rain: false
      },
      {
      day: 3,
      month: 1,
      maxTemp: 31.18,
      minTemp: -11.84,
      rain: false
      },
      {
      day: 4,
      month: 1,
      maxTemp: 2.25,
      minTemp: -9.8,
      rain: true
      },
      {
      day: 5,
      month: 1,
      maxTemp: 11.89,
      minTemp: 10.47,
      rain: false
      },
      {
      day: 6,
      month: 1,
      maxTemp: 19.44,
      minTemp: -1.93,
      rain: false
      },
      {
      day: 7,
      month: 1,
      maxTemp: -3.41,
      minTemp: -10.97,
      rain: false
      },
      {
      day: 8,
      month: 1,
      maxTemp: 37.32,
      minTemp: -2.77,
      rain: false
      },
      {
      day: 9,
      month: 1,
      maxTemp: 39.74,
      minTemp: -7.1,
      rain: true
      },
      {
      day: 10,
      month: 1,
      maxTemp: 22.23,
      minTemp: 2.65,
      rain: true
      },
      {
      day: 11,
      month: 1,
      maxTemp: 17.4,
      minTemp: 16.88,
      rain: false
      },
      {
      day: 12,
      month: 1,
      maxTemp: 12.5,
      minTemp: -4.65,
      rain: true
      },
      {
      day: 13,
      month: 1,
      maxTemp: 29.43,
      minTemp: 17.19,
      rain: true
      },
      {
      day: 14,
      month: 1,
      maxTemp: 45,
      minTemp: -13.22,
      rain: true
      },
      {
      day: 15,
      month: 1,
      maxTemp: 30.54,
      minTemp: -14.72,
      rain: true
      },
      {
      day: 16,
      month: 1,
      maxTemp: 44.55,
      minTemp: 31.9,
      rain: true
      },
      {
      day: 17,
      month: 1,
      maxTemp: 42.81,
      minTemp: 42.43,
      rain: true
      },
      {
      day: 18,
      month: 1,
      maxTemp: 27.65,
      minTemp: 17.92,
      rain: true
      },
      {
      day: 19,
      month: 1,
      maxTemp: 21.77,
      minTemp: 5.9,
      rain: false
      },
      {
      day: 20,
      month: 1,
      maxTemp: 27.76,
      minTemp: 14.67,
      rain: true
      },
      {
      day: 21,
      month: 1,
      maxTemp: 24.46,
      minTemp: 18.77,
      rain: true
      },
      {
      day: 22,
      month: 1,
      maxTemp: 24.76,
      minTemp: -3.26,
      rain: true
      },
      {
      day: 23,
      month: 1,
      maxTemp: 42.16,
      minTemp: 1.3,
      rain: true
      },
      {
      day: 24,
      month: 1,
      maxTemp: 33.39,
      minTemp: 0.3,
      rain: true
      },
      {
      day: 25,
      month: 1,
      maxTemp: -7.5,
      minTemp: -15.91,
      rain: false
      },
      {
      day: 26,
      month: 1,
      maxTemp: 44.3,
      minTemp: 39.1,
      rain: false
      },
      {
      day: 27,
      month: 1,
      maxTemp: -1.43,
      minTemp: -10.92,
      rain: false
      },
      {
      day: 28,
      month: 1,
      maxTemp: 14.93,
      minTemp: -11.69,
      rain: false
      },
      {
      day: 29,
      month: 1,
      maxTemp: -2.26,
      minTemp: -13.56,
      rain: true
      },
      {
      day: 30,
      month: 1,
      maxTemp: 22.82,
      minTemp: -13.28,
      rain: false
      },
      {
      day: 31,
      month: 1,
      maxTemp: 21.41,
      minTemp: 11.3,
      rain: false
      },
      {
      day: 1,
      month: 2,
      maxTemp: 36.6,
      minTemp: -9.41,
      rain: false
      },
      {
      day: 2,
      month: 2,
      maxTemp: 38.44,
      minTemp: 6.23,
      rain: false
      },
      {
      day: 3,
      month: 2,
      maxTemp: 25.69,
      minTemp: -3.46,
      rain: false
      },
      {
      day: 4,
      month: 2,
      maxTemp: 37.32,
      minTemp: -15.4,
      rain: false
      },
      {
      day: 5,
      month: 2,
      maxTemp: 14.32,
      minTemp: 7.44,
      rain: false
      },
      {
      day: 6,
      month: 2,
      maxTemp: 43.63,
      minTemp: 30.59,
      rain: false
      },
      {
      day: 7,
      month: 2,
      maxTemp: 19.59,
      minTemp: 18.43,
      rain: true
      },
      {
      day: 8,
      month: 2,
      maxTemp: 45,
      minTemp: 2.36,
      rain: true
      },
      {
      day: 9,
      month: 2,
      maxTemp: 3.57,
      minTemp: -3.29,
      rain: false
      },
      {
      day: 10,
      month: 2,
      maxTemp: 6.97,
      minTemp: -4.53,
      rain: true
      },
      {
      day: 11,
      month: 2,
      maxTemp: 31.8,
      minTemp: -8.89,
      rain: false
      },
      {
      day: 12,
      month: 2,
      maxTemp: 36.63,
      minTemp: 19.46,
      rain: true
      },
      {
      day: 13,
      month: 2,
      maxTemp: 34.8,
      minTemp: 18.88,
      rain: false
      },
      {
      day: 14,
      month: 2,
      maxTemp: 22.82,
      minTemp: 3.69,
      rain: false
      },
      {
      day: 15,
      month: 2,
      maxTemp: 32.35,
      minTemp: -6,
      rain: false
      },
      {
      day: 16,
      month: 2,
      maxTemp: 14.44,
      minTemp: -13.27,
      rain: true
      },
      {
      day: 17,
      month: 2,
      maxTemp: 41.51,
      minTemp: 19.38,
      rain: false
      },
      {
      day: 18,
      month: 2,
      maxTemp: -7.45,
      minTemp: -9.11,
      rain: true
      },
      {
      day: 19,
      month: 2,
      maxTemp: 26.2,
      minTemp: 22.94,
      rain: false
      },
      {
      day: 20,
      month: 2,
      maxTemp: 40.92,
      minTemp: 11.77,
      rain: true
      },
      {
      day: 21,
      month: 2,
      maxTemp: 20.12,
      minTemp: 6.71,
      rain: true
      },
      {
      day: 22,
      month: 2,
      maxTemp: 41.91,
      minTemp: 38.73,
      rain: false
      },
      {
      day: 23,
      month: 2,
      maxTemp: 41.75,
      minTemp: 3.73,
      rain: false
      },
      {
      day: 24,
      month: 2,
      maxTemp: 38.16,
      minTemp: 29.31,
      rain: true
      },
      {
      day: 25,
      month: 2,
      maxTemp: -5.49,
      minTemp: -8.4,
      rain: true
      },
      {
      day: 26,
      month: 2,
      maxTemp: 28.82,
      minTemp: -3.69,
      rain: true
      },
      {
      day: 27,
      month: 2,
      maxTemp: 30.79,
      minTemp: 12.1,
      rain: true
      },
      {
      day: 28,
      month: 2,
      maxTemp: -1.76,
      minTemp: -10.33,
      rain: false
      },
      {
      day: 1,
      month: 3,
      maxTemp: 30.89,
      minTemp: -4.55,
      rain: false
      },
      {
      day: 2,
      month: 3,
      maxTemp: 26.54,
      minTemp: -1.43,
      rain: true
      },
      {
      day: 3,
      month: 3,
      maxTemp: 22.87,
      minTemp: -1.4,
      rain: false
      },
      {
      day: 4,
      month: 3,
      maxTemp: 23.12,
      minTemp: 2.18,
      rain: true
      },
      {
      day: 5,
      month: 3,
      maxTemp: -3.91,
      minTemp: -5.36,
      rain: true
      },
      {
      day: 6,
      month: 3,
      maxTemp: 44.29,
      minTemp: 40.32,
      rain: true
      },
      {
      day: 7,
      month: 3,
      maxTemp: -5.99,
      minTemp: -12.87,
      rain: true
      },
      {
      day: 8,
      month: 3,
      maxTemp: 42.4,
      minTemp: 13.19,
      rain: false
      },
      {
      day: 9,
      month: 3,
      maxTemp: 16.77,
      minTemp: -14.89,
      rain: false
      },
      {
      day: 10,
      month: 3,
      maxTemp: 12.12,
      minTemp: -15.4,
      rain: true
      },
      {
      day: 11,
      month: 3,
      maxTemp: 0.49,
      minTemp: -1.5,
      rain: false
      },
      {
      day: 12,
      month: 3,
      maxTemp: 14.3,
      minTemp: -9.54,
      rain: false
      },
      {
      day: 13,
      month: 3,
      maxTemp: 28.24,
      minTemp: 7.58,
      rain: true
      },
      {
      day: 14,
      month: 3,
      maxTemp: 32.82,
      minTemp: -12.3,
      rain: false
      },
      {
      day: 15,
      month: 3,
      maxTemp: 10.5,
      minTemp: 6.17,
      rain: false
      },
      {
      day: 16,
      month: 3,
      maxTemp: 32.36,
      minTemp: 12.46,
      rain: false
      },
      {
      day: 17,
      month: 3,
      maxTemp: 10.53,
      minTemp: -11.25,
      rain: true
      },
      {
      day: 18,
      month: 3,
      maxTemp: 14.98,
      minTemp: 9.48,
      rain: false
      },
      {
      day: 19,
      month: 3,
      maxTemp: 14.11,
      minTemp: -3.99,
      rain: false
      },
      {
      day: 20,
      month: 3,
      maxTemp: 9.45,
      minTemp: 6.24,
      rain: true
      },
      {
      day: 21,
      month: 3,
      maxTemp: 36.99,
      minTemp: 7.82,
      rain: false
      },
      {
      day: 22,
      month: 3,
      maxTemp: 33.2,
      minTemp: 16.4,
      rain: true
      },
      {
      day: 23,
      month: 3,
      maxTemp: 3.5,
      minTemp: -4.86,
      rain: true
      },
      {
      day: 24,
      month: 3,
      maxTemp: 15.66,
      minTemp: 9.9,
      rain: false
      },
      {
      day: 25,
      month: 3,
      maxTemp: 43.98,
      minTemp: -5.69,
      rain: false
      },
      {
      day: 26,
      month: 3,
      maxTemp: 38.48,
      minTemp: 36.54,
      rain: true
      },
      {
      day: 27,
      month: 3,
      maxTemp: 37.89,
      minTemp: 28.5,
      rain: true
      },
      {
      day: 28,
      month: 3,
      maxTemp: 36.98,
      minTemp: 0.16,
      rain: false
      },
      {
      day: 29,
      month: 3,
      maxTemp: 22.7,
      minTemp: 9.91,
      rain: true
      },
      {
      day: 30,
      month: 3,
      maxTemp: 27.7,
      minTemp: 16.8,
      rain: false
      },
      {
      day: 31,
      month: 3,
      maxTemp: 27.14,
      minTemp: -11.11,
      rain: false
      },
      {
      day: 1,
      month: 4,
      maxTemp: 32.2,
      minTemp: -9.19,
      rain: true
      },
      {
      day: 2,
      month: 4,
      maxTemp: 41.6,
      minTemp: 15.33,
      rain: false
      },
      {
      day: 3,
      month: 4,
      maxTemp: 34.62,
      minTemp: -5.54,
      rain: true
      },
      {
      day: 4,
      month: 4,
      maxTemp: 23.63,
      minTemp: -10.21,
      rain: false
      },
      {
      day: 5,
      month: 4,
      maxTemp: 28.97,
      minTemp: -12.45,
      rain: false
      },
      {
      day: 6,
      month: 4,
      maxTemp: 37.24,
      minTemp: 16.57,
      rain: false
      },
      {
      day: 7,
      month: 4,
      maxTemp: 26.4,
      minTemp: 9.2,
      rain: false
      },
      {
      day: 8,
      month: 4,
      maxTemp: 37.6,
      minTemp: 1.94,
      rain: false
      },
      {
      day: 9,
      month: 4,
      maxTemp: 25.87,
      minTemp: 15.9,
      rain: true
      },
      {
      day: 10,
      month: 4,
      maxTemp: 31.3,
      minTemp: -12.89,
      rain: true
      },
      {
      day: 11,
      month: 4,
      maxTemp: 35.61,
      minTemp: 31.22,
      rain: true
      },
      {
      day: 12,
      month: 4,
      maxTemp: -9.51,
      minTemp: -12.29,
      rain: false
      },
      {
      day: 13,
      month: 4,
      maxTemp: 32.62,
      minTemp: 2.48,
      rain: true
      },
      {
      day: 14,
      month: 4,
      maxTemp: 29.39,
      minTemp: 24.74,
      rain: true
      },
      {
      day: 15,
      month: 4,
      maxTemp: 14.3,
      minTemp: 6.49,
      rain: false
      },
      {
      day: 16,
      month: 4,
      maxTemp: 15.29,
      minTemp: -13.34,
      rain: false
      },
      {
      day: 17,
      month: 4,
      maxTemp: 17.1,
      minTemp: 10.72,
      rain: false
      },
      {
      day: 18,
      month: 4,
      maxTemp: 14.11,
      minTemp: -3.36,
      rain: true
      },
      {
      day: 19,
      month: 4,
      maxTemp: 44.69,
      minTemp: 26.73,
      rain: true
      },
      {
      day: 20,
      month: 4,
      maxTemp: 2.26,
      minTemp: -3.15,
      rain: true
      },
      {
      day: 21,
      month: 4,
      maxTemp: -10.14,
      minTemp: -10.46,
      rain: false
      },
      {
      day: 22,
      month: 4,
      maxTemp: 9.3,
      minTemp: 1.96,
      rain: true
      },
      {
      day: 23,
      month: 4,
      maxTemp: 43.88,
      minTemp: 33.86,
      rain: false
      },
      {
      day: 24,
      month: 4,
      maxTemp: 38.11,
      minTemp: 37,
      rain: true
      },
      {
      day: 25,
      month: 4,
      maxTemp: 40.84,
      minTemp: 8,
      rain: true
      },
      {
      day: 26,
      month: 4,
      maxTemp: 25.58,
      minTemp: 5.8,
      rain: true
      },
      {
      day: 27,
      month: 4,
      maxTemp: 5.74,
      minTemp: 0.21,
      rain: false
      },
      {
      day: 28,
      month: 4,
      maxTemp: 0.5,
      minTemp: -12.7,
      rain: true
      },
      {
      day: 29,
      month: 4,
      maxTemp: 5.26,
      minTemp: 0.1,
      rain: true
      },
      {
      day: 30,
      month: 4,
      maxTemp: 26.7,
      minTemp: 17.34,
      rain: false
      },
      {
      day: 1,
      month: 5,
      maxTemp: 39.59,
      minTemp: 14.62,
      rain: false
      },
      {
      day: 2,
      month: 5,
      maxTemp: 31.59,
      minTemp: 3.44,
      rain: true
      },
      {
      day: 3,
      month: 5,
      maxTemp: 18.71,
      minTemp: 17.46,
      rain: true
      },
      {
      day: 4,
      month: 5,
      maxTemp: 31.39,
      minTemp: -10.57,
      rain: false
      },
      {
      day: 5,
      month: 5,
      maxTemp: 35.88,
      minTemp: 32.51,
      rain: false
      },
      {
      day: 6,
      month: 5,
      maxTemp: 36.91,
      minTemp: -5.97,
      rain: true
      },
      {
      day: 7,
      month: 5,
      maxTemp: 31.42,
      minTemp: 30.45,
      rain: true
      },
      {
      day: 8,
      month: 5,
      maxTemp: 22.85,
      minTemp: 1.63,
      rain: true
      },
      {
      day: 9,
      month: 5,
      maxTemp: 39.64,
      minTemp: -8.94,
      rain: false
      },
      {
      day: 10,
      month: 5,
      maxTemp: 40.12,
      minTemp: 1.78,
      rain: false
      },
      {
      day: 11,
      month: 5,
      maxTemp: 30.86,
      minTemp: -11.14,
      rain: true
      },
      {
      day: 12,
      month: 5,
      maxTemp: 22.17,
      minTemp: -2.88,
      rain: true
      },
      {
      day: 13,
      month: 5,
      maxTemp: 20.9,
      minTemp: 14.65,
      rain: false
      },
      {
      day: 14,
      month: 5,
      maxTemp: 29.37,
      minTemp: 6.71,
      rain: true
      },
      {
      day: 15,
      month: 5,
      maxTemp: 14.67,
      minTemp: -8.56,
      rain: true
      },
      {
      day: 16,
      month: 5,
      maxTemp: 2.37,
      minTemp: -10.44,
      rain: true
      },
      {
      day: 17,
      month: 5,
      maxTemp: -2.56,
      minTemp: -2.94,
      rain: false
      },
      {
      day: 18,
      month: 5,
      maxTemp: 40.4,
      minTemp: 1.72,
      rain: false
      },
      {
      day: 19,
      month: 5,
      maxTemp: 3.68,
      minTemp: -10.62,
      rain: true
      },
      {
      day: 20,
      month: 5,
      maxTemp: -2.39,
      minTemp: -5.13,
      rain: true
      },
      {
      day: 21,
      month: 5,
      maxTemp: 30.33,
      minTemp: -8.18,
      rain: true
      },
      {
      day: 22,
      month: 5,
      maxTemp: 20.38,
      minTemp: -11.36,
      rain: true
      },
      {
      day: 23,
      month: 5,
      maxTemp: 10.1,
      minTemp: 7.75,
      rain: true
      },
      {
      day: 24,
      month: 5,
      maxTemp: -3.84,
      minTemp: -5.44,
      rain: false
      },
      {
      day: 25,
      month: 5,
      maxTemp: 8.68,
      minTemp: -1.97,
      rain: false
      },
      {
      day: 26,
      month: 5,
      maxTemp: 40.18,
      minTemp: 16.87,
      rain: false
      },
      {
      day: 27,
      month: 5,
      maxTemp: 34.92,
      minTemp: -4.59,
      rain: true
      },
      {
      day: 28,
      month: 5,
      maxTemp: 42.59,
      minTemp: 20.7,
      rain: false
      },
      {
      day: 29,
      month: 5,
      maxTemp: 41.81,
      minTemp: -2.29,
      rain: true
      },
      {
      day: 30,
      month: 5,
      maxTemp: 23.78,
      minTemp: -8.59,
      rain: false
      },
      {
      day: 31,
      month: 5,
      maxTemp: 42.7,
      minTemp: -12.53,
      rain: true
      },
      {
      day: 1,
      month: 6,
      maxTemp: 4.57,
      minTemp: -10.44,
      rain: true
      },
      {
      day: 2,
      month: 6,
      maxTemp: 45,
      minTemp: 24.9,
      rain: false
      },
      {
      day: 3,
      month: 6,
      maxTemp: 44.53,
      minTemp: 38.87,
      rain: false
      },
      {
      day: 4,
      month: 6,
      maxTemp: 45,
      minTemp: 42.38,
      rain: false
      },
      {
      day: 5,
      month: 6,
      maxTemp: 45,
      minTemp: 4.1,
      rain: true
      },
      {
      day: 6,
      month: 6,
      maxTemp: 44.78,
      minTemp: -9.54,
      rain: true
      },
      {
      day: 7,
      month: 6,
      maxTemp: 42.43,
      minTemp: 17.8,
      rain: false
      },
      {
      day: 8,
      month: 6,
      maxTemp: 12.8,
      minTemp: -1.13,
      rain: false
      },
      {
      day: 9,
      month: 6,
      maxTemp: 33.69,
      minTemp: 2.32,
      rain: true
      },
      {
      day: 10,
      month: 6,
      maxTemp: 42.63,
      minTemp: -3.56,
      rain: false
      },
      {
      day: 11,
      month: 6,
      maxTemp: 41.72,
      minTemp: 28.29,
      rain: true
      },
      {
      day: 12,
      month: 6,
      maxTemp: 7.66,
      minTemp: 3.55,
      rain: true
      },
      {
      day: 13,
      month: 6,
      maxTemp: 36.9,
      minTemp: 20.44,
      rain: true
      },
      {
      day: 14,
      month: 6,
      maxTemp: 32.11,
      minTemp: 6.3,
      rain: false
      },
      {
      day: 15,
      month: 6,
      maxTemp: 28.72,
      minTemp: -6.71,
      rain: true
      },
      {
      day: 16,
      month: 6,
      maxTemp: 30.12,
      minTemp: 23.36,
      rain: false
      },
      {
      day: 17,
      month: 6,
      maxTemp: 35.11,
      minTemp: 2.8,
      rain: true
      },
      {
      day: 18,
      month: 6,
      maxTemp: 6.75,
      minTemp: -1,
      rain: false
      },
      {
      day: 19,
      month: 6,
      maxTemp: 8.27,
      minTemp: -3.25,
      rain: false
      },
      {
      day: 20,
      month: 6,
      maxTemp: 7.77,
      minTemp: 6.81,
      rain: true
      },
      {
      day: 21,
      month: 6,
      maxTemp: 26.58,
      minTemp: 19.99,
      rain: true
      },
      {
      day: 22,
      month: 6,
      maxTemp: 10.24,
      minTemp: 2.89,
      rain: false
      },
      {
      day: 23,
      month: 6,
      maxTemp: 2.9,
      minTemp: -3.9,
      rain: true
      },
      {
      day: 24,
      month: 6,
      maxTemp: 10.88,
      minTemp: 0.87,
      rain: true
      },
      {
      day: 25,
      month: 6,
      maxTemp: 39.6,
      minTemp: 14.16,
      rain: false
      },
      {
      day: 26,
      month: 6,
      maxTemp: 20.82,
      minTemp: 14.26,
      rain: true
      },
      {
      day: 27,
      month: 6,
      maxTemp: 44.22,
      minTemp: 11.98,
      rain: false
      },
      {
      day: 28,
      month: 6,
      maxTemp: 32.26,
      minTemp: 12.75,
      rain: false
      },
      {
      day: 29,
      month: 6,
      maxTemp: 31.4,
      minTemp: 14.69,
      rain: true
      },
      {
      day: 30,
      month: 6,
      maxTemp: 38.96,
      minTemp: 14.5,
      rain: false
      },
      {
      day: 1,
      month: 7,
      maxTemp: 39.9,
      minTemp: -1.75,
      rain: true
      },
      {
      day: 2,
      month: 7,
      maxTemp: 43.4,
      minTemp: 34.22,
      rain: false
      },
      {
      day: 3,
      month: 7,
      maxTemp: 45,
      minTemp: 30.53,
      rain: false
      },
      {
      day: 4,
      month: 7,
      maxTemp: 34.9,
      minTemp: -8.21,
      rain: false
      },
      {
      day: 5,
      month: 7,
      maxTemp: 34.39,
      minTemp: 23.5,
      rain: true
      },
      {
      day: 6,
      month: 7,
      maxTemp: 19.39,
      minTemp: 11.3,
      rain: false
      },
      {
      day: 7,
      month: 7,
      maxTemp: -3.88,
      minTemp: -8.76,
      rain: true
      },
      {
      day: 8,
      month: 7,
      maxTemp: 43.96,
      minTemp: 33.66,
      rain: false
      },
      {
      day: 9,
      month: 7,
      maxTemp: 38.62,
      minTemp: 33.4,
      rain: false
      },
      {
      day: 10,
      month: 7,
      maxTemp: 45,
      minTemp: 24.94,
      rain: true
      },
      {
      day: 11,
      month: 7,
      maxTemp: 23.64,
      minTemp: 9.74,
      rain: true
      },
      {
      day: 12,
      month: 7,
      maxTemp: 37.72,
      minTemp: 3.14,
      rain: true
      },
      {
      day: 13,
      month: 7,
      maxTemp: 40.87,
      minTemp: 32.76,
      rain: false
      },
      {
      day: 14,
      month: 7,
      maxTemp: 8.5,
      minTemp: -14.71,
      rain: false
      },
      {
      day: 15,
      month: 7,
      maxTemp: 40.8,
      minTemp: 40,
      rain: false
      },
      {
      day: 16,
      month: 7,
      maxTemp: 37,
      minTemp: 32.78,
      rain: true
      },
      {
      day: 17,
      month: 7,
      maxTemp: 4.96,
      minTemp: 0.1,
      rain: false
      },
      {
      day: 18,
      month: 7,
      maxTemp: 29.4,
      minTemp: -6.51,
      rain: true
      },
      {
      day: 19,
      month: 7,
      maxTemp: 22.7,
      minTemp: -10.79,
      rain: false
      },
      {
      day: 20,
      month: 7,
      maxTemp: 30.18,
      minTemp: 15.85,
      rain: true
      },
      {
      day: 21,
      month: 7,
      maxTemp: -3.58,
      minTemp: -12.63,
      rain: false
      },
      {
      day: 22,
      month: 7,
      maxTemp: 44.44,
      minTemp: 11.72,
      rain: true
      },
      {
      day: 23,
      month: 7,
      maxTemp: 30.92,
      minTemp: 25.78,
      rain: false
      },
      {
      day: 24,
      month: 7,
      maxTemp: 42.63,
      minTemp: 42.6,
      rain: false
      },
      {
      day: 25,
      month: 7,
      maxTemp: 10.2,
      minTemp: 0.73,
      rain: false
      },
      {
      day: 26,
      month: 7,
      maxTemp: 42,
      minTemp: 37.6,
      rain: true
      },
      {
      day: 27,
      month: 7,
      maxTemp: 26.86,
      minTemp: 1.22,
      rain: true
      },
      {
      day: 28,
      month: 7,
      maxTemp: 4.23,
      minTemp: -13.82,
      rain: false
      },
      {
      day: 29,
      month: 7,
      maxTemp: 29.41,
      minTemp: -8.11,
      rain: false
      },
      {
      day: 30,
      month: 7,
      maxTemp: 37.9,
      minTemp: -9.71,
      rain: false
      },
      {
      day: 31,
      month: 7,
      maxTemp: 39.45,
      minTemp: -1.65,
      rain: true
      },
      {
      day: 1,
      month: 8,
      maxTemp: 4.6,
      minTemp: -13.35,
      rain: false
      },
      {
      day: 2,
      month: 8,
      maxTemp: 28.83,
      minTemp: 3.28,
      rain: true
      },
      {
      day: 3,
      month: 8,
      maxTemp: 37.7,
      minTemp: 23.55,
      rain: true
      },
      {
      day: 4,
      month: 8,
      maxTemp: 24.39,
      minTemp: -15.97,
      rain: true
      },
      {
      day: 5,
      month: 8,
      maxTemp: 16.55,
      minTemp: -5.47,
      rain: true
      },
      {
      day: 6,
      month: 8,
      maxTemp: -3.15,
      minTemp: -8.2,
      rain: true
      },
      {
      day: 7,
      month: 8,
      maxTemp: 43.96,
      minTemp: 31.4,
      rain: false
      },
      {
      day: 8,
      month: 8,
      maxTemp: 24.99,
      minTemp: -11.56,
      rain: false
      },
      {
      day: 9,
      month: 8,
      maxTemp: 12.34,
      minTemp: -12.69,
      rain: true
      },
      {
      day: 10,
      month: 8,
      maxTemp: 20.9,
      minTemp: 5.31,
      rain: true
      },
      {
      day: 11,
      month: 8,
      maxTemp: 27.49,
      minTemp: 20.34,
      rain: false
      },
      {
      day: 12,
      month: 8,
      maxTemp: 12.72,
      minTemp: -2.45,
      rain: true
      },
      {
      day: 13,
      month: 8,
      maxTemp: 38.4,
      minTemp: 0.51,
      rain: false
      },
      {
      day: 14,
      month: 8,
      maxTemp: 9.79,
      minTemp: -4.23,
      rain: false
      },
      {
      day: 15,
      month: 8,
      maxTemp: 18.76,
      minTemp: 13.76,
      rain: false
      },
      {
      day: 16,
      month: 8,
      maxTemp: 40.66,
      minTemp: -6.29,
      rain: false
      },
      {
      day: 17,
      month: 8,
      maxTemp: 13.13,
      minTemp: -13.97,
      rain: false
      },
      {
      day: 18,
      month: 8,
      maxTemp: 0.49,
      minTemp: -8.38,
      rain: false
      },
      {
      day: 19,
      month: 8,
      maxTemp: 9.58,
      minTemp: 6.76,
      rain: true
      },
      {
      day: 20,
      month: 8,
      maxTemp: 33.89,
      minTemp: 31.6,
      rain: true
      },
      {
      day: 21,
      month: 8,
      maxTemp: 27.62,
      minTemp: 19.25,
      rain: true
      },
      {
      day: 22,
      month: 8,
      maxTemp: 45,
      minTemp: -11.61,
      rain: false
      },
      {
      day: 23,
      month: 8,
      maxTemp: 33.22,
      minTemp: 3.55,
      rain: false
      },
      {
      day: 24,
      month: 8,
      maxTemp: 35.9,
      minTemp: 32.29,
      rain: false
      },
      {
      day: 25,
      month: 8,
      maxTemp: 37.84,
      minTemp: 8.98,
      rain: true
      },
      {
      day: 26,
      month: 8,
      maxTemp: 22.3,
      minTemp: -4.34,
      rain: false
      },
      {
      day: 27,
      month: 8,
      maxTemp: 27.53,
      minTemp: 17.3,
      rain: true
      },
      {
      day: 28,
      month: 8,
      maxTemp: 39.61,
      minTemp: 19.36,
      rain: true
      },
      {
      day: 29,
      month: 8,
      maxTemp: 29.23,
      minTemp: -2.29,
      rain: false
      },
      {
      day: 30,
      month: 8,
      maxTemp: 43.48,
      minTemp: -13.3,
      rain: true
      },
      {
      day: 31,
      month: 8,
      maxTemp: 41.4,
      minTemp: -1.78,
      rain: false
      },
      {
      day: 1,
      month: 9,
      maxTemp: 34.49,
      minTemp: 15.73,
      rain: false
      },
      {
      day: 2,
      month: 9,
      maxTemp: 18.79,
      minTemp: 6.47,
      rain: false
      },
      {
      day: 3,
      month: 9,
      maxTemp: 24.69,
      minTemp: 10.47,
      rain: false
      },
      {
      day: 4,
      month: 9,
      maxTemp: 34.15,
      minTemp: -4,
      rain: false
      },
      {
      day: 5,
      month: 9,
      maxTemp: 27.48,
      minTemp: -11.88,
      rain: false
      },
      {
      day: 6,
      month: 9,
      maxTemp: 17.6,
      minTemp: 10.32,
      rain: true
      },
      {
      day: 7,
      month: 9,
      maxTemp: 22.67,
      minTemp: 13.57,
      rain: false
      },
      {
      day: 8,
      month: 9,
      maxTemp: 30.12,
      minTemp: -1.9,
      rain: false
      },
      {
      day: 9,
      month: 9,
      maxTemp: 36.3,
      minTemp: 23.52,
      rain: false
      },
      {
      day: 10,
      month: 9,
      maxTemp: 44.45,
      minTemp: 1.46,
      rain: true
      },
      {
      day: 11,
      month: 9,
      maxTemp: 44.37,
      minTemp: 13.49,
      rain: false
      },
      {
      day: 12,
      month: 9,
      maxTemp: 22.67,
      minTemp: 9.88,
      rain: false
      },
      {
      day: 13,
      month: 9,
      maxTemp: 44.11,
      minTemp: -1.88,
      rain: true
      },
      {
      day: 14,
      month: 9,
      maxTemp: 42.57,
      minTemp: 8.14,
      rain: true
      },
      {
      day: 15,
      month: 9,
      maxTemp: -4.76,
      minTemp: -15,
      rain: true
      },
      {
      day: 16,
      month: 9,
      maxTemp: 26.7,
      minTemp: 17.27,
      rain: true
      },
      {
      day: 17,
      month: 9,
      maxTemp: -10.91,
      minTemp: -12.8,
      rain: false
      },
      {
      day: 18,
      month: 9,
      maxTemp: 14,
      minTemp: -13.12,
      rain: false
      },
      {
      day: 19,
      month: 9,
      maxTemp: 13.1,
      minTemp: -6.96,
      rain: false
      },
      {
      day: 20,
      month: 9,
      maxTemp: 14.83,
      minTemp: -9.72,
      rain: false
      },
      {
      day: 21,
      month: 9,
      maxTemp: 37.63,
      minTemp: 8.44,
      rain: false
      },
      {
      day: 22,
      month: 9,
      maxTemp: 1.39,
      minTemp: -7.85,
      rain: false
      },
      {
      day: 23,
      month: 9,
      maxTemp: 29.51,
      minTemp: 15.79,
      rain: false
      },
      {
      day: 24,
      month: 9,
      maxTemp: 42.89,
      minTemp: -5.35,
      rain: true
      },
      {
      day: 25,
      month: 9,
      maxTemp: 28.26,
      minTemp: -13.29,
      rain: false
      },
      {
      day: 26,
      month: 9,
      maxTemp: 37.18,
      minTemp: 4.65,
      rain: true
      },
      {
      day: 27,
      month: 9,
      maxTemp: 41.38,
      minTemp: 19.74,
      rain: true
      },
      {
      day: 28,
      month: 9,
      maxTemp: 37.53,
      minTemp: 14.66,
      rain: true
      },
      {
      day: 29,
      month: 9,
      maxTemp: 37.21,
      minTemp: 14.61,
      rain: true
      },
      {
      day: 30,
      month: 9,
      maxTemp: 42.41,
      minTemp: -8.45,
      rain: true
      },
      {
      day: 1,
      month: 10,
      maxTemp: 31.93,
      minTemp: 9.34,
      rain: true
      },
      {
      day: 2,
      month: 10,
      maxTemp: 1.76,
      minTemp: -13.94,
      rain: false
      },
      {
      day: 3,
      month: 10,
      maxTemp: 27.15,
      minTemp: -1.65,
      rain: false
      },
      {
      day: 4,
      month: 10,
      maxTemp: 39.2,
      minTemp: 20.89,
      rain: false
      },
      {
      day: 5,
      month: 10,
      maxTemp: 43.6,
      minTemp: 20.15,
      rain: true
      },
      {
      day: 6,
      month: 10,
      maxTemp: 3.85,
      minTemp: -9.64,
      rain: true
      },
      {
      day: 7,
      month: 10,
      maxTemp: 24.3,
      minTemp: 19.58,
      rain: false
      },
      {
      day: 8,
      month: 10,
      maxTemp: 22.56,
      minTemp: 18.33,
      rain: true
      },
      {
      day: 9,
      month: 10,
      maxTemp: 37.15,
      minTemp: 11.94,
      rain: true
      },
      {
      day: 10,
      month: 10,
      maxTemp: -5.86,
      minTemp: -15.49,
      rain: false
      },
      {
      day: 11,
      month: 10,
      maxTemp: 2.28,
      minTemp: -14.7,
      rain: true
      },
      {
      day: 12,
      month: 10,
      maxTemp: 43.11,
      minTemp: 33.18,
      rain: true
      },
      {
      day: 13,
      month: 10,
      maxTemp: 32.63,
      minTemp: 26.9,
      rain: false
      },
      {
      day: 14,
      month: 10,
      maxTemp: 18.55,
      minTemp: 3.98,
      rain: true
      },
      {
      day: 15,
      month: 10,
      maxTemp: 35.83,
      minTemp: 25.8,
      rain: true
      },
      {
      day: 16,
      month: 10,
      maxTemp: 27.14,
      minTemp: 0.15,
      rain: false
      },
      {
      day: 17,
      month: 10,
      maxTemp: 37.82,
      minTemp: 12.4,
      rain: true
      },
      {
      day: 18,
      month: 10,
      maxTemp: 9.3,
      minTemp: 3.74,
      rain: false
      },
      {
      day: 19,
      month: 10,
      maxTemp: 18.21,
      minTemp: -7.73,
      rain: true
      },
      {
      day: 20,
      month: 10,
      maxTemp: 40.5,
      minTemp: 22.78,
      rain: false
      },
      {
      day: 21,
      month: 10,
      maxTemp: -1,
      minTemp: -10.26,
      rain: true
      },
      {
      day: 22,
      month: 10,
      maxTemp: 8.35,
      minTemp: -11.73,
      rain: false
      },
      {
      day: 23,
      month: 10,
      maxTemp: 9.6,
      minTemp: 1.12,
      rain: false
      },
      {
      day: 24,
      month: 10,
      maxTemp: 35.78,
      minTemp: -15.5,
      rain: true
      },
      {
      day: 25,
      month: 10,
      maxTemp: 27.4,
      minTemp: 21.3,
      rain: true
      },
      {
      day: 26,
      month: 10,
      maxTemp: 2.75,
      minTemp: -14.52,
      rain: true
      },
      {
      day: 27,
      month: 10,
      maxTemp: 20.69,
      minTemp: 6.18,
      rain: false
      },
      {
      day: 28,
      month: 10,
      maxTemp: 35.77,
      minTemp: -15.22,
      rain: true
      },
      {
      day: 29,
      month: 10,
      maxTemp: -4.11,
      minTemp: -14.84,
      rain: false
      },
      {
      day: 30,
      month: 10,
      maxTemp: 31.1,
      minTemp: -7.23,
      rain: false
      },
      {
      day: 31,
      month: 10,
      maxTemp: 38.64,
      minTemp: 28.56,
      rain: true
      },
      {
      day: 1,
      month: 11,
      maxTemp: 27.23,
      minTemp: -13.32,
      rain: true
      },
      {
      day: 2,
      month: 11,
      maxTemp: -5.15,
      minTemp: -11.32,
      rain: true
      },
      {
      day: 3,
      month: 11,
      maxTemp: 36.75,
      minTemp: 8.51,
      rain: true
      },
      {
      day: 4,
      month: 11,
      maxTemp: 35.96,
      minTemp: -15.92,
      rain: true
      },
      {
      day: 5,
      month: 11,
      maxTemp: 29.5,
      minTemp: -10.55,
      rain: true
      },
      {
      day: 6,
      month: 11,
      maxTemp: 21.54,
      minTemp: 17.41,
      rain: true
      },
      {
      day: 7,
      month: 11,
      maxTemp: 36.39,
      minTemp: 12.33,
      rain: true
      },
      {
      day: 8,
      month: 11,
      maxTemp: 34.65,
      minTemp: 5.58,
      rain: false
      },
      {
      day: 9,
      month: 11,
      maxTemp: 12.29,
      minTemp: 7.6,
      rain: false
      },
      {
      day: 10,
      month: 11,
      maxTemp: 12.57,
      minTemp: 10.55,
      rain: false
      },
      {
      day: 11,
      month: 11,
      maxTemp: 21.52,
      minTemp: -11.79,
      rain: true
      },
      {
      day: 12,
      month: 11,
      maxTemp: 27.15,
      minTemp: -7.4,
      rain: false
      },
      {
      day: 13,
      month: 11,
      maxTemp: 35.84,
      minTemp: 7.66,
      rain: true
      },
      {
      day: 14,
      month: 11,
      maxTemp: 4.22,
      minTemp: -6.99,
      rain: false
      },
      {
      day: 15,
      month: 11,
      maxTemp: 41.11,
      minTemp: 25.81,
      rain: false
      },
      {
      day: 16,
      month: 11,
      maxTemp: 32.29,
      minTemp: -8.23,
      rain: true
      },
      {
      day: 17,
      month: 11,
      maxTemp: 43.6,
      minTemp: -14.22,
      rain: false
      },
      {
      day: 18,
      month: 11,
      maxTemp: 34.83,
      minTemp: -3.69,
      rain: true
      },
      {
      day: 19,
      month: 11,
      maxTemp: 39.93,
      minTemp: 7.47,
      rain: true
      },
      {
      day: 20,
      month: 11,
      maxTemp: 11.7,
      minTemp: 7.66,
      rain: true
      },
      {
      day: 21,
      month: 11,
      maxTemp: 33.22,
      minTemp: 6,
      rain: true
      },
      {
      day: 22,
      month: 11,
      maxTemp: 43.5,
      minTemp: 37.8,
      rain: true
      },
      {
      day: 23,
      month: 11,
      maxTemp: 45,
      minTemp: 3.19,
      rain: false
      },
      {
      day: 24,
      month: 11,
      maxTemp: 35.66,
      minTemp: -8.99,
      rain: true
      },
      {
      day: 25,
      month: 11,
      maxTemp: 17.91,
      minTemp: 17.18,
      rain: false
      },
      {
      day: 26,
      month: 11,
      maxTemp: 20.99,
      minTemp: 3.15,
      rain: true
      },
      {
      day: 27,
      month: 11,
      maxTemp: 16.29,
      minTemp: 9.23,
      rain: true
      },
      {
      day: 28,
      month: 11,
      maxTemp: 0.81,
      minTemp: -5.9,
      rain: true
      },
      {
      day: 29,
      month: 11,
      maxTemp: 16.51,
      minTemp: 7.8,
      rain: true
      },
      {
      day: 30,
      month: 11,
      maxTemp: 39.25,
      minTemp: -10.34,
      rain: false
      },
      {
      day: 1,
      month: 12,
      maxTemp: 32.58,
      minTemp: 11.43,
      rain: false
      },
      {
      day: 2,
      month: 12,
      maxTemp: 38.87,
      minTemp: 27.62,
      rain: false
      },
      {
      day: 3,
      month: 12,
      maxTemp: 30.69,
      minTemp: 4.5,
      rain: true
      },
      {
      day: 4,
      month: 12,
      maxTemp: 31.37,
      minTemp: 7.76,
      rain: true
      },
      {
      day: 5,
      month: 12,
      maxTemp: 7.8,
      minTemp: -8.8,
      rain: true
      },
      {
      day: 6,
      month: 12,
      maxTemp: 37.66,
      minTemp: -13.25,
      rain: true
      },
      {
      day: 7,
      month: 12,
      maxTemp: 9.53,
      minTemp: 2.4,
      rain: true
      },
      {
      day: 8,
      month: 12,
      maxTemp: 25.16,
      minTemp: 23.87,
      rain: false
      },
      {
      day: 9,
      month: 12,
      maxTemp: 10.15,
      minTemp: 2.4,
      rain: true
      },
      {
      day: 10,
      month: 12,
      maxTemp: 24.33,
      minTemp: 19.66,
      rain: false
      },
      {
      day: 11,
      month: 12,
      maxTemp: 31.16,
      minTemp: 5.95,
      rain: false
      },
      {
      day: 12,
      month: 12,
      maxTemp: 41.13,
      minTemp: 8.36,
      rain: false
      },
      {
      day: 13,
      month: 12,
      maxTemp: 34.74,
      minTemp: -15.68,
      rain: true
      },
      {
      day: 14,
      month: 12,
      maxTemp: 37.84,
      minTemp: 34.86,
      rain: true
      },
      {
      day: 15,
      month: 12,
      maxTemp: 30.24,
      minTemp: 8.42,
      rain: true
      },
      {
      day: 16,
      month: 12,
      maxTemp: 33.4,
      minTemp: 20.71,
      rain: false
      },
      {
      day: 17,
      month: 12,
      maxTemp: 1.47,
      minTemp: 0.7,
      rain: true
      },
      {
      day: 18,
      month: 12,
      maxTemp: 44.57,
      minTemp: 35.62,
      rain: false
      },
      {
      day: 19,
      month: 12,
      maxTemp: 24.18,
      minTemp: 7.38,
      rain: true
      },
      {
      day: 20,
      month: 12,
      maxTemp: 32.91,
      minTemp: 11.59,
      rain: true
      },
      {
      day: 21,
      month: 12,
      maxTemp: 15.98,
      minTemp: -14.96,
      rain: false
      },
      {
      day: 22,
      month: 12,
      maxTemp: 18.63,
      minTemp: -1.36,
      rain: false
      },
      {
      day: 23,
      month: 12,
      maxTemp: 39.53,
      minTemp: -8.15,
      rain: false
      },
      {
      day: 24,
      month: 12,
      maxTemp: 23.74,
      minTemp: -4.12,
      rain: true
      },
      {
      day: 25,
      month: 12,
      maxTemp: 43.75,
      minTemp: -3.17,
      rain: false
      },
      {
      day: 26,
      month: 12,
      maxTemp: 32.96,
      minTemp: 6.92,
      rain: false
      },
      {
      day: 27,
      month: 12,
      maxTemp: 17.5,
      minTemp: -13.39,
      rain: false
      },
      {
      day: 28,
      month: 12,
      maxTemp: 44.7,
      minTemp: -15.33,
      rain: false
      },
      {
      day: 29,
      month: 12,
      maxTemp: 30.9,
      minTemp: -11.7,
      rain: false
      },
      {
      day: 30,
      month: 12,
      maxTemp: 18.48,
      minTemp: -5.4,
      rain: false
      },
      {
      day: 31,
      month: 12,
      maxTemp: 40.36,
      minTemp: 5.78,
      rain: true
      }
  ];

  return array;
}

arrayINPE = criarArrayINPE(arrayINPE);

//funçao que calcula e retorna a quantidade de dias que choveu
function numDiasChuva(array) {
  let somatorioChuvas = 0;

  for(let i=0; i<array.length; i++) {
    //se rain for true, incrementamos +1 em somatorioChuvas
    array[i].rain && somatorioChuvas++;
  }
  return somatorioChuvas;
}

/*procedimento que calcula e apresenta a média das temperaturas MÁXIMAS 
e a média das temperatuas MÍNIMAS */
function mediaMaxMin(arr) {
  let tamanhoArray = arr.length;
  let somatorioTempMax = 0;
  let somatorioTempMin = 0;

  //aproveito e faço ambos os somatorios em um único for
  for(let i=0; i<tamanhoArray; i++) {
    somatorioTempMax += arr[i].maxTemp;
    somatorioTempMin += arr[i].minTemp;
  }

  let mediaMaxima = somatorioTempMax/(tamanhoArray);
  console.log("MÉDIA GERAL das temperaturas Máximas -> " + mediaMaxima.toFixed(2));
  let mediaMinima = somatorioTempMin/(tamanhoArray);
  console.log("MÉDIA GERAL das temperaturas Mínimas -> " + mediaMinima.toFixed(2));
}

/*procedimento que calcula e apresenta a média das temperaturas MÁXIMAS 
e a média das temperatuas MÍNIMAS de um determinado mês 
1º parâmetro -> array de informacoes meteorolígicas
2º parâmetro -> número do mês a ser analisado -> pode ser valores entre 1 a 12*/
function mediaMaxMinDoMes(arr, numeroMes) {
  let somatorioTempMax = 0;
  let somatorioTempMin = 0;
  let somatorioDiasDoMes = 0;

  for(let i=0; i<arr.length; i++) {
    //somatorio somente das temperaturas do mês escolhido
    if(arr[i].month == numeroMes) {
      somatorioTempMax += arr[i].maxTemp;
      somatorioTempMin += arr[i].minTemp;
      somatorioDiasDoMes++;
    }
  }

  let mediaMaxima = somatorioTempMax/(somatorioDiasDoMes);
  console.log("MÉDIA das temperaturas Máximas do mês " + numeroMes + " -> " + mediaMaxima.toFixed(2));
  let mediaMinima = somatorioTempMin/(somatorioDiasDoMes);
  console.log("MÉDIA das temperaturas Mínimas do mês " + numeroMes + " -> " + mediaMinima.toFixed(2));
}

//funcao que apresenta as informações do array
function informacoesArrayINPE(array) {
  for(let i=0; i<array.length; i++) {
    //uso um ternário para verificar se choveu ou não (analisando a chave 'rain' do objeto)
    let choveu = array[i].rain ? 'SIM' : 'NÃO';
    console.log("- Data: " + array[i].day + "/" + array[i].month + " | Temp Máx.: " + array[i].maxTemp + " | Temp Mín.: " + array[i].minTemp + " | Choveu?: (" + choveu + ")");
  }
}

/*funcao que ordena o array na ordem crescente de TEMPERATURA MÁXIMA e o retorna;
aqui fiz o bubleSort, um dos métodos de ordenação aprendido em aula*/
function ordenarArrayINPE(array) {
  let tamanhoArray = array.length;  
  
  for (let i=0; i<tamanhoArray; i++) { 
    for (let y=0; y<(tamanhoArray-i-1); y++) {
      if(array[y].maxTemp>array[y+1].maxTemp) {
        let valorTemporario = array[y]; 
        array[y] = array[y+1]; 
        array[y+1] = valorTemporario; 
      }
    }        
  }

  return array;
}

console.log("Quantidade de dias que choveu -> " + numDiasChuva(arrayINPE));
mediaMaxMin(arrayINPE);
mediaMaxMinDoMes(arrayINPE, MES);
console.log('');

console.log("A seguir vai ser mostrado as informações meteorológicas do INPE (ano 2021) de duas formas:");
console.log("1ª FORMA: Ordem do Array Original");
console.log("Após mostrar todas informações na 1ª forma, passa para a outra forma:")
console.log("2ª FORMA: Ordem crescente de temperatura máxima");

console.log('');
console.log("==========INFORMAÇÕES METEOROLÓGICAS (INPE - 2021)==========");
informacoesArrayINPE(arrayINPE);

arrayINPEOrdenado = ordenarArrayINPE(arrayINPE);
console.log('');
console.log("==========INFORMAÇÕES METEOROLÓGICAS (INPE - 2021)==========");
console.log("***** ORDENADAS EM ORDEM CRESCENTE DE TEMPERATURA MÁXIMA *****");
informacoesArrayINPE(arrayINPEOrdenado);