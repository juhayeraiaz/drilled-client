import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '4295ac4d47b569312bea67b440cdbdbb';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const item = {
                        name: data.name,
                        description: data.description,
                        quantity: data.quantity,
                        price: data.price,
                        img: img
                    }
                    // send to your database 
                    fetch('https://drilled-tools.onrender.com/items', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(item)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Item added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Item');
                            }
                        })

                }

            })
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <h2 className="text-2xl">Add a New Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Item Name"
                        className="input input-bordered w-full max-w-xs bg-neutral"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="input input-bordered w-full max-w-xs bg-neutral" {...register("description", {})} />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs bg-neutral" type="number" placeholder="quantity" {...register("quantity", {})} />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs bg-neutral" type="number" placeholder="price" {...register("price", {})} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-secondary hover:file:bg-violet-200"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs btn-secondary' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;