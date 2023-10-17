import uniqid from 'uniqid';
//Product images
import backPack1 from '../images/productImg/backpack1.jpg';
import backPack2 from '../images/productImg/backpack2.webp';
import lavaLamp from '../images/productImg/lavalamp.webp';
import eldenShirt1 from '../images/productImg/eldenshirtfront.jpg';
import eldenShirt2 from '../images/productImg/eldenshirt.jpg';
import nurseShirt from '../images/productImg/nurseshirt.jpg';
import otherBackpack from '../images/productImg/otherbackpack.webp';
import otherBackpack2 from '../images/productImg/otherbackpack2.webp';
import sabbathShirt from '../images/productImg/sabbathshirt.jpg';

const products = [
    {
        id: uniqid(),
        name: 'Example Product',
        category: '',
        manufacturer: 'Vandelet Ind.',
        price: 19.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [backPack1, backPack2],
    },
    {
        id: uniqid(),
        name: 'Example Product 2',
        category: '',
        manufacturer: 'Jose and Sons',
        price: 29.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [otherBackpack, otherBackpack2],
    },
    {
        id: uniqid(),
        name: 'Black Sabbat Vol 4 T-Shirt Vintage',
        category: 'Shirts',
        manufacturer: 'Black Sabbath, warner records',
        price: 29.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [sabbathShirt],
    },
    {
        id: uniqid(),
        name: 'Elden Ring Video Game Shirt',
        category: 'Shirts',
        manufacturer: 'MyersExst., BandaiNamco',
        price: 19.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [eldenShirt1, eldenShirt2],
    },
    {
        id: uniqid(),
        name: 'Glowing Lava Lamp',
        category: 'Accessories',
        manufacturer: 'Johnny\'s Lamps',
        price: 59.69,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [lavaLamp],
    },
    {
        id: uniqid(),
        name: 'Nurses T Shirt',
        category: 'Shirts',
        manufacturer: 'Myers Exst.',
        price: 23.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [nurseShirt],
    }
];

export default products;