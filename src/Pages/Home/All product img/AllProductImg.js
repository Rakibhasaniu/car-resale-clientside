import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllProductImg = () => {
    const [images, setImg] = useState()
    useEffect(() => {
        fetch(`https://assegnment-12-server-site.vercel.app/allProduct/`)
            .then(res => res.json())
            .then(data => {
                setImg(data)
            })
    }, [])
    

    return (
        <>
            <section className=" dark:bg-gray-800 dark:text-gray-50 py-10">
                <h1 className='text-4xl text-center pb-2'>Car Collection</h1>
                <p className='text-[22px] text-amber-600 text-center pb-5'>Click Those Image To See Full Image </p>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 md:px-20 px-2">
                    {
                        images?.map((imgs, i) => <>
                            <PhotoProvider>
                                <div className="foo">

                                    <PhotoView key={i} src={imgs?.img}>
                                        <img className="w-full cursor-grab h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={imgs?.img} alt="" />
                                    </PhotoView>

                                </div>
                            </PhotoProvider>
                        </>

                        )
                    }




                </div>
            </section>
        </>
    );
};

export default AllProductImg;