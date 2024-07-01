import Container from '@/components/Container'
import { groq } from 'next-sanity'
import { client } from '../../../../../sanity/lib/client';
import Onsale from '@/components/Onsale';

interface Props {
    params: {
        slug:string;
    }
}

const specialOffersQuery =groq`*[_type == 'product' && position == 'Special Offers']{
    ...
    } | order(_createdAt asc)`;
    

export const generateStaticParams = async()=>{
    const query = groq`*[_type == 'product']{
    slug
    }`
    const slugs:any = await client.fetch(query);
    const slugRoutes = slugs.map((slug:any) => slug?.slug?.current);
    return slugRoutes?.map((slug:string)=>({

        slug,
    }))
}
const SinglePage = async({params:{slug}}:Props) => {
    const query = groq`*[_type == 'product' && slug.current ==$slug][0]{
    ...
    }`;
    const product = await client.fetch(query,{slug});
    const specialOffersProduct = await client.fetch(specialOffersQuery)
    console.log("special",specialOffersProduct)
  return (
    <Container className='my-10'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4'>
            <Onsale products ={specialOffersProduct} />
        </div>
        <div></div>
        <div></div>
    </Container>
  )
}

export default SinglePage ;