import { bicycles } from "./data";


document.addEventListener('DOMContentLoaded', ()=>{
    const listData = document.querySelector('.items-con');

    let output = '';
    
    bicycles.forEach((bicycles) => {
        output+=`
        <a href="./itemPage.html" class="item-link">
        <div class="item contain">
            <div class="item-image-con">
                <img src="./assets/img2.jpg" alt="" class="item-image">
                <div class="item-tag">$200</div>
            </div>
            <div class="item-desc">
                <div class="item-title">
                    ${bicycles.title}
                </div>
                <div class="item-detail">
                    Good for outing rides <br/> rides rides
                </div>
                <div class="item-action">
                   <div class="item-price"> </div>
                   <div class="item-rent">Rent</div>
                </div>

            </div>
        </div>
      </a>
        
        
        
        
        `
    })
    
    listData.innerHTML = output
});