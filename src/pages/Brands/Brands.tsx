import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../componnents/Table-Brand/TableBrand';

interface Brand {
  name: string;
  main_image: string;
  products_count: number;
  published: boolean;
}

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/brands')
      .then(response => {
        console.log('API response:', response.data);
        const brandsData = response.data.data?.data; 
        if (Array.isArray(brandsData)) {
          setBrands(brandsData);
        } else {
          console.error('Data returned is not an array or does not contain a data array:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the brands!', error);
      });
  }, []);

  const columns = ['الاسم', 'صورة المنتج', 'عدد المنتجات', 'Published', 'الاجراءات'];

  const data = brands.length > 0 ? brands.map(brand => ({
    name: brand.name,
    image: brand.main_image,
    quantity: brand.products_count || 0,
    published: brand.published,
  })) : [];

  console.log('Formatted data for table:', data);

  return (
    <div>
      <Table 
        title="العلامات التجارية"
        buttonLabel="اضافة ماركة"
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default Brands;




