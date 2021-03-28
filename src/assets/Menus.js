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
            name: "Desktops",
            url: "/product/desktops",
            components: 'ProductListingPage',
            search: 'desktops',
            parent: 0
        },
        {
            id: 3,
            name: "Laptops",
            url: "/product/laptops",
            components: 'ProductListingPage',
            search: 'laptops',
            parent: 0
        },
        {
            id: 4,
            name: "Tablets",
            url: "/product/tablets",
            components: 'ProductListingPage',
            search: 'tablets',
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