import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavigationLinks from '../../componnents/NavigationLinks/NavigationLinks'
// import ProductsOperationsSection from '../../componnents/ProductsOperationsSection/ProductsOperationsSection'
// import Table from '../../componnents/Table/Table'
import CategoryTable from '../../componnents/Category/CategoryTable/CategoryTable'
import axios from 'axios'
import Pagination from '../../componnents/PaginateItems/Pagination'

type TDataitem = {
  id?: number;
  name?: string;
  published?: boolean;
  brands_name: string[];
  products_count: number;
}
type TData = Array<TDataitem>;

const Category = () => {
  const [data, setData] = useState<TData>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/categorys?page=${currentPage}`).then((res) => {
      setData(res.data.data.data)
      setCurrentPage(res.data.data.current_page)
      setTotalItems(res.data.pagination.total)
      setItemsPerPage(res.data.pagination.per_page)
    }
    ).catch((error) => console.log(error))
  }, [currentPage]);
  return (
    <>
      <NavigationLinks
        navigateMain='الفئات'
        navigateLink='الواجهة الرئيسية' navigateSubmain='الفئات'
      />

      <Outlet />
      <CategoryTable title={'الفئات'} buttonLabel={'اضف فئة'} columns={['الاسم', 'العلامات التجارية', 'عدد المنتجات', 'تم النشر', 'الإجراءات']} data={data} />
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default Category