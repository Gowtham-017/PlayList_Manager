import React,{useEffect,useState} from "react";
import Data from './Data'
import Product from './Product'
const ProductList = (props) => {
    const [selectedcategory, setSelectedcategory] = useState();
    const category = props.category;
    const items = Data.items; // Access the items array from the Data object
  
    const showCategories = (category) => {
      if (category === "All") {
        const productsdata = items.map((props) => {
          return <Product key={props.Id} {...props} />;
        });
        setSelectedcategory(productsdata);
      } else {
        const filteredproductsdata = items.filter(
          (item) => item.category === category
        );
        const productsdata = filteredproductsdata.map((props) => {
          return <Product key={props.Id} {...props} />;
        });
        setSelectedcategory(productsdata);
      }
    };
  
    useEffect(() => {
      showCategories(category);
    }, [category]);
  
    return (
      <>
        <h1>
           
        </h1>
        <div className="List">{selectedcategory}</div>
      </>
    );
  };
  
  export default ProductList;