const e={inputDelay:document.querySelector("input[name=delay]"),inputStep:document.querySelector("input[name=step]"),inputAmount:document.querySelector("input[name=amount]"),btn:document.querySelector(".btn")};function t(e,t){return new Promise(((n,u)=>{setTimeout((()=>{Math.random()>.3?n(`Fulfilled promise ${e} in ${t}ms`):u(`Rejected promise ${e} in ${t}ms`)}),t)}))}e.btn.addEventListener("click",(function(){const n=Number(e.inputDelay.value),u=Number(e.inputStep.value),o=Number(e.inputAmount.value);let i=0,m=n;for(let e=1;e<=o;e+=1)i+=e,m+=u,t(i,m).then(((e,t)=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch(((e,t)=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.7a23b380.js.map