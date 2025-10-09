import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Example products endpoint
app.get('/api/products', (req, res) => {
  const products = [
  {
    "id": 1,
    "title": "Majestic Mountain Graphic T-Shirt",
    "price": 44,
    "description": "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 2,
    "title": "Classic Red Pullover Hoodie",
    "price": 10,
    "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 3,
    "title": "Classic Heather Gray Hoodie",
    "price": 69,
    "description": "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 4,
    "title": "Classic Grey Hooded Sweatshirt",
    "price": 90,
    "description": "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 5,
    "title": "Classic Black Hooded Sweatshirt",
    "price": 79,
    "description": "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 6,
    "title": "Classic Comfort Fit Joggers",
    "price": 25,
    "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 7,
    "title": "Classic Comfort Drawstring Joggers",
    "price": 79,
    "description": "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 8,
    "title": "Classic Red Jogger Sweatpants",
    "price": 98,
    "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 9,
    "title": "Classic Navy Blue Baseball Cap",
    "price": 61,
    "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 10,
    "title": "Classic Blue Baseball Cap",
    "price": 86,
    "description": "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 11,
    "title": "Classic Red Baseball Cap",
    "price": 35,
    "description": "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 12,
    "title": "Classic Black Baseball Cap",
    "price": 58,
    "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 13,
    "title": "Classic Olive Chino Shorts",
    "price": 84,
    "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 14,
    "title": "Classic High-Waisted Athletic Shorts",
    "price": 43,
    "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 15,
    "title": "Classic White Crew Neck T-Shirt",
    "price": 39,
    "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 16,
    "title": "Classic White Tee - Timeless Style and Comfort",
    "price": 73,
    "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 17,
    "title": "Classic Black T-Shirt",
    "price": 35,
    "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
    "image": "https://i.imgur.com/QkIa5tT.jpeg"
  },
  {
    "id": 18,
    "title": "Sleek White & Orange Wireless Gaming Controller",
    "price": 69,
    "description": "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 19,
    "title": "Sleek Wireless Headphone & Inked Earbud Set",
    "price": 44,
    "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 20,
    "title": "Sleek Comfort-Fit Over-Ear Headphones",
    "price": 28,
    "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 21,
    "title": "Efficient 2-Slice Toaster",
    "price": 48,
    "description": "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 22,
    "title": "Sleek Wireless Computer Mouse",
    "price": 10,
    "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 23,
    "title": "Sleek Modern Laptop with Ambient Lighting",
    "price": 43,
    "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 24,
    "title": "Sleek Modern Laptop for Professionals",
    "price": 97,
    "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 25,
    "title": "Stylish Red & Silver Over-Ear Headphones",
    "price": 39,
    "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 26,
    "title": "Sleek Mirror Finish Phone Case",
    "price": 27,
    "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 27,
    "title": "Sleek Smartwatch with Vibrant Display",
    "price": 16,
    "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
    "image": "https://i.imgur.com/ZANVnHE.jpeg"
  },
  {
    "id": 28,
    "title": "Sleek Modern Leather Sofa",
    "price": 53,
    "description": "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  },
  {
    "id": 29,
    "title": "Mid-Century Modern Wooden Dining Table",
    "price": 24,
    "description": "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  },
  {
    "id": 30,
    "title": "Elegant Golden-Base Stone Top Dining Table",
    "price": 66,
    "description": "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  },
  {
    "id": 31,
    "title": "Modern Elegance Teal Armchair",
    "price": 25,
    "description": "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  },
  {
    "id": 32,
    "title": "Elegant Solid Wood Dining Table",
    "price": 67,
    "description": "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  },
  {
    "id": 33,
    "title": "Modern Minimalist Workstation Setup",
    "price": 49,
    "description": "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  },
  {
    "id": 34,
    "title": "Modern Ergonomic Office Chair",
    "price": 71,
    "description": "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  },
  {
    "id": 35,
    "title": "Futuristic Holographic Soccer Cleats",
    "price": 39,
    "description": "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    "image": "https://i.imgur.com/Qphac99.jpeg"
  }
]
  res.json(products)
})

const PORT = 5000
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`))
