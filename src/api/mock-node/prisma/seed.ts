import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
    const user1Ulid = '01GTQVCPSGHRCP3V9DTFFKWTD3'
    const record1Ulid = '01GTQVMP7895WEFWJ3K8RZRBBP'
    const record2Ulid = '01GTRHGXE2WKDB05XJX7CFT48Z'
    const record3Ulid = '01GTRHHAA5RQ593EP0TEV4570T'
    const record4Ulid = '01GTRHHMXBN2VSKSPW09QWJQGX'
    const record5Ulid = '01GTRHJ5XYGV740TS1WRZ7NPTQ'
    const record6Ulid = '01GTRHJXQYSEC3ACJFDQC9EGQM'
    const record7Ulid = '01GTRHKA9Y4DZN8TB70RMF98N3'
    const record8Ulid = '01GTRHKMH4K6AFB0KZE5K1F3HE'
    const record9Ulid = '01GTRHM1B2S371V15M365JAYW6'
    const record10Ulid = '01GTRHMBPKJPZ6ZQEFZJ6ZDFN1'
    const record11Ulid = '01GTRHN7Q5DPA3RSK0P0V97TRG'
    const record12Ulid = '01GTRHNHKNYNHVJMWAHVV5VPB0'
    const record13Ulid = '01GTRHNYC70AWHWEAKR9M5TR7P'
    const record14Ulid = '01GTRHP8Q30TYSKZZE97ZS0H0P'
    const record15Ulid = '01GTRHPNM1T3RNR1NRZSEX6CYD'
    const record16Ulid = '01GTRHQ120HV04V8DMY363RVB1'
    const record17Ulid = '01GTRHQBZ8SN95FHN5PYF95NAG'
    const record18Ulid = '01GTRHQN758GN41EBZ3DGH37VJ'
    const record19Ulid = '01GTRHQZ5DM4V95REZ60HTTMRQ'
    const record20Ulid = '01GTRHR7S0S9G4H4RFCJ8RTYTR'
    const record21Ulid = '01GTRMBD0JQ5FQGSY13H3A6BRJ'
    const record22Ulid = '01GTRMBR75NB4J8TPBVN84T0X7'
    const record23Ulid = '01GTRMC27WQEESP8Q944YA2CCM'
    const record24Ulid = '01GTRMCE8JD3Z8TFVT0DMNP1S2'
    const record25Ulid = '01GTRMCSSXH8TQ5J3S56WGT0V9'
    const record26Ulid = '01GTRMD6N0B3SZE1JD1A62X1NS'
    const record27Ulid = '01GTRMF13VAWXSZ5CJB9FZHNRX'
    const record28Ulid = '01GTRMFB9WP4M8KT6CR0Q0RM2S'
    const record29Ulid = '01GTRMFTVHSQ41MGN6CPWBJ6WN'
    const record30Ulid = '01GTRMG5H56ZNGY9B7AAD2Y9CA'
    const record31Ulid = '01GTRMGNG2CC5VX9HR0S675G29'
    const record32Ulid = '01GTRMH0P8ZQ5PEN6CC7VTJZSK'
    const record33Ulid = '01GTRMHCN5WYP0G6KWDM3JY6NW'
    const record34Ulid = '01GTRMHTCZ0T1RCEP3TFWWZ103'
    const record35Ulid = '01GTRMJ6908D2V3QAM20DG9Y7T'
    const record36Ulid = '01GTRMJH1GM7GFJ0T7CMGBS358'
    const record37Ulid = '01GTRMPMP0S6NPWERS6D2MAJDH'
    const user1 = await prisma.m_user.upsert({
        where: { id: user1Ulid },
        update: {},
        create: {
            id: user1Ulid,
            userName: 'user1',
            password: null,
            category1s: {
                create: [
                    {
                        category1Id: 1,
                        category1Name: '住居費',
                        category2s: {
                            create: [
                                {
                                    category2Id: 1,
                                    category2Name: '家賃',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '三井エステート',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 2,
                                    category2Name: '日用品代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: 'E薬局',
                                            },
                                            {
                                                shopId: 2,
                                                shopName: 'F薬局',
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2s: {
                            create: [
                                {
                                    category2Id: 1,
                                    category2Name: '電気代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '東京電力',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 2,
                                    category2Name: 'ガス代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '東京ガス',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 3,
                                    category2Name: '水道代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '新宿水道局',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 4,
                                    category2Name: '通信費',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: 'Jcom',
                                            },
                                            {
                                                shopId: 2,
                                                shopName: 'Mineo',
                                            }
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        category1Id: 3,
                        category1Name: '医療費',
                        category2s: {
                            create: [
                                {
                                    category2Id: 1,
                                    category2Name: '病院代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '済生会',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 2,
                                    category2Name: '保険代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '日本生命',
                                            }
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        category1Id: 4,
                        category1Name: '食費',
                        category2s: {
                            create: [
                                {
                                    category2Id: 1,
                                    category2Name: '外食代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '叙々苑',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 2,
                                    category2Name: '食材費',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: 'Aマート',
                                            },
                                            {
                                                shopId: 2,
                                                shopName: 'Bスーパー',
                                            }
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        category1Id: 5,
                        category1Name: '教育費',
                        category2s: {
                            create: [
                                {
                                    category2Id: 1,
                                    category2Name: '塾・習い事',
                                },
                                {
                                    category2Id: 2,
                                    category2Name: '筆記具',
                                },
                                {
                                    category2Id: 3,
                                    category2Name: '学費',
                                },
                            ]
                        }
                    },
                    {
                        category1Id: 6,
                        category1Name: '特別費',
                        category2s: {
                            create: [
                                {
                                    category2Id: 1,
                                    category2Name: '交際費',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: '渋谷飲み会',
                                            },
                                            {
                                                shopId: 2,
                                                shopName: '友達にプレゼント',
                                            },
                                            {
                                                shopId: 3,
                                                shopName: '新宿飲み会',
                                            },
                                            {
                                                shopId: 4,
                                                shopName: '旅行',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 2,
                                    category2Name: '衣服代',
                                    shops: {
                                        create: [
                                            {
                                                shopId: 1,
                                                shopName: 'ユニクロ',
                                            }
                                        ]
                                    }
                                },
                                {
                                    category2Id: 3,
                                    category2Name: 'その他',
                                },
                            ]
                        }
                    },
                ]
            },
            paymentTypes: {
                create: [
                    {
                        paymentTypeId: 1,
                        paymentTypeName: 'クレジットカードA',
                    },
                    {
                        paymentTypeId: 2,
                        paymentTypeName: 'クレジットカードB',
                    },
                    {
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                    },
                    {
                        paymentTypeId: 4,
                        paymentTypeName: '電子決済B',
                    },
                    {
                        paymentTypeId: 5,
                        paymentTypeName: '電子決済C',
                    },
                    {
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                    },
                ]
            },
            buyers: {
                create: [
                    {
                        buyerId: 1,
                        buyerName: '夫'
                    },
                    {
                        buyerId: 2,
                        buyerName: '妻'
                    },
                    {
                        buyerId: 3,
                        buyerName: '娘'
                    },
                ]
            },
            records: {
                create: [
                    {
                        id: record1Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 4, 0, 0, 0),
                        price: 6000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record2Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 4, 0, 0, 0),
                        price: 2000,
                        category1Id: 1,
                        category1Name: '住居費',
                        category2Id: 2,
                        category2Name: '日用品代',
                        shopId: 1,
                        shopName: 'E薬局',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record3Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 7, 0, 0, 0),
                        price: 10000,
                        category1Id: 6,
                        category1Name: '特別費',
                        category2Id: 2,
                        category2Name: '衣服代',
                        shopId: 1,
                        shopName: 'ユニクロ',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record4Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 7, 0, 0, 0),
                        price: 5000,
                        category1Id: 6,
                        category1Name: '特別費',
                        category2Id: 1,
                        category2Name: '交際費',
                        shopId: 3,
                        shopName: '渋谷飲み会',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record5Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 8, 0, 0, 0),
                        price: 7000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record6Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 14, 0, 0, 0),
                        price: 5000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record7Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 14, 0, 0, 0),
                        price: 3000,
                        category1Id: 1,
                        category1Name: '住居費',
                        category2Id: 2,
                        category2Name: '日用品代',
                        shopId: 2,
                        shopName: 'F薬局',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record8Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 20, 0, 0, 0),
                        price: 8000,
                        category1Id: 6,
                        category1Name: '特別費',
                        category2Id: 1,
                        category2Name: '交際費',
                        shopId: 2,
                        shopName: '友達にプレゼント',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record9Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 20, 0, 0, 0),
                        price: 7000,
                        category1Id: 6,
                        category1Name: '特別費',
                        category2Id: 1,
                        category2Name: '交際費',
                        shopId: 3,
                        shopName: '新宿飲み会',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record10Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 20, 0, 0, 0),
                        price: 4000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record11Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 20, 0, 0, 0),
                        price: 2000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 2,
                        shopName: 'Bスーパー',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record12Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 25, 0, 0, 0),
                        price: 5000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record13Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 27, 0, 0, 0),
                        price: 4000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 3,
                        category2Name: '水道代',
                        shopId: 1,
                        shopName: '新宿水道局',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record14Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 27, 0, 0, 0),
                        price: 7000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 1,
                        category2Name: '電気代',
                        shopId: 1,
                        shopName: '東京電力',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record15Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 27, 0, 0, 0),
                        price: 5000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 2,
                        category2Name: 'ガス代',
                        shopId: 2,
                        shopName: '東京ガス',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record16Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 27, 0, 0, 0),
                        price: 100000,
                        category1Id: 1,
                        category1Name: '住居費',
                        category2Id: 1,
                        category2Name: '家賃',
                        shopId: 1,
                        shopName: '三井エステート',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record17Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 7, 0, 0, 0),
                        price: 3000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 4,
                        category2Name: '通信費',
                        shopId: 1,
                        shopName: 'Jcom',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record18Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 27, 0, 0, 0),
                        price: 2000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 4,
                        category2Name: '通信費',
                        shopId: 2,
                        shopName: 'Mineo',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record19Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 7, 0, 0, 0),
                        price: 6000,
                        category1Id: 3,
                        category1Name: '医療費',
                        category2Id: 2,
                        category2Name: '保険代',
                        shopId: 1,
                        shopName: '日本生命',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record20Ulid,
                        accountedMonth: '202301',
                        accountedAt: new Date(2023, 0, 30, 0, 0, 0),
                        price: 6000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record21Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 2, 0, 0, 0),
                        price: 8000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 4,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record22Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 4, 0, 0, 0),
                        price: 13000,
                        category1Id: 3,
                        category1Name: '医療費',
                        category2Id: 1,
                        category2Name: '病院代',
                        shopId: 1,
                        shopName: '済生会',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record23Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 5, 0, 0, 0),
                        price: 20000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 1,
                        category2Name: '外食代',
                        shopId: 1,
                        shopName: '叙々苑',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record24Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 8, 0, 0, 0),
                        price: 7000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record25Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 8, 0, 0, 0),
                        price: 4000,
                        category1Id: 1,
                        category1Name: '住居費',
                        category2Id: 2,
                        category2Name: '日用品代',
                        shopId: 2,
                        shopName: 'F薬局',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record26Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 10, 0, 0, 0),
                        price: 7000,
                        category1Id: 6,
                        category1Name: '特別費',
                        category2Id: 1,
                        category2Name: '交際費',
                        shopId: 3,
                        shopName: '新宿飲み会',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record27Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 15, 0, 0, 0),
                        price: 3000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record28Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 20, 0, 0, 0),
                        price: 200000,
                        category1Id: 6,
                        category1Name: '特別費',
                        category2Id: 1,
                        category2Name: '交際費',
                        shopId: 4,
                        shopName: '旅行',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record29Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 20, 0, 0, 0),
                        price: 7000,
                        category1Id: 6,
                        category1Name: '特別費',
                        category2Id: 1,
                        category2Name: '交際費',
                        shopId: 1,
                        shopName: '渋谷飲み会',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                    {
                        id: record30Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 27, 0, 0, 0),
                        price: 4000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 3,
                        category2Name: '水道代',
                        shopId: 1,
                        shopName: '新宿水道局',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record31Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 27, 0, 0, 0),
                        price: 7000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 1,
                        category2Name: '電気代',
                        shopId: 1,
                        shopName: '東京電力',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record32Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 27, 0, 0, 0),
                        price: 5000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 2,
                        category2Name: 'ガス代',
                        shopId: 1,
                        shopName: '東京ガス',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record33Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 27, 0, 0, 0),
                        price: 100000,
                        category1Id: 1,
                        category1Name: '住居費',
                        category2Id: 1,
                        category2Name: '家賃',
                        shopId: 1,
                        shopName: '三井エステート',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record34Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 27, 0, 0, 0),
                        price: 3000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 4,
                        category2Name: '通信費',
                        shopId: 1,
                        shopName: 'Jcom',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record35Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 2, 0, 0, 0),
                        price: 2000,
                        category1Id: 2,
                        category1Name: 'インフラ',
                        category2Id: 4,
                        category2Name: '通信費',
                        shopId: 2,
                        shopName: 'Mineo',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record36Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 27, 0, 0, 0),
                        price: 6000,
                        category1Id: 3,
                        category1Name: '医療費',
                        category2Id: 2,
                        category2Name: '保険代',
                        shopId: 1,
                        shopName: '日本生命',
                        paymentTypeId: 3,
                        paymentTypeName: '電子決済A',
                        buyerId: 1,
                        buyerName: '夫',
                    },
                    {
                        id: record37Ulid,
                        accountedMonth: '202302',
                        accountedAt: new Date(2023, 1, 27, 0, 0, 0),
                        price: 6000,
                        category1Id: 4,
                        category1Name: '食費',
                        category2Id: 2,
                        category2Name: '食材費',
                        shopId: 1,
                        shopName: 'Aマート',
                        paymentTypeId: 6,
                        paymentTypeName: '現金',
                        buyerId: 2,
                        buyerName: '妻',
                    },
                ]              
            }
        }
    })
    console.log({ user1 })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })