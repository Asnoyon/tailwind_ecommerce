import React, { useEffect, useState } from "react"
import ProductsCard from "../../components/products-card/Index"
import FeatureCard from "../../components/feature-card/Index"

const Products = ()=>{
    const [categories, setCategories]=useState([])
    useEffect(()=>{
       const fetchCategories= async()=>{
        const response = await fetch('https://fakestoreapi.com/products?limit=12')
        try {
        const data = await response.json();
        console.log(data)
        setCategories(data)
        } catch (error) {
            console.log(error)
        }
       }
       fetchCategories()
    },[])
    if (categories.length=== 0){
        return <div>Loading....</div>
    }
return (
    <div>
    {/* <FeatureCard product={categories}/> */}
    <h2 className="text-center mt-3 uppercase">All Products</h2>
    <ProductsCard products={categories}/>
</div>
)
}

export default Products