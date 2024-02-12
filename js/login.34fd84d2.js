"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[312],{3992:function(e,a,s){s.r(a),s.d(a,{default:function(){return _}});var t=s(4108),i=s(9096);const n={class:"login__container"},o={class:"login-page"},r={class:"login-page__title title title_small"},l={class:"login-page__body"},u={class:"form__action action"};function d(e,a,s,d,c,g){const h=(0,t.E1)("error-component"),m=(0,t.E1)("v-text-field"),p=(0,t.E1)("v-btn"),w=(0,t.E1)("font-awesome-icon"),E=(0,t.E1)("v-form"),b=(0,t.E1)("master-page-view");return e.hasError?((0,t.Wz)(),(0,t.Az)(h,{key:0})):((0,t.Wz)(),(0,t.Az)(b,{key:1},{main:(0,t.Ql)((()=>[(0,t.QD)("div",n,[(0,t.QD)("div",o,[(0,t.QD)("h2",r,(0,i.WA)(e.$t("loginPage.title")),1),(0,t.QD)("div",l,[(0,t.K2)(E,{modelValue:c.valid,"onUpdate:modelValue":a[6]||(a[6]=e=>c.valid=e),class:"form"},{default:(0,t.Ql)((()=>[(0,t.K2)(m,{modelValue:c.user.email,"onUpdate:modelValue":a[0]||(a[0]=e=>c.user.email=e),rules:c.emailRules,label:e.$t("loginPage.email"),type:"email","append-icon":g.countRanks,variant:"outlined",clearable:"","hide-details":"auto",required:"",class:"mb-4 input"},null,8,["modelValue","rules","label","append-icon"]),(0,t.K2)(m,{modelValue:c.user.password,"onUpdate:modelValue":a[1]||(a[1]=e=>c.user.password=e),rules:c.passwordRules,label:e.$t("loginPage.password"),variant:"outlined","append-icon":g.countRanks2,type:c.show?"text":"password",hint:g.isEngLanguage?"Enter your password (minimum 6 characters)":"Введіть пароль (мін. 6 символів)",clearable:"","hide-details":"auto",required:"",class:"mb-4 input","onClick:append":a[2]||(a[2]=e=>c.show=!c.show)},null,8,["modelValue","rules","label","append-icon","type","hint"]),(0,t.QD)("div",u,[(0,t.K2)(p,{variant:"outlined",class:"action__button",disabled:!g.isValueValid,onClick:a[3]||(a[3]=e=>g.registerWithEmailAndPassword(c.user))},{default:(0,t.Ql)((()=>[(0,t.mY)((0,i.WA)(e.$t("loginPage.button")),1)])),_:1},8,["disabled"]),(0,t.K2)(p,{variant:"outlined",class:"action__button",disabled:!g.isValueValid,onClick:a[4]||(a[4]=e=>g.loginWithEmailAndPassword(c.user))},{default:(0,t.Ql)((()=>[(0,t.mY)((0,i.WA)(e.$t("loginPage.buttonSignIn")),1)])),_:1},8,["disabled"])]),(0,t.QD)("button",{type:"button",class:"form-google",onClick:a[5]||(a[5]=(...e)=>g.onLoginWithGoogle&&g.onLoginWithGoogle(...e))},[(0,t.K2)(w,{icon:["fab","google"]}),(0,t.QD)("span",null,(0,i.WA)(e.$t("loginPage.google")),1)])])),_:1},8,["modelValue"])])])])])),_:1}))}s(3248);var c=s(7192),g=s(3672);const h={class:"error-container"},m={class:"error__content"};function p(e,a,s,n,o,r){const l=(0,t.E1)("font-awesome-icon");return(0,t.Wz)(),(0,t.An)("div",h,[(0,t.QD)("div",m,[(0,t.QD)("h3",null,(0,i.WA)(e.$t("error.title"))+"...",1),(0,t.K2)(l,{icon:["fas","triangle-exclamation"],size:"2x"}),(0,t.QD)("h2",null,(0,i.WA)(e.hasError),1)]),(0,t.QD)("button",{type:"button",class:"button",onClick:a[0]||(a[0]=(...e)=>r.onBack&&r.onBack(...e))},(0,i.WA)(e.$t("loginPage.errorBtn")),1)])}var w={name:"ErrorComponent",computed:{...(0,c.gV)("users",["hasError"])},methods:{onBack(){this.$router.go(0)}}},E=s(4100);const b=(0,E.c)(w,[["render",p]]);var W=b,v={name:"LoginPageView",components:{MasterPageView:g.c,ErrorComponent:W},data(){return{valid:!1,show:!1,user:{email:null,password:null},emailRules:[e=>!!e||(this.isEngLanguage?"E-mail is requred.":"Обов'язкове поле"),e=>!!/.+@.+\..+/.test(e)||(this.isEngLanguage?"E-mail must be valid.":"Невірний формат електронної пошти")],passwordRules:[e=>!!e||(this.isEngLanguage?"Password is required.":"Обов'язкове поле"),e=>e?.length>=6||(this.isEngLanguage?"Password must be 6 characters at least.":"Пароль повинен складатися з мінім. 6 символів ")]}},computed:{...(0,c.gV)(["hasError"]),...(0,c.gV)("auth",["getUser"]),countRanks(){const e=window.screen.width;return!(e<506)&&"mdi-email"},countRanks2(){const e=window.screen.width;return!(e<506)&&(this.show?"mdi-eye-outline":"mdi-eye-off")},isEngLanguage(){return"en"==this.$i18n.locale},errorMsg1(){return"en"==this.$i18n.locale?"User is already registered - please, login":"Користувач вже зареєстрований - будь ласка, увійдіть"},errorMsg2(){return"en"==this.$i18n.locale?"User not found - please, register (sign up)":"Користувач не знайдений - будь ласка, зареєструйтесь"},isValueValid(){return/.+@.+\..+/.test(this.user.email)&&/\d{6}/.test(this.user.password)}},created(){this.loadList},beforeUnmount(){this.setError(null)},methods:{...(0,c.ae)("auth",["loginWithGoogle","signUpWithWithEmailAndPassword","signInWithWithEmailAndPassword","getAuthData"]),...(0,c.ae)("users",["setError"]),async onLoginWithGoogle(){try{const e=await this.loginWithGoogle();e&&this.$router.push({name:"dishes"})}catch(e){this.setError(e)}},async registerWithEmailAndPassword(e){const{email:a,password:s}=e;try{await this.signUpWithWithEmailAndPassword({email:a,password:s}),this.$router.push({name:"dishes"})}catch(t){"Firebase: Error (auth/email-already-in-use)."==t&&this.setError(this.errorMsg1)}},async loginWithEmailAndPassword(e){const{email:a,password:s}=e;try{await this.signInWithWithEmailAndPassword({email:a,password:s}),this.$router.go(-1)}catch(t){"Firebase: Error (auth/invalid-credential)."==t.message&&this.setError(this.errorMsg2)}}}};const f=(0,E.c)(v,[["render",d]]);var _=f}}]);
//# sourceMappingURL=login.34fd84d2.js.map