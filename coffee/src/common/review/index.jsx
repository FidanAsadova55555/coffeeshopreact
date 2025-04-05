import React, { useState } from 'react';
import styles from "./style.module.scss";
import { QueryKeys } from "@/constants/query";
import { useTranslation } from "react-i18next";
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';
import { useParams } from 'react-router'
import { getAPIData } from '@/http/api';
import { useQuery } from '@tanstack/react-query'
import ProductCard from '@/common/product'
const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');
  const { t } = useTranslation();

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'info', label: 'Additional Information' },
    { id: 'review', label: 'Review' },
  ];
  const { id } = useParams(); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.SHOPCARDS],
    queryFn: async () => await getAPIData("shopcards?populate=*"),
  });

   if (isLoading) return <div>
 <div className='flex justify-center items-center'>
 <div className='w-[500px] h-[500px] overflow-hidden'>
 <Loading className="w-full h-full object-contain"/>
 </div>
 </div>
   </div>;
   if (isError) return <div>
     <div className='flex justify-center items-center'>
 <div className='w-[500px] h-[500px] overflow-hidden'>
 <DataNotFoundContainer className="w-full h-full object-contain"/>
 </div>
 </div>
   </div>;

  const shopId = parseInt(id, 10);

  const shop = data?.data?.find((b) => b.id === shopId);

  if (!shop) {
    return <DataNotFoundContainer/>;
  }

  return (
    <div className='border-b border-b-[#e4e4e4] pb-[30px] mb-[30px]'>
     <div className='border-y border-y-[#e4e4e4]'>
     <div className="flex  max-w-[1440px] py-[25px]  mx-auto px-[15px] text-[18px] text-black font-sofia ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${styles.review} mr-[35px] ${
              activeTab === tab.id ? styles.active : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
     </div>

      <div >
        {activeTab === 'description' && (
          <div className=' max-w-[1440px] mx-auto pr-0 md:pr-[15px]'>
          <div className='pt-[40px]'>
            <div className='py-[25px]'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='px-[15px] seredina'>
<div className='max-w-[558px] h-auto overflow-hidden'>
<img src="https://cdn.shopify.com/s/files/1/0411/0660/4200/files/description-1.jpg?v=1592043788" alt="img" className='img' />

</div>
                    </div>
                    <div className='pt-[80px]  pl-[105px]'>
                    <div className='font-sofiaRegular'>
    <h3 className='mb-[8px] text-[32px]  leading-[45px] capitalize'>
        {t("coffeeGreatness")}
    </h3>
    <p className={styles.text}>
    {t("coffeeWarning")}
    </p>
</div>
<div>
<div className='max-w-[600px] h-auto overflow-hidden'>
<img src='https://cdn.shopify.com/s/files/1/0411/0660/4200/files/description-2.jpg?v=1592043788' alt="img" className='img' />

</div>
</div>
                    </div>

                </div>

            </div>
          </div>
          <div className='pt-[80px] pb-[24px]'>
<div className='text-center'>
    <h5 className={styles.header}>{t("productDetails")}</h5>
    <p className='mb-[16px] text-[14px] leading-[24px] text-old font-sofia'>
{t("productDescription")}    </p>
</div>
          </div>
          <div className='py-[16px] seredina'>
<div className='max-w-[899px] h-auto overflow-hidden'>
    <img src="https://cdn.shopify.com/s/files/1/0411/0660/4200/files/description-3.jpg?v=1592044046" alt="coffee" className='w-full h-full object-cover' />
</div>
          </div>
          </div>
        )}

        {activeTab === 'info' && (
<div className='pt-[30px]  max-w-[1440px] mx-auto px-[15px] text-left font-sofia'>
<div className='grid grid-cols-12'>
<div className='col-span-8 pr-[15px]'>
<div>
<h6 className='text-[11px] text-old uppercase tracking-[2px] mb-[5px]'>
{t("moreInfo")}
</h6>
<h3 className='chertocka !text-[25px] !pb-[15px]'>
    {t("thingsToKnow")}
</h3>
</div>
<div className='grid grid-cols-2'>
<div className='pr-[15px]'>
    <h5 className='text-[16px]  text-old py-[10px] mt-0 mb-4 '> {t("securityNotice")}
    </h5>
    <ul className="list-none px-0 pb-[16px]">
  {t('paymentList', { returnObjects: true }).map((item, i) => (
    <li className='justext' key={i}>{item}</li>
  ))}
</ul>

</div>
<div className='pl-[15px]'>
    <div>
        <h3 className='text-[18px] text-black'>
{t("expressDelivery")}
        </h3>
        <ul className="list-none mb-[16px] px-0">
  {t('shippingInfo', { returnObjects: true }).map((item, i) => (
    <li className='justext' key={i}>{item}</li>
  ))}
</ul>

    </div>
    <div>
<h3 className='text-[18px] text-black'>
    {t("needMoreInfo")}
</h3>
<ul className="list-none px-0 mb-[16px]">
  {t('helpLinks', { returnObjects: true }).map((item, i) => (
    <li className='justext' key={i}>
      <a href="#">{item}</a>
    </li>
  ))}
</ul>

    </div>
</div>
</div>
</div>
<div className='col-span-4 pl-[15px] '>
<ProductCard
        image={shop.image?.url ? `http://localhost:1337${shop.image.url}` : "https://via.placeholder.com/300"}
        />
</div>
</div>
</div>
        )}

        {activeTab === 'review' && (
          <div className='max-w-[1440px] mx-auto font-sofia px-[15px] mt-[24px]'>
            <h2 className="text-sm mb-[8px]  tracking-[1.2]">Customer Reviews</h2>
            <p className="text-newstext text-base ">Based on 1 review <span className="text-[#7a7a7a]  cursor-pointer">Write a review</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
