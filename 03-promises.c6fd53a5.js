!function(){var e=document.querySelector(".form"),n=e.elements[3],o=e.elements.amount,t=e.elements.delay,a=e.elements.step;function c(e,n){return new Promise((function(o,t){var a=Math.random()>.3;setTimeout((function(){a?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}n.addEventListener("click",(function(e){e.preventDefault(),+o.value;for(var n=1;n<=o.value;n+=1)c(n,t.value).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),+a.value+ +t.value}))}();
//# sourceMappingURL=03-promises.c6fd53a5.js.map