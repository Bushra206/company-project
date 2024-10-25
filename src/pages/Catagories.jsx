import React from 'react'

function Catagories() {
    const catagoriesData=[

        {
            id:1,
            cat_name:"Sports",
            cat_img:"/images/Catagories/fc54db64504754ab554f0530cfb03135-removebg-preview.png"
        },
        {
            id:2,
            cat_name:"Politics",
            cat_img:"/images/Catagories/Rectangle 20.png"
        },
        {
            id:3,
            cat_name:"Health",
            cat_img:"/images/Catagories/Rectangle 21.png"
        },
        {
            id:4,
            cat_name:"International",
            cat_img:"/images/Catagories/Rectangle 22.png"
        },
        {
            id:5,
            cat_name:"Market",
            cat_img:"/images/Catagories/Rectangle 23.png"
        },
        {
            id:6,
            cat_name:"Restaurants",
            cat_img:"/images/Catagories/Rectangle 24.png"
        }
    ]
  return (
    <div className="catagory-bg w-[200px] py-4 px-6 rounded-lg text-white absolute left-24 -bottom-[26px] flex flex-col items-center " >
    <h3 className="mb-3">Catagory</h3>
    <div>
        <div className='grid grid-cols-2 gap-4'>
             {catagoriesData.map((catagory_item)=>{
                return(
                    <div>
                        <img src={catagory_item.cat_img} alt={catagory_item.cat_name} className='w-[50px] h-[50px]' />
                        <p className='text-[10px] text-center'>{catagory_item.cat_name}</p>
                    </div>
                )
             })}
        </div>
    </div>

  </div>
  )
}

export default Catagories
