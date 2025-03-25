import React from 'react';
import MySlider from '@/common/slider';
import Intro from '@/components/intro';
import Identical from '@/components/identical';
import { useQuery } from '@tanstack/react-query';
import { getAPIData } from '@/http/api';
import { QueryKeys } from '@/constants/query';
import Loading from '@/shared/loading';
import { DataNotFoundContainer } from '@/shared/notfound';

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.INTROPICTURES],
    queryFn: async () => await getAPIData("intropictures?populate=*"),
  });

  const { data: data1 } = useQuery({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () => getAPIData("products?populate=*"),
  });

  const { data: data2 } = useQuery({
    queryKey: [QueryKeys.SECONDPRODUCTS],
    queryFn: () => getAPIData("secondproducts?populate=*"),
  });

  const { data: data3 } = useQuery({
    queryKey: [QueryKeys.THIRDPRODUCTS],
    queryFn: () => getAPIData("thirdproducts?populate=*"),
  });

  const { data: imageData } = useQuery({
    queryKey: [QueryKeys.IMAGES],
    queryFn: async () => await getAPIData("images?populate=*"),
  });

  if (isLoading) {
    return (
      <div className='flex justify-center items-center'>
        <div className='w-[500px] h-[500px] overflow-hidden'>
          <Loading className="w-full h-full object-contain" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex justify-center items-center'>
        <div className='w-[500px] h-[500px] overflow-hidden'>
          <DataNotFoundContainer className="w-full h-full object-contain" />
        </div>
      </div>
    );
  }

  return (
    <>
      <MySlider
        isIntro={true}
        slide={data.data.map((el, index) => (
          <Intro
            key={index}
            title={el.title}
            picture={
              el.picture?.formats?.large?.url
                ? `http://localhost:1337${el.picture.formats.large.url}`
                : "https://via.placeholder.com/150"
            }
          />
        ))}
      />

      <div className="mt-[70px]">
      <Identical reverse={false} products={data1?.data || []} renderIndex={0} />
      </div>
      <Identical reverse={true} products={data2?.data || []} renderIndex={1} />
<Identical products={data3?.data || []} renderIndex={2} />
<Identical reverse={true} products={data1?.data || []} renderIndex={3} />
    </>
  );
};

export default Home;
