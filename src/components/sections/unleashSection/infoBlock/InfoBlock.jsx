import infoBlock from "./infoBlock.module.css";
import Seller from "./seller/Seller";

const sellers = [
    {
        id: 1,
        sellerName: "Alex Ca.",
        sellerTag: "@Alexy",
        sellerAvatar: "https://s3-alpha-sig.figma.com/img/a26e/e7ae/08d12134fb7cc7358d9a9e53b5df50c5?Expires=1695600000&Signature=DKA55u4qgT-9Je9KOf3yWRy3uQ~a1-QA7UD-3VUuviV~4HXYls~l6cBwgG2POOhByTaPfrlmb8h2b7UNqD5gA0XH3Hqlnb2Ugxs28sPttY7ukS5IUwlywmyYSxLE8ytXDiFMLw6kd7tuLytxqRphEJkV6YuEAUq7s8N5r~FSZll2XlMG1rFTyq9tNmIbo5vHMGdvyT97nHWknE5fiymmTAOsAq62TWP1h9Qjv6nvxBylC-YgoFwiuNKqh2wYK2qzUhQpCVYW-PHZibSBtxr7bOF90IggLW5NJEX67xEqUyk74B08JiXVsuvxwf0z9CMzSUzPr2ZxxCVM9msTS387GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id: 2,
        sellerName: "Juliya Sa.",
        sellerTag: "@JuliyaS",
        sellerAvatar: "https://s3-alpha-sig.figma.com/img/8d82/f48b/f5ec2fa57b769ff2640d8ceb5c0ee716?Expires=1695600000&Signature=hgXFaPx5SavpKEbLnMT807PkeVBANIQhSFM-PwidbXruexXij9PKyyA84Pn-guulO2N9jDebuB8fuEb9NpB1oCKuuq0wI-ieR-yeG3IpHKnQzEeJxGUa~n3wf4wK3CJpQuQQHN5B3qjhe~p0LFQ4SgfdaKEyssAJqKhVMDKdVRSs98eVraTAH89FWLOml8D4pCxttwDubp~jKvWm4NoveqIIbF7cMlcXfyJldudS7y6AfWyrX7MC4VJFRRLIt7cwkddQLdBvAlpj8H2H7VvKvnAJZIjPu3oDxVBCa3j3iY6bpIO8chYiab62LFmryQeI-9j1HP-HbJl4LC9N3k1dZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
        id: 3,
        sellerName: "Juliya Sa.",
        sellerTag: "@JuliyaS",
        sellerAvatar: "https://s3-alpha-sig.figma.com/img/a041/9dd3/f6dc3d60df2688f2062ac3a75bc47064?Expires=1695600000&Signature=n8N8auqaI1OPlWR1kLQXCB~twPRVc0-VBJQQTpKYjwHK3oqbH0eVhthwLlfm6GMxnOgp3ixFG8rcPMyWfdslwFtBiJ6sHQlqQ~w0xNu8lsHDImTNL3UluWtnitKk374fWUrVpWCLUqvb4q56ScN02UW~W5~XRExci09j0h1jLiKPdHiCwWhdkD05EJ2d3ZGSrpC1kIoCg3lwb~WS-xyAvU-BvTti6zrFqGp3JnSFdmL81Vqcr7oitNLrOrAxKaoq8uKlA3FJdvT0LZkY9T1GNx4U8YkTRK5TmPHZwBkYHpzjQU3zfGbp~pORHMgHY5XjF7CcV-j8H9Slq1KMe-INbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    {
        id: 4,
        sellerName: "Trevor Pu.",
        sellerTag: "@JuliyaS",
        sellerAvatar: "https://s3-alpha-sig.figma.com/img/9a2f/2607/0b55b2d9f877d5785b50035d2b49811a?Expires=1695600000&Signature=qCV7iPm1e8WerF~GSQ4NSMKf1tXf4~HyhjufPH12tn9~UyY0nBcx~wyjldSweM-tkRStVC5J~DkOpf84qNXSgkeRr2Bth7AD33etyhCupVMBVEG-3gHi30o1TaeHj-NIeJGlsXmQor3l90ibIWwW3ABlPctR9eb2uCzrQiVbb4U79kgdqvVwq6-unfsgdnde6G1S7tPcZ19iEPj3jsg-ESkfFz37IN1x5gIhooSQrdaKhhdd4NwWKFAOk7X83nHq6Kxvaf5ePCzVzUBOIBEHPbOOISV-qiKogjK55VuI0gURBkFf7kKyzIRFzbWeOFDPNqe6n-1aN1pNcOFRJ8xGVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    {
        id: 5,
        sellerName: "Clement Iv.",
        sellerTag: "@Puppey",
        sellerAvatar: "https://virtus-img.cdnvideo.ru/images/details-photo/plain/20/203189079679626a9f5acaeb399d8a61.png@jpg"},
    {
        id: 6,
        sellerName: "Juliya Sa.",
        sellerTag: "@JuliyaS",
        sellerAvatar: "https://s3-alpha-sig.figma.com/img/eeb4/b1bb/e9ba34c40ffad45676e58dd511db3910?Expires=1695600000&Signature=oUYBPal4XYz28ej3MAUMydxzwWU3hJWKJvOSm2KDEtW2MuJ1qOdsGT3iIrloTqKJDvsbZzPsdwsMOU1UK~-3-v33wOSw06fNoPQSYoQcVmjwecwXsNLNz5hzIWDdzAM-HYKlMv0PV6sD~KomE9GZ7NCSiKg4T2JDHdyRVQPA-aVFSR7q4tDEayW1wY2Ut8vj2Z1gVTEcF7rD-FQMGmrIa44p1bsWuGSpXOZyDkIwcPU3W8xqA-2~Oy19ba-IhLq9FZYlyrCYC4CUFu7i~50xV1R~8I1bpV2FTqB91UxfrIG7y1y3PJud3KuQTefB2pt2Wq93Gi2uZNJNXSy72YsxMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
]

const InfoBlock = () => {
    return (
        <div className={infoBlock.container}>
            <div className={infoBlock.blockTitle}>Best Sellers</div>
            {
                sellers.map(seller => <Seller sellerData={seller} key={seller.id}/>)
            }
        </div>
    )
}

export default InfoBlock;