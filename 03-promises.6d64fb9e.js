const e=document.querySelector(".form"),t=e.elements[3],o=e.elements.amount,n=e.elements.delay,l=e.elements.step;let s;function i(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}t.addEventListener("click",(function(e){e.preventDefault(),s=+o.value;for(let e=1;e<=o.value;e+=1)i(e,n.value).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),s=+l.value+ +n.value}));
//# sourceMappingURL=03-promises.6d64fb9e.js.map