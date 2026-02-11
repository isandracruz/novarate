function PriceHistoryHeaderActions() {
    return (
        <div className="flex bg-background-dark/50 p-1 rounded-lg border border-white/5">
            <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-secondary text-white shadow-md transition-all">30D</button>
            <button className="px-4 py-1.5 text-xs font-bold rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors">3M</button>
            <button className="px-4 py-1.5 text-xs font-bold rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors">1Y</button>
        </div>
    );
}

export default PriceHistoryHeaderActions;
