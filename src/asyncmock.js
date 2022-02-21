const products = [
    {id: 1, name: 'iphone 13 pro', price: 'usd 1200', category: 'celular', img: 'https://www.notebookcheck.org/fileadmin/Notebooks/Apple/iPhone_13_Pro/Produktfotos_Apple_iPhone_13_Pro_1448.jpg', stock: 10, description:'Descripcion de Iphone 13 Pro'},
    {id: 2, name: 'iphone 13 pro Max', price: 'usd 1500', category: 'celular', img: 'https://www.muycomputer.com/wp-content/uploads/2021/09/APERTURA_IPHONE13_PROMAX.jpg', stock: 5, description:'Descripcion de Iphone 13 Pro Max'},
    {id: 3, name: 'ipad pro', price: 'usd 2500', category: 'other accessories', img: 'https://www.apple.com/v/ipad-pro/ah/images/meta/ipad-pro_overview__f7l0byr65ceq_og.png?202110011640', stock: 15, description:'Descripcion de Ipad Pro'},
    {id: 4, name: 'samsung tv', price: 'usd 7000', category: 'tv', img: 'https://images.samsung.com/is/image/samsung/p6pim/in/feature/130517137/in-feature-uhd-4k-tv-437074650?$FB_TYPE_A_MO_JPG$', stock: 20, description:'Descripcion de Samsung Tv'}

]

export const getProducts = () => {
    return new Promise((resolve) => {
         setTimeout(() => {
            resolve(products)
         }, 3000)
    })
}

