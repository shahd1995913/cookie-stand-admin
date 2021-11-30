import Link from 'next/link'

export default function Header(props) {

    return (
    
    <header className="bg-green-600">

    
            <h2> Cookie Stand Admin</h2>
    
        
            <Link href='/Overview'>
    
        
                <a className="bg-blue-50">Overview</a>
    
        
            </Link>
    
        </header>
    )
}