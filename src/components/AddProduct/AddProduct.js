import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState("");

    const onSubmit = data => {
        const productInfo = {
            productName: data.name,
            price: data.price,
            productImage: imageURL
        }

        axios.post('http://localhost:5000/addProduct', productInfo)
            .then(response => {
                response.data && console.log("Successfully Added");
            })
            .catch(error => {
                console.log(error);
            });;
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '08d5da1c81cc5c52012f0b930505d031');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" type="text" ref={register} placeholder="Enter name" />
                <br />
                <input name="price" type="number" ref={register} placeholder="Enter price" />
                <br />
                <input name="photo" type="file" ref={register} onChange={handleImageUpload} placeholder="Enter price" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;