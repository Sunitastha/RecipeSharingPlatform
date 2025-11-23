import React from "react";
import { FirstData } from "./FirstData";
import { SecondData } from "./SecondData";
import { Title } from "@mantine/core";

export const Transaction = () => {
 // Create a mapping of scrips to their trade signals
  const tradeSignalMap = SecondData.reduce((accumulator, item) => {
    accumulator[item.scrip] = item.tradeSignal;
    return accumulator;
  }, {});

  // Separate data based on trade signals
  const separatedData = {
    "Sell and Switch": [],
    "Sell": [],
    "Hold": []
  };

  FirstData.forEach(item => {
    const tradeSignal = tradeSignalMap[item.Scrip];
    if (tradeSignal) {
      separatedData[tradeSignal].push(item);
    }
  });
  console.log("FirstData:", FirstData);
  console.log("secondData:", SecondData);
  console.log(tradeSignalMap);
  console.log(separatedData);


  return (
    <div className="flex m-4">
      <div className="m-4">
        <Title >Sell and Switch</Title>
        <div>
          {separatedData["Sell and Switch"].map((item, index) => (
            <div key={index}>
              {item.Scrip}
            </div>
          ))}
        </div>
      </div>

      <div className="m-4">
        <Title >Sell</Title>
        <div>
          {separatedData["Sell"].map((item, index) => (
            <div key={index}>
              {item.Scrip}
            </div>
          ))}
        </div>
      </div>

      <div className="m-4">
        <Title>Hold</Title>
        <div>
          {separatedData["Hold"].map((item, index) => (
            <div key={index}>
              {item.Scrip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// import React from "react";
// // import { FirstData } from "./FirstData";
// // import { SecondData } from "./SecondData";

// export const Transaction = () => {
//     const FirstData= [
//         [
//             {
//                 "S.N": "1",
//                 "Scrip": "AKPL",
//                 "Current Balance": "113.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "113.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "2",
//                 "Scrip": "ALBSL",
//                 "Current Balance": "18.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "18.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "3",
//                 "Scrip": "API",
//                 "Current Balance": "547.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "547.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "4",
//                 "Scrip": "BARUN",
//                 "Current Balance": "2.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "2.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "5",
//                 "Scrip": "BEDC",
//                 "Current Balance": "5.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "5.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "6",
//                 "Scrip": "BGWT",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "7",
//                 "Scrip": "GBLBS",
//                 "Current Balance": "45.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "45.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "8",
//                 "Scrip": "GHL",
//                 "Current Balance": "100.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "100.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "9",
//                 "Scrip": "HDHPC",
//                 "Current Balance": "200.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "200.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "10",
//                 "Scrip": "HLBSL",
//                 "Current Balance": "2.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "2.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "11",
//                 "Scrip": "HLI",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "12",
//                 "Scrip": "HPPL",
//                 "Current Balance": "201.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "201.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "13",
//                 "Scrip": "LEC",
//                 "Current Balance": "310.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "310.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "14",
//                 "Scrip": "MBJC",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "15",
//                 "Scrip": "MERO",
//                 "Current Balance": "183.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "183.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "16",
//                 "Scrip": "NABIL",
//                 "Current Balance": "100.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "100.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "17",
//                 "Scrip": "NGPL",
//                 "Current Balance": "40.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "40.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "18",
//                 "Scrip": "NICLBSL",
//                 "Current Balance": "36.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "36.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "19",
//                 "Scrip": "NIFRA",
//                 "Current Balance": "238.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "238.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "20",
//                 "Scrip": "NIMB",
//                 "Current Balance": "329.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "329.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "21",
//                 "Scrip": "NLIC",
//                 "Current Balance": "129.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "129.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "22",
//                 "Scrip": "NRIC",
//                 "Current Balance": "51.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "51.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "23",
//                 "Scrip": "NRN",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "24",
//                 "Scrip": "NUBL",
//                 "Current Balance": "298.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "298.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "25",
//                 "Scrip": "PHCL",
//                 "Current Balance": "560.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "560.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "26",
//                 "Scrip": "RADHI",
//                 "Current Balance": "76.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "76.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "27",
//                 "Scrip": "RHPL",
//                 "Current Balance": "310.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "310.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "28",
//                 "Scrip": "SAHAS",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "29",
//                 "Scrip": "SDLBSL",
//                 "Current Balance": "17.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "17.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "30",
//                 "Scrip": "SGIC",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "31",
//                 "Scrip": "SIFC",
//                 "Current Balance": "11.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "11.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "32",
//                 "Scrip": "SJCL",
//                 "Current Balance": "180.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "180.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "33",
//                 "Scrip": "SJLIC",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "34",
//                 "Scrip": "SPDL",
//                 "Current Balance": "183.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "183.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "35",
//                 "Scrip": "SRLI",
//                 "Current Balance": "10.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "10.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "36",
//                 "Scrip": "SWMF",
//                 "Current Balance": "174.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "174.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "37",
//                 "Scrip": "UAIL",
//                 "Current Balance": "9.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "9.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "38",
//                 "Scrip": "UMHL",
//                 "Current Balance": "53.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "53.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "39",
//                 "Scrip": "UPCL",
//                 "Current Balance": "1085.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "1085.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             },
//             {
//                 "S.N": "40",
//                 "Scrip": "UPPER",
//                 "Current Balance": "530.0",
//                 "Pledge Balance": "0.0",
//                 "Lockin Balance": "0.0",
//                 "Freeze Balance": "0.0",
//                 "Free Balance": "530.0",
//                 "Demat Pending": "0.0",
//                 "Remarks": " "
//             }
//         ]
//     ]
//     const SecondData =[
    
//         {
//           "scrip": "PRVU",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "High Size Portfolio",
//           "tradingPattern": "buy in 2-3 Lots",
//           "tradeType": "long positional",
//           "tradeSignal": "Sell and Switch"
//         },
//         {
//           "scrip": "HPPL",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "High Size Portfolio",
//           "tradingPattern": "buy in 2-3 Lots",
//           "tradeType": "long positional",
//           "tradeSignal": "Sell and Switch"
//         },
//         {
//           "scrip": "LEC",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "High Size Portfolio",
//           "tradingPattern": "buy in 2-3 Lots",
//           "tradeType": "long positional",
//           "tradeSignal": "Sell and Switch"
//         },
//         {
//           "scrip": "API",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "High Size Portfolio",
//           "tradingPattern": "buy in 2-3 Lots",
//           "tradeType": "investment",
//           "tradeSignal": "Sell",
//           "sellRange1": {
//             "from": 2222,
//             "to": 33333,
//             "conditions": "cccccc"
//           },
//           "sellRange2": {
//             "from": 4444,
//             "to": 5555,
//             "conditions": "bbbbb"
//           },
//           "stopLossBelow": {
//             "value": 1111,
//             "conditions": "aaaaa"
//           },
//           "sellPattern": "Sell Instant"
//         },
//         {
//           "scrip": "MERO",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "Medium Size Portfolio",
//           "tradingPattern": "buy Instant while in range",
//           "tradeType": "short positional",
//           "tradeSignal": "Hold",
//           "pledgeable": false,
//           "multibagger": false,
//           "holdTill": {
//             "to": 4454343,
//             "from": 2343,
//             "conditions": "fdgrgfggdg"
//           },
//           "holdForLongTimeConditions": "need to hold for long term"
//         },
//         {
//           "scrip": "AKPL",
//           "capitalSize": "High Cap",
//           "suitableFor": "Medium Size Portfolio",
//           "tradingPattern": "buy Instant while in range",
//           "tradeType": "long positional",
//           "tradeSignal": "Sell and Switch",
//           "pledgeable": false,
//           "multibagger": false
//         },
//         {
//           "scrip": "HDHPC",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "High Size Portfolio",
//           "tradingPattern": "buy in 2-3 Lots",
//           "tradeType": "short positional",
//           "tradeSignal": "Sell and Switch",
//           "pledgeable": false,
//           "multibagger": false
//         },
//         {
//           "scrip": "SAHAS",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "High Size Portfolio",
//           "tradingPattern": "buy in 2-3 Lots",
//           "tradeType": "short positional",
//           "tradeSignal": "Hold",
//           "pledgeable": false,
//           "multibagger": false
//         },
//         {
//           "scrip": "NUBL",
//           "capitalSize": "Medium Cap",
//           "suitableFor": "High Size Portfolio",
//           "tradingPattern": "buy in 2-3 Lots",
//           "tradeType": "short positional",
//           "tradeSignal": "Sell",
//           "pledgeable": false,
//           "multibagger": false
//         }
      
    
//     ]
//  // Create a mapping of scrips to their trade signals
// const tradeSignalMap = SecondData.reduce((accumulator, item) => {
//     accumulator[item.scrip] = item.tradeSignal;
//     return accumulator;
// }, {});

// // Separate data based on trade signals
// const separatedData = {
//     "Sell and Switch": [],
//     "Sell": [],
//     "Hold": []
// };

// // 
// FirstData.forEach(item => {
//     const tradeSignal = tradeSignalMap[item.Scrip];
//     if (tradeSignal) {
//         separatedData[tradeSignal] = separatedData[tradeSignal] || [];
//         separatedData[tradeSignal].push(item);
//     }
// });

// console.log("FirstData:", FirstData);
// console.log("secondData:", SecondData);
// console.log(tradeSignalMap);
// console.log(tradeSignalMap);
// console.log(separatedData);
// return (
//     <div className="flex m-4">

//         <div className=" m-4">
//         <h1 className="font-bold">Sell and Switch</h1>
//         <div>
//             {separatedData["Sell and Switch"].map((item, index) => (
//                 <div key={index}>
//                     {item.Scrip}
//                 </div>
//             ))}
//         </div>
//         </div>
       

//         <div className=" m-4">
//         <h1 className="font-bold">Sell</h1>
//         <div>
//             {separatedData["Sell"].map((item, index) => (
//                 <div key={index}>
//                     {item.Scrip}
//                 </div>
//             ))}
//         </div>
//         </div>

//         <div className=" m-4">
//         <h1 className="font-bold">Hold</h1>
//         <div>
//             {separatedData["Hold"].map((item, index) => (
//                 <div key={index}>
//                     {item.Scrip}
//                 </div>
//             ))}
//         </div>
//         </div>

        
//     </div>
// );
// }