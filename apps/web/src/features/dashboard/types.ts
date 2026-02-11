export interface Currency {
    id: string;
    pair: string;        // Ej: "EUR / USD"
    name: string;        // Ej: "Euro"
    price: number;       // Ej: 1.0924
    change: number;      // Ej: 0.45 (positivo) o -0.12 (negativo)
    flagUrl: string;     // URL de la imagen
}
