import { Form, useLoaderData } from 'react-router-dom';
import { type ProductsResponseWithParams } from '@/utils';
function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search } = params;
  return (
    <Form>
      <div>
        <Label htmlFor='search'>Search Product</Label>
        <Input id='search' name='search' type='text' defaultValue={search} />
      </div>
    </Form>
  );
}
export default Filters;
