interface CurrencyTickerHeaderProps {
    name: string;
    pair: string;
    flagUrl: string;
}

function CurrencyTickerHeader({ name, pair, flagUrl }: CurrencyTickerHeaderProps) {

    return (
        <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
                    <img alt={`${name} Flag`} className="relative w-12 h-12 rounded-full object-cover border border-blue-400/30 icon-glow" src={flagUrl} />
                </div>
                <div>
                    <h3 className="font-bold text-base text-white font-display">{pair}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{name}</p>
                </div>
            </div>
        </div>
    );
}

export default CurrencyTickerHeader;