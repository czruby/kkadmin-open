var l=(e,i,s)=>new Promise((m,t)=>{var c=o=>{try{a(s.next(o))}catch(n){t(n)}},r=o=>{try{a(s.throw(o))}catch(n){t(n)}},a=o=>o.done?m(o.value):Promise.resolve(o.value).then(c,r);a((s=s.apply(e,i)).next())});import{B as u,b as f}from"./index.249f85fa.js";import{B as g,u as B}from"./useForm.3d7ec12c.js";import{a as M}from"./data.87cd3e5c.js";import{c as _}from"./user.9e6b2bca.js";import{_ as F,h}from"./index.e63e2027.js";import{B as k,a1 as d,D as w,a2 as T,a6 as $,w as b,a5 as v}from"./vendor.bf608252.js";import"./useWindowSizeFn.011a8160.js";/* empty css              *//* empty css               *//* empty css                */import"./index.9e887167.js";/* empty css               *//* empty css               *//* empty css               */import"./index.b8b35a5c.js";import"./download.50146fe2.js";const y=k({name:"TokenModal",components:{BasicModal:u,BasicForm:g},emits:["success","register"],setup(e,{emit:i}){const[s,{resetFields:m,validate:t}]=B({labelWidth:100,schemas:M,showActionButtonGroup:!1,actionColOptions:{span:23}}),[c,{setModalProps:r,closeModal:a}]=f(p=>l(this,null,function*(){m()})),{createMessage:o}=h();function n(){return l(this,null,function*(){try{const p=yield t();r({confirmLoading:!0}),yield _(p),o.success("\u6DFB\u52A0\u6210\u529F"),a(),i("success")}finally{r({confirmLoading:!1})}})}return{registerModal:c,registerForm:s,handleSubmit:n}}});function C(e,i,s,m,t,c){const r=d("BasicForm"),a=d("BasicModal");return w(),T(a,v(e.$attrs,{onRegister:e.registerModal,title:"\u65B0\u589EToken",onOk:e.handleSubmit}),{default:$(()=>[b(r,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","onOk"])}var z=F(y,[["render",C]]);export{z as default};