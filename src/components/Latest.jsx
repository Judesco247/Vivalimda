import React, { useEffect, useState } from 'react'
import { latest1, latest2, latest3, latest4, latest5, latest6, latest7, latest8, latest9, latest10 } from '../assets'
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { News } from '../services/news';
// import Loader from './loader';
import Load from './Load';

const Latest = () => {
    const [posts, setPosts] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // console.log(isLoading); 
    // console.log(isError);
    useEffect(() => {
        //   console.log(News())

        (async () => {
            try {
                const data = await News().then(posts => {
                    console.log(posts)
                    setPosts(posts)
                    setLoading(false)
                    setError(false)
                })
                    .catch(error => {

                        // handle any error state, rejected promises, etc.. 
                        console.log(error)
                        setError(true)
                    }
                    );


            }
            catch (error) {
                console.log(error)
                setError(true)

                // handle any error state, rejected promises, etc..
            }
        })()
    }, [])

    return (
        <div>
            <div className="hidden md:block">
        <div className='md:ml-3 mx-auto'>
            <h5 className='mt-20 text-color1 text-[25px] font-bold font-bodyfont-700'>Latest Release</h5>
            <div class="md:grid grid-cols-4 grid-rows-3 gap-1 mt-5 items-center">
                {loading ? <Load /> : error ? (<p>Error loading data</p>) : (
                    posts.data.length > 0 && posts.data.map((post) => (
                        <a href="#" class="cursor-pointer border hover:border-background md:w-[250px] w-[428px]">
                            <div class="mx-auto md:w-[250px] w-[380px] md:h-[523px]">
                                <img src={post.image.url} alt="bluetick" className="md:w-[250px] w-[380px] md:h-[194px]" />
                                <p className="ml-3 text-color2 text-[13px] font-bodyfont-700 mt-3">
                                    {new Date(post.createdAt).getDate()}{' '}
                                    {new Date(post.createdAt).toLocaleString('default', {
                                        month: 'long',
                                    })}{' '}
                                    {new Date(post.createdAt).getFullYear()}
                                </p>
                                <h5 className='ml-3 md:mb-4 mb-2 md:mt-0 mt-3 text-[14px] md:w-[220px] w-[305px] h-[49px] text-color1 font-bold font-bodyfont-700'>TSMC starts volume production of
                                    {post.title}
                                </h5>
                                <p className="ml-3 md:w-[230px] w-[320px] text-color2 text-[13px] font-bodyfont-700">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/full-details`}
                                    className={`cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold ml-3 flex items-center mt-[15px]`}
                                >
                                    Read More{" "}
                                </Link>
                            </div>
                        </a>
                    ))
                )}

                <div class="ml-[500px] text-center -mt-72">
                    <button className="w-[150px] py-3 px-3 text-[13px] font-bold text-background px-4 py-2 border border-background font-bodyfont-400 ">Show More</button>
                </div>

            </div>

        </div>
        </div>
        <div className="block md:hidden w-[428px] h-[564px] mb-[1650px]">
            <h5 className='ml-6 mt-10 text-color1 text-[25px] font-bold font-bodyfont-700'>Latest Release</h5>
            <div class="md:grid grid-cols-4 grid-rows-3 gap-1 mt-5 items-center">
                {loading ? <Load /> : error ? (<p>Error loading data</p>) : (
                    posts.data.length > 0 && posts.data.map((post) => (
                        <a href="#" class="cursor-pointer border hover:border-background md:w-[250px] w-[428px]">
                            <div class="mx-auto md:w-[250px] w-[380px] md:h-[523px]">
                                <img src={post.image.url} alt="bluetick" className="md:w-[250px] w-[380px] md:h-[194px]" />
                                <p className="ml-3 text-color2 text-[13px] font-bodyfont-700 mt-3">
                                    {new Date(post.createdAt).getDate()}{' '}
                                    {new Date(post.createdAt).toLocaleString('default', {
                                        month: 'long',
                                    })}{' '}
                                    {new Date(post.createdAt).getFullYear()}
                                </p>
                                <h5 className='ml-3 md:mb-4 mb-2 md:mt-0 mt-3 text-[14px] md:w-[220px] w-[305px] h-[49px] text-color1 font-bold font-bodyfont-700'>TSMC starts volume production of
                                    {post.title}
                                </h5>
                                <p className="ml-3 md:w-[230px] w-[320px] text-color2 text-[13px] font-bodyfont-700">
                                    {post.excerpt}
                                </p>
                                <Link
                                    to={`/full-details`}
                                    className={`cursor-pointer text-background font-bodyfont-700 text-[13px] font-semibold ml-3 flex items-center mt-[15px]`}
                                >
                                    Read More{" "}
                                </Link>
                            </div>
                        </a>
                    ))
                )}

                <div class="ml-[500px] text-center -mt-72">
                    <button className="w-[150px] py-3 px-3 text-[13px] font-bold text-background px-4 py-2 border border-background font-bodyfont-400 ">Show More</button>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Latest