import { useTranslation } from "react-i18next"



 export function Api(){
    const [t] = useTranslation("global")
    let options;

    return  options = [[
        {
            id : 1,
            name: t("home.coffee_types.nature.washed"),
            option: [t("home.coffee_types.Washed.Sidamo Grade 2"),
                t("home.coffee_types.Washed.Yirgacheffe Grade 2"),
                    t("home.coffee_types.Washed.Bebeka Grade 2"),
                        t("home.coffee_types.Washed.Lekemti Grade 2"),
                            t("home.coffee_types.Washed.Tepi Grade 2"),
                                t("home.coffee_types.Washed.Limu Grade 2"),
                                t("home.coffee_types.Washed.Guji Grade 2")],
        },
        {
            id: 2,
            name: t("home.coffee_types.nature.Unwashed"),
            option: [t("home.coffee_types.UnWashed.Guji Gr3 & 4"),
                t("home.coffee_types.UnWashed.Sidamo Gr3 & 4"),
                    t("home.coffee_types.UnWashed.Lekemti Gr4 & 5"),
                        t("home.coffee_types.UnWashed.Yirgacheffe Gr3 & 4"),
                            t("home.coffee_types.UnWashed.Djimma Gr4 & 5"),
                                t("home.coffee_types.UnWashed.Harar grade 4"),],
        },
        {
            id: 3,
            name: t("home.coffee_types.nature.special"),
            option: [t("home.coffee_types.Special.Limu"),
                t("home.coffee_types.Special.Sidamo specialty"),
                    t("home.coffee_types.Special.Yirgacheffe specialty"),
                        t("home.coffee_types.Special.Guji washed and unwashed specialty")]
        }
    ],
    [
        {
            id: 1,
            name: "Yirga Chefie Coffe",
            desc: "Internationally Known and recognized as Yirgachaffee Brand Name.Grown coffee and has intense flavor known as flora. Has fine acidity and rich body. May rosters are attracted to its fine and flavor and are willing to pay a premium price for it."
        },
        {
            id:2,
            name: "Limu Coffee",
            desc: "Spicy and Winy flavor and attracts many roasters specially Europe and USA, has good acidity and body, washed Limmu is one of premium coffee, medium sized bean and greenish- bluish in color mostly round in shape."
        },
        {
            id: 3,
            name: "Djimmah Coffee",
            desc: "Altitude heavy bodied cup with winy after test can be prepared as washed and sun dried."
        },
        {
            id: 4,
            name: "Lekemti Origin",
            desc: " Medium-to-bold bean known for its fruity taste, has greenish-brownish in color with good acidity and body, there are many roasters who put its flavor in their blends, but it can also sold as an original gourmet or special original flavor."
        }
    ],
    [
        {
            id: 1,
            name: "what is Our company's initiatvie vission ?",
            desc: "To become the leading Quality coffee exporting company that is always demanded by its customers"
        },
        {
            id: 2,
            name: "What is Our Company's main misssion ?",
            desc: " Our mission is to ensure continuous supply of best quality coffee to the world market through implementing improved and modern coffee production practices and supply chain activities."
        },
        {
            id: 3,
            name: "Our Company's Core values",
            desc: "Giving priority to quality, Continuous learning for improvements, Innovation Professionalism Social responsibility Team work High Respect to our customers"
        },
        {
            id: 4,
            name: "What are our supplly chain ?",
            desc: "The main supply chain of the company is from the framer we plan to establishing coffee processing site and also works with different coffee producing farmers located at Oromia regional state Guji zone and Sidamo regional states by establishing vertical integration with the local producers that supply high quality specialty and conventional coffees."
        },
        {
            id: 5,
            name: "What is our Company's export plan for upcoming years",
            desc: " The company plans to export more than three thousand metric ton of green coffee beans for the 2023/24 fiscal year and its export volume is increasing since its time of establishment and working to expand its export to different parts of the world."
        }
    ]
]
    



}

// export const coffeeItems = [
//     {
//         id: 1,
//         name: "Yirga Chefie Coffe",
//         desc: "Internationally Known and recognized as Yirgachaffee Brand Name.Grown coffee and has intense flavor known as flora. Has fine acidity and rich body. May rosters are attracted to its fine and flavor and are willing to pay a premium price for it."
//     },
//     {
//         id:2,
//         name: "Limu Coffee",
//         desc: "Spicy and Winy flavor and attracts many roasters specially Europe and USA, has good acidity and body, washed Limmu is one of premium coffee, medium sized bean and greenish- bluish in color mostly round in shape."
//     },
//     {
//         id: 3,
//         name: "Djimmah Coffee",
//         desc: "Altitude heavy bodied cup with winy after test can be prepared as washed and sun dried."
//     },
//     {
//         id: 4,
//         name: "Lekemti Origin",
//         desc: " Medium-to-bold bean known for its fruity taste, has greenish-brownish in color with good acidity and body, there are many roasters who put its flavor in their blends, but it can also sold as an original gourmet or special original flavor."
//     }
// ]

// export const moreChoice = [
//     {
//         id: 1,
//         name: "what is Our company's initiatvie vission ?",
//         desc: "To become the leading Quality coffee exporting company that is always demanded by its customers"
//     },
//     {
//         id: 2,
//         name: "What is Our Company's main misssion ?",
//         desc: " Our mission is to ensure continuous supply of best quality coffee to the world market through implementing improved and modern coffee production practices and supply chain activities."
//     },
//     {
//         id: 3,
//         name: "Our Company's Core values",
//         desc: "Giving priority to quality, Continuous learning for improvements, Innovation Professionalism Social responsibility Team work High Respect to our customers"
//     },
//     {
//         id: 4,
//         name: "What are our supplly chain ?",
//         desc: "The main supply chain of the company is from the framer we plan to establishing coffee processing site and also works with different coffee producing farmers located at Oromia regional state Guji zone and Sidamo regional states by establishing vertical integration with the local producers that supply high quality specialty and conventional coffees."
//     },
//     {
//         id: 5,
//         name: "What is our Company's export plan for upcoming years",
//         desc: " The company plans to export more than three thousand metric ton of green coffee beans for the 2023/24 fiscal year and its export volume is increasing since its time of establishment and working to expand its export to different parts of the world."
//     }
// ]

