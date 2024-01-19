import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCards,EffectCoverflow, Pagination } from 'swiper/modules';

import './Moment.css'

function Moment() {
    const spanStyles={
        '--i-1': { '--i': 1 },
        '--i-2': { '--i': 2 },
        '--i-3': { '--i': 3 },
        '--i-4': { '--i': 4 },
        '--i-5': { '--i': 5 },
        '--i-6': { '--i': 6 },
        '--i-7': { '--i': 7 },
        '--i-8': { '--i': 8 },

    }
    const slideImage = [
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442928399261746/WhatsApp_Image_2024-01-15_at_20.02.01.jpeg?ex=65b7a54e&is=65a5304e&hm=0651e7dfef3a2e8ecdc67b465e8e0768c7aeef2d93a547b826f33ed4fccee210&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441968767676467/WhatsApp_Image_2024-01-15_at_20.01.33.jpeg?ex=65b7a46a&is=65a52f6a&hm=160a97bdd69fd844f4fd48d3ad36b1dc04b3b0fca390f513c770ad5e1fab7fb9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441257757646879/Salinan_WhatsApp_Image_2024-01-15_at_20.02.07.jpeg?ex=65b7a3c0&is=65a52ec0&hm=60d857aefaa52fb979b743e06c0bce6722de88cddf56bcd1750da98b003bcf5b&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441259242430594/Salinan_WhatsApp_Image_2024-01-15_at_20.02.09.jpeg?ex=65b7a3c1&is=65a52ec1&hm=38786a159a2579cc05782a93f5c92a14aa3771b6a8798726e54bcd1e5bd9d5a6&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441259682836480/WhatsApp_Image_2024-01-15_at_20.01.12.jpeg?ex=65b7a3c1&is=65a52ec1&hm=d9ec8249cdab4cb681598b8d7752e77254579b16ef55ff35c85cfb61f0edc83b&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441968767676467/WhatsApp_Image_2024-01-15_at_20.01.33.jpeg?ex=65b7a46a&is=65a52f6a&hm=160a97bdd69fd844f4fd48d3ad36b1dc04b3b0fca390f513c770ad5e1fab7fb9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442927157743646/WhatsApp_Image_2024-01-15_at_20.01.57.jpeg?ex=65b7a54e&is=65a5304e&hm=276e3b82c147730e00adca957bcd2056e5d1358d559238e4056b963c14be1b8b&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442926180474961/WhatsApp_Image_2024-01-15_at_20.01.55.jpeg?ex=65b7a54e&is=65a5304e&hm=fa5a97eeaead0ab68113e613fcd2d36e55927d07dba238f8896e66087dbb3389&"
    ]

    const standImage = [
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441255157174282/Salinan_WhatsApp_Image_2024-01-15_at_20.01.52.jpeg?ex=65b7a3c0&is=65a52ec0&hm=3f39856988573e36170d133f9467351bf18ac5dac5dc251670c660bfa7d72bd2&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441254389624873/Salinan_WhatsApp_Image_2024-01-15_at_20.01.31.jpeg?ex=65b7a3bf&is=65a52ebf&hm=f0d37ea4568ed986e22d96dba387b7ffb2af543bb480bc371f6896c8274f52cc&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441255526277120/Salinan_WhatsApp_Image_2024-01-15_at_20.01.56.jpeg?ex=65b7a3c0&is=65a52ec0&hm=aa7808f35802bd5d69ae56155a39b0c935689fff357824dd93ecb1d4813110f7&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441256562266112/Salinan_WhatsApp_Image_2024-01-15_at_20.02.07_2.jpeg?ex=65b7a3c0&is=65a52ec0&hm=4d9b24fe1f7f78bf4ff678edcf9565f0f0503e1f91b39cd5a21c19662578c524&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441257757646879/Salinan_WhatsApp_Image_2024-01-15_at_20.02.07.jpeg?ex=65b7a3c0&is=65a52ec0&hm=60d857aefaa52fb979b743e06c0bce6722de88cddf56bcd1750da98b003bcf5b&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441258504228904/Salinan_WhatsApp_Image_2024-01-15_at_20.02.08.jpeg?ex=65b7a3c0&is=65a52ec0&hm=621aa80b193df4d8f54f329825a232d7df66ec412ffc72a6a4277d6e81a22e31&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441259242430594/Salinan_WhatsApp_Image_2024-01-15_at_20.02.09.jpeg?ex=65b7a3c1&is=65a52ec1&hm=38786a159a2579cc05782a93f5c92a14aa3771b6a8798726e54bcd1e5bd9d5a6&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441259682836480/WhatsApp_Image_2024-01-15_at_20.01.12.jpeg?ex=65b7a3c1&is=65a52ec1&hm=d9ec8249cdab4cb681598b8d7752e77254579b16ef55ff35c85cfb61f0edc83b&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441260140007434/WhatsApp_Image_2024-01-15_at_20.01.13.jpeg?ex=65b7a3c1&is=65a52ec1&hm=b5ce6ac36e80dacd601ee5f86b6cf41b2fbaa527d81b59a21c3dc39f567692ca&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441260446195772/WhatsApp_Image_2024-01-15_at_20.01.21.jpeg?ex=65b7a3c1&is=65a52ec1&hm=3bc67badd0a190660df48417154a87235013d6394f4c68ee4318a7027cf57062&",
     
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441963281531053/WhatsApp_Image_2024-01-15_at_20.01.22.jpeg?ex=65b7a468&is=65a52f68&hm=b9dbefeb78afaf339f1a3fe649840bea8dd3286c7e4877eb8b4406b51bbda697&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441964099407934/WhatsApp_Image_2024-01-15_at_20.01.23.jpeg?ex=65b7a469&is=65a52f69&hm=e0f0aa0906abf6174fc1ac8b25280f9925b03e05f4b76703d3e277e970a656be&",
     "https://cdn.discordapp.com/attachments/1133382170321371238/1196441965064110120/WhatsApp_Image_2024-01-15_at_20.01.25.jpeg?ex=65b7a469&is=65a52f69&hm=6d1d5bf1442a9e6e96dcc2c461ef9b9a0cb0f11073cad5e533c71d8831b6e3f3&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441965722603570/WhatsApp_Image_2024-01-15_at_20.01.26.jpeg?ex=65b7a469&is=65a52f69&hm=74b05205d19b6122c0949a47a1ca831b6920671deeafb3255b3253e150f815e9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441966649552936/WhatsApp_Image_2024-01-15_at_20.01.29.jpeg?ex=65b7a469&is=65a52f69&hm=2998f77047822ec3d5037c58c838afdf61bfbaa1c18a7c4f600d6296635dd590&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441967358394368/WhatsApp_Image_2024-01-15_at_20.01.31.jpeg?ex=65b7a469&is=65a52f69&hm=b9f0d555c351d4ce012cee90d0d2e9507ae53459da19b9d28ae33759869c7b7d&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441968025276486/WhatsApp_Image_2024-01-15_at_20.01.32.jpeg?ex=65b7a469&is=65a52f69&hm=58c1d5026c651bffc9a78bc63804027740fe25d9165af175dbc468b11cd94420&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441968767676467/WhatsApp_Image_2024-01-15_at_20.01.33.jpeg?ex=65b7a46a&is=65a52f6a&hm=160a97bdd69fd844f4fd48d3ad36b1dc04b3b0fca390f513c770ad5e1fab7fb9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441969514266735/WhatsApp_Image_2024-01-15_at_20.01.40.jpeg?ex=65b7a46a&is=65a52f6a&hm=e5dddb5281b69753e5df71bcb6544042bba9fcd9f8d9ae34b76e8bb5c3d007a1&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196441970353115246/WhatsApp_Image_2024-01-15_at_20.01.42.jpeg?ex=65b7a46a&is=65a52f6a&hm=e3b1d65815ada6227b5dd7bc35a011708143e31ad7b9951cab7920d8ccc1743e&",

      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442925228359740/WhatsApp_Image_2024-01-15_at_20.01.44.jpeg?ex=65b7a54e&is=65a5304e&hm=dbd9ecacddd0e0d421d894104f9b709c06de26aaa8b228cb9225b787d5ca8b70&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442925559718059/WhatsApp_Image_2024-01-15_at_20.01.52.jpeg?ex=65b7a54e&is=65a5304e&hm=3119cec91a394a614618cbd0d5d88e3eee16b0a153693b6417ffbc7a75add94d&",
      // "https://cdn.discordapp.com/attachments/1133382170321371238/1196442925865898044/WhatsApp_Image_2024-01-15_at_20.01.53.jpeg?ex=65b7a54e&is=65a5304e&hm=24134582040ab8a53b63ba1f2220b351e4d6cc00d45559148ce6f6621e3b96d1&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442926180474961/WhatsApp_Image_2024-01-15_at_20.01.55.jpeg?ex=65b7a54e&is=65a5304e&hm=fa5a97eeaead0ab68113e613fcd2d36e55927d07dba238f8896e66087dbb3389&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442927157743646/WhatsApp_Image_2024-01-15_at_20.01.57.jpeg?ex=65b7a54e&is=65a5304e&hm=276e3b82c147730e00adca957bcd2056e5d1358d559238e4056b963c14be1b8b&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442927589761054/WhatsApp_Image_2024-01-15_at_20.01.58.jpeg?ex=65b7a54e&is=65a5304e&hm=f6a9240d803c1ac05142cb2a21612ea40a1f45a506c024cb04e936fc83474a9c&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442927841415178/WhatsApp_Image_2024-01-15_at_20.01.59.jpeg?ex=65b7a54e&is=65a5304e&hm=6466c6a3e6168efe8391d519e50445d3e6926f4fea2c57861d3ece8c61bfaea3&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442928122429511/WhatsApp_Image_2024-01-15_at_20.02.00.jpeg?ex=65b7a54e&is=65a5304e&hm=7ec6ebb4a225a7c53bae4c9d3d8d019b13081db0329aed2eb176da2437000d2a&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442928399261746/WhatsApp_Image_2024-01-15_at_20.02.01.jpeg?ex=65b7a54e&is=65a5304e&hm=0651e7dfef3a2e8ecdc67b465e8e0768c7aeef2d93a547b826f33ed4fccee210&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196442928629944331/WhatsApp_Image_2024-01-15_at_20.02.03.jpeg?ex=65b7a54f&is=65a5304f&hm=8c67c8fa3e972b257097915bd1814a80fd2ee1bdb04749934c16ed2602e6822a&",

      "https://cdn.discordapp.com/attachments/1133382170321371238/1196443367052165181/WhatsApp_Image_2024-01-15_at_20.02.04.jpeg?ex=65b7a5b7&is=65a530b7&hm=90c1a46c993ffdd6ecbe7ba091b918f640ad945004f543634d44477796d7e5f9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196443367794540584/WhatsApp_Image_2024-01-15_at_20.02.05.jpeg?ex=65b7a5b7&is=65a530b7&hm=d14cf4e05c6e51b71fe445376663d0b9ea3d58f067fa8da9f772ca13b9458605&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196443368193007657/WhatsApp_Image_2024-01-15_at_20.02.07.jpeg?ex=65b7a5b7&is=65a530b7&hm=dce086b67cdad4849960f94c9175964bc4bbef9f669d860c75be06efb1687ec9&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196443368931213403/WhatsApp_Image_2024-01-15_at_20.02.08.jpeg?ex=65b7a5b7&is=65a530b7&hm=94810e5da71db47a264b3b2de264af3b6530663b8c55b771fcfb64e08360d4df&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196474808666423487/WhatsApp_Image_2024-01-15_at_21.45.22.jpeg?ex=65b7c2ff&is=65a54dff&hm=7d3aff231a5958e296b847f139f073b9e560aa258e1f6a9928c4ebd4a820927f&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196474809274617907/WhatsApp_Image_2024-01-15_at_21.46.50.jpeg?ex=65b7c2ff&is=65a54dff&hm=92075fb6e4bb944c09fac3dba1ddfc72ffe1a0d506c8fcef1d69b1d6cbce9e77&",

      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837284842672128/WhatsApp_Image_2024-01-19_at_13.35.54_1.jpeg?ex=65bcb7e7&is=65aa42e7&hm=9acddcb8ee567dc2326a63c700cac5ee76037f5ede741c80fa9b23a2d86d03b4&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837285555712000/WhatsApp_Image_2024-01-19_at_13.35.55_1.jpeg?ex=65bcb7e7&is=65aa42e7&hm=43c00abcf82dd1cc653e0d478008a0ffe5c68ce496940fd019473b1d2a4e2c76&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837286348431370/WhatsApp_Image_2024-01-19_at_13.35.55.jpeg?ex=65bcb7e7&is=65aa42e7&hm=87fe25096db941a3180da9e589023d75e89d283e2f298a899da16f41668fea96&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837287145345124/WhatsApp_Image_2024-01-19_at_13.35.56.jpeg?ex=65bcb7e7&is=65aa42e7&hm=165f208d06bb4e26ac5613eaaeb5a5c4725d7556c28838778d700fd6d330c8cf&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837288156176434/WhatsApp_Image_2024-01-19_at_13.38.38.jpeg?ex=65bcb7e8&is=65aa42e8&hm=fce509b46270d2f78a62491f8c74ec5367f929e335209a4656d8e76a69564ecd&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837289217339523/WhatsApp_Image_2024-01-19_at_13.38.44.jpeg?ex=65bcb7e8&is=65aa42e8&hm=911db328ec6630181401047ed13ee449d9dae933a39645b791a115261ffaef09&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837290064584704/WhatsApp_Image_2024-01-19_at_13.38.46.jpeg?ex=65bcb7e8&is=65aa42e8&hm=ae4fed52e194cff9973aeb62802a5c5889143259f481eb0e726015ab5599d0a2&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837291155107890/WhatsApp_Image_2024-01-19_at_13.38.47_1.jpeg?ex=65bcb7e8&is=65aa42e8&hm=a732d018c6d82c4466932f0a1869f829636fa870f687c7ee5a2b1f582c719155&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837292111405076/WhatsApp_Image_2024-01-19_at_13.38.47.jpeg?ex=65bcb7e9&is=65aa42e9&hm=9fd3996946045710cfc53c16a126512fa93e45ae65ca381e20bcc2439f3e3744&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837292975427594/WhatsApp_Image_2024-01-19_at_13.38.48_1.jpeg?ex=65bcb7e9&is=65aa42e9&hm=45fcc26173c33d7df46170fd8448663b22221346083dcd3c37f8d641e7b4558a&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837345051906109/WhatsApp_Image_2024-01-19_at_13.38.45.jpeg?ex=65bcb7f5&is=65aa42f5&hm=b4b3d8ba01fb2d72dc51972763e887cadca3382d606d898d7a7bf263bd100bc3&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837345861414942/WhatsApp_Image_2024-01-19_at_13.38.46_1.jpeg?ex=65bcb7f5&is=65aa42f5&hm=817d29bb4ee32bd3fd2fe994dd466e1d2370130a257748ba47f3bd2dd383d3c2&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837346561855508/WhatsApp_Image_2024-01-19_at_13.38.48.jpeg?ex=65bcb7f6&is=65aa42f6&hm=c73735d9998acb74330392b47c3cac8f64e421ffd30993f7129b3dc6703f2cfe&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837347081965618/WhatsApp_Image_2024-01-19_at_13.38.49.jpeg?ex=65bcb7f6&is=65aa42f6&hm=9477ba622d31f52552ff968a8ecdb2fcc30dd88fc966a10265e0973d31153b84&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197837347467833354/WhatsApp_Image_2024-01-19_at_13.38.50.jpeg?ex=65bcb7f6&is=65aa42f6&hm=6f4d5c4d8b90ee9cc3e6dfe84d60d2b05889db434f8de6c47fb8d41075c14ad0&"
    ]

    const horizontal = [
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440101610328064/Salinan_WhatsApp_Image_2024-01-15_at_20.01.22.jpeg?ex=65b7a2ad&is=65a52dad&hm=3228ba117e782dca29187d1aaca0ade153722a981cf7e124d34b66241df93c7d&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440101933301771/Salinan_WhatsApp_Image_2024-01-15_at_20.01.55.jpeg?ex=65b7a2ad&is=65a52dad&hm=181c5f9dff02aaf50a63551d6b3f4ccf9e37d331f551bfb4084217bebed88d23&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440102243663952/WhatsApp_Image_2024-01-15_at_20.00.42.jpeg?ex=65b7a2ad&is=65a52dad&hm=da1f1b294f7fd904a9278b0f7f18fa6384674a76b0fc66e4d15b8a2f8339a546&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440103040585818/WhatsApp_Image_2024-01-15_at_20.01.35.jpeg?ex=65b7a2ad&is=65a52dad&hm=2b72a6f6393f38452376e07c1b83aeacab701d1b6179298d67556526cdd72a91&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440103933984818/WhatsApp_Image_2024-01-15_at_20.01.47.jpeg?ex=65b7a2ad&is=65a52dad&hm=876947ac33f2cc4eef7c710697ef433d6b610039a78df58b044964b4dbec4702&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440104793800775/WhatsApp_Image_2024-01-15_at_20.01.56.jpeg?ex=65b7a2ad&is=65a52dad&hm=4fa1d23f44bcdf4fab8f9ff1f8b90558ae90ca3ac5210f2adf9cef8786b393f2&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440105372618832/WhatsApp_Image_2024-01-15_at_20.02.02.jpeg?ex=65b7a2ad&is=65a52dad&hm=21777f857bc92e9f49a9586fd9d9afc17246c35cf97f6ba4de0c89e332a5f816&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440595783225426/WhatsApp_Image_2024-01-15_at_20.02.09.jpeg?ex=65b7a322&is=65a52e22&hm=27afbae689333a737e493eef621f6561baeaf77ac35807d49650b55a5f75e8d3&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196440596601110528/WhatsApp_Image_2024-01-15_at_20.02.10.jpeg?ex=65b7a323&is=65a52e23&hm=12ad6115429c4262bd218abe88b06e9717bb0d57ec17ed95199313fcbf47d236&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196474807613653073/WhatsApp_Image_2024-01-15_at_21.41.31.jpeg?ex=65b7c2ff&is=65a54dff&hm=9766f5af478ad579f6dc6d2a50f18503ccc8edfc0d11e61499ff8dbd24f73dff&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1196474807957606552/WhatsApp_Image_2024-01-15_at_21.44.03.jpeg?ex=65b7c2ff&is=65a54dff&hm=c89e4abe03489e411340b98a6f282fd1710123653a7d683c8aa297c9dd94aa70&",  
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197838028190785596/WhatsApp_Image_2024-01-19_at_13.35.54.jpeg?ex=65bcb898&is=65aa4398&hm=3cef884472fd7a260df357cd32dda9d9a6bf17aa3e3690243efa9c2d2a6dc13a&",
      "https://cdn.discordapp.com/attachments/1133382170321371238/1197838028538920991/WhatsApp_Image_2024-01-19_at_13.38.50_1.jpeg?ex=65bcb898&is=65aa4398&hm=49ea4ae90866c0d01e8f775b92a5b3f6f006a5d15b17a011b8d2306937a98a8e&"
    
    ]
  return (
    <div className='moment-container'>
        <div className='moment-title-container'>
            <p className='moment-title-text'>Moment</p>
        </div>
        {/* <div> */}
            <div className='slider-container' >
              <div class="slider">
                {slideImage.map((item, index) => {
                  return(
                    <span style={spanStyles[`--i-${index+1}`]} key={item}><img src={item}  alt='img1'/></span>
                  )
                })}
              </div>
            </div>
            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {standImage.map((item, index) => {
          return(
            <SwiperSlide key={item} ><img src={item} alt='img1' style={{width:'100%', background:'transparent'}}/></SwiperSlide>
          )
        })}
 
      </Swiper>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwipers"
      >
        {horizontal.map((item, index) => {
          return(
            <SwiperSlide className='swiper-slide2' key={item}>
              <img src={item} alt='items'/>
            </SwiperSlide>
          )
        })} 
      </Swiper>
        {/* </div> */}
    </div>
  )
}

export default Moment