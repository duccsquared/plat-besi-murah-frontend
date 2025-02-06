export const useProductData = () => {
    const productData = useState("productData", () => useCookie("productData"));
    if(productData.value==null) {
        productData.value = productDetails
    }
    return {productData}
}

const productDetails = {
    platBabyCoil: {
        id: "platBabyCoil",
        name: "Plat Baby Coil",
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
        desc: "Description for Cutting Size Plate"
    },
    basePlate: {
        id: "basePlate",
        name: "Base Plate",
        desc: "Description for Base Plate"
    },
    besiSikuLubang: {
        id: "besiSikuLubang",
        name: "Besi Siku Lubang",
        desc: "Description for Besi Siku Lubang"
    },
    platJackBaseUHead: {
        id: "platJackBaseUHead",
        name: "Plat Jack Base & U-head",
        desc: "Description for Plat U-head"
    },
    bracket: {
        id: "bracket",
        name: "Bracket",
        desc: "Description for Bracket"
    },
}