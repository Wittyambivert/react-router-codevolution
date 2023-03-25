import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div>
                <input placeholder="Search for products" type="Search" />
            </div>
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>new</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Products