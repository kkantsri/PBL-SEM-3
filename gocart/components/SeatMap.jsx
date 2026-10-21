'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "@/lib/features/booking/bookingSlice";
import { seatLayouts } from "@/assets/busData";
import { Disc, Info } from "lucide-react";

const SeatMap = ({ trip, onProceed }) => {
    const dispatch = useDispatch();
    const selectedSeats = useSelector((state) => state.booking?.selectedSeats || []);
    const [activeDeck, setActiveDeck] = useState("lower");

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹';
    const isSleeper = trip?.busType?.toLowerCase().includes("sleeper") || false;
    const layout = isSleeper ? seatLayouts.SLEEPER_2x1 : seatLayouts.SEATER_2x2;

    const filteredSeats = isSleeper
        ? layout.seats.filter((s) => s.deck === activeDeck)
        : layout.seats;

    const handleSeatClick = (seat) => {
        if (seat.isBooked) return;
        dispatch(toggleSeat(seat.number));
    };

    return (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            
            {/* Header & Deck Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
                <div>
                    <h3 className="text-lg font-bold text-slate-800">Choose Your Seats</h3>
                    <p className="text-xs text-slate-500 font-medium">Click on an available seat to reserve it</p>
                </div>

                {isSleeper && (
                    <div className="inline-flex p-1 bg-slate-100 rounded-xl">
                        <button
                            type="button"
                            onClick={() => setActiveDeck("lower")}
                            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                                activeDeck === "lower"
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-500 hover:text-slate-800"
                            }`}
                        >
                            Lower Deck
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveDeck("upper")}
                            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                                activeDeck === "upper"
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-500 hover:text-slate-800"
                            }`}
                        >
                            Upper Deck
                        </button>
                    </div>
                )}
            </div>

            {/* Seat Map Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 py-4 border-b border-slate-100 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                    <div className="size-5 rounded-md border-2 border-slate-300 bg-white" />
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-5 rounded-md bg-blue-600 border-2 border-blue-600" />
                    <span>Selected</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-5 rounded-md bg-slate-200 border-2 border-slate-200 cursor-not-allowed" />
                    <span>Booked</span>
                </div>
            </div>

            {/* Bus Container */}
            <div className="max-w-md mx-auto my-6 p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl relative">
                
                {/* Steering Wheel / Front Driver indicator */}
                <div className="flex justify-end pb-4 mb-4 border-b border-slate-200">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                        <Disc size={14} className="text-slate-500" />
                        <span>Driver / Front</span>
                    </div>
                </div>

                {/* Seat Grid */}
                <div className="grid grid-cols-5 gap-3 justify-items-center">
                    {filteredSeats.map((seat) => {
                        const isSelected = selectedSeats.includes(seat.number);
                        const isBooked = seat.isBooked;

                        // Calculate col span for aisle gap
                        let colClass = "col-span-1";
                        if (seat.col === 4 && isSleeper) colClass = "col-start-4";

                        return (
                            <button
                                key={seat.id}
                                type="button"
                                disabled={isBooked}
                                onClick={() => handleSeatClick(seat)}
                                className={`size-11 sm:size-12 rounded-xl flex flex-col items-center justify-center font-bold text-xs transition active:scale-90 relative ${colClass} ${
                                    isBooked
                                        ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                                        : isSelected
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-300 border-2 border-blue-600"
                                        : "bg-white hover:border-blue-400 text-slate-700 border-2 border-slate-200 shadow-xs"
                                }`}
                                title={`Seat ${seat.number} (${seat.type})`}
                            >
                                <span>{seat.number}</span>
                                <span className="text-[9px] font-normal opacity-75">
                                    {isSleeper ? "Berth" : seat.type === "WINDOW" ? "Win" : "Aisle"}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Live Tally and Proceed Footer */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold text-slate-500">Selected Seats</p>
                    <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-base font-extrabold text-slate-800">
                            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
                        </span>
                        {selectedSeats.length > 0 && (
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                                {selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="text-right">
                        <p className="text-[11px] font-semibold text-slate-400">Total Price</p>
                        <p className="text-xl font-black text-slate-900">
                            {currency}{(selectedSeats.length * (trip?.price || 0))}
                        </p>
                    </div>

                    <button
                        type="button"
                        disabled={selectedSeats.length === 0}
                        onClick={onProceed}
                        className={`flex-1 sm:flex-none px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-xl transition ${
                            selectedSeats.length > 0
                                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 active:scale-95"
                                : "bg-slate-200 text-slate-400 cursor-not-allowed"
                        }`}
                    >
                        Proceed to Booking
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SeatMap;
