"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MainLayout from '@/components/layout/MainLayout';



const categories = [
  { title: "Mains", image: "/order/Main/M1.jpeg", description: "Enjoy traditional Sri Lankan dishes with rich spices and bold flavors." },
  { title: " Noodles ", image: "/order/Menu/N1.jpeg", description: "Indulge in a variety of sweet treats including cakes, pastries, and more." },
  { title: "Kottu  ", image: "/order/Menu/K1.jpeg", description: "Perfectly portioned meals for the whole family to enjoy together." },
  { title: "SideDish", image: "/order/Menu/S1.jpeg", description: "Give the gift of great taste with our gift vouchers." },
  { title: " Pasta", image: "/order/Menu/P1.jpeg", description: "Elegant high tea experiences with sweet and savory delights." },
  //{ title: "Arcadia Specials", image:"/order/Menu/N1.jpeg", description: "Indulge in the flavours of India with a variety of dishes family meals crafted by The Kingsbury’s Master Indian Chefs. The selection of over 40 items include Vegetable Samosas, Shish Kebabs, Delicious Mutton or Chicken Dum Biryani served with Raita and Gravy, and other delights including Butter Chicken, Mutton Rogan Josh, Lamb Korma and Chana Masala to supplement your rice or naan. Order individual portions or for the entire family." },
  { title: " Burger", image: "/order/Menu/B1.jpeg", description: "Elegant high tea experiences with sweet and savory delights." },
  { title: " Sandwiches", image: "/order/Menu/Sw1.jpeg", description: "Elegant high tea experiences with sweet and savory delights." },

];


const sampleImages = {
  "Mains": [
    {  src:"/order/Main/M1.jpeg", name:"Rice",price: 11.99, rating: 4.6, reviews: 110},
    {src:"/order/Main/M2Biriyani.jpeg",price: 11.99, rating: 4.6, reviews: 110},
   {src:"/order/Main/M3Beef.jpeg",price: 11.99, rating: 4.6, reviews: 110},
   {src:"/order/Main/M4Mon.jpeg"},
   {src:"/order/Main/M5shrimp.jpeg",},
   {src:"/order/Main/M6egg.jpeg",},
   {src:"/order/Main/M7Nasi.jpeg",},
   {src:"/order/Main/M8Special.jpeg",},
   {src:"/order/Main/M9Thai.jpeg",},
   {src:"/order/Main/M10Veg.jpeg",}
  ],
   " Noodles ": [
    { src:"/order/M2Biriyani.jpeg",name: 'Vegetable Noodles', price: 990},
    {  src:"/order/M1.jpeg", name:"Rice"},
    { name: 'Egg Noodles', price: 1150 },
    { name: 'Shrimp Noodles', price:  1670},
    { name: ' Kochchi Noodles', price:  1300},
    { name: ' Chicken Noodles', price:  1740},
    { name: 'Mixed Noodles', price:  2160},
    { name: 'Beef Noodles', price:  2120},
  ],
 "Kottu  ": [
    { src:"/order/M1.jpeg", name: '     Chicken Kottu     ', price: 1890 },
    { name: '    Egg Kottu      ', price:  1390},
    { name: '   Vegetable Kottu       ', price:1220  },
    { name: '     Chicken & Cheese Kottu     ', price:2580  },
  ],
   "SideDish": [
    { src:"/order/M1.jpeg", name: ' Kangkung Belacan', price:  900},
     { src:"/order/M1.jpeg", name: '     Chicken Kottu     ', price: 1890 },
    { name: '    Devilled Fish      ', price:  3450},
    { name: '   Devilled Chicken       ', price:  1900},
    { name: '        Devilled Prawns  ', price:  1890},
    { name: '      Fried Chicken in Chineese Style    ', price: 2150 },
    { name: '     Hot Butter Cuttlefish     ', price: 2650 },
    { name: '       Hot Butter Mushroom   ', price:  1340},
    { name: '     Sweet & Sour Prawns     ', price:  1820},
    { name: '     Sweet & Sour Chicken     ', price:  2080},
    { name: '   Hot Garlic Prawns   ', price:  2160},
    { name: '    Devilled Beef  ', price:  2870},
  ],
 " Pasta":[

  {  src:"/order/M1.jpeg",name: '    Penne Al Tonno  ', price:1450  },
  { name: '   Spaghetti Bolognese   ', price:1470  },
  { name: '    Spaghetti Carbonara  ', price:  1550},
  { name: '   Chicken Pasta   ', price:  1580},
  { name: '  Vegetable Pasta    ', price:  1550},
  { name: '  Penne & Shrimp Pasta in Cream Sauce    ', price:  1600},
  { name: '   Pasta Shrimp in Tomato Sauce  ', price:  1850},
{ name: '  Spaghetti Marinara    ', price:  1440},
],
"Arcadia Specials" :[
  { src:"/order/M1.jpeg", name: '  Fish & Chips    ', price: 2000 },
  { name: '    Chicken Parmigiana  ', price: 2260 },
  { name: '   Grill Chicken Breast   ', price:1750  },
  { name: '  Crispy Fried Spicy Wings    ', price: 1550 },
],
" Burger":[
  {  src:"/order/M1.jpeg",name: '    Prawns Burger  ', price: 1850 },
  { name: '   Crispy Chicken Burger   ', price:1950  },
  { name: '   Chicken Burger   ', price:  2180},
  { name: '    Mushroom Burger  ', price: 1450 },
  {name:'Beef Burger',price: 2060},
],
/*"Sandwiches":[
  { src:"/order/M1.jpeg",name: ' Egg Sandwich ', price: 1420 },
  { name: '   Tuna Sandwich    ', price:  1880},
  { name: '   Chicken Sandwich   ', price:  1290},
  { name: '    Cheese Sandwich  ', price:  1230},
  { name: '   Vegetable Sandwich    ', price:  1150},
  { name: '   Arcadia Club Sandwich   ', price:  1950},
  { name: '   Chicken Bacon & Cheese Sandwich   ', price:1200  },
  { name: '   Bacon, Lettuce & Tomato Sandwich   ', price: 1300 },
],*****/
" Sandwiches":[
   { src:"/order/M1.jpeg",name: ' Egg Sandwich ', price: 1420 },
  { name: '   Tuna Sandwich    ', price:  1880},
  { name: '   Chicken Sandwich   ', price:  1290},
  { name: '    Cheese Sandwich  ', price:  1230},
  { name: '   Vegetable Sandwich    ', price:  1150},
  { name: '   Arcadia Club Sandwich   ', price:  1950},
  { name: '   Chicken Bacon & Cheese Sandwich   ', price:1200  },
  { name: '   Bacon, Lettuce & Tomato Sandwich   ', price: 1300 },
]
};

