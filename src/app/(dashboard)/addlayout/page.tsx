"use client"
import React from "react";
import { useLayout } from "./Controllers/layout";
import { LayoutGrid } from "./ui/LayoutGrid";
import { LayoutControls } from "./ui/LayoutControls";
import SeatDetails from "./ui/SeatDetails";

export default function Layout() {

    const {
        selectedComponent,
        setSelectedComponent,
        layoutSize,
        layout,
        scale,
        setScale,
        array,
        handleSeatPickUp,
        handleChnageSize,
        handleApplyLayout,
        handleDetailsChange,
        layoutDetails,
        handelNextStep,
        step,
        newarray,
        handleUpdateSeatDetails,
        handleAddseats,
        handleAddInput,
        months
    } = useLayout()

    return (
        <>
        <section className="w-full h-full justify-center items-center lg:hidden flex">
            <h1 className="text-xl font-bold">Min width of screen required is 1024px</h1>
        </section>
            <section className="w-full h-full justify-between items-center lg:flex hidden">
                <div className="w-[65%] h-full p-20 overflow-scroll scrollbar">
                    <LayoutGrid array={array} scale={scale} layout={layout} handleSeatPickUp={handleSeatPickUp} />
                </div>
                <div className="w-[35%] h-full flex flex-col bg-white p-4 overflow-y-scroll scrollbar">

                    {
                        step == 1 ?
                            <LayoutControls handleChnageSize={handleChnageSize} layoutSize={layoutSize} selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} setScale={setScale} handleApplyLayout={handleApplyLayout} handleDetailsChange={handleDetailsChange} layoutDetails={layoutDetails} handleAddInput={handleAddInput} months={months} />
                            :
                            <SeatDetails array={newarray} handleUpdateSeatDetails={handleUpdateSeatDetails} />
                    }

                    <div className="flex w-full justify-between items-center py-2 gap-4">
                        {
                            step == 1 ?
                                // <button className="bg-greenleast w-1/2 text-white px-5 py-2 rounded-lg font-bold cursor-pointer" onClick={handleSaveDraft}>Save Draft</button>
                                ""
                                :
                                ""
                        }
                        <button className="bg-greenleast w-full text-white px-5 py-2 rounded-lg font-bold cursor-pointer" onClick={step == 1 ? handelNextStep : handleAddseats}>
                            {
                                step == 1 ? "Next" : "Submit"
                            }
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}