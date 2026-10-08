const ALL_VENDORS = ["Uline","Uline.ca","Whitebird","Packaging Hero","Boxery","Grainger","Staples","Global Industrial","Zoro","MSC Direct","Arka","PackagingPrice","UHAUL"];

const rawData = [
    {
        "l": 4,
        "w": 4,
        "h": 4,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.26,
                "b": 0.23,
                "s": "444"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.36,
                "b": 0.36,
                "s": "4x4x4 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 0.84,
                "b": 0.84,
                "s": "31544224"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.38,
                "b": 0.27,
                "s": "PH-102963"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.24,
                "b": 0.24,
                "s": "CXBCBC04"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.31,
                "b": 0.31,
                "s": "11K579"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.39,
                "b": 0.39,
                "s": "G4784543"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.52,
                "b": 0.52,
                "s": "40404"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.41,
                "b": 0.37,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.34,
                "b": 0.34,
                "s": "S-4040"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.47,
                "b": 0.47,
                "s": "S-4040"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.25,
                "b": 0.25,
                "s": "S-22101"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.34,
                "b": 0.34,
                "s": "S-22101"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.33,
                "b": 0.33,
                "s": "box-4x4x4-32c-kraft-regular-slotted-252500"
            }
        ]
    },
    {
        "l": 5,
        "w": 5,
        "h": 5,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.38,
                "b": 0.33,
                "s": "555"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.47,
                "b": 0.47,
                "s": "5x5x5 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 0.81,
                "b": 0.81,
                "s": "39553128"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.38,
                "b": 0.34,
                "s": "PH-103037"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.31,
                "b": 0.31,
                "s": "CXBCBC05"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.37,
                "b": 0.37,
                "s": "11K583"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.43,
                "b": 0.43,
                "s": "G7484556"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.52,
                "b": 0.52,
                "s": "555"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.46,
                "b": 0.42,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.43,
                "b": 0.43,
                "s": "S-4050"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.59,
                "b": 0.59,
                "s": "S-4050"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.36,
                "b": 0.36,
                "s": "S-22102"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.49,
                "b": 0.49,
                "s": "S-22102"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.47,
                "b": 0.47,
                "s": "box-5x5x5-32c-kraft-251500"
            }
        ]
    },
    {
        "l": 6,
        "w": 4,
        "h": 4,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.95,
                "b": 0.95,
                "s": "SB644"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.35,
                "b": 0.31,
                "s": "644"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.39,
                "b": 0.39,
                "s": "6x4x4 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.1,
                "b": 1.1,
                "s": "89819023"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.36,
                "b": 0.31,
                "s": "PH-103065"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.29,
                "b": 0.29,
                "s": "CXBSS14"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.33,
                "b": 0.33,
                "s": "11K584"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.47,
                "b": 0.47,
                "s": "G4285732"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.47,
                "b": 0.47,
                "s": "644"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.48,
                "b": 0.44,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.39,
                "b": 0.39,
                "s": "S-4060"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.53,
                "b": 0.53,
                "s": "S-4060"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.35,
                "b": 0.35,
                "s": "S-22103"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.48,
                "b": 0.48,
                "s": "S-22103"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.48,
                "b": 0.48,
                "s": "box-6x4x4-32c-kraft-251500"
            }
        ]
    },
    {
        "l": 6,
        "w": 6,
        "h": 4,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.77,
                "b": 0.77,
                "s": "BPN664"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.37,
                "b": 0.32,
                "s": "664"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.41,
                "b": 0.41,
                "s": "6x6x4 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.23,
                "b": 1.23,
                "s": "89819049"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.39,
                "b": 0.37,
                "s": "PH-103101"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.34,
                "b": 0.34,
                "s": "CXBSS16"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.32,
                "b": 0.32,
                "s": "11K587"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.39,
                "b": 0.39,
                "s": "G4285741"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.53,
                "b": 0.53,
                "s": "664"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.5,
                "b": 0.46,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.46,
                "b": 0.46,
                "s": "S-4061"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.63,
                "b": 0.63,
                "s": "S-4061"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.37,
                "b": 0.37,
                "s": "S-22104"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.51,
                "b": 0.51,
                "s": "S-22104"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.48,
                "b": 0.48,
                "s": "box-6x6x4-32c-kraft-252000"
            }
        ]
    },
    {
        "l": 6,
        "w": 6,
        "h": 6,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.5,
                "b": 0.5,
                "s": "BPN666"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.43,
                "b": 0.38,
                "s": "666"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.46,
                "b": 0.46,
                "s": "6x6x6 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.26,
                "b": 1.26,
                "s": "89819064"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.41,
                "b": 0.38,
                "s": "PH-103113"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.33,
                "b": 0.33,
                "s": "CXBCBC06"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.33,
                "b": 0.33,
                "s": "11K589"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.49,
                "b": 0.49,
                "s": "G4341486"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.62,
                "b": 0.62,
                "s": "BS060606"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.48,
                "b": 0.44,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.48,
                "b": 0.48,
                "s": "S-4062"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.66,
                "b": 0.66,
                "s": "S-4062"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.41,
                "b": 0.41,
                "s": "S-21014"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.56,
                "b": 0.56,
                "s": "S-21014"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.53,
                "b": 0.53,
                "s": "box-6x6x6-32c-kraft-251500"
            }
        ]
    },
    {
        "l": 8,
        "w": 6,
        "h": 4,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.56,
                "b": 0.56,
                "s": "BPN864"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.43,
                "b": 0.38,
                "s": "864"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.49,
                "b": 0.49,
                "s": "8x6x4 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.3,
                "b": 1.3,
                "s": "89819080"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.39,
                "b": 0.39,
                "s": "PH-103185"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.38,
                "b": 0.38,
                "s": "CXBSS18"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.35,
                "b": 0.35,
                "s": "11K604"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.57,
                "b": 0.57,
                "s": "G7596233"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.55,
                "b": 0.55,
                "s": "BS080604"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.59,
                "b": 0.54,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.49,
                "b": 0.49,
                "s": "S-4080"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.67,
                "b": 0.67,
                "s": "S-4080"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.43,
                "b": 0.43,
                "s": "S-19040"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.59,
                "b": 0.59,
                "s": "S-19040"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.56,
                "b": 0.56,
                "s": "box-8x6x4-23c-kraft-251500"
            }
        ]
    },
    {
        "l": 8,
        "w": 8,
        "h": 4,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.95,
                "b": 0.95,
                "s": "SB884"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.58,
                "b": 0.51,
                "s": "884"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.65,
                "b": 0.65,
                "s": "8x8x4 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.97,
                "b": 1.97,
                "s": "39549175"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.7,
                "b": 0.55,
                "s": "PH-103225"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.52,
                "b": 0.52,
                "s": "CXBSS884"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.55,
                "b": 0.55,
                "s": "11K609"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.52,
                "b": 0.52,
                "s": "G4341495"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.31,
                "b": 1.31,
                "s": "BS080804"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.81,
                "b": 0.75,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.69,
                "b": 0.69,
                "s": "S-4082"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.95,
                "b": 0.95,
                "s": "S-4082"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.58,
                "b": 0.58,
                "s": "S-19043"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.79,
                "b": 0.79,
                "s": "S-19043"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.75,
                "b": 0.75,
                "s": "box-8x8x4-32c-kraft-25750"
            }
        ]
    },
    {
        "l": 8,
        "w": 8,
        "h": 8,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.81,
                "b": 0.81,
                "s": "BPN888"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.6,
                "b": 0.52,
                "s": "888"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.76,
                "b": 0.76,
                "s": "8x8x8 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.9,
                "b": 1.9,
                "s": "89819122"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.7,
                "b": 0.56,
                "s": "PH-103245"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.55,
                "b": 0.55,
                "s": "CXBSS888"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.48,
                "b": 0.48,
                "s": "11K613"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.63,
                "b": 0.63,
                "s": "G4214506"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.82,
                "b": 0.82,
                "s": "80808"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.76,
                "b": 0.7,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.7,
                "b": 0.7,
                "s": "S-4084"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.96,
                "b": 0.96,
                "s": "S-4084"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.59,
                "b": 0.59,
                "s": "S-18336"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.81,
                "b": 0.81,
                "s": "S-18336"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.77,
                "b": 0.77,
                "s": "box-8x8x8-32c-kraft-25750"
            }
        ]
    },
    {
        "l": 9,
        "w": 9,
        "h": 9,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.71,
                "b": 0.63,
                "s": "999"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.79,
                "b": 0.79,
                "s": "9x9x9 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.08,
                "b": 2.08,
                "s": "39548797"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.82,
                "b": 0.62,
                "s": "PH-103319"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.63,
                "b": 0.63,
                "s": "CXBSS999"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.56,
                "b": 0.56,
                "s": "11K630"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.97,
                "b": 0.97,
                "s": "G7470014"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.32,
                "b": 1.32,
                "s": "999"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.85,
                "b": 0.79,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.87,
                "b": 0.87,
                "s": "S-4094"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.19,
                "b": 1.19,
                "s": "S-4094"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.7,
                "b": 0.7,
                "s": "S-19059"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.96,
                "b": 0.96,
                "s": "S-19059"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.91,
                "b": 0.91,
                "s": "box-9x9x9-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 10,
        "w": 8,
        "h": 6,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.79,
                "b": 0.79,
                "s": "BPN1086"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.59,
                "b": 0.52,
                "s": "1086"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.79,
                "b": 0.79,
                "s": "10x8x6 Standard Shipping Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.79,
                "b": 1.79,
                "s": "89819163"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.68,
                "b": 0.59,
                "s": "PH-101087"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.57,
                "b": 0.57,
                "s": "CXBSS24"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.51,
                "b": 0.51,
                "s": "11R186"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.77,
                "b": 0.77,
                "s": "G3982045"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.82,
                "b": 0.82,
                "s": "100806"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.78,
                "b": 0.71,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.74,
                "b": 0.74,
                "s": "S-4103"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.01,
                "b": 1.01,
                "s": "S-4103"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.64,
                "b": 0.64,
                "s": "S-18337"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.88,
                "b": 0.88,
                "s": "S-18337"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.81,
                "b": 0.81,
                "s": "box-10x8x6-32c-kraft-25750"
            }
        ]
    },
    {
        "l": 10,
        "w": 10,
        "h": 10,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 0.84,
                "b": 0.84,
                "s": "BPN101010"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.75,
                "b": 0.66,
                "s": "101010"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.8,
                "b": 0.8,
                "s": "10x10x10 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.64,
                "b": 2.64,
                "s": "89819221"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.97,
                "b": 0.77,
                "s": "PH-101001"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.66,
                "b": 0.66,
                "s": "CXBSS101010"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.61,
                "b": 0.61,
                "s": "11A675"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 0.84,
                "b": 0.84,
                "s": "55NM31"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.29,
                "b": 1.29,
                "s": "G0505277"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.19,
                "b": 1.19,
                "s": "G4285522"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.1,
                "b": 1.1,
                "s": "101010"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.93,
                "b": 0.85,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.89,
                "b": 0.89,
                "s": "S-4105"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.22,
                "b": 1.22,
                "s": "S-4105"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.71,
                "b": 0.71,
                "s": "S-18338"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.97,
                "b": 0.97,
                "s": "S-18338"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.92,
                "b": 0.92,
                "s": "box-10x10x10-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 12,
        "w": 6,
        "h": 6,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.62,
                "b": 0.54,
                "s": "1266"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.75,
                "b": 0.75,
                "s": "12x6x6 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.73,
                "b": 1.73,
                "s": "39554316"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.72,
                "b": 0.55,
                "s": "PH-101301"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.55,
                "b": 0.55,
                "s": "CXBSM1266"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.49,
                "b": 0.49,
                "s": "11R201"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.93,
                "b": 0.93,
                "s": "G7483472"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.09,
                "b": 1.09,
                "s": "1266"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 0.86,
                "b": 0.79,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.69,
                "b": 0.69,
                "s": "S-4128"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 0.95,
                "b": 0.95,
                "s": "S-4128"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.58,
                "b": 0.58,
                "s": "S-19063"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.79,
                "b": 0.79,
                "s": "S-19063"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.76,
                "b": 0.76,
                "s": "box-12x6x6-32c-kraft-25750"
            }
        ]
    },
    {
        "l": 12,
        "w": 9,
        "h": 4,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.49,
                "b": 1.49,
                "s": "SB1294"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.75,
                "b": 0.66,
                "s": "1294"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.8,
                "b": 0.8,
                "s": "12x9x4 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 1.56,
                "b": 1.56,
                "s": "39554381"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.94,
                "b": 0.71,
                "s": "PH-101335"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.64,
                "b": 0.64,
                "s": "CXBSM1294"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.57,
                "b": 0.57,
                "s": "11R210"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.69,
                "b": 0.69,
                "s": "G5140956"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.26,
                "b": 2.26,
                "s": "1294"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.5,
                "b": 1.38,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.89,
                "b": 0.89,
                "s": "S-4521"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.22,
                "b": 1.22,
                "s": "S-4521"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.71,
                "b": 0.71,
                "s": "S-19066"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 0.97,
                "b": 0.97,
                "s": "S-19066"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 0.91,
                "b": 0.91,
                "s": "box-12x9x4-32c-kraft-25750"
            }
        ]
    },
    {
        "l": 12,
        "w": 9,
        "h": 6,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.2,
                "b": 1.2,
                "s": "SB1296"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.8,
                "b": 0.71,
                "s": "1296"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.06,
                "b": 1.06,
                "s": "12x9x6 Standard Shipping Boxes"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.3,
                "b": 2.3,
                "s": "39547849"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.88,
                "b": 0.78,
                "s": "PH-101341"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.73,
                "b": 0.73,
                "s": "CXBSM1296"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.64,
                "b": 0.64,
                "s": "11R212"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.72,
                "b": 0.72,
                "s": "G4059544"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 0.96,
                "b": 0.96,
                "s": "120906"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.12,
                "b": 1.03,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 0.98,
                "b": 0.98,
                "s": "S-4406"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.34,
                "b": 1.34,
                "s": "S-4406"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.8,
                "b": 0.8,
                "s": "S-18339"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.1,
                "b": 1.1,
                "s": "S-18339"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.02,
                "b": 1.02,
                "s": "box-12x9x6-32c-kraft-25750"
            }
        ]
    },
    {
        "l": 12,
        "w": 10,
        "h": 6,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.8,
                "b": 0.7,
                "s": "12106"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.96,
                "b": 0.96,
                "s": "12x10x6 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.47,
                "b": 2.47,
                "s": "39547765"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 0.94,
                "b": 0.8,
                "s": "PH-101201"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.77,
                "b": 0.77,
                "s": "CXBSM28"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.69,
                "b": 0.69,
                "s": "11R325"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 0.94,
                "b": 0.94,
                "s": "55NM38"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.05,
                "b": 1.05,
                "s": "G0502888"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.86,
                "b": 0.86,
                "s": "G7453966"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.26,
                "b": 1.26,
                "s": "12106"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.31,
                "b": 1.21,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.0,
                "b": 1.0,
                "s": "S-4130"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.37,
                "b": 1.37,
                "s": "S-4130"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.86,
                "b": 0.86,
                "s": "S-18340"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.18,
                "b": 1.18,
                "s": "S-18340"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.1,
                "b": 1.1,
                "s": "box-12x10x6-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 12,
        "w": 10,
        "h": 8,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.04,
                "b": 1.04,
                "s": "BPN12108"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.9,
                "b": 0.79,
                "s": "12108"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.99,
                "b": 0.99,
                "s": "12x10x8 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.68,
                "b": 2.68,
                "s": "89819304"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.04,
                "b": 0.84,
                "s": "PH-101207"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.8,
                "b": 0.8,
                "s": "CXBSM30"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.71,
                "b": 0.71,
                "s": "11R327"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 0.96,
                "b": 0.96,
                "s": "55NM39"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.19,
                "b": 1.19,
                "s": "G0505356"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.93,
                "b": 0.93,
                "s": "G4285827"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.16,
                "b": 1.16,
                "s": "121008"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.2,
                "b": 1.1,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.02,
                "b": 1.02,
                "s": "S-4120"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.4,
                "b": 1.4,
                "s": "S-4120"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.88,
                "b": 0.88,
                "s": "S-18341"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.21,
                "b": 1.21,
                "s": "S-18341"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.22,
                "b": 1.22,
                "s": "box-12x10x8-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 12,
        "w": 12,
        "h": 4,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.86,
                "b": 0.76,
                "s": "12124"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.96,
                "b": 0.96,
                "s": "12x12x4 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.22,
                "b": 2.22,
                "s": "39547674"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.06,
                "b": 0.8,
                "s": "PH-101249"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.77,
                "b": 0.77,
                "s": "CXBSM12124"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.69,
                "b": 0.69,
                "s": "11R330"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.88,
                "b": 0.88,
                "s": "G7586896"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.31,
                "b": 1.31,
                "s": "121204"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.32,
                "b": 1.21,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.0,
                "b": 1.0,
                "s": "S-4215"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.37,
                "b": 1.37,
                "s": "S-4215"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.86,
                "b": 0.86,
                "s": "S-19068"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.18,
                "b": 1.18,
                "s": "S-19068"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.1,
                "b": 1.1,
                "s": "box-12x12x4-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 12,
        "w": 12,
        "h": 6,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.35,
                "b": 1.35,
                "s": "SB12126"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.95,
                "b": 0.83,
                "s": "12126"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.99,
                "b": 0.99,
                "s": "12x12x6 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.0,
                "b": 3.0,
                "s": "89819346"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.18,
                "b": 0.92,
                "s": "PH-101263"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.82,
                "b": 0.82,
                "s": "CXBSM12126"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.73,
                "b": 0.73,
                "s": "11R332"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.01,
                "b": 1.01,
                "s": "55NM41"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.29,
                "b": 1.29,
                "s": "G0503843"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.99,
                "b": 0.99,
                "s": "G4226896"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.29,
                "b": 1.29,
                "s": "121206"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.98,
                "b": 1.82,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.05,
                "b": 1.05,
                "s": "S-4122"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.44,
                "b": 1.44,
                "s": "S-4122"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.88,
                "b": 0.88,
                "s": "S-18342"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.21,
                "b": 1.21,
                "s": "S-18342"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.15,
                "b": 1.15,
                "s": "box-12x12x6-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 12,
        "w": 12,
        "h": 8,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.02,
                "b": 0.9,
                "s": "12128"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.21,
                "b": 1.21,
                "s": "12x12x8 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.44,
                "b": 2.44,
                "s": "39554563"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.24,
                "b": 1.08,
                "s": "PH-101275"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.89,
                "b": 0.89,
                "s": "CXBSM12128"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.78,
                "b": 0.78,
                "s": "11R334"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.06,
                "b": 1.06,
                "s": "55NM42"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.45,
                "b": 1.45,
                "s": "G0506013"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.25,
                "b": 1.25,
                "s": "G3954106"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.65,
                "b": 1.65,
                "s": "12128"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.52,
                "b": 1.4,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.12,
                "b": 1.12,
                "s": "S-4124"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.53,
                "b": 1.53,
                "s": "S-4124"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.98,
                "b": 0.98,
                "s": "S-18343"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.34,
                "b": 1.34,
                "s": "S-18343"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.25,
                "b": 1.25,
                "s": "box-12x12x8-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 12,
        "w": 12,
        "h": 10,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.1,
                "b": 0.97,
                "s": "121210"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.36,
                "b": 1.36,
                "s": "12x12x10 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.86,
                "b": 2.86,
                "s": "89819320"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.43,
                "b": 1.17,
                "s": "PH-101215"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.99,
                "b": 0.99,
                "s": "CXBSM121210"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.85,
                "b": 0.85,
                "s": "11A687"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.19,
                "b": 1.19,
                "s": "55NM43"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.59,
                "b": 1.59,
                "s": "G0505322"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.29,
                "b": 1.29,
                "s": "G7463504"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.8,
                "b": 1.8,
                "s": "121210"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.45,
                "b": 1.34,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.26,
                "b": 1.26,
                "s": "S-4126"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.73,
                "b": 1.73,
                "s": "S-4126"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.06,
                "b": 1.06,
                "s": "S-19069"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.45,
                "b": 1.45,
                "s": "S-19069"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.38,
                "b": 1.38,
                "s": "box-12x12x10-rsc-32c-kraft"
            }
        ]
    },
    {
        "l": 12,
        "w": 12,
        "h": 12,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.2,
                "b": 1.2,
                "s": "BPN121212"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.06,
                "b": 0.93,
                "s": "121212"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.11,
                "b": 1.11,
                "s": "12x12x12 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.79,
                "b": 3.79,
                "s": "89819270"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.38,
                "b": 1.1,
                "s": "PH-101221"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.92,
                "b": 0.92,
                "s": "CXBSM121212"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.94,
                "b": 0.94,
                "s": "11A689"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.09,
                "b": 1.09,
                "s": "55NM44"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.49,
                "b": 1.49,
                "s": "G0503545"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.29,
                "b": 1.29,
                "s": "G4285547"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.47,
                "b": 1.47,
                "s": "121212"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.47,
                "b": 1.35,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.16,
                "b": 1.16,
                "s": "S-4125"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.59,
                "b": 1.59,
                "s": "S-4125"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.0,
                "b": 1.0,
                "s": "S-18344"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.37,
                "b": 1.37,
                "s": "S-18344"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.29,
                "b": 1.29,
                "s": "box-12x12x12-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 14,
        "w": 10,
        "h": 6,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.99,
                "b": 1.99,
                "s": "SB14106"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 0.83,
                "b": 0.73,
                "s": "14106"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 0.97,
                "b": 0.97,
                "s": "14x10x6 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.64,
                "b": 2.64,
                "s": "39546908"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.11,
                "b": 0.82,
                "s": "PH-101459"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.8,
                "b": 0.8,
                "s": "CXBSM146 *"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.72,
                "b": 0.72,
                "s": "11R355"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 0.96,
                "b": 0.96,
                "s": "55NM49"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.19,
                "b": 1.19,
                "s": "G0502897"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 0.88,
                "b": 0.88,
                "s": "G7571033"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.26,
                "b": 1.26,
                "s": "14106"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.28,
                "b": 1.18,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.02,
                "b": 1.02,
                "s": "S-4233"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.4,
                "b": 1.4,
                "s": "S-4233"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.87,
                "b": 0.87,
                "s": "S-18345"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.19,
                "b": 1.19,
                "s": "S-18345"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.13,
                "b": 1.13,
                "s": "box-14x10x6-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 14,
        "w": 10,
        "h": 10,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.75,
                "b": 1.75,
                "s": "SB141010"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.01,
                "b": 0.89,
                "s": "141010"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.21,
                "b": 1.21,
                "s": "14x10x10 Boxes"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.35,
                "b": 2.35,
                "s": "39555081"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.3,
                "b": 0.91,
                "s": "PH-101443"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 0.9,
                "b": 0.9,
                "s": "CXBSM1410 *"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.78,
                "b": 0.78,
                "s": "11A707"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.06,
                "b": 1.06,
                "s": "55NM50"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.45,
                "b": 1.45,
                "s": "G0504647"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.29,
                "b": 1.29,
                "s": "G3910602"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.7,
                "b": 1.7,
                "s": "141010"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.37,
                "b": 1.26,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.12,
                "b": 1.12,
                "s": "S-4144"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.53,
                "b": 1.53,
                "s": "S-4144"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 0.98,
                "b": 0.98,
                "s": "S-18346"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.9,
                "b": 1.9,
                "s": "S-18346"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.25,
                "b": 1.25,
                "s": "box-14x10x10-32c-kraft-rsc-25500"
            }
        ]
    },
    {
        "l": 14,
        "w": 14,
        "h": 14,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.84,
                "b": 1.84,
                "s": "BPN141414"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.66,
                "b": 1.46,
                "s": "141414"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.75,
                "b": 1.75,
                "s": "14x14x14 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 5.04,
                "b": 5.04,
                "s": "89819312"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.77,
                "b": 1.59,
                "s": "PH-101499"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.45,
                "b": 1.45,
                "s": "CXBSM141414"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.25,
                "b": 1.25,
                "s": "11A713"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.72,
                "b": 1.72,
                "s": "55NM57"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.15,
                "b": 2.15,
                "s": "G0505986"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.69,
                "b": 1.69,
                "s": "G3928111"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.2,
                "b": 2.2,
                "s": "141414"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.89,
                "b": 1.74,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.82,
                "b": 1.82,
                "s": "S-4142"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.49,
                "b": 2.49,
                "s": "S-4142"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.56,
                "b": 1.56,
                "s": "S-18347"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.14,
                "b": 2.14,
                "s": "S-18347"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.02,
                "b": 2.02,
                "s": "box-14x14x14-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 15,
        "w": 15,
        "h": 15,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.82,
                "b": 1.6,
                "s": "151515"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 2.27,
                "b": 2.27,
                "s": "15x15x15 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.88,
                "b": 3.88,
                "s": "39555529"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 2.13,
                "b": 1.92,
                "s": "PH-101623"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.95,
                "b": 1.95,
                "s": "CXBSM151515"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.55,
                "b": 1.55,
                "s": "11A729"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.97,
                "b": 1.97,
                "s": "55NM60"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.55,
                "b": 2.55,
                "s": "G0503633"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.15,
                "b": 2.15,
                "s": "G7597791"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.65,
                "b": 2.65,
                "s": "151515"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.6,
                "b": 2.4,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.09,
                "b": 2.09,
                "s": "S-4318"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.86,
                "b": 2.86,
                "s": "S-4318"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.74,
                "b": 1.74,
                "s": "S-19073"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.38,
                "b": 2.38,
                "s": "S-19073"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.25,
                "b": 2.25,
                "s": "box-15x15x15-32c-kraft-25250-rsc"
            }
        ]
    },
    {
        "l": 16,
        "w": 12,
        "h": 8,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.14,
                "b": 1.01,
                "s": "16128"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.48,
                "b": 1.48,
                "s": "16x12x8 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.77,
                "b": 3.77,
                "s": "89819338"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.39,
                "b": 1.24,
                "s": "PH-101691"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.06,
                "b": 1.06,
                "s": "CXBSM36"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 0.96,
                "b": 0.96,
                "s": "11R389"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.29,
                "b": 1.29,
                "s": "55NM63"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.69,
                "b": 1.69,
                "s": "G0505198"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.55,
                "b": 1.55,
                "s": "G7600275"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.91,
                "b": 1.91,
                "s": "161208"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.25,
                "b": 1.25,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.37,
                "b": 1.37,
                "s": "S-4235"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 1.88,
                "b": 1.88,
                "s": "S-4235"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.16,
                "b": 1.16,
                "s": "S-18348"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.59,
                "b": 1.59,
                "s": "S-18348"
            }
        ]
    },
    {
        "l": 16,
        "w": 12,
        "h": 10,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.28,
                "b": 1.13,
                "s": "161210"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.41,
                "b": 1.41,
                "s": "16x12x10 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 4.09,
                "b": 4.09,
                "s": "89819353"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.51,
                "b": 1.21,
                "s": "PH-101671"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.15,
                "b": 1.15,
                "s": "CXBSM38"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.19,
                "b": 1.19,
                "s": "11A737"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.42,
                "b": 1.42,
                "s": "55NM64"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.09,
                "b": 2.09,
                "s": "G0504412"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.49,
                "b": 1.49,
                "s": "G4219984"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.17,
                "b": 2.17,
                "s": "161210"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.38,
                "b": 1.38,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.51,
                "b": 1.51,
                "s": "S-4160"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.07,
                "b": 2.07,
                "s": "S-4160"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.26,
                "b": 1.26,
                "s": "S-19074"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.73,
                "b": 1.73,
                "s": "S-19074"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.64,
                "b": 1.64,
                "s": "box-16x12x10-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 16,
        "w": 12,
        "h": 12,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 1.6,
                "b": 1.6,
                "s": "BPN161212"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.47,
                "b": 1.29,
                "s": "161212"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.73,
                "b": 1.73,
                "s": "16x12x12 Boxes"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.52,
                "b": 3.52,
                "s": "39555685"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.62,
                "b": 1.28,
                "s": "PH-101675"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.25,
                "b": 1.25,
                "s": "CXBSM161212"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.07,
                "b": 1.07,
                "s": "11A738"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.51,
                "b": 1.51,
                "s": "55NM65"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.99,
                "b": 1.99,
                "s": "G0504087"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.59,
                "b": 1.59,
                "s": "G4092182"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.8,
                "b": 1.8,
                "s": "161212"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.11,
                "b": 1.94,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.6,
                "b": 1.6,
                "s": "S-4163"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.19,
                "b": 2.19,
                "s": "S-4163"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.34,
                "b": 1.34,
                "s": "S-18349"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.84,
                "b": 1.84,
                "s": "S-18349"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.73,
                "b": 1.73,
                "s": "box-16x12x12-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 16,
        "w": 16,
        "h": 8,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.55,
                "b": 1.36,
                "s": "16168"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.94,
                "b": 1.94,
                "s": "16x16x8 Box"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.89,
                "b": 3.89,
                "s": "39555784"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.93,
                "b": 1.44,
                "s": "PH-101757"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.4,
                "b": 1.4,
                "s": "CXBSM16168"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.23,
                "b": 1.23,
                "s": "11R396"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.7,
                "b": 1.7,
                "s": "55NM68"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.25,
                "b": 2.25,
                "s": "G0503484"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.95,
                "b": 1.95,
                "s": "G4341705"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.6,
                "b": 2.6,
                "s": "16168"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.79,
                "b": 2.57,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.8,
                "b": 1.8,
                "s": "S-4393"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.47,
                "b": 2.47,
                "s": "S-4393"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.51,
                "b": 1.51,
                "s": "S-18350"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.07,
                "b": 2.07,
                "s": "S-18350"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.95,
                "b": 1.95,
                "s": "box-16x16x8-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 16,
        "w": 16,
        "h": 16,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 2.8,
                "b": 2.8,
                "s": "SB16"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.16,
                "b": 1.9,
                "s": "161616"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 2.19,
                "b": 2.19,
                "s": "16x16x16 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 6.25,
                "b": 6.25,
                "s": "89819569"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 2.29,
                "b": 2.03,
                "s": "PH-101725"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.8,
                "b": 1.8,
                "s": "CXBSM161616"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.56,
                "b": 1.56,
                "s": "11A747"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.18,
                "b": 2.18,
                "s": "55NM71"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 3.05,
                "b": 3.05,
                "s": "G0505952"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.15,
                "b": 2.15,
                "s": "G4285556"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.8,
                "b": 2.8,
                "s": "161616"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.56,
                "b": 2.35,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.29,
                "b": 2.29,
                "s": "S-4166"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 3.14,
                "b": 3.14,
                "s": "S-4166"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.95,
                "b": 1.95,
                "s": "S-18351"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.67,
                "b": 2.67,
                "s": "S-18351"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.53,
                "b": 2.53,
                "s": "box-16x16x16-32c-kraft-25125"
            }
        ]
    },
    {
        "l": 18,
        "w": 12,
        "h": 6,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 2.15,
                "b": 2.15,
                "s": "SB18126"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.29,
                "b": 1.14,
                "s": "18126"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.68,
                "b": 2.68,
                "s": "31011877"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.44,
                "b": 1.23,
                "s": "PH-101897"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.18,
                "b": 1.18,
                "s": "CXBSM18126"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.05,
                "b": 1.05,
                "s": "11R410"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.45,
                "b": 1.45,
                "s": "55NM75"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.59,
                "b": 1.59,
                "s": "G0503667"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.39,
                "b": 1.39,
                "s": "G7448856"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.62,
                "b": 1.62,
                "s": "181206"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.51,
                "b": 1.39,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.54,
                "b": 1.54,
                "s": "S-4187"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.11,
                "b": 2.11,
                "s": "S-4187"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.3,
                "b": 1.3,
                "s": "S-18352"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.78,
                "b": 1.78,
                "s": "S-18352"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.68,
                "b": 1.68,
                "s": "box-18x12x6-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 18,
        "w": 12,
        "h": 8,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.37,
                "b": 1.21,
                "s": "18128"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 2.86,
                "b": 2.86,
                "s": "39545389"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.86,
                "b": 1.33,
                "s": "PH-101907"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.25,
                "b": 1.25,
                "s": "CXBSM18128"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.06,
                "b": 1.06,
                "s": "11R412"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.49,
                "b": 1.49,
                "s": "55NM76"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.15,
                "b": 2.15,
                "s": "G0504787"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.69,
                "b": 1.69,
                "s": "G7513633"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.32,
                "b": 2.32,
                "s": "181208"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.19,
                "b": 2.01,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.58,
                "b": 1.58,
                "s": "S-4188"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.16,
                "b": 2.16,
                "s": "S-4188"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.33,
                "b": 1.33,
                "s": "S-19076"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.82,
                "b": 1.82,
                "s": "S-19076"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.72,
                "b": 1.72,
                "s": "box-18x12x8-32c-kraft-25500"
            }
        ]
    },
    {
        "l": 18,
        "w": 12,
        "h": 10,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.34,
                "b": 1.18,
                "s": "181210"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.54,
                "b": 1.54,
                "s": "18x12x10 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.59,
                "b": 3.59,
                "s": "39556238"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.76,
                "b": 1.42,
                "s": "PH-101871"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.28,
                "b": 1.28,
                "s": "CXBSM181210"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.1,
                "b": 1.1,
                "s": "11A761"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.53,
                "b": 1.53,
                "s": "55NM77"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.89,
                "b": 1.89,
                "s": "G0503186"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.55,
                "b": 1.55,
                "s": "G7540967"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.97,
                "b": 2.97,
                "s": "181210"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.01,
                "b": 1.85,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.62,
                "b": 1.62,
                "s": "S-4189"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.22,
                "b": 2.22,
                "s": "S-4189"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.37,
                "b": 1.37,
                "s": "S-19842"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.88,
                "b": 1.88,
                "s": "S-19842"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.77,
                "b": 1.77,
                "s": "box-18x12x10-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 18,
        "w": 12,
        "h": 12,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 2.25,
                "b": 2.25,
                "s": "SB181212"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.53,
                "b": 1.35,
                "s": "181212"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.81,
                "b": 1.81,
                "s": "18x12x12 Standard Shipping Boxes"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.04,
                "b": 3.04,
                "s": "39556246"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.84,
                "b": 1.37,
                "s": "PH-101875"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.5,
                "b": 1.5,
                "s": "CXBSM181212"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.13,
                "b": 1.13,
                "s": "11A762"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.57,
                "b": 1.57,
                "s": "55NM78"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.99,
                "b": 1.99,
                "s": "G0507368"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 1.69,
                "b": 1.69,
                "s": "G4285565"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 1.89,
                "b": 1.89,
                "s": "181212"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 1.95,
                "b": 1.79,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.66,
                "b": 1.66,
                "s": "S-4181"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.27,
                "b": 2.27,
                "s": "S-4181"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.39,
                "b": 1.39,
                "s": "S-18353"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 1.9,
                "b": 1.9,
                "s": "S-18353"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.8,
                "b": 1.8,
                "s": "box-18x12x12-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 18,
        "w": 14,
        "h": 12,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.21,
                "b": 1.95,
                "s": "181412"
            },
            {
                "v": "Arka",
                "g": "32 ECT",
                "p": 1.84,
                "b": 1.84,
                "s": "18x14x12 Blank Shippers"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 5.59,
                "b": 5.59,
                "s": "89819387"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 2.12,
                "b": 1.8,
                "s": "PH-101923"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.53,
                "b": 1.53,
                "s": "CXBSM44"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.32,
                "b": 1.32,
                "s": "11A767"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.89,
                "b": 1.89,
                "s": "55NM82"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.45,
                "b": 2.45,
                "s": "G0504297"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.05,
                "b": 2.05,
                "s": "G4341215"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.31,
                "b": 2.31,
                "s": "181412"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.72,
                "b": 2.5,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.0,
                "b": 2.0,
                "s": "S-4183"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.74,
                "b": 2.74,
                "s": "S-4183"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.64,
                "b": 1.64,
                "s": "S-18354"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.25,
                "b": 2.25,
                "s": "S-18354"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.14,
                "b": 2.14,
                "s": "box-18x14x12-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 18,
        "w": 18,
        "h": 12,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.23,
                "b": 1.96,
                "s": "181812"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 4.97,
                "b": 4.97,
                "s": "39556394"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 2.49,
                "b": 2.24,
                "s": "PH-101951"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.95,
                "b": 1.95,
                "s": "CXBSM181812"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.96,
                "b": 1.96,
                "s": "60YP84"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.34,
                "b": 2.34,
                "s": "55NM86"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.99,
                "b": 2.99,
                "s": "G0505137"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.55,
                "b": 2.55,
                "s": "G600906068"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 3.62,
                "b": 3.62,
                "s": "181812"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 3.25,
                "b": 2.99,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.48,
                "b": 2.48,
                "s": "S-4399"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 3.4,
                "b": 3.4,
                "s": "S-4399"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 2.08,
                "b": 2.08,
                "s": "S-18355"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.85,
                "b": 2.85,
                "s": "S-18355"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 5.16,
                "b": 4.03,
                "s": "box-18x18x12-8-6-32c-kraft-multi-d-25120"
            }
        ]
    },
    {
        "l": 18,
        "w": 18,
        "h": 18,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 3.9,
                "b": 3.9,
                "s": "SB18"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.78,
                "b": 2.44,
                "s": "181818"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 8.08,
                "b": 8.08,
                "s": "89819577"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 3.1,
                "b": 2.79,
                "s": "PH-101961"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.25,
                "b": 2.25,
                "s": "CXBSM181818"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 2.26,
                "b": 2.26,
                "s": "11A777"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.7,
                "b": 2.7,
                "s": "55NM88"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 3.49,
                "b": 3.49,
                "s": "G0507063"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 3.59,
                "b": 3.59,
                "s": "G4285574"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 3.46,
                "b": 3.46,
                "s": "181818"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 3.59,
                "b": 3.3,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.86,
                "b": 2.86,
                "s": "S-4185"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 3.92,
                "b": 3.92,
                "s": "S-4185"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 2.4,
                "b": 2.4,
                "s": "S-18356"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 3.29,
                "b": 3.29,
                "s": "S-18356"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 3.11,
                "b": 3.11,
                "s": "box-18x18x18-32c-kraft-20120"
            }
        ]
    },
    {
        "l": 20,
        "w": 12,
        "h": 12,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.6,
                "b": 1.41,
                "s": "201212"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 6.82,
                "b": 6.82,
                "s": "39544754"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.89,
                "b": 1.52,
                "s": "PH-102039"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 1.49,
                "b": 1.49,
                "s": "CXBSL201212"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.3,
                "b": 1.3,
                "s": "493T75"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.79,
                "b": 1.79,
                "s": "55NM91"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.99,
                "b": 1.99,
                "s": "G0506616"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.39,
                "b": 2.39,
                "s": "G1607022"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.55,
                "b": 2.55,
                "s": "201212"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.34,
                "b": 2.15,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.9,
                "b": 1.9,
                "s": "S-4204"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.6,
                "b": 2.6,
                "s": "S-4204"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.6,
                "b": 1.6,
                "s": "S-19847"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.19,
                "b": 2.19,
                "s": "S-19847"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.05,
                "b": 2.05,
                "s": "box-20x12x12-32c-kraft-20240-rsc"
            }
        ]
    },
    {
        "l": 20,
        "w": 14,
        "h": 6,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.55,
                "b": 1.37,
                "s": "20146"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 3.04,
                "b": 3.04,
                "s": "39544713"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 1.81,
                "b": 1.63,
                "s": "PH-102073"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.18,
                "b": 1.18,
                "s": "11R430"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.65,
                "b": 1.65,
                "s": "55NM92"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.05,
                "b": 2.05,
                "s": "G0505557"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.39,
                "b": 2.39,
                "s": "G0694526"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.02,
                "b": 2.02,
                "s": "201406"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.16,
                "b": 1.99,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 1.75,
                "b": 1.75,
                "s": "S-4542"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.4,
                "b": 2.4,
                "s": "S-4542"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.47,
                "b": 1.47,
                "s": "S-21040"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.01,
                "b": 2.01,
                "s": "S-21040"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 1.91,
                "b": 1.91,
                "s": "box-20x14x6-32c-kraft-25250"
            }
        ]
    },
    {
        "l": 20,
        "w": 14,
        "h": 12,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.86,
                "b": 1.64,
                "s": "201412"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 4.8,
                "b": 4.8,
                "s": "39544671"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 2.33,
                "b": 2.1,
                "s": "PH-102059"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.86,
                "b": 2.43,
                "s": "CXBSL201412"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.49,
                "b": 1.49,
                "s": "11A791"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.06,
                "b": 2.06,
                "s": "55NM94"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 2.55,
                "b": 2.55,
                "s": "G0502784"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.25,
                "b": 2.25,
                "s": "G4108063"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.99,
                "b": 2.99,
                "s": "201412"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 2.53,
                "b": 2.32,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.18,
                "b": 2.18,
                "s": "S-4206"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.99,
                "b": 2.99,
                "s": "S-4206"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.82,
                "b": 1.82,
                "s": "S-20471"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.49,
                "b": 2.49,
                "s": "S-20471"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.55,
                "b": 2.55,
                "s": "box-20x14x12-32c-kraft-rsc-25250"
            }
        ]
    },
    {
        "l": 20,
        "w": 16,
        "h": 14,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 3.25,
                "b": 3.25,
                "s": "SB201614"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.24,
                "b": 1.97,
                "s": "201614"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 4.91,
                "b": 4.91,
                "s": "39544580"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 2.44,
                "b": 2.2,
                "s": "PH-102091"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.05,
                "b": 2.05,
                "s": "CXBSL50"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 2.08,
                "b": 2.08,
                "s": "60YP87"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.5,
                "b": 2.5,
                "s": "55NM97"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 3.19,
                "b": 3.19,
                "s": "G0503308"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.29,
                "b": 2.29,
                "s": "G3056378"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 4.11,
                "b": 4.11,
                "s": "201614"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 3.25,
                "b": 2.99,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.65,
                "b": 2.65,
                "s": "S-4200"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 3.63,
                "b": 3.63,
                "s": "S-4200"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 2.2,
                "b": 2.2,
                "s": "S-18357"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 3.01,
                "b": 3.01,
                "s": "S-18357"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.87,
                "b": 2.87,
                "s": "box-20x16x14-32c-kraft-20240"
            }
        ]
    },
    {
        "l": 20,
        "w": 20,
        "h": 12,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.63,
                "b": 2.31,
                "s": "202012"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 6.82,
                "b": 6.82,
                "s": "39556865"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 3.32,
                "b": 2.54,
                "s": "PH-102127"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.3,
                "b": 2.3,
                "s": "CXBSL202012"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 2.35,
                "b": 2.35,
                "s": "60YP90"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.73,
                "b": 2.73,
                "s": "55NN03"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 3.95,
                "b": 3.95,
                "s": "G0506135"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.99,
                "b": 2.99,
                "s": "G000906118"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 3.97,
                "b": 3.97,
                "s": "202012"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 4.32,
                "b": 3.97,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.89,
                "b": 2.89,
                "s": "S-4210"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 3.96,
                "b": 3.96,
                "s": "S-4210"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 2.47,
                "b": 2.47,
                "s": "S-18358"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 3.38,
                "b": 3.38,
                "s": "S-18358"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 3.21,
                "b": 3.21,
                "s": "box-20x20x12-32c-20120"
            }
        ]
    },
    {
        "l": 20,
        "w": 20,
        "h": 20,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 4.25,
                "b": 4.25,
                "s": "SB20"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.33,
                "b": 2.93,
                "s": "202020"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 6.62,
                "b": 6.62,
                "s": "31453202"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 3.52,
                "b": 2.97,
                "s": "PH-102139"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.88,
                "b": 2.88,
                "s": "CXBSL202020"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 2.5,
                "b": 2.5,
                "s": "493T86"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 3.5,
                "b": 3.5,
                "s": "55NN04"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 5.05,
                "b": 5.05,
                "s": "G0504394"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 5.75,
                "b": 5.75,
                "s": "G1607214"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 4.55,
                "b": 4.55,
                "s": "202020"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 4.23,
                "b": 3.89,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 3.71,
                "b": 3.71,
                "s": "S-4201"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 5.08,
                "b": 5.08,
                "s": "S-4201"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 3.11,
                "b": 3.11,
                "s": "S-18359"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 4.26,
                "b": 4.26,
                "s": "S-18359"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 4.0,
                "b": 4.0,
                "s": "box-20x20x20-32c-kraft-20120"
            }
        ]
    },
    {
        "l": 24,
        "w": 12,
        "h": 12,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 4.99,
                "b": 4.99,
                "s": "SB241212"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 1.83,
                "b": 1.61,
                "s": "241212"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 5.26,
                "b": 5.26,
                "s": "39543731"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 2.31,
                "b": 1.66,
                "s": "PH-102317"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.34,
                "b": 2.16,
                "s": "CXBSL241212"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 1.36,
                "b": 1.36,
                "s": "493T97"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 1.95,
                "b": 1.95,
                "s": "55NN12"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 1.99,
                "b": 1.99,
                "s": "G0506056"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.15,
                "b": 2.15,
                "s": "G0454940"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 2.3,
                "b": 2.3,
                "s": "241212"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 3.54,
                "b": 3.26,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 2.07,
                "b": 2.07,
                "s": "S-4243"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 2.84,
                "b": 2.84,
                "s": "S-4243"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 1.7,
                "b": 1.7,
                "s": "S-18360"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 2.33,
                "b": 2.33,
                "s": "S-18360"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 2.2,
                "b": 2.2,
                "s": "box-24x24x12-32c-kraft-20120"
            }
        ]
    },
    {
        "l": 24,
        "w": 16,
        "h": 16,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.65,
                "b": 2.33,
                "s": "241616"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 6.2,
                "b": 6.2,
                "s": "39557491"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 3.23,
                "b": 2.77,
                "s": "PH-102365"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 2.42,
                "b": 2.42,
                "s": "60YP94"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.92,
                "b": 2.92,
                "s": "55NN18"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 3.79,
                "b": 3.79,
                "s": "G0504902"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 2.99,
                "b": 2.99,
                "s": "G400920783"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 3.64,
                "b": 3.35,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 3.1,
                "b": 3.1,
                "s": "S-4218"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 4.25,
                "b": 4.25,
                "s": "S-4218"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 2.57,
                "b": 2.57,
                "s": "S-21031"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 3.52,
                "b": 3.52,
                "s": "S-21031"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 4.01,
                "b": 4.01,
                "s": "box-24x16x16-32c-kraft-20120"
            }
        ]
    },
    {
        "l": 24,
        "w": 18,
        "h": 12,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 3.85,
                "b": 3.85,
                "s": "SB241812"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.65,
                "b": 2.33,
                "s": "241812"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 6.1,
                "b": 6.1,
                "s": "39557533"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 3.18,
                "b": 2.32,
                "s": "PH-102385"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.35,
                "b": 2.35,
                "s": "CXBSL241812"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 2.11,
                "b": 2.11,
                "s": "493U08"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 2.86,
                "b": 2.86,
                "s": "55NN19"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 3.79,
                "b": 3.79,
                "s": "G0506485"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 3.55,
                "b": 3.55,
                "s": "G1607363"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 4.03,
                "b": 4.03,
                "s": "241812"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 3.58,
                "b": 3.29,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 3.03,
                "b": 3.03,
                "s": "S-4219"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 4.15,
                "b": 4.15,
                "s": "S-4219"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 2.54,
                "b": 2.54,
                "s": "S-19818"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 3.48,
                "b": 3.48,
                "s": "S-19818"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 3.07,
                "b": 3.07,
                "s": "box-24x18x12-32c-kraft-rsc-20120"
            }
        ]
    },
    {
        "l": 24,
        "w": 18,
        "h": 18,
        "offers": [
            {
                "v": "UHAUL",
                "g": "Standard",
                "p": 4.25,
                "b": 4.25,
                "s": "SB241818"
            },
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 2.11,
                "b": 1.86,
                "s": "241818"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 8.37,
                "b": 8.37,
                "s": "39543467"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 4.11,
                "b": 3.05,
                "s": "PH-102391"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 2.99,
                "b": 2.99,
                "s": "CXBSL60"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 3.01,
                "b": 3.01,
                "s": "60YP96"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 3.59,
                "b": 3.59,
                "s": "55NN20"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 4.39,
                "b": 4.39,
                "s": "G0505672"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 3.95,
                "b": 3.95,
                "s": "G500906175"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 4.36,
                "b": 4.36,
                "s": "241818"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 4.48,
                "b": 4.12,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 3.81,
                "b": 3.81,
                "s": "S-4340"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 5.22,
                "b": 5.22,
                "s": "S-4340"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 3.19,
                "b": 3.19,
                "s": "S-19077"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 4.37,
                "b": 4.37,
                "s": "S-19077"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 4.12,
                "b": 4.12,
                "s": "box-24x18x18-32c-kraft-20120"
            }
        ]
    },
    {
        "l": 24,
        "w": 24,
        "h": 12,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 3.49,
                "b": 3.07,
                "s": "242412"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 9.08,
                "b": 9.08,
                "s": "39557699"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 4.53,
                "b": 3.16,
                "s": "PH-102429"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 4.99,
                "b": 3.92,
                "s": "CXBSL242412"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 3.04,
                "b": 3.04,
                "s": "60YP97"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 3.65,
                "b": 3.65,
                "s": "55NN22"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 6.75,
                "b": 6.75,
                "s": "G0503003"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 4.99,
                "b": 4.99,
                "s": "G900920801"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 4.35,
                "b": 4.35,
                "s": "242412"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 5.9,
                "b": 5.4,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 3.87,
                "b": 3.87,
                "s": "S-4320"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 5.3,
                "b": 5.3,
                "s": "S-4320"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 3.22,
                "b": 3.22,
                "s": "S-22210"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 4.41,
                "b": 4.41,
                "s": "S-22210"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 4.18,
                "b": 4.18,
                "s": "box-24x24x12-32c-kraft-20120"
            }
        ]
    },
    {
        "l": 24,
        "w": 24,
        "h": 24,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 4.94,
                "b": 4.35,
                "s": "242424"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 14.72,
                "b": 14.72,
                "s": "89819593"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 5.23,
                "b": 4.36,
                "s": "PH-102441"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 4.25,
                "b": 4.25,
                "s": "CXBSL242424"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 4.28,
                "b": 4.28,
                "s": "493U23"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 5.14,
                "b": 5.14,
                "s": "55NN23"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 9.19,
                "b": 9.19,
                "s": "G0506144"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 10.15,
                "b": 10.15,
                "s": "G1606060"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 6.36,
                "b": 6.36,
                "s": "242424"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 7.9,
                "b": 7.3,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 5.45,
                "b": 5.45,
                "s": "S-4247"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 7.47,
                "b": 7.47,
                "s": "S-4247"
            },
            {
                "v": "Uline",
                "g": "32 ECT",
                "p": 4.54,
                "b": 4.54,
                "s": "S-19078"
            },
            {
                "v": "Uline.ca",
                "g": "32 ECT",
                "p": 6.22,
                "b": 6.22,
                "s": "S-19078"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 5.87,
                "b": 5.87,
                "s": "box-24x24x24-32c-kraft-15120"
            }
        ]
    },
    {
        "l": 36,
        "w": 36,
        "h": 36,
        "offers": [
            {
                "v": "PackagingPrice",
                "g": "32 ECT",
                "p": 14.14,
                "b": 12.44,
                "s": "363636"
            },
            {
                "v": "MSC Direct",
                "g": "32 ECT",
                "p": 31.69,
                "b": 31.69,
                "s": "39558887"
            },
            {
                "v": "Packaging Hero",
                "g": "32 ECT",
                "p": 15.32,
                "b": 13.79,
                "s": "PH-102889"
            },
            {
                "v": "Boxery",
                "g": "32 ECT",
                "p": 13.9,
                "b": 13.9,
                "s": "CXBCBC36"
            },
            {
                "v": "Grainger",
                "g": "32 ECT",
                "p": 11.95,
                "b": 11.95,
                "s": "11G188"
            },
            {
                "v": "Grainger",
                "g": "200#",
                "p": 11.16,
                "b": 11.16,
                "s": "55NN30"
            },
            {
                "v": "Zoro",
                "g": "200#",
                "p": 34.15,
                "b": 34.15,
                "s": "G0503676"
            },
            {
                "v": "Zoro",
                "g": "32 ECT",
                "p": 24.65,
                "b": 24.65,
                "s": "G4341346"
            },
            {
                "v": "Staples",
                "g": "Standard",
                "p": 23.22,
                "b": 23.22,
                "s": "363636"
            },
            {
                "v": "Global Industrial",
                "g": "Standard",
                "p": 17.0,
                "b": 15.75,
                "s": "N/A"
            },
            {
                "v": "Uline",
                "g": "200#",
                "p": 11.83,
                "b": 11.83,
                "s": "S-4193"
            },
            {
                "v": "Uline.ca",
                "g": "200#",
                "p": 16.21,
                "b": 16.21,
                "s": "S-4193"
            },
            {
                "v": "Whitebird",
                "g": "32 ECT",
                "p": 16.9,
                "b": 16.9,
                "s": "box-36x36x36-32c-kraft-5120"
            }
        ]
    }
];

// Safely export for Node (Vercel Build) OR bind to Window for Browser (Local Desktop)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { rawData, ALL_VENDORS };
} else if (typeof window !== 'undefined') {
    window.rawData = rawData;
    window.ALL_VENDORS = ALL_VENDORS;
}