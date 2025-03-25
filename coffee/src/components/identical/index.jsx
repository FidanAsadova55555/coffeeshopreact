import React from 'react'
import MySlider from '@/common/slider'
import ProductCard from '@/common/product'
import Button from '@/shared/button'
import { useQuery } from '@tanstack/react-query'
import { getAPIData } from '@/http/api'
import { QueryKeys } from '@/constants/query'
import { useTranslation } from 'react-i18next'
import Loading from '@/shared/loading'
import { DataNotFoundContainer } from '@/shared/notfound'

const Identical = ({ reverse = false, products = [], renderIndex = 0 }) => {
  const { t } = useTranslation()

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.IMAGES],
    queryFn: async () => await getAPIData("images?populate=*"),
  })

  if (isLoading) {
    return (
      <div className='flex justify-center items-center'>
        <div className='w-[500px] h-[500px] overflow-hidden'>
          <Loading className="w-full h-full object-contain" />
        </div>
      </div>
    )
  }

  if (isError || !data?.data?.[renderIndex]) {
    return (
      <div className='flex justify-center items-center'>
        <div className='w-[500px] h-[500px] overflow-hidden'>
          <DataNotFoundContainer className="w-full h-full object-contain" />
        </div>
      </div>
    )
  }

  const selectedImage = data.data[renderIndex].image?.url
    ? `http://localhost:1337${data.data[renderIndex].image.url}`
    : "https://via.placeholder.com/300"

  return (
    <div className='mb-[15px]'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={`${reverse ? "order-1 md:order-2" : "order-1"}`}>
          <div className='w-full h-auto overflow-hidden'>
            <img
              src={selectedImage}
              alt={`image-${renderIndex}`}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className={`${reverse ? "order-2 md:order-1" : "order-2"}`}>
          <div className='p-[2%] text-center'>
            <h1 className='capitalize font-sofia text-newstext text-[40px] mb-[15px] leading-[1.2]'>
              {t("everythingForYou")}
            </h1>
            <h2 className='text-base text-black font-sofiaRegular mb-[30px]'>
              {t("ecoLimitedDesc")}
            </h2>
            <MySlider
              slidesData={products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  image={product.image?.url ? `http://localhost:1337${product.image.url}` : "https://via.placeholder.com/300"}
                  title={product.title}
                  old={product.old_price}
                  newprice={product.new_price}
                />
              ))}
            />
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Identical
