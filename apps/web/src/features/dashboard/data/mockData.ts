import type { Currency } from "../types";

export const mockData: Currency[] = [
  {
    id: "1",
    pair: "EUR / USD",
    name: "Euro",
    price: 1.0924,
    change: 0.45, // Positivo
    flagUrl: "https://flagcdn.com/w80/eu.png", // Bandera Unión Europea
  },
  {
    id: "2",
    pair: "GBP / USD",
    name: "British Pound",
    price: 1.2710,
    change: -0.12, // Negativo
    flagUrl: "https://flagcdn.com/w80/gb.png", // Bandera Reino Unido
  },
  {
    id: "3",
    pair: "USD / JPY",
    name: "Japanese Yen",
    price: 149.32,
    change: 0.89, // Positivo
    flagUrl: "https://flagcdn.com/w80/jp.png", // Bandera Japón
  },
  {
    id: "4",
    pair: "AUD / USD",
    name: "Australian Dollar",
    price: 0.6540,
    change: -0.32, // Negativo
    flagUrl: "https://flagcdn.com/w80/au.png", // Bandera Australia
  }
];