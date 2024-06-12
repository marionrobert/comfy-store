import { Form, useLoaderData } from 'react-router-dom';
import { type ProductsResponseWithParams } from '@/utils';
import FormInput from './FormInput';

function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* search */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
      />
    </Form>
  );
}
