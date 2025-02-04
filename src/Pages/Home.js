import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from './Footer';
import border from './img/border.png';
import bgimg from './img/cullinan-rough-diamond.gif';
import icon4 from './img/customer-care.png';
import icon2 from './img/delivery-truck.png';
import icon3 from './img/diamond.png';
import i3 from './img/i3.jpg';
import { default as i61, default as ir1 } from './img/i61.png';
import ir2 from './img/i62.png';
import ir3 from './img/i63.png';
import ir4 from './img/i64.png';
import ir5 from './img/i65.png';
import ir6 from './img/i66.png';
import icon1 from './img/medal.png';
import rating from './img/rating.png';
import './page.scss';

const products = [
    {
        "id": 1,
        "name": "Rough | Natural Cognac 11.20ct",
        "carat": "11.20 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "13,450.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_Uniqcognac11.20_DSC0490_FIN.jpg"
    },
    {
        "id": 2,
        "name": "Rough Octahedron | Natural Brown 9.31ct",
        "carat": "9.31 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "8,400.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_OctoBrown9.31_DSC0327_FIN.jpg"
    },
    {
        "id": 3,
        "name": "Rough Octahedron | Natural Grey 10.97ct",
        "carat": "10.97 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "16,450.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_OctoGrey10.97_DSC0296_FIN.jpg"
    },
    {
        "id": 4,
        "name": "Rough | Natural Black 4.19ct",
        "carat": "4.19 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "5,025.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqBlack4.19_DSC0157_FIN.jpg"
    },
    {
        "id": 5,
        "name": "Rough Cube | Natural Dark Grey 17.42ct",
        "carat": "17.42 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "16,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_Cube17.42_DSC0015_FIN.jpg"
    },
    {
        "id": 6,
        "name": "Rough | Natural Peppered White 5.61ct",
        "carat": "5.61 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "10,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqWhite5.51_DSC0070-1_FIN.jpg"
    },
    {
        "id": 7,
        "name": "Rough | Natural Champagne 7.32ct",
        "carat": "7.32 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "11,250.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqChamp7.32_DSC0120_FIN.jpg"
    },
    {
        "id": 8,
        "name": "Rough | Natural Cognac 1.95ct",
        "carat": "1.95 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "6,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqChamp1.95_DSC0103.jpg"
    },
    {
        "id": 9,
        "name": "Rough | Natural Yellow Green 3.17ct",
        "carat": "3.17 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "7,150.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqYlwGrn3.17_DSC0095_FIN.jpg"
    },
    {
        "id": 10,
        "name": "Rough | Natural Brown 9.13ct",
        "carat": "9.13 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "8,225.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqBrwn9.13_DSC0097_FIN.jpg"
    },
    {
        "id": 11,
        "name": "Rough | Natural Champagne 11.06ct",
        "carat": "11.06 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "16,600.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqChamp5.00_DSC0107_FIN.jpg"
    },
    {
        "id": 12,
        "name": "Rough | Natural Grey 10.99ct",
        "carat": "10.99 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "21,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqeGrey10.99_DSC0028_FIN.jpg"
    },
    {
        "id": 13,
        "name": "Rough | Natural Champagne 1.17ct",
        "carat": "1.17 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "3,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_Uniqchamp1.17_DSC0083_FIN.jpg"
    },
    {
        "id": 14,
        "name": "Rough | Natural Peppered White 6.74ct",
        "carat": "6.74 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "20,250.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/06/RS_UniqueW6.74_DSC0006_FIN.jpg"
    },
    {
        "id": 15,
        "name": "Rough | Natural Yellow-Green 12.06ct",
        "carat": "12.06 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "6000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/06/RS_UniqYellGrn12.06_DSC0051_FIN.jpg"
    },
    {
        "id": 16,
        "name": "Rough | White 1.00 – 1.24ct single stone",
        "carat": "1.00 - 1.24ct carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "125.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/06/RS_BortsWhite1-1.24_DSC0116_FIN.jpg"
    },
    {
        "id": 17,
        "name": "Rough | Silver 1.00 – 1.24ct single stone",
        "carat": "1.00 - 1.24 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "75.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/06/RS_BortsSilver1-1.24_DSC0130_FIN.jpg"
    },
    {
        "id": 18,
        "name": "Rough | Fancy Colors 1.00 – 1.24ct single stone",
        "carat": "1.00 - 1.24 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "100.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/06/RS_BortsColor1-1.24_DSC0161_FIN.jpg"
    },
    {
        "id": 19,
        "name": "Rough Cube | Natural Dark Grey 16.73ct",
        "carat": "16.73 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "25,100.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/05/RS_CubeGrey13.43_DSC0049_FIN.jpg"
    },
    {
        "id": 20,
        "name": "Rough | Natural Salt and Pepper 13.43ct",
        "carat": "13.43 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "48,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/05/RS_UniqueGrey16.73_DSC0067_FIN.jpg"
    },
    {
        "id": 21,
        "name": "Rough | Natural Grey 5.34ct",
        "carat": "5.34 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "8,250.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/05/RS_Unique5.34_DSC0348_FIN.jpg"
    },
    {
        "id": 22,
        "name": "Rough | Natural Yellow 1.56ct",
        "carat": "1.56 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "9,350.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/04/RS_UniqYellow_DSC_0030_FIN.jpg"
    },
    {
        "id": 23,
        "name": "Rough | Natural Brown 4.43ct",
        "carat": "4.43 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "9,300.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/02/RSbrmac4.43_DSC_0637_FIN-2.jpg"
    },
    {
        "id": 24,
        "name": "Rough Maccle | Natural White 3.40ct",
        "carat": "3.40 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "30,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/02/RSmac3.40_DSC_0097_FIN.jpg"
    },
    {
        "id": 25,
        "name": "Rough | Natural Orange 3.32ct",
        "carat": "3.32 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "6,600.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSpeach3.32_DSC_0041_FIN2.jpg"
    },
    {
        "id": 26,
        "name": "Rough | Natural Orange 1.13ct",
        "carat": "1.13 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "3,400.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSorange1.13_DSC_0043_FIN2-2.jpg"
    },
    {
        "id": 27,
        "name": "Rough | Natural Cognac 7.09ct",
        "carat": "7.09 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "15,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSbrown7.09_0038_FIN.jpg"
    },
    {
        "id": 28,
        "name": "Rough | Natural Champagne 0.85ct",
        "carat": "0.85 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "2,550.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSarrow0.85_DSC_0067_FIN-3.jpg"
    },
    {
        "id": 29,
        "name": "Rough | Natural Coral 2.45ct",
        "carat": "2.45 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "6,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2018/12/RS_UniqPink2.45_IMG_1856_FIN.jpg"
    },
    {
        "id": 30,
        "name": "Rough | Natural Grey, with Yellow Hint 15.23ct",
        "carat": "15.23 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "30,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_UniqGreyYellw15.23_DSC0503_FIN.jpg"
    },
    {
        "id": 31,
        "name": "Rough | Natural White 2.28ct",
        "carat": "2.28 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "4,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_UniqWhite2.28_DSC0230_FIN.jpg"
    },
    {
        "id": 32,
        "name": "Rough | Natural White 3.66ct",
        "carat": "3.66 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "11,250.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_UniqWhite3.66_DSC0255_FIN.jpg"
    },
    {
        "id": 33,
        "name": "Rough | Natural Champagne 3.29ct",
        "carat": "3.29 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "4,925.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/09/RS_UniqChamp3.29_DSC0355_FIN.jpg"
    },
    {
        "id": 34,
        "name": "Rough | Natural White 3.48ct",
        "carat": "3.48 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "12,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/09/RS_UniqWhite3.48_DSC0324_FIN.jpg"
    },
    {
        "id": 35,
        "name": "Rough | Natural Green 2.34ct",
        "carat": "2.34 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "4,900.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/10/Anabar_green2.34_DSC0045_FIN.jpg"
    },
    {
        "id": 36,
        "name": "Rough | Natural Cognac 0.76ct",
        "carat": "0.76 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "450.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/11/Rough_UniqueCognacSouthAfrica0.75_TOP_FIN.jpg"
    },
    {
        "id": 37,
        "name": "Rough Octahedron | Natural Brown 0.80ct",
        "carat": "0.80 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "725.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/12/Rough_OctaBrown0.80_SIDE2_FIN.jpg"
    },
    {
        "id": 38,
        "name": "Rough | Natural Yellow 2.30ct",
        "carat": "2.30 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "4,825.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/12/RoughWCU_Yellow2_TOP-1.jpg"
    },
    {
        "id": 39,
        "name": "Rough | Natural Green 0.88",
        "carat": "0.88 carats",
        "Description": "This diamond is 100% natural and has not been treated on in any way.",
        "price": "1,325.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2020/01/RoughAnabar_Green0.88_TOP.jpg"
    },
    {
        "id": 40,
        "name": "1ct Single Rough Diamond from the Diavik Mine in Canada",
        "carat": "1.00-1.24ct carats",
        "Description": "This is a single rough diamond weighing between 1.00-1.24ct from the Diavik mine in Canada.  Each diamond is unique and one of a kind. While the diamonds you receive may not be a diamond in the photo, all lots are guaranteed similar.",
        "price": "105.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2020/01/diavik2-scaled.jpg"
    },
    {
        "id": 41,
        "name": "1ct Single Rough Diamond from the Argyle Mine in Australia",
        "carat": "1.00-1.24ct carats",
        "Description": "This is a single 1.00-1.24ct rough diamond from the Argyle mine in Australia.  Each diamond is unique and one of a kind.  While the diamonds you receive may not be a diamond in the photo, all lots are guaranteed similar.",
        "price": "105.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2020/01/argyle.jpg"
    },
    {
        "id": 42,
        "name": "Rough Octahedron | Natural Yellow 6.50ct",
        "carat": "6.50 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "12,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/10/RS_OctaYellow6.50_TOP.jpg"
    },
    {
        "id": 43,
        "name": "Cloud Spotting Diamonds | Natural White 6.46ct",
        "carat": "6.46 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "12,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspoting_white_6.46ct_side2.jpg"
    },
    {
        "id": 44,
        "name": "Cloud Spotting Diamonds | Natural Grey 15.86ct",
        "carat": "15.86 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "18,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspoting_darkgrey_15.86ct_side1.jpg"
    },
    {
        "id": 45,
        "name": "Cloud Spotting Diamonds | Natural Moss 9.03ct",
        "carat": "9.03 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "3,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspotting_moss_9.03_Side2.jpg"
    },
    {
        "id": 46,
        "name": "Cloud Spotting Diamonds | Natural Moss 6.92ct",
        "carat": "6.92 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "15,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspotting_brown_6.92_side1.jpg"
    },
    {
        "id": 47,
        "name": "Cloud Spotting Diamonds | Natural Green 3.13ct",
        "carat": "3.13 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "9,750.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspoting_green_3.13_Side1.jpg"
    },
    {
        "id": 48,
        "name": "Cloud Spotting Diamonds | Natural Brown 3.41ct",
        "carat": "3.41 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "9,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspotting_brown_3.41_Side1.jpg"
    },
    {
        "id": 49,
        "name": "Rough Black Diamond Natural Color | Unique Specimen 15.35ct from Canada",
        "carat": "15.35 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "15,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/15.35Canada-scaled.jpg"
    },
    {
        "id": 50,
        "name": "Rough Silver Diamond Natural Color | Unique Specimen 4.90ct from Canada",
        "carat": "4.90 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "6,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/4.90Canada-scaled.jpg"
    },
    {
        "id": 51,
        "name": "Rough Black Diamond Natural Color | Unique Specimen 19.93ct from Canada",
        "carat": "19.93 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "22,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/19.93Canada-scaled.jpg"
    },
    {
        "id": 52,
        "name": "Rough Black Diamond Natural Color | Unique Specimen 7.61ct from Canada",
        "carat": "7.61 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "4,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/DSC_0389.jpg"
    },
    {
        "id": 53,
        "name": "Rough Yellow/White Diamond Natural Color | Unique Specimen 3.87ct from Dem. Rep. of Congo",
        "carat": "3.87 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "24,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/3.87RSWdoc-scaled.jpg"
    },
    {
        "id": 54,
        "name": "Rough Orange/White Diamond Natural Color | Unique Specimen 3.01ct from Dem. Rep. of Congo",
        "carat": "3.01 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "18,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/DSC_0396.jpg"
    },
    {
        "id": 55,
        "name": "Rough White Diamond Natural Color | Unique Specimen 2.53ct from Dem. Rep. of Congo",
        "carat": "2.53 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "15,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/RSW2.53doc.jpg"
    },
    {
        "id": 56,
        "name": "Rough Yellow Diamond Natural Color | Unique Specimen 3.87ct",
        "carat": "3.87 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "24,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/IMG_5807-scaled.jpg"
    },
    {
        "id": 57,
        "name": "Rough White Diamond Dalmatian| Unique Specimen 2.49ct",
        "carat": "2.49 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "15,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/IMG_5803.jpg"
    },
    {
        "id": 58,
        "name": "Rough | Unique Shape White Maccle 3.80ct",
        "carat": "3.80 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "12,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/RSW3.80-2.jpg"
    },
    {
        "id": 59,
        "name": "Rough | Yellow Maccle Unique Shape 4.07ct",
        "carat": "4.07 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "13,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/RSW4.07.jpg"
    },
    {
        "id": 60,
        "name": "Rough | Natural Unique Shape 2.85ct",
        "carat": "2.85 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "10,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/RSW2.85.jpg"
    },
    {
        "id": 61,
        "name": "Rough | Natural Unique Shape 3.67ct",
        "carat": "3.67 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "22,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/IMG_5822-3.jpg"
    },
    {
        "id": 62,
        "name": "Rough | Natural Maccle 2.87ct",
        "carat": "2.87 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "10,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/2.87Mac.jpeg"
    },
    {
        "id": 63,
        "name": "Rough | Natural Octahedron 6.45ct",
        "carat": "6.45 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "45,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0511-scaled.jpg"
    },
    {
        "id": 64,
        "name": "Rough |Cloud Spotting Natural 2.68ct",
        "carat": "2.68 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "4,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0501.jpg"
    },
    {
        "id": 65,
        "name": "Rough | Natural 2.27ct",
        "carat": "2.27 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "3,600.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0502.2.27.jpg"
    },
    {
        "id": 66,
        "name": "Rough | Natural 2.96ct Unique Cut",
        "carat": "2.96 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "4,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0506.2.96.jpg"
    },
    {
        "id": 67,
        "name": "Rough Natural Unique Cloud Spotting 2.91CT",
        "carat": "2.91 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "4,500.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0504.2.91.jpg"
    },
    {
        "id": 68,
        "name": "Rough | Natural 5.80ct Cloud Spotting Unique Cut",
        "carat": "5.80 carats",
        "Description": "This diamond is natural and has not been treated or enhanced in any way.",
        "price": "9,000.00",
        "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0508.5.80.jpg"
    }
];

