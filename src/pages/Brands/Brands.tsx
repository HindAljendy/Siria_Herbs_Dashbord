import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../componnents/Table-Brand/TableBrand';
import Pagination from '../../componnents/PaginateItems/Pagination';

interface Brand {
  id: number;
  name: string;
  main_image: string;
  products_count: number;
  published: boolean;
}

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [update, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/brands?page=${currentPage}`)
      .then(response => {
        console.log('API response:', response.data);
        const brandsData = response.data.data?.data;
        setCurrentPage(response.data.data.current_page)
        setTotalItems(response.data.pagination.total)
        setItemsPerPage(response.data.pagination.per_page)
        if (Array.isArray(brandsData)) {
          setBrands(brandsData);
        } else {
          console.error('Data returned is not an array or does not contain a data array:', response.data);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the brands!', error);
      });
  }, [update, currentPage]);

  const columns = ['الاسم', 'صورة المنتج', 'عدد المنتجات', 'Published', 'الاجراءات'];

  return (
    <div>
      <Table
        title="العلامات التجارية"
        buttonLabel="اضافة ماركة"
        columns={columns}
        data={brands}
        update={update}
        setUpdate={setUpdate}
      />
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Brands;




