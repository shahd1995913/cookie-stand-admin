export default function Report(props) {
    
    if (props.report.length === 0) {
        
        return (
        
            <h3 >No Cookie Stands Available</h3>
        )
    } else {

        return (
        
        <table >

                <thead 
                >
                    <th className='px-2'>Location</th>
                    {
                        props.hours.map(i => {
                            return (
                                
                                <th>{i} </th>
                            )

                        }
                        )
                    }
                    
                    <th>Totals</th>
                
                </thead>

                <tbody>
                
                    {
                        props.report_table.map((store_data, idx) => {


                            const e =
                                <>
                                    <td className='px-2 border border-black' >{store_data.loc}</td>
                                    {
                                        store_data.hour_sales.map(i => {
                                            return (
                                                <td className='border border-black'> {i} </td>
                                            )
                                        })
                                    }
                                    <td className='border border-black'>{store_data.total}</td>
                                </>

                            if (idx % 2 == 0) {
                                return (
                                    <tr className='bg-green-400'>
                                        {e}
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr className='bg-green-300'>
                                        {e}
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>

                <tfoot className='bg-green-400'>
                    <td >Totals</td>
                    {
                        props.final_sum.map(i => {
                            return (
                                <td>{i}</td>
                            )
                        })
                    }
                </tfoot>
            </table>
        )
    }
}