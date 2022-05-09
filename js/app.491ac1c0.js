(function(){"use strict";var e={6938:function(e,t,o){var s=o(9242),r=o(3396);function i(e,t,o,s,i,n){const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(a)}var n={},a=o(89);const l=(0,a.Z)(n,[["render",i]]);var c=l,d=o(678);const u=e=>((0,r.dD)("data-v-5fdaa3ca"),e=e(),(0,r.Cn)(),e),p={class:"home"},m=u((()=>(0,r._)("span",null,"Товар успешно добавлен!",-1))),h={class:"home__container container"},_={class:"home__row"},v={class:"home__left"},f=u((()=>(0,r._)("h1",{class:"home__title"},"Добавление товара",-1))),g={class:"home__right"};function b(e,t,o,s,i,n){const a=(0,r.up)("my-dialog"),l=(0,r.up)("post-form"),c=(0,r.up)("my-select"),d=(0,r.up)("post-list");return(0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(a,{class:"home__dialog",show:i.dialogVisible,"onUpdate:show":t[0]||(t[0]=e=>i.dialogVisible=e)},{default:(0,r.w5)((()=>[m])),_:1},8,["show"]),(0,r._)("div",h,[(0,r._)("div",_,[(0,r._)("div",v,[f,(0,r.Wm)(l,{onCreate:n.createPost,class:"home__form"},null,8,["onCreate"])]),(0,r._)("div",g,[(0,r.Wm)(c,{options:i.sortOptions,onSelect:n.selectOption,class:"home__select"},null,8,["options","onSelect"]),(0,r.Wm)(d,{posts:n.sortedPosts,onRemove:n.removePost,class:"home__list-item"},null,8,["posts","onRemove"])])])])])}const w={class:"form__inputs"},y=(0,r.Uk)("Добавить товар");function k(e,t,o,i,n,a){const l=(0,r.up)("my-input"),c=(0,r.up)("my-textarea"),d=(0,r.up)("my-button");return(0,r.wg)(),(0,r.iD)("form",{class:"form",onSubmit:t[4]||(t[4]=(0,s.iM)((()=>{}),["prevent"]))},[(0,r._)("div",w,[(0,r.Wm)(l,{class:"form__input",id:"name-id",label:"Наименование товара",placeholder:"Введите наименование товара",required:!0,modelValue:n.post.title,"onUpdate:modelValue":t[0]||(t[0]=e=>n.post.title=e)},null,8,["modelValue"]),(0,r.Wm)(c,{class:"form__input",id:"desc-id",label:"Описание товара",placeholder:"Введите описание товара",required:!1,modelValue:n.post.desc,"onUpdate:modelValue":t[1]||(t[1]=e=>n.post.desc=e)},null,8,["modelValue"]),(0,r.Wm)(l,{class:"form__input",id:"img-id",label:"Ссылка на изображение товара",placeholder:"Введите ссылку",required:!0,modelValue:n.post.img,"onUpdate:modelValue":t[2]||(t[2]=e=>n.post.img=e)},null,8,["modelValue"]),(0,r.Wm)(l,{class:"form__input",id:"cost-id",label:"Цена товара",placeholder:"Введите цену",required:!0,modelValue:n.post.cost,"onUpdate:modelValue":t[3]||(t[3]=e=>n.post.cost=e),onInput:a.numberDivide},null,8,["modelValue","onInput"])]),(0,r.Wm)(d,{onClick:a.createPost,class:"form__button",disabled:n.disabledForm},{default:(0,r.w5)((()=>[y])),_:1},8,["onClick","disabled"])],32)}var I={data(){return{post:{id:"",title:"",desc:"",img:"",cost:""},disabledForm:!0}},methods:{numberDivide(e){const t=e.target.value.replace(/[^\d.]/g,"");this.post.cost=t.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$& ")},createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={id:"",title:"",desc:"",img:"",cost:""}},validateForm(){this.post.title&&this.post.img&&this.post.cost?this.disabledForm=!1:this.disabledForm=!0}},watch:{post:{handler(){this.validateForm()},deep:!0}}};const V=(0,a.Z)(I,[["render",k],["__scopeId","data-v-9422174a"]]);var S=V;const q={class:"post-list"};function D(e,t,o,i,n,a){const l=(0,r.up)("post");return(0,r.wg)(),(0,r.iD)("div",q,[(0,r.Wm)(s.W3,{name:"post-animate-list"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.posts,(t=>((0,r.wg)(),(0,r.j4)(l,{post:t,key:t.id,onRemove:o=>e.$emit("remove",t),class:"post-list__item"},null,8,["post","onRemove"])))),128))])),_:1})])}var O=o(7139),C=o.p+"img/delete.1d0ae866.svg";const j=e=>((0,r.dD)("data-v-511171ac"),e=e(),(0,r.Cn)(),e),W={class:"post"},E=j((()=>(0,r._)("img",{src:C,alt:""},null,-1))),P=[E],x={class:"post__img"},Z=["src"],$={class:"post__info"},F={class:"post__name"},z={class:"post__desc"},N={class:"post__cost"};function T(e,t,o,i,n,a){return(0,r.wg)(),(0,r.iD)("div",W,[(0,r._)("a",{href:"",onClick:t[0]||(t[0]=(0,s.iM)((t=>e.$emit("remove",o.post)),["prevent"])),class:"post__delete"},P),(0,r._)("div",x,[(0,r._)("img",{src:o.post.img,alt:""},null,8,Z)]),(0,r._)("div",$,[(0,r._)("h4",F,(0,O.zw)(o.post.title),1),(0,r._)("p",z,(0,O.zw)(o.post.desc),1),(0,r._)("p",N,(0,O.zw)(o.post.cost)+" руб.",1)])])}var U={props:{post:{type:Object,required:!0}}};const B=(0,a.Z)(U,[["render",T],["__scopeId","data-v-511171ac"]]);var M=B,R={components:{Post:M},props:{posts:{type:Array,required:!0}}};const J=(0,a.Z)(R,[["render",D],["__scopeId","data-v-a210c488"]]);var L=J,A={components:{PostForm:S,PostList:L},data(){return{dialogVisible:!1,posts:JSON.parse(localStorage.getItem("products"))??[],sortOptions:[{name:"По наименованию",value:"title"},{name:"По возрастанию цены",value:"price-up"},{name:"По убыванию цены",value:"price-down"}],selectedSort:""}},methods:{selectOption(e){this.selectedSort=e.value},createPost(e){this.posts.push(e),localStorage.setItem("products",JSON.stringify(this.posts)),this.dialogVisible=!0,setTimeout((()=>{this.dialogVisible=!1}),2e3)},removePost(e){this.posts=this.posts.filter((t=>t.id!==e.id)),localStorage.setItem("products",JSON.stringify(this.posts))}},computed:{sortedPosts(){switch(this.selectedSort){case"price-up":return[...this.posts].sort(((e,t)=>{const o=+e.cost.split(" ").join(""),s=+t.cost.split(" ").join("");return o-s}));case"price-down":return[...this.posts].sort(((e,t)=>{const o=+e.cost.split(" ").join(""),s=+t.cost.split(" ").join("");return s-o}));default:return[...this.posts].sort(((e,t)=>e[this.selectedSort]?.localeCompare(t[this.selectedSort])))}}}};const H=(0,a.Z)(A,[["render",b],["__scopeId","data-v-5fdaa3ca"]]);var K=H;const Y=[{path:"/",name:"home",component:K}],G=(0,d.p7)({history:(0,d.PO)("/"),routes:Y});var Q=G;const X={class:"button"};function ee(e,t,o,s,i,n){return(0,r.wg)(),(0,r.iD)("button",X,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var te={name:"my-button"};const oe=(0,a.Z)(te,[["render",ee],["__scopeId","data-v-04528324"]]);var se=oe;const re=["for"],ie=["id","placeholder","value"],ne={key:0};function ae(e,t,o,i,n,a){return(0,r.wg)(),(0,r.iD)("div",{class:(0,O.C_)(["input",{"input--required":o.required,"input--invalid":n.isError}])},[(0,r._)("label",{for:o.id},(0,O.zw)(o.label),9,re),(0,r._)("input",{type:"text",autocomplete:"off",id:o.id,placeholder:o.placeholder,value:o.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e)),onBlur:t[1]||(t[1]=(...e)=>a.checkInput&&a.checkInput(...e))},null,40,ie),(0,r.Wm)(s.uT,{name:"fade"},{default:(0,r.w5)((()=>[n.isError?((0,r.wg)(),(0,r.iD)("p",ne,"Поле является обязательным")):(0,r.kq)("",!0)])),_:1})],2)}var le={name:"my-input",props:{required:{type:Boolean,default:!1},id:{type:[String,Number],required:!0},label:{type:String,required:!0},placeholder:{type:String,required:!0},modelValue:[String,Number]},data(){return{isError:!1}},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)},checkInput(e){this.required&&(e.target.value?this.isError=!1:this.isError=!0)}}};const ce=(0,a.Z)(le,[["render",ae],["__scopeId","data-v-10fda62e"]]);var de=ce;const ue=["for"],pe=["id","placeholder","value"],me={key:0};function he(e,t,o,i,n,a){return(0,r.wg)(),(0,r.iD)("div",{class:(0,O.C_)(["textarea",{"textarea--required":o.required,"textarea--invalid":n.isError}])},[(0,r._)("label",{for:o.id},(0,O.zw)(o.label),9,ue),(0,r._)("textarea",{type:"text",autocomplete:"off",id:o.id,placeholder:o.placeholder,value:o.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e)),onBlur:t[1]||(t[1]=(...e)=>a.checkInput&&a.checkInput(...e))},null,40,pe),(0,r.Wm)(s.uT,{name:"fade"},{default:(0,r.w5)((()=>[n.isError?((0,r.wg)(),(0,r.iD)("p",me,"Поле является обязательным")):(0,r.kq)("",!0)])),_:1})],2)}var _e={name:"my-textarea",props:{required:{type:Boolean,default:!1},id:{type:[String,Number],required:!0},label:{type:String,required:!0},placeholder:{type:String,required:!0},modelValue:[String,Number]},data(){return{isError:!1}},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)},checkInput(e){this.required&&(e.target.value?this.isError=!1:this.isError=!0)}}};const ve=(0,a.Z)(_e,[["render",he],["__scopeId","data-v-42662d61"]]);var fe=ve;const ge={class:"select"},be={key:0,class:"select__options"},we=["onClick"];function ye(e,t,o,i,n,a){return(0,r.wg)(),(0,r.iD)("div",ge,[(0,r._)("span",{class:(0,O.C_)(["select__current",{"select__current--active":n.isVisible}]),onClick:t[0]||(t[0]=e=>n.isVisible=!n.isVisible)},(0,O.zw)(n.currentSelect),3),(0,r.Wm)(s.uT,{name:"fade"},{default:(0,r.w5)((()=>[n.isVisible?((0,r.wg)(),(0,r.iD)("ul",be,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.options,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e.value,onClick:t=>a.selectOption(e)},(0,O.zw)(e.name),9,we)))),128))])):(0,r.kq)("",!0)])),_:1})])}var ke={name:"my-select",props:{options:{type:Array,default(){return[]}}},data(){return{currentSelect:"По умолчанию",isVisible:!1}},methods:{selectOption(e){this.$emit("select",e),this.currentSelect=e.name,this.isVisible=!1},hideSelect(e){document.querySelector(".select__current").contains(e.target)||(this.isVisible=!1)}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},beforeDestroy(){document.removeEventListener("click",this.hideSelect,!0)}};const Ie=(0,a.Z)(ke,[["render",ye],["__scopeId","data-v-8e27ae3e"]]);var Ve=Ie;function Se(e,t,o,i,n,a){return(0,r.wg)(),(0,r.j4)(s.uT,{name:"fade"},{default:(0,r.w5)((()=>[o.show?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"dialog",onClick:t[1]||(t[1]=(...e)=>a.hideDialog&&a.hideDialog(...e))},[(0,r._)("div",{onClick:t[0]||(t[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])):(0,r.kq)("",!0)])),_:3})}var qe={name:"my-dialog",props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}};const De=(0,a.Z)(qe,[["render",Se],["__scopeId","data-v-61f3ed9c"]]);var Oe=De,Ce=[se,de,fe,Ve,Oe];const je=(0,s.ri)(c);Ce.forEach((e=>{je.component(e.name,e)})),je.use(Q).mount("#app")}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,s,r,i){if(!s){var n=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||n>=i)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(a=!1,i<n&&(n=i));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,n=s[0],a=s[1],l=s[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var d=l(o)}for(t&&t(s);c<n.length;c++)i=n[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},s=self["webpackChunkidaproject"]=self["webpackChunkidaproject"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(6938)}));s=o.O(s)})();
//# sourceMappingURL=app.491ac1c0.js.map