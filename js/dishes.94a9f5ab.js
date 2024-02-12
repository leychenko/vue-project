"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[31],{7740:function(t,e,a){a.r(e),a.d(e,{default:function(){return E}});var s=a(4108),i=a(9096);const n={class:"cart__container"},r={key:0},l={class:"cartNull"},o=(0,s.QD)("div",{class:"cartNull__img"},[(0,s.QD)("img",{src:"https://png.pngtree.com/png-clipart/20210311/original/pngtree-realistic-style-shopping-cart-clipart-png-image_6024510.png",alt:""})],-1),c={class:"cartNull__title"},d={key:1},u={class:"cart-wrapper"},m={class:"cart-box"},h={class:"cart-title"},g={class:"total cart-title"},p={class:"cartNull__action"};function v(t,e,a,v,_,D){const Q=(0,s.E1)("cart-component"),W=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)(s.ae,null,[(0,s.QD)("div",n,[D.isEmptyList?((0,s.Wz)(),(0,s.An)("div",r,[(0,s.QD)("div",l,[o,(0,s.QD)("div",null,[(0,s.QD)("h2",c,(0,i.WA)(t.$t("cart.cartNull")),1)])])])):((0,s.Wz)(),(0,s.An)("div",d,[(0,s.QD)("div",u,[(0,s.QD)("div",m,[(0,s.QD)("h1",h,(0,i.WA)(t.$t("cart.title")),1),((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(t.getFavoriteListCompleted,(t=>((0,s.Wz)(),(0,s.Az)(Q,{key:t.id,data:t,onDelete:D.onDelete},null,8,["data","onDelete"])))),128))]),(0,s.QD)("div",g,(0,i.WA)(t.$t("cart.totalPrice"))+" : "+(0,i.WA)(D.getTotalPrice)+" "+(0,i.WA)(t.$t("cardData.currency")),1)])]))]),(0,s.QD)("div",p,[(0,s.K2)(W,{to:{name:"dishes"},class:"cartNull__button button"},{default:(0,s.Ql)((()=>[(0,s.mY)((0,i.WA)(t.$t("cart.cartLinkBack")),1)])),_:1}),D.isEmptyList?(0,s.g1)("",!0):((0,s.Wz)(),(0,s.An)("button",{key:0,type:"button",class:"cartNull__button button",onClick:e[0]||(e[0]=(...e)=>t.testCart&&t.testCart(...e))},(0,i.WA)(t.$t("cart.cartBill")),1))])],64)}const _={class:"cart-item"},D={class:"cart-item__img"},Q=["src"],W={class:"cart-item__title"},A={class:"cart-item__price"},b={key:0,class:"deleteClass"},f={key:1};function y(t,e,a,n,r,l){const o=(0,s.E1)("font-awesome-icon");return(0,s.Wz)(),(0,s.An)("div",_,[(0,s.QD)("div",D,[(0,s.QD)("img",{src:a.data.img,alt:"food"},null,8,Q)]),(0,s.QD)("div",W,[(0,s.QD)("p",null,(0,i.WA)(a.data.title),1)]),(0,s.QD)("div",A,[(0,s.QD)("p",null,(0,i.WA)(a.data.price)+" "+(0,i.WA)(t.$t("cardData.currency")),1)]),(0,s.QD)("button",{type:"button",class:"cart-item__button",onClick:e[0]||(e[0]=(...t)=>l.onDeleteClick&&l.onDeleteClick(...t))},[l.checkWidth?((0,s.Wz)(),(0,s.An)("span",b,(0,i.WA)(l.checkWidth),1)):((0,s.Wz)(),(0,s.An)("span",f,[(0,s.K2)(o,{icon:["far","trash-can"]})]))])])}var k={name:"CartItem",props:{data:{type:Object,required:!0}},emits:["delete"],data(){return{el:".app-view",width:null}},computed:{checkWidth(){return this.width<580&&("en"==this.$i18n.locale?"Delete":"Видалити")}},created(){const t=()=>this.width=window.innerWidth;t(),window.addEventListener("resize",t),this.$emit("hook:beforeDestroy",(()=>window.removeEventListener("resize",t)))},methods:{onDeleteClick(){this.$emit("delete",this.data)}}},C=a(4100);const w=(0,C.c)(k,[["render",y]]);var U=w,z=a(7192),F={name:"CartView",components:{CartComponent:U},data(){return{cartList:null,message:null,countPrice:1,totalPriceDish:[]}},computed:{...(0,z.gV)("auth",["getUser"]),...(0,z.gV)("cart",["getFavoriteListCompleted"]),isEmptyList(){return!this.getFavoriteListCompleted.length},myUserId(){return this.getUser.uid},getTotalPrice(){return this.getFavoriteListCompleted?.reduce(((t,e)=>t+e.price),0)}},async mounted(){this.getUser&&await this.loadUserFavoriteDishes(this.myUserId)},methods:{...(0,z.ae)("cart",["loadList","setCurrentCart"]),...(0,z.ae)("users",["loadUserFavoriteDishes","removeUserFavoriteDish"]),onDelete(t){this.removeUserFavoriteDish({userId:this.myUserId,dishId:t.id})}}};const L=(0,C.c)(F,[["render",v]]);var E=L},5784:function(t,e,a){a.r(e),a.d(e,{default:function(){return K}});var s=a(4108);const i={class:"dishes__container"};function n(t,e,a,n,r,l){const o=(0,s.E1)("dishes-component");return(0,s.Wz)(),(0,s.An)("div",i,[(0,s.K2)(o)])}var r=a(9096);const l={key:0,class:"text-center"},o={class:"dialog"},c={class:"dialog__title"},d={class:"dishes-wrapper"},u={key:0,class:"dishes"},m={class:"text-center"};function h(t,e,a,i,n,h){const g=(0,s.E1)("router-link"),p=(0,s.E1)("v-card-actions"),v=(0,s.E1)("v-card"),_=(0,s.E1)("v-dialog"),D=(0,s.E1)("v-rating"),Q=(0,s.E1)("dishes-item"),W=(0,s.E1)("master-page-view");return(0,s.Wz)(),(0,s.Az)(W,null,{main:(0,s.Ql)((()=>[t.getUser?(0,s.g1)("",!0):((0,s.Wz)(),(0,s.An)("div",l,[(0,s.K2)(_,{modelValue:t.dialog,"onUpdate:modelValue":e[1]||(e[1]=e=>t.dialog=e),activator:"parent",width:"500"},{default:(0,s.Ql)((()=>[(0,s.K2)(v,null,{default:(0,s.Ql)((()=>[(0,s.QD)("div",o,[(0,s.QD)("div",c,(0,r.WA)(t.$t("loginPage.titleLog")),1),(0,s.K2)(p,{class:"dialog__action"},{default:(0,s.Ql)((()=>[(0,s.QD)("button",{class:"dialog__button",onClick:e[0]||(e[0]=e=>t.dialog=!1)},"Close"),(0,s.K2)(g,{to:{name:"login"},class:"dialog__link dialog__button"},{default:(0,s.Ql)((()=>[(0,s.mY)((0,r.WA)(t.$t("loginPage.button")),1)])),_:1})])),_:1})])])),_:1})])),_:1},8,["modelValue"])])),(0,s.QD)("div",d,[(0,s.QD)("div",null,[t.getList?.length?((0,s.Wz)(),(0,s.An)("div",u,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(t.getList,(e=>((0,s.Wz)(),(0,s.Az)(Q,{key:e.id,data:e},{default:(0,s.Ql)((()=>[(0,s.QD)("div",m,[(0,s.K2)(D,{modelValue:e.rating,"onUpdate:modelValue":t=>e.rating=t,hover:"","half-increments":"",disabled:!t.getUser,color:"yellow"},null,8,["modelValue","onUpdate:modelValue","disabled"]),(0,s.QD)("pre",null,(0,r.WA)(e.rating),1)])])),_:2},1032,["data"])))),128))])):(0,s.g1)("",!0)])])])),_:1})}var g=a(3672);const p={class:"dishes__card card"},v={class:"card__image"},_=["src"],D={class:"card__body"},Q={class:"card__title"},W={class:"card__subtitle"},A={class:"card__text"},b={class:"card__price"},f={class:"card__action"},y=["disabled"];function k(t,e,a,i,n,l){return(0,s.Wz)(),(0,s.An)("div",p,[(0,s.QD)("div",v,[(0,s.QD)("img",{src:a.data.img,alt:""},null,8,_)]),(0,s.QD)("div",D,[(0,s.QD)("h5",Q,[(0,s.mY)((0,r.WA)(a.data.title)+" ",1),(0,s.QD)("p",W,(0,r.WA)(a.data.subTitle),1)]),(0,s.QD)("div",A,[(0,s.QD)("p",null,(0,r.WA)(a.data.text),1)]),(0,s.QD)("div",b,[(0,s.mY)((0,r.WA)(t.$t("cardData.title"))+": "+(0,r.WA)(a.data.price)+" ",1),(0,s.QD)("span",null,(0,r.WA)(t.$t("cardData.currency")),1)])]),(0,s.QD)("div",f,[(0,s.oF)(t.$slots,"default"),(0,s.QD)("button",{type:"button",disabled:!t.getUser,class:"card__button",onClick:e[0]||(e[0]=t=>l.onAddToCart(a.data))},[(0,s.QD)("span",null,(0,r.WA)(t.$t("cardData.button")),1)],8,y)])])}var C=a(7192),w={name:"DishesItem",props:{data:{type:Object,required:!0}},computed:{...(0,C.gV)("auth",["getUser"]),myUserId(){return this.getUser.uid}},methods:{...(0,C.ae)("dishes",["addItem"]),...(0,C.ae)("cart",["toggleIsFavorite","getItemByIdFromList","addItemToCartList"]),...(0,C.ae)("users",["addUserFavoriteDishes"]),onAddToCart(t){this.addUserFavoriteDishes({userId:this.myUserId,dishId:t.id})}}},U=a(4100);const z=(0,U.c)(w,[["render",k]]);var F=z,L={name:"DishesComponent",components:{MasterPageView:g.c,DishesItem:F},data:()=>({tab:null,dialog:!0}),computed:{...(0,C.gV)("dishes",["getList"]),...(0,C.gV)("auth",["getUser"])},created(){this.loadList()},methods:{...(0,C.ae)("dishes",["loadList"])}};const E=(0,U.c)(L,[["render",h]]);var $=E,I={name:"DishesView",components:{DishesComponent:$}};const V=(0,U.c)(I,[["render",n]]);var K=V},2340:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=a(4108),i=a(9096);const n={class:"notFound"},r={class:"notFound__title"};function l(t,e,a,l,o,c){const d=(0,s.E1)("font-awesome-icon"),u=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",n,[(0,s.K2)(d,{icon:["fas","ban"],class:"notFound__icon"}),(0,s.QD)("h1",r,"404 "+(0,i.WA)(t.$t("notFound.title")),1),(0,s.K2)(u,{to:{name:"home"},class:"button notFound__button"},{default:(0,s.Ql)((()=>[(0,s.K2)(d,{icon:["fas","house"]}),(0,s.mY)(),(0,s.QD)("span",null,(0,i.WA)(t.$t("notFound.button")),1)])),_:1})])}var o={name:"PageNotFound"},c=a(4100);const d=(0,c.c)(o,[["render",l]]);var u=d}}]);
//# sourceMappingURL=dishes.94a9f5ab.js.map