import PriceHistoryHeaderActions from "./PriceHistoryHeaderActions";

function PriceHistoryHeader() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
                <h2 className="text-xl font-bold font-display text-foreground">Price History</h2>
                <p className="text-sm text-slate-400 mt-1">EUR/USD - Last 30 Days</p>
            </div>

            <PriceHistoryHeaderActions />
        </div>
    );
}

export default PriceHistoryHeader;
