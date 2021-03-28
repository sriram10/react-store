export const Menus = {
    data: [
        {
            id: 1,
            name: "Home",
            url: "/",
            components: 'HomePage',
            search: '',
            parent: 0
        },
        {
            id: 2,
            name: "Tshirts",
            url: "/product/tshirts",
            components: 'ProductListingPage',
            search: 'Tshirts',
            parent: 0
        },
        {
            id: 3,
            name: "Laptops",
            url: "/product/laptops",
            components: 'ProductListingPage',
            search: 'Laptops',
            parent: 0
        },
        {
            id: 4,
            name: "Mobiles",
            url: "/product/mobiles",
            components: 'ProductListingPage',
            search: 'Mobiles',
            parent: 0
        },
        {
            id: 5,
            name: "About Us",
            url: "/about-us",
            components: 'AboutPage',
            search: '',
            parent: 0
        },
        {
            id: 6,
            name: "Contact Us",
            url: "/contact-us",
            components: 'ContactPage',
            search: '',
            parent: 0
        }
    ]
}