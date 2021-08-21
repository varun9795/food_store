import * as actionTypes from './food-types';

const INITIAL_STATE={
    product:[{
    id: 1,
   img: "https://images.indianexpress.com/2020/04/Dhokla-759.jpg",
    title: "Dhokla",
    category:"Breakfast",
    price:'150',
    info:"I know once people get connected to real food, they never change back."
},
    {id: 2,
   img: "https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Chole Bhature",
    category:"Breakfast",
    price:'110',
    info:"I know once people get connected to real food, they never change back."   
    },
  {id: 3,
   img: "https://unsplash.com/photos/PLyJqEJVre0/download?force=true&w=1920",
    title: "Pan Cake",
    category:"Breakfast",
    price:'500',
    info:"I know once people get connected to real food, they never change back."   
    },
  {id: 4,
   img: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Chole",
    category:"Lunch",
    price:'50',
    info:"I know once people get connected to real food, they never change back."   
    },
  {id: 5,
   img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Pasta",
    category:"Dinner",
    price:'250',
    info:"I know once people get connected to real food, they never change back."   
    },
  {id: 6,
   img: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Sambhar Rice",
    category:"Lunch",
    price:'150',
    info:"I know once people get connected to real food, they never change back."   
    },
  {id: 7,
   img: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Burger",
    category:"Dinner",
    price:'80',
    info:"I know once people get connected to real food, they never change back."   
    },
  {id: 8,
   img: "https://images.pexels.com/photos/4078047/pexels-photo-4078047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "MOMOS",
    category:"Lunch",
    price:'100',
    info:"I know once people get connected to real food, they never change back."   
    },
  {id: 9,
   img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "shahi roll",
    category:"Dinner",
    price:'130',
    info:"I know once people get connected to real food, they never change back."   
}
       , {
            id:101,
            img:"https://i0.wp.com/vegecravings.com/wp-content/uploads/2021/02/Mayonnaise-Sandwish-Recipe-Step-By-Step-Instructions-scaled.jpg?resize=1536%2C1134&quality=65&strip=all&ssl=1",
            title:'Sandwich',
            category:"Breakfast",
            price:'300',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        },
    
        {
            id:102,
            img:"https://crummbs.co.uk/wp-content/uploads/2016/10/Diner-SidePack1-PWF-0582-940x626.jpg",
            title:'Diner double',
            category:"Lunch",
            price:'400',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        },
    
        {
            id:103,
            img:"https://www.thespruceeats.com/thmb/_pYLAKicdeaRPjK5B3jorHGZFxg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-oreo-milkshake-recipe-4038636-hero-01-5c1d540346e0fb000109272e.jpg",
            title:'Oreo shake',
            category:"Shake",
            price:'200',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        },
    
        {
            id:104,
            img:"https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title:'Paneer Naan',
            category:"Dinner",
            price:'200',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        },
    
        {
            id:105,
            img:"https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title:'Burger',
            category:"Breakfast",
            price:'150',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        },
        {
            id:106,
            img:"https://akm-img-a-in.tosshub.com/sites/pakwangali/images/stories/072015/chole_bhature_pakwan_520_070815033739.jpg?size=482:325",
            title:'Chole Bhtaure',
            category:"Dinner",
            price:'200',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        },
        {
            id:107,
            img:"https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title:'Pizza',
            category:"Lunch",
            price:'200',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        },
        {
            id:108,
            img:"https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title:'Milk Shake',
            category:"Shake",
            price:'200',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        }, {
            id:109,
            img:"https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title:'Idli',
            category:"Dinner",
            price:'200',
            info:'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
        }
    ],
    cart:[],
}

const foodReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item=state.product.find(prod=>prod.id===action.payload.id);
            const inCart=state.cart.find(item=>item.id===action.payload.id ? true:false);
            return{
                ...state,
                cart:inCart ? state.cart.map(item=>item.id===action.payload.id ? {...item,qty:item.qty+1} : item):[...state.cart,{...item,qty:1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter(item=>item.id!==action.payload.id),
            };
        default: 
            return state;       
    }

}

export default foodReducer;