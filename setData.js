import { bicycles, cards } from "./data.js";


document.addEventListener('DOMContentLoaded', ()=>{
    const listData = document.querySelector('.items-con');
    const cardData = document.querySelector('.cards')

    let bicycleOutput = '';
    let cardOutput = '';

    
    bicycles.forEach((bicycle) => {
        bicycleOutput+=`
        <a href="./itemPage.html" class="item-link">
        <div class="item contain">
            <div class="item-image-con">
                <img src="./assets/by1.jpg" alt="" class="item-image">
                <div class="item-tag">$${bicycle.price}.00
                </div>
            </div>
            <div class="item-desc">
                <div class="item-title">
                    ${bicycle.name}
                </div>
                <div class="item-detail">
                  ${bicycle.desc}
                </div>
                <div class="item-action">
                   <div class="item-rent">Rent</div>
                </div>

            </div>
        </div>
      </a>
        
        
        
        
        `
    })

    cards.forEach((card) =>{
        cardOutput +=` 
        <div class="card">
        <div class="prof-img">
            <img src="" alt="">
        </div>
        <div class="profil-desc">
          <div class="review">
          ${card.review}
          </div>
          <div class="rev-name">${card.name}</div>
        </div>

    </div>
        
        
        
        
        `

    })
    
    listData.innerHTML = bicycleOutput
    cardData.innerHTML = cardOutput
});