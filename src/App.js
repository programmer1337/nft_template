import './App.css';
import HeaderSection from "./components/sections/headerSection/HeaderSection";
import UnleashSection from "./components/sections/unleashSection/UnleashSection";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import SliderSection from "./components/sections/sliderSection/SliderSection";
import CollectionSection from "./components/sections/collectionSection/CollectionSection";

const cardsData = [
    {
        cardId: 1,
        cardTitle: "Uranus",
        cardImage: "https://s3-alpha-sig.figma.com/img/9d7a/06f8/6030c6cb0e25f5fc7861fb298e0fd44a?Expires=1696204800&Signature=aRug8k0uenHnhlv1P2YrFKQSEdgXMwfWoMfsg8gC1SuupRdgnvdkeu9vL87Pz9~0PRSd9DUzXEZVN4qVoa97xxNx7bfHMbLnqjDTPIcpRJTVAal5BIiJCKiGFFMetxYaSK~0EPu9BjpyEffqsp42pfH3-yTJWQkdLOSkGAMD4pSo72op8jM1xeBEMxyOLUZkp0W4V0rtsr4gSlld2sAeb9OwLTa8QrTHeyrKeWSsNSH~w5O3uwj-0fkHSGPpPOH84h9pil-R3pZSEH8knBFnIbiyj3uychJxrh8~XMv2YcO7Ja5wB37DcUp3PykhAgnZq9tEpMc1KmYYWFpFIePxiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 13 * 60 * 60 * 1000),
        currentBid: "1.55",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
    {
        cardId: 2,
        cardTitle: "Saturn",
        cardImage: "https://s3-alpha-sig.figma.com/img/b82f/55d0/61c522d86567e3c5ea1f39ddf68ae4bc?Expires=1696204800&Signature=F12oKU4PMiJgSuDVRZXi7bkzrHbvlw5Sv7XLqbEZXIwrwUjJJbZhqenxuo1XLEkove971WPSRhD1PeXg7P49Gncr~0qTdsGCmY7bS5ec1HKAsDEyZb4cvx1lYcS22YCQfSnfFPhR-uEaXZalfMGFG88BP~JKTMF6u51X2pLHqEu30Bx~8plcxL4uebYj7GAaO2Szy5kf0OyP1tAs8jmLfzCC63jUUMbFbWsfss~JJEughMzLrUELVPq69xI1EPupXCTSGphCCYWQFLlhnZSphwsSqC1K3iPg4UttypvKcg-EsPuSswSQfxMYpg4iFCK2eYiucWjLOgomo-0p-BdCgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 15 * 60 * 60 * 1000 + 14 * 60 * 1000),
        currentBid: "1.45",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
    {
        cardId: 3,
        cardTitle: "Mars",
        cardImage: "https://s3-alpha-sig.figma.com/img/9a2f/2607/0b55b2d9f877d5785b50035d2b49811a?Expires=1695600000&Signature=qCV7iPm1e8WerF~GSQ4NSMKf1tXf4~HyhjufPH12tn9~UyY0nBcx~wyjldSweM-tkRStVC5J~DkOpf84qNXSgkeRr2Bth7AD33etyhCupVMBVEG-3gHi30o1TaeHj-NIeJGlsXmQor3l90ibIWwW3ABlPctR9eb2uCzrQiVbb4U79kgdqvVwq6-unfsgdnde6G1S7tPcZ19iEPj3jsg-ESkfFz37IN1x5gIhooSQrdaKhhdd4NwWKFAOk7X83nHq6Kxvaf5ePCzVzUBOIBEHPbOOISV-qiKogjK55VuI0gURBkFf7kKyzIRFzbWeOFDPNqe6n-1aN1pNcOFRJ8xGVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 13 * 60 * 60 * 1000 + 4 * 60 * 1000),
        currentBid: "1.25",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
    {
        cardId: 4,
        cardTitle: "Smesharik",
        cardImage: "https://s3-alpha-sig.figma.com/img/31dc/3d6d/c84e10304d9f8d206c80fbe3fb51c430?Expires=1695600000&Signature=WAHaEeROyZEJr-H1Xjd4BmtdVHZ-HHMhuKvMPY~P0jkP2VhrEqqNKK8f-5mVoMWl0FDU6YoHXKergb8pd-XD15xmMBOuyiotF0pagG77JHA6z2iW3aDhOwje-0aaoY3-px7uudtMUnT7b3XlvvgYeDzCpGLfo54y1pT10f5xmsLCYaz5Z8acnpUqYhrsQPa88YRx4yRNPRO7NLp0uECgkYvJmY4FwxwOt2SwwFAIqF6u9YSJSTxwSY6CPuZ13M-meq1sihp~OcW3UJ61IyE2X-FCfiFc4EAWOr5e5mJ8TLseLDVwx0fwMz33Z4WLkS2ZPWFOsSMso9JJtzO-NJ5DNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 17 * 60 * 60 * 1000 + 54 * 60 * 1000),
        currentBid: "1.6",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
    {
        cardId: 5,
        cardTitle: "Venus",
        cardImage: "https://s3-alpha-sig.figma.com/img/dacb/64a0/16a24a227683ad0f923b4b44169d9195?Expires=1695600000&Signature=LaTzNbcD6aXR7Nh5WK5Fgf8L9j8Y2jyIThH6dgYxW0y5UyiyWATiNjCkq9c51gWQyrL356cPRXF1AV7d1SicVO2XaX9mfIM-3jfGGfiltrgcmKFhQPQOS~il3gNpI1O5hP4uRbreZGmIl3SbSWI9ko0d9NbbAJ~UGZW2mbsdYf1yKP2T-ExtFM2hjdGTqWQXcrgjYKs99SjBU5l6zSiutL-rScABFJ2vbZnWTpq3tyiORXeE5XZ65UsdD4uNjqj3lOqCRIM~kXw~KzZPiu2S2Jf4cDH8BYtpbjuAxCWRjOApMyLiaaV62c8yKGg8HOz0EncqQkOCYhi~xmfxruiFZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 3 * 60 * 60 * 1000 + 44 * 60 * 1000),
        currentBid: "1.4",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
    {
        cardId: 6,
        cardTitle: "Deidra",
        cardImage: "https://img.freepik.com/premium-photo/universe-scene-with-planets-stars-galaxies-outer-space-showing-beauty-space-exploration-art-wallpaper-image-is-ai-generated_156843-1624.jpg",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 2 * 60 * 60 * 1000 + 40 * 60 * 1000),
        currentBid: "1.95",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
    {
        cardId: 7,
        cardTitle: "Puppey",
        cardImage: "https://virtus-img.cdnvideo.ru/images/details-photo/plain/20/203189079679626a9f5acaeb399d8a61.png@jpg",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 23 * 60 * 60 * 1000 + 23 * 60 * 1000),
        currentBid: "2.55",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
    {
        cardId: 8,
        cardTitle: "Paulis",
        cardImage: "https://images.nightcafe.studio/jobs/TKhhJVYzfStDsTRvCpKo/TKhhJVYzfStDsTRvCpKo--15--xxrgg_6x.jpg?tr=w-1600,c-at_max",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 7 * 60 * 60 * 1000 + 13 * 60 * 1000),
        currentBid: "0.55",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    }, {
        cardId: 9,
        cardTitle: "XD",
        cardImage: "https://s3-alpha-sig.figma.com/img/9d7a/06f8/6030c6cb0e25f5fc7861fb298e0fd44a?Expires=1696204800&Signature=aRug8k0uenHnhlv1P2YrFKQSEdgXMwfWoMfsg8gC1SuupRdgnvdkeu9vL87Pz9~0PRSd9DUzXEZVN4qVoa97xxNx7bfHMbLnqjDTPIcpRJTVAal5BIiJCKiGFFMetxYaSK~0EPu9BjpyEffqsp42pfH3-yTJWQkdLOSkGAMD4pSo72op8jM1xeBEMxyOLUZkp0W4V0rtsr4gSlld2sAeb9OwLTa8QrTHeyrKeWSsNSH~w5O3uwj-0fkHSGPpPOH84h9pil-R3pZSEH8knBFnIbiyj3uychJxrh8~XMv2YcO7Ja5wB37DcUp3PykhAgnZq9tEpMc1KmYYWFpFIePxiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        cardBlurImage: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-4px57BlFp6.jpg",
        cardBidUntil: new Date(new Date().getTime() + 18 * 60 * 60 * 1000 + 54 * 60 * 1000),
        currentBid: "111.55",
        currencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
        cardCurrency: "eth"
    },
]
const collection = [
    {
        collectionId: 1,
        userAvatar: "https://s3-alpha-sig.figma.com/img/a26e/e7ae/08d12134fb7cc7358d9a9e53b5df50c5?Expires=1695600000&Signature=DKA55u4qgT-9Je9KOf3yWRy3uQ~a1-QA7UD-3VUuviV~4HXYls~l6cBwgG2POOhByTaPfrlmb8h2b7UNqD5gA0XH3Hqlnb2Ugxs28sPttY7ukS5IUwlywmyYSxLE8ytXDiFMLw6kd7tuLytxqRphEJkV6YuEAUq7s8N5r~FSZll2XlMG1rFTyq9tNmIbo5vHMGdvyT97nHWknE5fiymmTAOsAq62TWP1h9Qjv6nvxBylC-YgoFwiuNKqh2wYK2qzUhQpCVYW-PHZibSBtxr7bOF90IggLW5NJEX67xEqUyk74B08JiXVsuvxwf0z9CMzSUzPr2ZxxCVM9msTS387GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        collectionName: "Alex Ca.",
        collectionCreator: "Alex",
        collectionVolume: "8,456",
        collectionPriceUp: "27.78",
        collectionFloorPrice: "3,5",
        collectionOwnersCount: "2200",
        collectionItemsCount: "500",
        collectionCurrencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
    },
    {
        collectionId: 2,
        userAvatar: "https://s3-alpha-sig.figma.com/img/8d82/f48b/f5ec2fa57b769ff2640d8ceb5c0ee716?Expires=1695600000&Signature=hgXFaPx5SavpKEbLnMT807PkeVBANIQhSFM-PwidbXruexXij9PKyyA84Pn-guulO2N9jDebuB8fuEb9NpB1oCKuuq0wI-ieR-yeG3IpHKnQzEeJxGUa~n3wf4wK3CJpQuQQHN5B3qjhe~p0LFQ4SgfdaKEyssAJqKhVMDKdVRSs98eVraTAH89FWLOml8D4pCxttwDubp~jKvWm4NoveqIIbF7cMlcXfyJldudS7y6AfWyrX7MC4VJFRRLIt7cwkddQLdBvAlpj8H2H7VvKvnAJZIjPu3oDxVBCa3j3iY6bpIO8chYiab62LFmryQeI-9j1HP-HbJl4LC9N3k1dZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        collectionName: "Alex Ca.",
        collectionCreator: "Alex",
        collectionVolume: "4,780",
        collectionPriceUp: "17.36",
        collectionFloorPrice: "7,9",
        collectionOwnersCount: "3400",
        collectionItemsCount: "900",
        collectionCurrencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
    },
    {
        collectionId: 3,
        userAvatar: "https://s3-alpha-sig.figma.com/img/a26e/e7ae/08d12134fb7cc7358d9a9e53b5df50c5?Expires=1695600000&Signature=DKA55u4qgT-9Je9KOf3yWRy3uQ~a1-QA7UD-3VUuviV~4HXYls~l6cBwgG2POOhByTaPfrlmb8h2b7UNqD5gA0XH3Hqlnb2Ugxs28sPttY7ukS5IUwlywmyYSxLE8ytXDiFMLw6kd7tuLytxqRphEJkV6YuEAUq7s8N5r~FSZll2XlMG1rFTyq9tNmIbo5vHMGdvyT97nHWknE5fiymmTAOsAq62TWP1h9Qjv6nvxBylC-YgoFwiuNKqh2wYK2qzUhQpCVYW-PHZibSBtxr7bOF90IggLW5NJEX67xEqUyk74B08JiXVsuvxwf0z9CMzSUzPr2ZxxCVM9msTS387GQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        collectionName: "Alex Ca.",
        collectionCreator: "Alex",
        collectionVolume: "3,486",
        collectionPriceUp: "5.6",
        collectionFloorPrice: "3,5",
        collectionOwnersCount: "2200",
        collectionItemsCount: "500",
        collectionCurrencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
    },
    {
        collectionId: 4,
        userAvatar: "https://s3-alpha-sig.figma.com/img/8d82/f48b/f5ec2fa57b769ff2640d8ceb5c0ee716?Expires=1695600000&Signature=hgXFaPx5SavpKEbLnMT807PkeVBANIQhSFM-PwidbXruexXij9PKyyA84Pn-guulO2N9jDebuB8fuEb9NpB1oCKuuq0wI-ieR-yeG3IpHKnQzEeJxGUa~n3wf4wK3CJpQuQQHN5B3qjhe~p0LFQ4SgfdaKEyssAJqKhVMDKdVRSs98eVraTAH89FWLOml8D4pCxttwDubp~jKvWm4NoveqIIbF7cMlcXfyJldudS7y6AfWyrX7MC4VJFRRLIt7cwkddQLdBvAlpj8H2H7VvKvnAJZIjPu3oDxVBCa3j3iY6bpIO8chYiab62LFmryQeI-9j1HP-HbJl4LC9N3k1dZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        collectionName: "Alex Ca.",
        collectionCreator: "Alex",
        collectionVolume: "6,556",
        collectionPriceUp: "35.2",
        collectionFloorPrice: "7,9",
        collectionOwnersCount: "3400",
        collectionItemsCount: "900",
        collectionCurrencyImg: "https://static-00.iconduck.com/assets.00/ethereum-icon-317x512-0vz32hj4.png",
    }
]

function App() {
    return (
        <div className="App">
            <Header/>
            <HeaderSection/>
            <SliderSection cardsData={cardsData}/>
            <CollectionSection collection={collection}/>
            <UnleashSection/>
            <Banner/>
        </div>
    );
}

export default App;
