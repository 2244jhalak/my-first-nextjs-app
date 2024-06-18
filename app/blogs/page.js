import Link from "next/link";


const Blogs = () => {
    const phones = [
        {
          id: 1,
          name: 'iPhone 13 Pro',
          description: 'Apple iPhone 13 Pro with A15 Bionic chip, 6.1-inch Super Retina XDR display, and advanced camera system.'
        },
        {
          id: 2,
          name: 'Samsung Galaxy S21',
          description: 'Samsung Galaxy S21 with Exynos 2100, 6.2-inch Dynamic AMOLED display, and pro-grade camera.'
        },
        {
          id: 3,
          name: 'Google Pixel 6',
          description: 'Google Pixel 6 with Google Tensor processor, 6.4-inch OLED display, and exceptional camera capabilities.'
        },
        {
          id: 4,
          name: 'OnePlus 9 Pro',
          description: 'OnePlus 9 Pro with Snapdragon 888, 6.7-inch Fluid AMOLED display, and Hasselblad camera for mobile.'
        },
        {
          id: 5,
          name: 'Sony Xperia 1 III',
          description: 'Sony Xperia 1 III with Snapdragon 888, 6.5-inch 4K HDR OLED display, and triple camera system with ZEISS optics.'
        },
        {
          id: 6,
          name: 'Xiaomi Mi 11 Ultra',
          description: 'Xiaomi Mi 11 Ultra with Snapdragon 888, 6.81-inch AMOLED display, and pro-grade triple camera system.'
        }
      ];
      
    return (
        <main className="mt-10">
            <ul>
                {
                    phones.map(phone=>
                        <li key={phone.id}>
                            <Link className="btn btn-outline mb-5" href={`blogs/${phone.id}`}>{phone.name}</Link>
                        </li>
                    )
                }
            </ul>
           
        </main>
    );
};

export default Blogs;