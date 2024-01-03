## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Shopping Cart

### Login :
In this web-app I include the login part through which only after authentication you can go to the home page of the application. And the login data will be provided from "https://dummyjson.com/auth/login"

### Navbar Component:
In the Navbar I include the app logo and Home for home page and a cart for the cart page.

 #### Products Component :
 In this web-app we fetch some products array from "https://dummyjson.com/products" and then after fetching the whole array through async and await I store the data in a variable and then I update my state variable. Now through useEffect hook I rendered and fetch products from url and then in return with the help of map function I pass the elements in the ProductBox component which is used to display the products in a box. 

### Cart Component :
In the cart component I pass the array of products and then through map function I rendered each element and displays the data, but the data will be displayed only when the showCart state is true.
