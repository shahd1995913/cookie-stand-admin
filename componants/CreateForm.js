export default function Create(props) {
    
    return (
     
     <form className="bg-green-400" onSubmit={props.onCreate}>

            <h1 className="bg-green-200">Create Cookie Stand</h1>

           
            <div >
           
                <label for='loc'>Location</label>
           
                <input name="loc"  />
           
            </div>

            <div >
                
                <div >
                
                    <label for="min" >Minimum Customers per Hour</label>
                
                    <input name="min"  />
                
                </div>
               
                <div >
               
                    <label for='max'>Maximum Customers per Hour</label>
               
                    <input name="max"  />
                </div>
                <div >
                    <label for='avg'>Average Cookies per Sale</label>
                    <input name="avg"  />
                </div>
                <button className="bg-green-400">Create</button>
            </div>

        </form>
    )
}