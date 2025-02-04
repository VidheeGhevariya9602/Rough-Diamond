import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductDetails() {
    const products = [
        {
            "id": 1,
            "name": "Rough | Natural Cognac 11.20ct",
            "carat": "11.20 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "13450.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_Uniqcognac11.20_DSC0490_FIN.jpg"
        },
        {
            "id": 2,
            "name": "Rough Octahedron | Natural Brown 9.31ct",
            "carat": "9.31 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "8400.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_OctoBrown9.31_DSC0327_FIN.jpg"
        },
        {
            "id": 3,
            "name": "Rough Octahedron | Natural Grey 10.97ct",
            "carat": "10.97 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "16450.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_OctoGrey10.97_DSC0296_FIN.jpg"
        },
        {
            "id": 4,
            "name": "Rough | Natural Black 4.19ct",
            "carat": "4.19 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "5025.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqBlack4.19_DSC0157_FIN.jpg"
        },
        {
            "id": 5,
            "name": "Rough Cube | Natural Dark Grey 17.42ct",
            "carat": "17.42 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "16500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_Cube17.42_DSC0015_FIN.jpg"
        },
        {
            "id": 6,
            "name": "Rough | Natural Peppered White 5.61ct",
            "carat": "5.61 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "10500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqWhite5.51_DSC0070-1_FIN.jpg"
        },
        {
            "id": 7,
            "name": "Rough | Natural Champagne 7.32ct",
            "carat": "7.32 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "11250.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqChamp7.32_DSC0120_FIN.jpg"
        },
        {
            "id": 8,
            "name": "Rough | Natural Cognac 1.95ct",
            "carat": "1.95 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "6000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqChamp1.95_DSC0103.jpg"
        },
        {
            "id": 9,
            "name": "Rough | Natural Yellow Green 3.17ct",
            "carat": "3.17 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "7150.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqYlwGrn3.17_DSC0095_FIN.jpg"
        },
        {
            "id": 10,
            "name": "Rough | Natural Brown 9.13ct",
            "carat": "9.13 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "8225.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqBrwn9.13_DSC0097_FIN.jpg"
        },
        {
            "id": 11,
            "name": "Rough | Natural Champagne 11.06ct",
            "carat": "11.06 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "16600.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqChamp5.00_DSC0107_FIN.jpg"
        },
        {
            "id": 12,
            "name": "Rough | Natural Grey 10.99ct",
            "carat": "10.99 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "21000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_UniqeGrey10.99_DSC0028_FIN.jpg"
        },
        {
            "id": 13,
            "name": "Rough | Natural Champagne 1.17ct",
            "carat": "1.17 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "3500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/07/RS_Uniqchamp1.17_DSC0083_FIN.jpg"
        },
        {
            "id": 14,
            "name": "Rough | Natural Peppered White 6.74ct",
            "carat": "6.74 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "20250.00",
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
            "price": "25100.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/05/RS_CubeGrey13.43_DSC0049_FIN.jpg"
        },
        {
            "id": 20,
            "name": "Rough | Natural Salt and Pepper 13.43ct",
            "carat": "13.43 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "48000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/05/RS_UniqueGrey16.73_DSC0067_FIN.jpg"
        },
        {
            "id": 21,
            "name": "Rough | Natural Grey 5.34ct",
            "carat": "5.34 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "8250.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/05/RS_Unique5.34_DSC0348_FIN.jpg"
        },
        {
            "id": 22,
            "name": "Rough | Natural Yellow 1.56ct",
            "carat": "1.56 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "9350.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/04/RS_UniqYellow_DSC_0030_FIN.jpg"
        },
        {
            "id": 23,
            "name": "Rough | Natural Brown 4.43ct",
            "carat": "4.43 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "9300.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/02/RSbrmac4.43_DSC_0637_FIN-2.jpg"
        },
        {
            "id": 24,
            "name": "Rough Maccle | Natural White 3.40ct",
            "carat": "3.40 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "30000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/02/RSmac3.40_DSC_0097_FIN.jpg"
        },
        {
            "id": 25,
            "name": "Rough | Natural Orange 3.32ct",
            "carat": "3.32 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "6600.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSpeach3.32_DSC_0041_FIN2.jpg"
        },
        {
            "id": 26,
            "name": "Rough | Natural Orange 1.13ct",
            "carat": "1.13 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "3400.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSorange1.13_DSC_0043_FIN2-2.jpg"
        },
        {
            "id": 27,
            "name": "Rough | Natural Cognac 7.09ct",
            "carat": "7.09 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "15000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSbrown7.09_0038_FIN.jpg"
        },
        {
            "id": 28,
            "name": "Rough | Natural Champagne 0.85ct",
            "carat": "0.85 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "2550.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/01/RSarrow0.85_DSC_0067_FIN-3.jpg"
        },
        {
            "id": 29,
            "name": "Rough | Natural Coral 2.45ct",
            "carat": "2.45 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "6000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2018/12/RS_UniqPink2.45_IMG_1856_FIN.jpg"
        },
        {
            "id": 30,
            "name": "Rough | Natural Grey, with Yellow Hint 15.23ct",
            "carat": "15.23 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "30000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_UniqGreyYellw15.23_DSC0503_FIN.jpg"
        },
        {
            "id": 31,
            "name": "Rough | Natural White 2.28ct",
            "carat": "2.28 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "4500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_UniqWhite2.28_DSC0230_FIN.jpg"
        },
        {
            "id": 32,
            "name": "Rough | Natural White 3.66ct",
            "carat": "3.66 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "11250.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/08/RS_UniqWhite3.66_DSC0255_FIN.jpg"
        },
        {
            "id": 33,
            "name": "Rough | Natural Champagne 3.29ct",
            "carat": "3.29 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "4925.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/09/RS_UniqChamp3.29_DSC0355_FIN.jpg"
        },
        {
            "id": 34,
            "name": "Rough | Natural White 3.48ct",
            "carat": "3.48 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "12000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/09/RS_UniqWhite3.48_DSC0324_FIN.jpg"
        },
        {
            "id": 35,
            "name": "Rough | Natural Green 2.34ct",
            "carat": "2.34 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "4900.00",
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
            "price": "4825.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/12/RoughWCU_Yellow2_TOP-1.jpg"
        },
        {
            "id": 39,
            "name": "Rough | Natural Green 0.88",
            "carat": "0.88 carats",
            "Description": "This diamond is 100% natural and has not been treated on in any way.",
            "price": "1325.00",
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
            "price": "12000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2019/10/RS_OctaYellow6.50_TOP.jpg"
        },
        {
            "id": 43,
            "name": "Cloud Spotting Diamonds | Natural White 6.46ct",
            "carat": "6.46 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "12000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspoting_white_6.46ct_side2.jpg"
        },
        {
            "id": 44,
            "name": "Cloud Spotting Diamonds | Natural Grey 15.86ct",
            "carat": "15.86 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "18000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspoting_darkgrey_15.86ct_side1.jpg"
        },
        {
            "id": 45,
            "name": "Cloud Spotting Diamonds | Natural Moss 9.03ct",
            "carat": "9.03 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "3000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspotting_moss_9.03_Side2.jpg"
        },
        {
            "id": 46,
            "name": "Cloud Spotting Diamonds | Natural Moss 6.92ct",
            "carat": "6.92 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "15000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspotting_brown_6.92_side1.jpg"
        },
        {
            "id": 47,
            "name": "Cloud Spotting Diamonds | Natural Green 3.13ct",
            "carat": "3.13 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "9750.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspoting_green_3.13_Side1.jpg"
        },
        {
            "id": 48,
            "name": "Cloud Spotting Diamonds | Natural Brown 3.41ct",
            "carat": "3.41 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "9000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2021/03/RS_cloudspotting_brown_3.41_Side1.jpg"
        },
        {
            "id": 49,
            "name": "Rough Black Diamond Natural Color | Unique Specimen 15.35ct from Canada",
            "carat": "15.35 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "15000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/15.35Canada-scaled.jpg"
        },
        {
            "id": 50,
            "name": "Rough Silver Diamond Natural Color | Unique Specimen 4.90ct from Canada",
            "carat": "4.90 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "6000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/4.90Canada-scaled.jpg"
        },
        {
            "id": 51,
            "name": "Rough Black Diamond Natural Color | Unique Specimen 19.93ct from Canada",
            "carat": "19.93 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "22500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/19.93Canada-scaled.jpg"
        },
        {
            "id": 52,
            "name": "Rough Black Diamond Natural Color | Unique Specimen 7.61ct from Canada",
            "carat": "7.61 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "4500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/DSC_0389.jpg"
        },
        {
            "id": 53,
            "name": "Rough Yellow/White Diamond Natural Color | Unique Specimen 3.87ct from Dem. Rep. of Congo",
            "carat": "3.87 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "24000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/3.87RSWdoc-scaled.jpg"
        },
        {
            "id": 54,
            "name": "Rough Orange/White Diamond Natural Color | Unique Specimen 3.01ct from Dem. Rep. of Congo",
            "carat": "3.01 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "18000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/DSC_0396.jpg"
        },
        {
            "id": 55,
            "name": "Rough White Diamond Natural Color | Unique Specimen 2.53ct from Dem. Rep. of Congo",
            "carat": "2.53 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "15000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/03/RSW2.53doc.jpg"
        },
        {
            "id": 56,
            "name": "Rough Yellow Diamond Natural Color | Unique Specimen 3.87ct",
            "carat": "3.87 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "24000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/IMG_5807-scaled.jpg"
        },
        {
            "id": 57,
            "name": "Rough White Diamond Dalmatian| Unique Specimen 2.49ct",
            "carat": "2.49 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "15000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/IMG_5803.jpg"
        },
        {
            "id": 58,
            "name": "Rough | Unique Shape White Maccle 3.80ct",
            "carat": "3.80 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "12000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/RSW3.80-2.jpg"
        },
        {
            "id": 59,
            "name": "Rough | Yellow Maccle Unique Shape 4.07ct",
            "carat": "4.07 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "13500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/RSW4.07.jpg"
        },
        {
            "id": 60,
            "name": "Rough | Natural Unique Shape 2.85ct",
            "carat": "2.85 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "10500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/RSW2.85.jpg"
        },
        {
            "id": 61,
            "name": "Rough | Natural Unique Shape 3.67ct",
            "carat": "3.67 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "22500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/IMG_5822-3.jpg"
        },
        {
            "id": 62,
            "name": "Rough | Natural Maccle 2.87ct",
            "carat": "2.87 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "10500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/2.87Mac.jpeg"
        },
        {
            "id": 63,
            "name": "Rough | Natural Octahedron 6.45ct",
            "carat": "6.45 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "45000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0511-scaled.jpg"
        },
        {
            "id": 64,
            "name": "Rough |Cloud Spotting Natural 2.68ct",
            "carat": "2.68 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "4500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0501.jpg"
        },
        {
            "id": 65,
            "name": "Rough | Natural 2.27ct",
            "carat": "2.27 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "3600.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0502.2.27.jpg"
        },
        {
            "id": 66,
            "name": "Rough | Natural 2.96ct Unique Cut",
            "carat": "2.96 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "4500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0506.2.96.jpg"
        },
        {
            "id": 67,
            "name": "Rough Natural Unique Cloud Spotting 2.91CT",
            "carat": "2.91 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "4500.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0504.2.91.jpg"
        },
        {
            "id": 68,
            "name": "Rough | Natural 5.80ct Cloud Spotting Unique Cut",
            "carat": "5.80 carats",
            "Description": "This diamond is natural and has not been treated or enhanced in any way.",
            "price": "9000.00",
            "image": "https://www.roughdiamondworld.com/wp-content/uploads/2023/05/DSC_0508.5.80.jpg"
        }
    ];

    return (
        <>
            <div className="product-list">
                {products.map((values) => {
                    const { id, name, price, image } = values;
                    return (
                        <div key={id} className="product-card">
                            <Link to={`/product/${id}`}>
                                <img src={image} alt={name} />
                            </Link>
                            <h6>{name}</h6>
                            <p>${price}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProductDetails;