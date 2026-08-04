import { useParams } from "react-router-dom";
import {Row,Col,Button} from "reactstrap";
import {useEffect,useState} from "react";
import axios from "axios";
import  {useNavigate}  from "react-router-dom";
import { Star } from 'lucide-react';
import { toast } from "react-toastify";
function Product(){

    const {id} = useParams();
    const [product, setproduct] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/upload/product/${id}`)
        .then(res =>{
            console.log(product);
            setproduct(res.data);
            // console.log("ID:", id);
            // console.log("API:", res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    },[id]);

    const addToCart = async (productId) =>{
        try{
            const token = localStorage.getItem("token");
            // const firstname = localStorage.getItem("firstname");
            const response = await axios.post(
                "http://localhost:8080/api/cart/add-to-cart",
                {
                    // user :{id:},
                    product:{id:productId},
                    quantity:1,
                },
                {
                    headers:{
                        Authorization: `Bearer ${token}`,
                        // Authorization: `Bearer ${firstname}`,
                    },
                }
            );
            console.log(response.data);
            // alert("product added to cart");
            toast.success("Product Added To Cart Successfully")
            navigate("/user/productcart")

        }catch(error){
            console.error(error);
            if(error.response?.status === 401){
                // alert("please login first");
                toast.error("Please Login First");
                window.location.href = "/login";
            }
        }
        
    }

    return(
        <>
            <Row className="w-100">
                <Col sm="1"></Col>
                <Col sm="4">
                    <div className="product-details-image">
                        <div className="product-card-image mt-5" style={{height:'25vw',width:'30vw',backgroundColor:'whitesmoke'}}>
                            <img src={product.imageUrl} alt="" style={{    marginLeft:"4px",
    marginTop: "4px",
    height: "32.5vw",
    width: "98%"}} />    
                        </div>
                    </div>
                </Col>
                <Col sm="6">
                    <div className="product-details-information">
                        <div className="product-name-section mt-5">
                            <h2 style={{fontSize:'xx-large',fontWeight:'400',fontFamily:'serif'}}>{product.name}</h2><hr />
                              <div className="flex gap-1">
                                   <Star size={18} fill="#facc15" color="#facc15" />
                                   <Star size={18} fill="#facc15" color="#facc15" />
                                   <Star size={18} fill="#facc15" color="#facc15" />
                                   <Star size={18} fill="#facc15" color="#facc15" />
                                   <Star size={18} fill="none" color="#9ca3af" />
                                 </div>
                        </div>
                        <div className="product-price-section">
                            <Row className="w-100">
                                {/* <Col sm="2"></Col> */}
                                <Col sm="6">
                                    <h2 style={{fontSize:'xx-large',fontWeight:'400',fontFamily:'serif'}}>${product.price}</h2>
                                    <h5>Categories : &emsp; &emsp; {product.category}</h5>
                                    <p>Free Shipping</p><hr />
                                </Col>
                                <Col sm="4">
                                    
                                </Col>
                                {/* <Col sm="2"></Col> */}
                            </Row>
                            <Row className="w-100">
                                <Col sm="6">
                                    {/* <h5>Size</h5> */}
                                    <h5>Quantity</h5><hr />
                                </Col>
                            </Row>
                            <Row className="w-100 mt-2">
                                <Col sm="3">
                                    <Button color="outline-danger">Buy Now</Button>
                                </Col>
                                <Col sm="5">
                                    <Button color="warning" onClick={() => addToCart(product.id)}>Add To Cart</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col sm="1"></Col>
            </Row>

            <Row className="w-100" style={{marginTop:'12vw'}}>
                <Col sm="1"></Col>
                <Col sm="7">
                    <div className="product-section-description-information" style={{backgroundColor:'whitesmoke',height:'25vw'}}>
                        <p>{product.description}</p>
                    </div>
                </Col>
                <Col sm="1"></Col>
            </Row>

            <Row className="w-100">
                <Col sm="1"></Col>
                <Col sm="10">
                    <div className="related-product-section">
                        <h5 className="text-center">RELATED PRODUCTS</h5>
                    </div>
                </Col>
                <Col sm="1"></Col>
            </Row>
            
        </>
    )

}
export default Product;

