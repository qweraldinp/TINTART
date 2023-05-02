import Link from 'next/link'
import Layout from '@/components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Products() {
  //styles 
  const tableStyles = ''
  
  //functions
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    })
  })


  return (
    <Layout page='Products'>
        <div>
          <Link href='./other/newProduct' className='bg-slate-700 text-slate-200 py-2 px-3 rounded-md'> 
            Add Product 
          </Link>

          <table className='basic w-full mt-5'>
            <thead>
              <tr className='border-gray-100 border-2 p-1'>
                <td> Product Name </td>
                <td> Description </td>
                <td> Price </td>
                <td>  </td>
              </tr>
            </thead>

            <tbody>
              {products.map(product => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.desc}</td>
                  <td>{product.price}</td>
                  <td>
                    buttons
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </Layout>
  )
}