function Home() {
    const slickRef = useRef(null);
    useEffect(() => {
        if (slickRef && slickRef.current) {
            slickRef.current.slickGoTo(1);
        }
    }, []);
    const settings = {
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    };
    const settingimg = {
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        rtl: true,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    };
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
        ],
    };

    return (
        <>
            <div className="home-p1">
                <img src={bgimg} alt="" />
                <h1>
                    <span>Diamond</span> is the most valuable, <br />
                    <span>Not</span> only of precious stones, <br />
                    <span>But</span> of all things in this world.
                </h1>
            </div>
            <img src={border} alt="" className='border-img' />
            <div className='home-p2'>
                <div className='p2-p1'>
                    <h3>ROUGH DIAMONDS</h3>
                    <h6>The term rough diamonds refer to diamonds that are straight from the earth and completely untouched by a polishing wheel or tumbler. All of our rough diamonds are earth mined. <br />
                        Don't see what you're looking for?
                        Please <Link to='/Contect'>contact us</Link> and we will be happy to check our inventory for anything you may need!</h6>
                    <button><Link to='/About' className='link-btn'>Read more</Link></button>
                </div>
                <div className="p2-p2">
                    <img src={i61} alt="" />
                </div>
            </div>
            <img src={border} alt="" className='border-img' />
            <div className="home-p3">
                <div className="p3-p2">
                    <h3>Rought Diamond Natural Beauty</h3>
                    <h6>Due to their naturally beautiful appearance, unpolished, raw diamonds remain the 1st choice for a jewelry enthusiast and a fashion lover. Despite the sudden growth in demand for fancy-colored diamonds, rough-mined diamonds are still selected for beautiful jewelry pieces.
                        <br />
                        When found in the mines, these diamonds are uncut and display a mesmerizing, unpolished beauty on their surfaces. Raw diamonds retain the rugged and natural appearance that reflects their origins deep within the Earth. It defines the original beauty and elegance that do not exist in high-quality graded synthetic stones like moissanite or cubic zirconia.</h6>
                </div>
                <div className="p3-p1">
                    <img src={i3} alt="" />
                </div>
            </div>
            <img src={border} alt="" className='border-img' />
            <div className="home-p7">
                <h1>PRODUCTS</h1>
                <Slider ref={slickRef} {...settingimg} className="slick-1">
                    {products.map((values) => {
                        const { id, name, price, image } = values;
                        return (
                            <Link to='/product' className='link-text'>
                                <div className="card parent-1" style={{ width: "15rem" }} key={id}>
                                    <img src={image} className="card-img-1" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">{price}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </Slider>
            </div>
            <img src={border} alt="" className='border-img' />
            <div className="home-p4">
                <div className="row homerow">
                    <div className="col">
                        <img src={icon1} alt="" />
                        <h4>Certification</h4>
                        <p>IGI Certified Lab Grown Diamond</p>
                    </div>
                    <div className="col">
                        <img src={icon2} alt="" />
                        <h4>Shipping</h4>
                        <p>Ship With In 7 Business Working Days</p>
                    </div>
                    <div className="col">
                        <img src={icon3} alt="" />
                        <h4>Return</h4>
                        <p>30 Days No Questions Ask Return Policy</p>
                    </div>
                    <div className="col">
                        <img src={icon4} alt="" />
                        <h4>Customer Support</h4>
                        <p>We're Available 24/7 For You</p>
                    </div>
                </div>
            </div>
            <img src={border} alt="" className='border-img' />
            <div className="home-p5">
                <h1>FAQs</h1>
                <div className="p5-box-1">
                    <h6>How Return & Refund Policy Is Works?</h6>
                    <p>Enjoy a flexible 30-day no question ask return policy for your purchase. Return within this period, with the Lab Grown Diamond Certified if applicable, for a complete refund or exchange, ensuring your utmost satisfaction with our products.</p>
                </div>
                <div className="p5-box-1">
                    <h6>Can I purchase Other Shape Than Round?</h6>
                    <p>We specialize in crafting over 300+ shapes, including old cuts, fancy cuts, and antique shapes, tailored to your specific requirements. Our extensive range ensures that every client finds the perfect match for their unique taste, providing personalized options that cater to diverse preferences and needs.</p>
                </div>
                <div className="p5-box-1">
                    <h6>Is Customization Available In Setting Style?</h6>
                    <p>We offer customized settings tailored to your preferred style, including bezel set, 6-prong set, tulip setting, among others. Our flexibility ensures that your unique taste is perfectly captured, providing a personalized touch to each piece. Choose your ideal setting, and we'll craft it to match your exact specifications.</p>
                </div>
            </div>
            <img src={border} alt="" className='border-img' />
            <Slider ref={slickRef} {...settings} className="slick">
                <div className="slick-slide">
                    <div className="parent">
                        <div className="child">
                            <img
                                src={ir1}
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </div>
                <div className="slick-slide">
                    <div className="parent">
                        <div className="child">
                            <img
                                src={ir2}
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </div>
                <div className="slick-slide">
                    <div className="parent">
                        <div className="child">
                            <img
                                src={ir3}
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </div>
                <div className="slick-slide">
                    <div className="parent">
                        <div className="child">
                            <img
                                src={ir4}
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </div>
                <div className="slick-slide">
                    <div className="parent">
                        <div className="child">
                            <img
                                src={ir5}
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </div>
                <div className="slick-slide">
                    <div className="parent">
                        <div className="child">
                            <img
                                src={ir6}
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </div>
            </Slider>
            <img src={border} alt="" className='border-img' />
            <div className="product-carousel">
                <h1>MOST RATED PRODUCTS</h1>
                <Slider {...setting}>
                    {products.map(product => (
                        <div key={product.id} className="product-card-1">
                            <img src={product.image} alt={product.name} className='p-img' />
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <img src={rating} alt="" className='rating' />
                        </div>
                    ))}
                </Slider>
            </div>
            <br />
            <img src={border} alt="" className='border-img' />
            <div className="home-p6">
                <h1>WHAT OUR CLIENTS SAY</h1>
                <div className='p6-p1'>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <div className="carousel-caption">
                                    <h4>Raju Bajaj</h4>
                                    <p>Good company and excellent service.Highly recommended, fair price quotations and excellent service.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-caption">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <h4>Ekta Shah</h4>
                                    <p>Highly recommended, fair price quotations and excellent service. Willing to run an extra mile for customers satisfaction. Thank you</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-caption">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <h4>Sujeet Narayan</h4>
                                    <p>this company is super friendly and gives an excellent service.Thank you so much.i am visit agin</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div >
            </div>
            <br />
            <Footer />
        </>
    )
}

export default Home;