export default function FoodCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart(prev => [...prev, { ...item, quantity }]);
    setSelectedImage(null);
  };
 
  return (
    <MainLayout>
    {/*-------search bar--------*/}
    
    <div className="p-6 bg-neutral-200" >
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for your favourite dish"
          className="w-full max-w-3xl rounded-full px-4 py-2 border-none bg-yellow-600 text-white placeholder-white"
        />
      </div>
      
      


      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
        <button className="shrink-0">
          <ChevronLeft className="h-6 w-6" />
        </button>

        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className="cursor-pointer shrink-0"
          >
            <div className="flex flex-col items-center justify-center w-40 p-2 rounded-2xl shadow-lg bg-neutral-200">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-28 object-cover rounded-xl"
              />
              <div className="text-center mt-2 font-semibold">
                {cat.title}
              </div>
            </div>
          </div>
        ))}

        <button className="shrink-0">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {selectedCategory && (
        <div className="mt-10 text-center ">
          <h2 className="text-2xl font-bold mb-2">{selectedCategory.title}</h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-6">
            {selectedCategory.description}
          </p>
{/*--------------image --------*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12">
            {sampleImages[selectedCategory.title]?.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="cursor-pointer bg-white rounded-xl shadow p-4"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-xl mb-2"
                />
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-gray-600">
                  {item.price !== undefined ? `Rs.${item.price.toFixed(2)}` : "Price not available"}
                </p>
                <div className="text-yellow-500">Rating: {item.rating} ⭐ ({item.reviews} reviews)</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.name}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{selectedImage.name}</h3>
            <p className="text-gray-600 mb-2">
              {selectedImage.price !== undefined ? `Price: $${selectedImage.price.toFixed(2)}` : "Price not available"}
            </p>
            <p className="text-yellow-500 mb-2">Rating: {selectedImage.rating} ⭐ ({selectedImage.reviews} reviews)</p>
            <label className="block mb-2">
              Quantity:
              <input
                type="number"
                min="1"
                defaultValue="1"
                id="quantity-input"
                className="ml-2 p-1 border rounded w-16"
              />
            </label>
          
            <button
  onClick={() => {
    const qty = parseInt(document.getElementById("quantity-input").value) || 1;
    addToCart(selectedImage, qty);

    // Navigate to cart with query parameters
    router.push(
      `/cart?name=${encodeURIComponent(selectedImage.name)}&quantity=${qty}&price=${selectedImage.price}`
    );
  }}
  className="mt-2 bg-yellow-600 text-white px-4 py-2 rounded-full w-full hover:bg-yellow-700"
>
  Add to Cart
</button>



          </div>
        </div>
      )}
    </div>
    </MainLayout>
  );
}
