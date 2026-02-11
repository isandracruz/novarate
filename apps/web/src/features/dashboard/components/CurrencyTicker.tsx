import { TrendingUp, TrendingDown } from "lucide-react";
import CurrencyTickerHeader from "./CurrencyTickerHeader";
import type { Currency } from "../types";

interface CurrencyTickerProps {
    data: Currency;
}

function CurrencyTicker({ data }: CurrencyTickerProps) {
    const isPositive = data.change >= 0;
    const sign = isPositive ? '+' : '';

    const trendColor = isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400';
    const trendBg = isPositive ? 'bg-emerald-100 dark:bg-emerald-500/20' : 'bg-rose-100 dark:bg-rose-500/20';

    return (
        <div className="bg-surface rounded-xl p-6 border border-white/5 shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform duration-300">
            <CurrencyTickerHeader
                name={data.name}
                pair={data.pair}
                flagUrl={data.flagUrl}
            />

            <div className="mb-4">
                <span className="text-3xl font-display font-bold text-foreground">{data.price.toFixed(4)}</span>
            </div>

            <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${trendColor} ${trendBg}`} >
                    {isPositive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                    {sign}{data.change}%
                </span>
                <span className="text-xs text-slate-500">vs yesterday</span>
            </div>
        </div>
    );
}

export default CurrencyTicker;