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
        mainImage: "/img/platBabyCoilMain.png",
        imageList: ["/img/platBabyCoil1.png","/img/platBabyCoil2.png","/img/platBabyCoil3.png","/img/platBabyCoil4.png","/img/platBabyCoil5.png","/img/platBabyCoil6.png"],
        desc: `
Kami menyediakan plat baby coil dengan harga murah dan dapat membantu untuk menekan biaya produksi. Plat baby coil terdiri dari beberapa spesifikasi sebagai berikut:

Baby Coil SPHC (plat Hitam) & SPHC-PO (plat abu-abu)
tebal: 1.8-6.0mm
Lebar: 900-1220mm
panjang: standard atau sesuai
kebutuhan

Baby Coil SPCC-SD & SPCC-UN (plat putih)
tebal: 0.4-1.8mm
Lebar: 900-1220mm
panjang: standard atau sesuai
kebutuhan
        `,
        video: "https://www.youtube.com/embed/L2jdebq2o0U?si=gdcMPhByYyyJUv9n"
    },
    cuttingSizePlate: {
        id: "cuttingSizePlate",
        name: "Cutting Size Plate",
        mainImage: "/img/cuttingSizePlateMain.png",
        imageList: ["/img/cuttingSizePlate1.png","/img/cuttingSizePlate2.png","/img/cuttingSizePlate3.png","/img/cuttingSizePlate4.png","/img/cuttingSizePlate5.png","/img/cuttingSizePlate6.png"],
        desc: "Description for Cutting Size Plate"
    },
    basePlate: {
        id: "basePlate",
        name: "Base Plate",
        desc: "Description for Base Plate",
        mainImage: "/img/basePlateMain.png",
        imageList: ["/img/basePlate1.png","/img/basePlate2.png","/img/basePlate3.png","/img/basePlate4.png","/img/basePlate5.png","/img/basePlate6.png"],
    },
    besiSikuLubang: {
        id: "besiSikuLubang",
        name: "Besi Siku Lubang",
        desc: "Description for Besi Siku Lubang",
        mainImage: "/img/besiSikuLubangMain.png",
        imageList: ["/img/besiSikuLubang1.png","/img/besiSikuLubang2.png","/img/besiSikuLubang3.png","/img/besiSikuLubang4.png","/img/besiSikuLubang5.png","/img/besiSikuLubang6.png"],
    },
    platJackBaseUHead: {
        id: "platJackBaseUHead",
        name: "Plat Jack Base & U-head",
        desc: "Description for Plat U-head",
        mainImage: "/img/platJackBaseUHeadMain.png",
        imageList: ["/img/platJackBaseUHead1.png","/img/platJackBaseUHead2.png","/img/platJackBaseUHead3.png","/img/platJackBaseUHead4.png","/img/platJackBaseUHead5.png","/img/platJackBaseUHead6.png"],
    },
    bracket: {
        id: "bracket",
        name: "Bracket",
        desc: "Description for Bracket",
        mainImage: "/img/cuttingSizePlateMain.png",
        imageList: ["/img/cuttingSizePlate1.png","/img/cuttingSizePlate2.png","/img/cuttingSizePlate3.png","/img/cuttingSizePlate4.png","/img/cuttingSizePlate5.png","/img/cuttingSizePlate6.png"],
    },
}