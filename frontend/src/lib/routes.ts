// const api = process.env.NEXT_PUBLIC_API;
const api = 'http://localhost:5001';

const routes = {

  dashboard: {
    home: "/",
    products: "/products",
    orders: "/orders",
    staff: "/staff-members",
    wallet: "/wallet",
    
  },
  api: {
    baseURL: api,
    products: `${api}/products`,
    orders: `${api}/orders`,
    staff: `${api}/staff-members`,
  },
};

export default routes;
