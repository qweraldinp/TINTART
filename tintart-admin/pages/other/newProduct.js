import Layout from '@/components/Layout'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Products() {
    // styles 
    const labelStyles = 'text-xl mb-1'
    const inputStyles = 'px-2 rounded-md mb-4 h-8'
    
    // functions
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');

    const router = useRouter();

    const [goToProduct, setGoToProduct] = useState(false);
    
    async function createProduct(ev) {
        ev.preventDefault();
        const data = {name, desc, price};
        await axios.post('/api/products', data)
        setGoToProduct(true);
    }

    if (goToProduct) {
        router.push('/products');
    }

    return (
        <Layout page='Products'>
            <div>
                <form className='flex flex-col' onSubmit={createProduct}>
                    <p className='text-3xl font-bold mb-5'> New Product </p>

                    <label className={labelStyles}> Product Name </label>
                    <input className={inputStyles}
                        type='text' placeholder='product name'
                        value={name}
                        onChange={ev => setName(ev.target.value)} />

                    <label className={labelStyles}> Description </label>
                    <textarea className={inputStyles + ' h-32'}
                        type='text' placeholder='description'
                        value={desc}
                        onChange={ev => setDesc(ev.target.value)} />

                    <label className={labelStyles}> Price </label>
                    <input className={inputStyles}
                        type='number' placeholder='price'
                        value={price}
                        onChange={ev => setPrice(ev.target.value)} />

                    <button type='submit' className='px-5 py-3 w-fit bg-slate-300 rounded-md'>
                        Add Product
                    </button>
                </form>
            </div>
        </Layout>
    )
}

