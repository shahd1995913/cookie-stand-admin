import React, { useState } from "react";

import Footer from './Footer'

import Create from './CreateForm.js';

import Report from './ReportTable.js';



export default function Main() {


    const [report_table, setrepoert] = useState([])
   
    const [hours, sethours] = useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
   
   
    const [final_sum, setsum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])


    function onCreate(e) {

        e.preventDefault();

        let min = parseInt(e.target.min.value)

        let max = parseInt(e.target.max.value)
        
        let avg = parseInt(e.target.avg.value)

        let count = 0


        const store_data = {
        
            loc: e.target.loc.value,
        
            hour_sales: hours.map(() => Math.ceil(avg * (Math.ceil(Math.random() * (max - min) + min)))),
        }

        for (let j = 0; j < store_data.hour_sales.length; j++) {

            count = count + store_data.hour_sales[i]

        }

        store_data.total = count


        setrepoert([...report_table, store_data])



        let total_sum = final_sum.map((i, idx) =>
        
        {


            if (idx === final_sum.length - 1) {
            
                return i + store_data.total
            }

            return i + store_data.hour_sales[idx]
        }
        
        )

        
        setsum(total_sum)

    }

    return (
        <>
            <main className="">
                
        
                <Create onCreate={onCreate} />

                <Report report_table={report_table} hours={hours} final_sum={final_sum} />

                <Footer report_table={report_table} />

            </main>
        </>
    )
}