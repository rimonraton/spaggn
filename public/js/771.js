"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[771],{8771:(e,r,t)=>{t.r(r),t.d(r,{default:()=>z});var l=t(7757),s=t.n(l),a=t(821),n=t(3907),o=t(2119);function u(e,r,t,l,s,a,n){try{var o=e[a](n),u=o.value}catch(e){return void t(e)}o.done?r(u):Promise.resolve(u).then(l,s)}var i={class:"flex items-center justify-center bg-gray-100 h-screen"},d={class:"px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3"},c={class:"text-center my-6"},m=(0,a._)("img",{src:"/images/logo.svg",class:"w-12 h-auto rounded-full",alt:""},null,-1),p=(0,a._)("h1",{class:"text-3xl font-semibold text-gray-700"},"Join us",-1),f=(0,a._)("p",{class:"text-gray-500"},"Create a Good Giving Network account",-1),b=["onSubmit"],y={class:"mt-4"},g={class:"items-center w-full text-sm font-medium bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"},w={class:"w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"},x={class:"flex items-center pl-3"},_={class:"py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"},v=(0,a.Uk)(" As a Artist "),h={class:"w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"},k={class:"flex items-center pl-3"},U={class:"py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"},S=(0,a.Uk)(" As a Charity "),C=(0,a._)("label",{class:"block",for:"Name"},"Name",-1),A={class:"text-xs text-red-400"},P={class:"mt-4"},V=(0,a._)("label",{class:"block",for:"email"},"Email",-1),T={class:"mt-4"},G=(0,a._)("label",{class:"block"},"Password",-1),N={class:"mt-4"},j=(0,a._)("label",{class:"block"},"Confirm Password",-1),E=(0,a._)("div",{class:"flex"},[(0,a._)("button",{type:"submit",class:"w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"}," Create Account ")],-1),M={class:"mt-6 text-grey-dark text-center"},W=(0,a.Uk)(" Already have an account? "),q=(0,a.Uk)(" Log in ");const z={setup:function(e){var r=(0,n.oR)(),t=(0,o.tv)(),l=(0,a.qj)({userType:"",name:"",email:"",password:"",password_confirmation:""}),z=function(){var e,a=(e=s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.dispatch("register",l);case 2:a=r.getters.user.role.name,t.push({name:a});case 4:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(l,s){var a=e.apply(r,t);function n(e){u(a,l,s,n,o,"next",e)}function o(e){u(a,l,s,n,o,"throw",e)}n(void 0)}))});return function(){return a.apply(this,arguments)}}();return function(e,r){var t=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",d,[(0,a._)("div",c,[(0,a.Wm)(t,{to:"/",class:"mb-4 flex justify-center"},{default:(0,a.w5)((function(){return[m]})),_:1}),p,f]),(0,a._)("form",{onSubmit:(0,a.iM)(z,["prevent"])},[(0,a._)("div",y,[(0,a._)("ul",g,[(0,a._)("li",w,[(0,a._)("div",x,[(0,a._)("label",_,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,a.SU)(l).userType=e}),type:"radio",value:"Artist",name:"list-radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"},null,512),[[a.G2,(0,a.SU)(l).userType]]),v])])]),(0,a._)("li",h,[(0,a._)("div",k,[(0,a._)("label",U,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[1]||(r[1]=function(e){return(0,a.SU)(l).userType=e}),type:"radio",value:"Charity",name:"list-radio",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"},null,512),[[a.G2,(0,a.SU)(l).userType]]),S])])])]),(0,a._)("div",null,[C,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[2]||(r[2]=function(e){return(0,a.SU)(l).name=e}),type:"text",placeholder:"Name",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},null,512),[[a.nr,(0,a.SU)(l).name]]),(0,a._)("span",A,(0,a.zw)(e.errorMessage),1)]),(0,a._)("div",P,[V,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[3]||(r[3]=function(e){return(0,a.SU)(l).email=e}),type:"email",placeholder:"Email",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},null,512),[[a.nr,(0,a.SU)(l).email]])]),(0,a._)("div",T,[G,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[4]||(r[4]=function(e){return(0,a.SU)(l).password=e}),type:"password",placeholder:"Password",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},null,512),[[a.nr,(0,a.SU)(l).password]])]),(0,a._)("div",N,[j,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[5]||(r[5]=function(e){return(0,a.SU)(l).password_confirmation=e}),type:"password",placeholder:"Password",class:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"},null,512),[[a.nr,(0,a.SU)(l).password_confirmation]])]),E,(0,a._)("div",M,[W,(0,a.Wm)(t,{class:"text-blue-600 hover:underline",to:{name:"login"}},{default:(0,a.w5)((function(){return[q]})),_:1})])])],40,b)])])}}}}}]);