export const useProductData = () => {
    // const productData = useState("productData", () => useCookie("productData"));
    // if(productData.value==null) {
    //     productData.value = productDetails
    // }
    return {productData}
}

const productData = {
    platBabyCoil: {
        id: "platBabyCoil",
        name: "Plat Baby Coil",
        mainImage: "/img/platBabyCoilMain.jpg",
        imageList: ["/img/platBabyCoil1.jpg","/img/platBabyCoil2.jpg","/img/platBabyCoil3.jpg","/img/platBabyCoil4.jpg","/img/platBabyCoil5.jpg","/img/platBabyCoil6.jpg"],
        desc: `
Kami menyediakan plat baby coil dengan harga murah dan dapat membantu untuk menekan biaya produksi. Plat baby coil terdiri dari beberapa spesifikasi sebagai berikut:

<b>Baby Coil SPHC (plat Hitam) & SPHC-PO (plat abu-abu)
tebal: 1.8-6.0mm
Lebar: 900-1220mm
panjang: standard atau sesuai
kebutuhan

<b>Baby Coil SPCC-SD & SPCC-UN (plat putih)
tebal: 0.4-1.8mm
Lebar: 900-1220mm
panjang: standard atau sesuai
kebutuhan
        `,
        video: "https://www.youtube.com/embed/Ul5ETbV6GBA?si=grn4VRp72ulbahJK"
    },
    cuttingSizePlate: {
        id: "cuttingSizePlate",
        name: "Cutting Size Plate",
        mainImage: "/img/cuttingSizePlateMain.jpg",
        imageList: ["/img/cuttingSizePlate1.jpg","/img/cuttingSizePlate2.jpg","/img/cuttingSizePlate3.jpg","/img/cuttingSizePlate4.jpg","/img/cuttingSizePlate5.jpg","/img/cuttingSizePlate6.jpg"],
        desc: `
Kami menyediakan plat besi dengan ukuran sesuai dengan kebutuhan produksi anda. Dengan didukung oleh mesin-mesin yang memadai dan team yang berpengalaman membuat kami dipercaya oleh customer untuk menyediakan plat dengan ukuran sesuai dengan kebutuhan produksi sehingga dapat mempelancar proses produksi. 

<b>HARGA MURAH
Keunggulan utama kami adalah harga plat yang kami tawarkan lebih murah karena menggunakan baby coil. 

<b>NO WASTE
Keunggulan lain adalah tidak ada sisa plat. Semua plat yang kami suppy dapat langsung digunakan untuk produksi sehingga perhitungan biaya produksi dapat lebih pasti.

<b>HEMAT TENAGA
Dengan adanya cutting size plate tidak perlu tambahan biaya karyawan untuk memotong plat sebelum produksi.

<b>HEMAT WAKTU
Waktu produksi dapat dipersingkat dengan adanya plat sesuai dengan kebutuhan produksi. 

<b>Jenis plat:
SPHC (plat Hitam) & SPHC-PO (plat abu-abu)
Tebal: 1.8-6.0mm
Ukuran: Sesuai kebutuhan

SPCC-SD & SPCC-UN (plat putih)
Tebal: 0.4-1.8mm
Ukuran: Sesuai kebutuhan
        `
    },
    basePlate: {
        id: "basePlate",
        name: "Base Plate",
        desc: `
Kami menyediakan pembuatan Base Plate sesuai kebutuhan perusahaan anda dengan harga terjangkau dan berkualitas. Kami dapat membuat Base Plate dengan ukuran dan bentuknya khusus sesuai keinginan anda.

Dengan mengunakan mesin laser cutting sehingga base plate yang dihasilkan menjadi sangat presisi.

<b>Spesifikasi base plate kami
Jenis Plat: SPHC (plat Hitam), SPHC-PO (plat abu-abu) & SPCC-SD(plat putih)
Tebal: 1.0-6.0mm
Ukuran: sesuai dengan kebutuhan

        `,
        mainImage: "/img/basePlateMain.jpg",
        imageList: ["/img/basePlate1.jpg","/img/basePlate2.jpg","/img/basePlate3.jpg","/img/basePlate4.jpg","/img/basePlate5.jpg","/img/basePlate6.jpg"],
        video: "https://www.youtube.com/embed/L2jdebq2o0U?si=gdcMPhByYyyJUv9n"
    },
    besiSikuLubang: {
        id: "besiSikuLubang",
        name: "Besi Siku Lubang",
        desc: `
Kami memproduksi dan menjual besi siku lubang, ambalan dan segitiga siku dengan kualitas bagus dan harga murah. Kami sudah memiliki pengalaman memproduksi lebih dari 5 tahun sehingga kami sudah mendapatkan kepercayaan dan menjalin kerjasama yang baik dengan banyak customer untuk mensupply produk kami baik produk jadi maupun bahan baku.

Produk kami tersedia dalam beberapa ukuran dan ketebalan 

<b>Besi SIku Lubang
Ukuran: 3.75 x 3.75 cm
Panjang: 2 meter
Tebal: 1.0mm, 1.2mm, 1.4mm, 1.6mm, 1.8mm, 2.0mm, 2.3mm, 2.5mm 2.8mm, 3.0mm
 
<b>Ambalan 
Bahan: SPCC-SD dan SPCC-UN
Ukuran: 40x100cm (50x110cm ukuran bahan)
Tebal: 0.6, 0.7, 0.8mm

<b>Segitiga Siku Lubang
Bahan: SPCC-SD dan SPCC-UN
Ukuran: 7.8x7.8cm 
Tebal: 0.6-0.8mm
        `,
        mainImage: "/img/besiSikuLubangMain.jpg",
        imageList: ["/img/besiSikuLubang1.jpg","/img/besiSikuLubang2.jpg","/img/besiSikuLubang3.jpg","/img/besiSikuLubang4.jpg","/img/besiSikuLubang5.jpg","/img/besiSikuLubang6.jpg"],
    },
    platJackBaseUHead: {
        id: "platJackBaseUHead",
        name: "Plat Jack Base & U-head",
        desc: `
Kami menyediakan plat jack base dan plat U-head untuk kebutuhan produksi Jack Base & U-Head scaffolding dengan harga terjangkau dan berkualitas. Plat jack base dan u-head kami memiliki kualitas yang bagus karena kamu menggunakan mesin laser cutting sehingga memiliki  tingkat presisi sempurna.

<b>Spesifikasi:
Jenis plat: SPHC dan SPHC-PO
Tebal: 3.9-4.0mm
Ukuran: 130 x 130mm(jackbase)
               130 x 130mm(130x190mm U-head)

        `,
        mainImage: "/img/platJackBaseUHeadMain.jpg",
        imageList: ["/img/platJackBaseUHead1.jpg","/img/platJackBaseUHead2.jpg","/img/platJackBaseUHead3.jpg","/img/platJackBaseUHead4.jpg","/img/platJackBaseUHead5.jpg","/img/platJackBaseUHead6.jpg"],
    },
    bracket: {
        id: "bracket",
        name: "Bracket",
        desc: `
Kami memproduksi dan menjual bracket rak minimarket dengan kualitas bagus dan harga murah. 

Produk kami tersedia dalam beberapa ukuran dan ketebalan 

<b>Spesifikasi :
Bahan: SPHC
Tebal: 1.6mm & 2.0mm
Ukuran: 28 cm
Kuat hingga 50kg pershelving
        `,
        mainImage: "/img/bracketMain.jpg",
        imageList: ["/img/bracket1.jpg","/img/bracket2.jpg","/img/bracket3.jpg","/img/bracket4.jpg","/img/bracket5.jpg","/img/bracket6.jpg"],
    },
}