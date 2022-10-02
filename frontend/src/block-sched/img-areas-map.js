const prefillColor = "rgba(192,192,192,0.3)"; // grey opaque
const fillColor = "rgba(0,0,255,0.3)"; // blue opaque

const mapAreas = [
    { name: "A1-1", shape: "poly", coords: [414, 43, 629, 43, 628, 83, 484, 83, 484, 122, 414, 122], preFillColor: prefillColor, fillColor: fillColor },
    { name: "A1-2", shape: "poly", coords: [836, 44, 836, 124, 906, 122, 906, 85, 1051, 83, 1051, 43], preFillColor: prefillColor, fillColor: fillColor },
    { name: "A1-3", shape: "poly", coords: [1053, 43, 1052, 121, 1264, 122, 1265, 44], preFillColor: prefillColor, fillColor: fillColor },

    { name: "A2-1", shape: "poly", coords: [629, 44, 629, 164, 733, 163, 733, 124, 836, 124, 836, 44], preFillColor: prefillColor, fillColor: fillColor },
    { name: "A2-2", shape: "poly", coords: [1265, 44, 1264, 164, 1367, 163, 1368, 124, 1469, 124, 1469, 44], preFillColor: prefillColor, fillColor: fillColor },

    { name: "B-1", shape: "poly", coords: [415, 124, 414, 203, 482, 202, 482, 124], preFillColor: prefillColor, fillColor: fillColor },
    { name: "B-2", shape: "poly", coords: [837, 122, 908, 124, 906, 202, 837, 202], preFillColor: prefillColor, fillColor: fillColor },
    { name: "B-3", shape: "poly", coords: [1053, 124, 1053, 203, 1264, 203, 1263, 124], preFillColor: prefillColor, fillColor: fillColor },

    { name: "Bx-1", shape: "poly", coords: [485, 85, 628, 83, 628, 124, 559, 124, 558, 202, 484, 202], preFillColor: prefillColor, fillColor: fillColor },
    { name: "Bx-2", shape: "poly", coords: [909, 85, 908, 202, 982, 203, 983, 122, 1052, 122, 1052, 82], preFillColor: prefillColor, fillColor: fillColor },

    { name: "C-1", shape: "poly", coords: [414, 204, 558, 203, 558, 282, 414, 284], preFillColor: prefillColor, fillColor: fillColor },
    { name: "C-2", shape: "poly", coords: [837, 203, 980, 204, 982, 282, 837, 284], preFillColor: prefillColor, fillColor: fillColor },
    { name: "C-3", shape: "poly", coords: [1052, 203, 1264, 204, 1263, 284, 1052, 282], preFillColor: prefillColor, fillColor: fillColor },

    { name: "D-1", shape: "poly", coords: [414, 285, 414, 362, 559, 363, 559, 284], preFillColor: prefillColor, fillColor: fillColor },
    { name: "D-2", shape: "poly", coords: [837, 284, 837, 362, 980, 362, 980, 282], preFillColor: prefillColor, fillColor: fillColor },
    { name: "D-3", shape: "poly", coords: [1053, 284, 1053, 362, 1264, 364, 1264, 285], preFillColor: prefillColor, fillColor: fillColor },

    { name: "E-1", shape: "poly", coords: [415, 363, 629, 364, 629, 443, 414, 443], preFillColor: prefillColor, fillColor: fillColor },
    { name: "E-2", shape: "poly", coords: [836, 363, 1053, 364, 1052, 443, 836, 443], preFillColor: prefillColor, fillColor: fillColor },
    { name: "E-3", shape: "poly", coords: [1052, 364, 1263, 363, 1263, 442, 1053, 442], preFillColor: prefillColor, fillColor: fillColor },

    { name: "F-1", shape: "poly", coords: [414, 445, 628, 445, 628, 522, 414, 523], preFillColor: prefillColor, fillColor: fillColor },
    { name: "F-2", shape: "poly", coords: [838, 445, 1053, 443, 1053, 522, 838, 524], preFillColor: prefillColor, fillColor: fillColor },
    { name: "F-3", shape: "poly", coords: [1052, 442, 1264, 442, 1263, 524, 1052, 524], preFillColor: prefillColor, fillColor: fillColor },

    { name: "G-1", shape: "poly", coords: [629, 164, 733, 164, 733, 282, 629, 282], preFillColor: prefillColor, fillColor: fillColor },
    { name: "G-2", shape: "poly", coords: [1264, 164, 1367, 163, 1368, 282, 1264, 284], preFillColor: prefillColor, fillColor: fillColor },

    { name: "H-1", shape: "poly", coords: [631, 284, 732, 282, 732, 364, 836, 364, 836, 403, 629, 403], preFillColor: prefillColor, fillColor: fillColor },
    { name: "H-2", shape: "poly", coords: [1265, 284, 1367, 284, 1368, 363, 1471, 364, 1471, 403, 1265, 403], preFillColor: prefillColor, fillColor: fillColor },

    { name: "J-1", shape: "poly", coords: [629, 403, 836, 404, 837, 524, 628, 523], preFillColor: prefillColor, fillColor: fillColor },
    { name: "J-2", shape: "poly", coords: [1265, 404, 1471, 403, 1469, 524, 1264, 523], preFillColor: prefillColor, fillColor: fillColor },

    { name: "K-1", shape: "poly", coords: [414, 524, 520, 524, 521, 642, 414, 642], preFillColor: prefillColor, fillColor: fillColor },
    { name: "K-2", shape: "poly", coords: [836, 524, 944, 524, 944, 641, 836, 642], preFillColor: prefillColor, fillColor: fillColor },

    { name: "L-1", shape: "poly", coords: [415, 644, 521, 642, 520, 761, 415, 763], preFillColor: prefillColor, fillColor: fillColor },
    { name: "L-2", shape: "poly", coords: [837, 644, 943, 642, 943, 762, 836, 762], preFillColor: prefillColor, fillColor: fillColor },

    { name: "M-1", shape: "poly", coords: [415, 762, 628, 763, 628, 882, 414, 882], preFillColor: prefillColor, fillColor: fillColor },
    { name: "M-2", shape: "poly", coords: [836, 763, 1052, 762, 1053, 882, 836, 882], preFillColor: prefillColor, fillColor: fillColor },

    { name: "N-1", shape: "poly", coords: [629, 524, 629, 642, 733, 642, 733, 524], preFillColor: prefillColor, fillColor: fillColor },
    { name: "N-2", shape: "poly", coords: [1052, 524, 1157, 524, 1159, 642, 1052, 644], preFillColor: prefillColor, fillColor: fillColor },

    { name: "P-1", shape: "poly", coords: [629, 644, 731, 644, 733, 762, 628, 761], preFillColor: prefillColor, fillColor: fillColor },
    { name: "P-2", shape: "poly", coords: [1052, 644, 1157, 644, 1157, 761, 1052, 763], preFillColor: prefillColor, fillColor: fillColor },

    { name: "S1", shape: "poly", coords: [520, 523, 629, 524, 628, 763, 520, 762], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S2", shape: "poly", coords: [733, 524, 836, 523, 836, 762, 733, 761], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S3", shape: "poly", coords: [944, 524, 1051, 523, 1052, 762, 944, 761], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S4", shape: "poly", coords: [1157, 524, 1265, 524, 1264, 762, 1159, 762], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S5", shape: "poly", coords: [1265, 524, 1471, 524, 1471, 762, 1265, 763], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S6", shape: "poly", coords: [559, 124, 628, 124, 629, 362, 559, 362], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S7", shape: "poly", coords: [733, 124, 836, 124, 836, 362, 733, 363], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S8", shape: "poly", coords: [982, 124, 1053, 124, 1052, 363, 982, 363], preFillColor: prefillColor, fillColor: fillColor },
    { name: "S9", shape: "poly", coords: [1369, 124, 1471, 122, 1471, 362, 1368, 362], preFillColor: prefillColor, fillColor: fillColor },

    { name: "V-1", shape: "poly", coords: [628, 762, 837, 762, 837, 882, 628, 882], preFillColor: prefillColor, fillColor: fillColor },
    { name: "V-2", shape: "poly", coords: [1052, 763, 1264, 763, 1263, 882, 1052, 880], preFillColor: prefillColor, fillColor: fillColor },

    { name: "W-1", shape: "poly", coords: [415, 882, 484, 883, 484, 962, 559, 961, 559, 1003, 414, 1001], preFillColor: prefillColor, fillColor: fillColor },
    { name: "W-2", shape: "poly", coords: [837, 882, 908, 883, 906, 962, 980, 961, 980, 1003, 837, 1003], preFillColor: prefillColor, fillColor: fillColor },

    { name: "Wx-1", shape: "poly", coords: [482, 882, 559, 882, 559, 961, 485, 961], preFillColor: prefillColor, fillColor: fillColor },
    { name: "Wx-2", shape: "poly", coords: [906, 882, 982, 883, 982, 961, 906, 961], preFillColor: prefillColor, fillColor: fillColor },
    { name: "Wx-3", shape: "poly", coords: [1122, 883, 1195, 883, 1195, 961, 1122, 961], preFillColor: prefillColor, fillColor: fillColor },

    { name: "X-1", shape: "poly", coords: [628, 882, 732, 882, 733, 1003, 629, 1001], preFillColor: prefillColor, fillColor: fillColor },
    { name: "X-2", shape: "poly", coords: [1052, 882, 1120, 883, 1120, 962, 1194, 962, 1195, 1001, 1053, 1003], preFillColor: prefillColor, fillColor: fillColor },

    { name: "X1", shape: "poly", coords: [559, 883, 629, 882, 629, 1121, 559, 1121], preFillColor: prefillColor, fillColor: fillColor },
    { name: "X2", shape: "poly", coords: [732, 883, 836, 882, 835, 1121, 732, 1121], preFillColor: prefillColor, fillColor: fillColor },
    { name: "X3", shape: "poly", coords: [982, 882, 1051, 883, 1051, 1122, 982, 1121], preFillColor: prefillColor, fillColor: fillColor },
    { name: "X4", shape: "poly", coords: [1196, 883, 1264, 883, 1264, 1122, 1196, 1122], preFillColor: prefillColor, fillColor: fillColor },

    { name: "Y-1", shape: "poly", coords: [415, 1004, 559, 1001, 559, 1122, 415, 1122], preFillColor: prefillColor, fillColor: fillColor },
    { name: "Y-2", shape: "poly", coords: [837, 1004, 982, 1004, 982, 1121, 836, 1122], preFillColor: prefillColor, fillColor: fillColor },

    { name: "Z-1", shape: "poly", coords: [628, 1003, 733, 1003, 732, 1122, 629, 1122], preFillColor: prefillColor, fillColor: fillColor },
    { name: "Z-2", shape: "poly", coords: [1052, 1003, 1195, 1003, 1195, 1122, 1052, 1121], preFillColor: prefillColor, fillColor: fillColor },
];

export default mapAreas;