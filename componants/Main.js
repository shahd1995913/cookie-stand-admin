import React, { useState } from "react";

export default function Main() {

    const [cookie_Stand, set_CookieStand] = useState([]);

    function form_cookies(e) {
        
        e.prevedntDefault()

        const form_cookies = {

            loc: e.target.loc.value,
            
            min: e.target.min.value,
            
            max: e.target.max.value,
            
            avg: e.target.avg.value
        }
        setCookieStand([...cookie_Stand, form_cookies])
    }

    return (
    
    <main className="flex flex-col items-center px-10 text-center">

            <div className="w-5/6 m-8 bg-green-400">

                <h1 className="m-4 text-3xl">Create Cookie Stand</h1>

                <form onSubmit={form_cookies}>

                    <label className="mr-2.5 text-xl">location</label>

                    <input name="loc" className="w-10/12"></input>

                    <div className="grid grid-cols-4 mt-4 mb-4">

                        <section>

                            
                            <label className="text-xl">Minimum Customers per Hour</label>
                            
                            <input name="min" className="w-60"></input>
                       
                        </section>

                        <section>
                       
                            <label className="text-xl">Maximum Customers per Hour</label>
                       
                            <input name="max" className="w-60"></input>
                       
                        </section>

                        <section>
                       
                            <label className="text-xl">Average Cookies per Sale</label>
                       
                            <input name="avg" className="w-60"></input>
                        </section>

                        <button className="text-xl bg-green-600 w-60 h-14">Create</button>

                    </div>

                </form>

            </div>

            <h3 className="">Report Table Coming Soon...</h3>

            <div className="mt-4 text-center">
                {
                   cookieStand && cookieStand.map((item,index) => {
                        return (
                            <p  key={index} > {JSON.stringify(item)}</p>
                        )
                    })
                }
            </div>

        </main>
    )
}



