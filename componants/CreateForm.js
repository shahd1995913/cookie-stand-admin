export default function Create(props) {
    
    return (
     
     <form className="bg-green-400" onSubmit={props.onCreate}>

            <h1 className="bg-green-200">Create Cookie Stand</h1>

            <div >
           
                <label >Location</label>
           
                <input name="loc"  />
           
            </div>

            <div >
                
                <div >
                
                    <label >Minimum Customers per Hour</label>
                
                    <input name="min"  />
                
                </div>
               
                <div >
               
                    <label >Maximum Customers per Hour</label>
               
                    <input name="max"  />
                </div>
                <div >
                    <label>Average Cookies per Sale</label>
                    <input name="avg"  />
                </div>
                <button className="bg-green-400">Create</button>
            </div>

        </form>
    )
}