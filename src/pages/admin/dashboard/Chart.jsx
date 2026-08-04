import React from "react";
import { Row,Col } from "reactstrap";
function Chart(){

return(
        <>
        <div className="p-6">
        <h1 className="text-4xl font-bold">
            Charts
        </h1>
        <p className="text-gray-500 mt-2">Explore different chart types available in the dashboard.</p>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">

            <div className="lg:col-span-2 bg-white border
            rounded-2xl p-6 h-96">
                <h1 style={{fontSize:'x-large'}}>Team Skills Assessment</h1>
                <p className="text-gray-500">Current vs previous quarter competencies</p>
            </div>

            <div className="bg-white border rounded-2xl p-6 h-96">
                <h1 style={{fontSize:'x-large'}}>Device Usage</h1>
                <p className="text-gray-500">Session distribution by device type</p>
            </div>

        </div>

    </div>
    <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-6 mt-8" style={{marginTop:'-38px'}}>

            <div className="lg:col-span-2 bg-white border
            rounded-2xl p-6 h-96">
                <h1 style={{fontSize:'x-large'}}>Marketing Spend vs Revenue</h1>
                <p className="text-gray-500">Campaign performance comparison by quarter</p>
            </div>

            <div className="bg-white border rounded-2xl p-6 h-96">
                <h1 style={{fontSize:'x-large'}}>Budget Allocation</h1>
                <p className="text-gray-500">Department spending distribution</p>
            </div>

        </div>

    </div>
    
     <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-6 mt-8" style={{marginTop:'-38px'}}>

            <div className="lg:col-span-2 bg-white border
            rounded-2xl p-6 h-96" style={{width:'151%'}}>
                <h1 style={{fontSize:'x-large'}}>Marketing Spend vs Revenue</h1>
                <p className="text-gray-500">Campaign performance comparison by quarter</p>
            </div>
        </div>
    </div>
    </>
    )
}
export default Chart;