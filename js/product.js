document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector("#filter-button");
    filterButton.addEventListener("click", ()=> {
        // 商品カードを全部取得する
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const productCard = document.querySelectorAll(".product-card");
        // チェックされている項目を取得する
        const typeChecklist = [];
        const methodChecklist = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                if (checkbox.dataset.group === "type") {
                    typeChecklist.push(checkbox.value);
                } else if (checkbox.dataset.group === "method") {
                    methodChecklist.push(checkbox.value);
                }
            }
        })

        let hitCount = 0;
        const hitText = document.querySelector("#hit-count");
        const hitNumber = document.querySelector("#hit-number");

        productCard.forEach((card) => {
            const hasTypeCheck = typeChecklist.length > 0;
            const hasMethodCheck = methodChecklist.length > 0;
            const matchType = typeChecklist.includes(card.dataset.type);
            const matchMethod = methodChecklist.includes(card.dataset.method);

            const isHit = 
                (!hasTypeCheck && !hasMethodCheck) ||
                (hasTypeCheck && !hasMethodCheck && matchType) ||
                (!hasTypeCheck && hasMethodCheck && matchMethod) ||
                (matchType && matchMethod);

            if(isHit) {
                card.classList.remove("remove");
                hitCount++;
            } else {
                card.classList.add("remove");
            }

            // if(!hasTypeCheck && !hasMethodCheck) {
            //     card.classList.remove("remove");
            //     hitCount++;
            // } else if (hasTypeCheck && !hasMethodCheck) {
            //     if(matchType) {
            //         card.classList.remove("remove");
            //         hitCount++;
            //     } else {
            //         card.classList.add("remove");
            //     }
            // } else if (!hasTypeCheck && hasMethodCheck) {
            //     if(matchMethod) {
            //         card.classList.remove("remove");
            //         hitCount++;
            //     } else {
            //         card.classList.add("remove");
            //     }
            // } else {
            //     if (matchType && matchMethod) {
            //         card.classList.remove("remove");
            //         hitCount++;
            //     } else {
            //         card.classList.add("remove");
            //     }
            // }
            // hitCountText.textContent = `${hitCount}件の商品が見つかりました`;
        })
        if(hitCount === 0) {
            hitText.textContent = "条件に一致する商品は見つかりませんでした";
        } else {
            hitText.innerHTML = `<span id="hit-number">${hitCount} </span>件の商品が見つかりました`
        }
    })
})