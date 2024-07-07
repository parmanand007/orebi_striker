import { createClient, groq } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
  token
})

const productQuery = groq`*[_type == 'product']{
    ...} | order(_createdAt desc)`;

export const products = async() => {
  const productData = await client.fetch(productQuery);
  return productData;
}