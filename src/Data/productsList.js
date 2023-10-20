import uniqid from 'uniqid';
//Product images
import backPack1 from '../images/productImg/backpack1.jpg';
import backPack2 from '../images/productImg/backpack2.webp';
import backpack3 from '../images/productImg/backpack3.jpg';
import backpack4 from '../images/productImg/backpack4.jpg';
import lavaLamp from '../images/productImg/lavalamp.webp';
import lavaLamp2 from '../images/productImg/lavalamp2.webp';
import eldenShirt1 from '../images/productImg/eldenshirtfront.jpg';
import eldenShirt2 from '../images/productImg/eldenshirt.jpg';
import nurseShirt from '../images/productImg/nurseshirt.jpg';
import otherBackpack from '../images/productImg/otherbackpack.webp';
import otherBackpack2 from '../images/productImg/otherbackpack2.webp';
import otherBackpack3 from '../images/productImg/otherbackpack3.webp';
import sabbathShirt from '../images/productImg/sabbathshirt.jpg';



const products = [
    {
        id: uniqid(),
        name: 'Cool Backpack',
        category: 'Bags',
        manufacturer: 'Vandelet Ind.',
        price: 19.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [backPack1, backPack2, backpack3, backpack4],
        inStock: 7,
    },
    {
        id: uniqid(),
        name: 'Edgy Backpack',
        category: 'Bags',
        manufacturer: 'Jose and Sons',
        price: 29.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [otherBackpack, otherBackpack2, otherBackpack3],
        inStock: 10,
    },
    {
        id: uniqid(),
        name: 'Black Sabbat Vol 4 T-Shirt Vintage',
        category: 'Shirts',
        manufacturer: 'Black Sabbath, warner records',
        price: 29.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [sabbathShirt],
        inStock: 10,
    },
    {
        id: uniqid(),
        name: 'Elden Ring Video Game Shirt',
        category: 'Shirts',
        manufacturer: 'MyersExst., BandaiNamco',
        price: 19.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [eldenShirt1, eldenShirt2],
        inStock: 10,
    },
    {
        id: uniqid(),
        name: 'Glowing Lava Lamp',
        category: 'Accessories',
        manufacturer: 'Johnny\'s Lamps',
        price: 59.69,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [lavaLamp, lavaLamp2],
        inStock: 10,
    },
    {
        id: uniqid(),
        name: 'Nurses T Shirt',
        category: 'Shirts',
        manufacturer: 'Myers Exst.',
        price: 23.99,
        description: "The 'terrible lizards' can reign supreme in the movies, but there's something seriously wrong about the way we've hyped up their history. ",
        images: [nurseShirt],
        inStock: 10,
    }
];

export default products;