var numerals=numerals||{},numerals=function(){
    "use strict";function i(e){
        for(var n=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],t=[1e3,900,500,400,100,90,50,40,10,9,5,4,1],r="",a=0,o=0;o<n.length&&0!==e;o++)
            for(;t[o]<=e;)e-=t[o],r+=n[o],"M"===n[o]&&a++;
            return{numThousands:a,romanNumeral:r}
        }
    function n(e){e.decimal.value=Math.floor(e.decimal.value),e.roman.innerHTML=function(e){
        if(e<=0)return"";
        if(5e5<e)return alert("O número máximo suportado é 3999"),"";var n=i(e);
        if(4<=n.numThousands){
            for(var t="",r=0;r<n.numThousands;r++)t+="M";
            var a='<label class="thousands">'+i(n.numThousands).romanNumeral+"</label>",o=n.romanNumeral.replace(t,a)
        }
        else o=n.romanNumeral;return o
    }(e.decimal.value)}
    function r(e){""!==e.roman.innerHTML&&(e.decimal.value=f(e.roman.innerHTML),n(e))}
    var f=function(e){
        var n,t,r,a=0;-1!==e.indexOf('<label class="thousands">')&&((n=document.createRange()).selectNode(document.body),r=(t=n.createContextualFragment(e)).firstChild,a=1e3*f(r.innerText.toUpperCase()),r.remove(),e=t.textContent);
        for(var o=["M","D","C","L","X","V","I"],i=[1e3,500,100,50,10,5,1],m=0,u=0,d=0,c=0,l=(e=e.toUpperCase()).length;c<l;c++){
            for(var s=0,v=o.length;s<v;s++){
                if(o[s]===e.charAt(c)){u=i[s];break}u=0
        }
        if(0===u)return"";d<u&&(d*=-1),m+=d,d=u
        }
        return a+(m+=d)
    };return{init:function(){
        var t={container:document.getElementById("roman-numerals-widget"),decimal:document.getElementById("decimal-input"),decimal_btn:document.getElementById("decimal-convert"),roman:document.getElementById("roman-input"),roman_btn:document.getElementById("roman-convert")};t.container&&(t.decimal.addEventListener("keypress",function(e){13===e.which&&(n(t),e.preventDefault())}),t.roman.addEventListener("keypress",function(e){13===e.which&&(r(t),e.preventDefault())}),t.roman.addEventListener("keyup",function(){
            var e,n;0===t.roman.innerText.length&&(e=document.createElement("span"),n=t.roman.parentNode,e.id="roman-input",e.setAttribute("contenteditable","true"),e.setAttribute("style","margin-right: 4px"),t.roman.remove(),n.insertBefore(e,n.children[1]),numerals.init())
        }),t.decimal_btn.addEventListener("click",function(){n(t)}),t.roman_btn.addEventListener("click",function(){r(t)}))}}}();window[window.attachEvent?"attachEvent":"addEventListener"](window.attachEvent?"onload":"load",function(){numerals.init()},!1);