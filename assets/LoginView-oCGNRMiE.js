import{s as V,i as $,B as w,c as N,m as x,a as f,o as c,d as k,r as p,b as a,u as d,w as C,e as u,f as g,n as b,g as v,h as S,_ as I}from"./index-B7ZD-lTD.js";var P={name:"BaseEditableHolder",extends:V,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:function(t){this.d_value=t},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var e,i;this.formField=((e=this.$pcForm)===null||e===void 0||(i=e.register)===null||i===void 0?void 0:i.call(e,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var e,i;this.formField=((e=this.$pcForm)===null||e===void 0||(i=e.register)===null||i===void 0?void 0:i.call(e,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}},$formValue:{immediate:!1,handler:function(t){var e;(e=this.$pcForm)!==null&&e!==void 0&&e.getFieldState(this.$formName)&&t!==this.d_value&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,e){var i,l;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(i=(l=this.formField).onChange)===null||i===void 0||i.call(l,{originalEvent:e,value:t})},findNonEmpty:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.find($)}},computed:{$filled:function(){return $(this.d_value)},$invalid:function(){var t,e;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.invalid,(e=this.$pcForm)===null||e===void 0||(e=e.getFieldState(this.$formName))===null||e===void 0?void 0:e.invalid)},$formName:function(){var t;return this.$formNovalidate?void 0:this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formNovalidate:function(){var t;return(t=this.$formControl)===null||t===void 0?void 0:t.novalidate},$formDefaultValue:function(){var t,e;return this.findNonEmpty(this.d_value,(t=this.$pcFormField)===null||t===void 0?void 0:t.initialValue,(e=this.$pcForm)===null||e===void 0||(e=e.initialValues)===null||e===void 0?void 0:e[this.$formName])},$formValue:function(){var t,e;return this.findNonEmpty((t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.value,(e=this.$pcForm)===null||e===void 0||(e=e.getFieldState(this.$formName))===null||e===void 0?void 0:e.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},E={name:"BaseInput",extends:P,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},z=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,B={root:function(t){var e=t.instance,i=t.props;return["p-inputtext p-component",{"p-filled":e.$filled,"p-inputtext-sm p-inputfield-sm":i.size==="small","p-inputtext-lg p-inputfield-lg":i.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-inputtext-fluid":e.$fluid}]}},j=w.extend({name:"inputtext",style:z,classes:B}),T={name:"BaseInputText",extends:E,style:j,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function s(n){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(n)}function L(n,t,e){return(t=O(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function O(n){var t=R(n,"string");return s(t)=="symbol"?t:t+""}function R(n,t){if(s(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var i=e.call(n,t);if(s(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var h={name:"InputText",extends:T,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return x(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return N(L({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},D=["value","name","disabled","aria-invalid","data-p"];function q(n,t,e,i,l,o){return c(),f("input",x({type:"text",class:n.cx("root"),value:n.d_value,name:n.name,disabled:n.disabled,"aria-invalid":n.$invalid||void 0,"data-p":o.dataP,onInput:t[0]||(t[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,D)}h.render=q;const A="/assets/logo-ZaQIT4-N.svg",U={class:"login-outer"},H=["src"],K={class:"login-container"},M={key:0,class:"p-error"},Q={key:1,class:"p-error"},Z={class:"login-actions"},G=k({__name:"LoginView",setup(n){const t=S(),e=p(""),i=p(""),l=p(!1),o=p(!1);function y(){l.value=!e.value,o.value=!i.value,!l.value&&!o.value&&(localStorage.setItem("auth","true"),t.push({name:"dashboard"}))}function F(){}function _(){}return(J,r)=>(c(),f("div",U,[a("img",{src:d(A),alt:"Logo",class:"login-logo"},null,8,H),a("div",K,[a("form",{class:"login-form",onSubmit:C(y,["prevent"])},[r[2]||(r[2]=a("label",{class:"login-label",for:"email"},"Correo electrónico",-1)),u(d(h),{id:"email",modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=m=>e.value=m),type:"email",placeholder:"",class:b(["login-input",{"p-invalid":l.value}]),required:""},null,8,["modelValue","class"]),l.value?(c(),f("small",M,"El correo es obligatorio")):g("",!0),r[3]||(r[3]=a("label",{class:"login-label",for:"password"},"Contraseña",-1)),u(d(h),{id:"password",modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=m=>i.value=m),type:"password",placeholder:"",class:b(["login-input",{"p-invalid":o.value}]),required:""},null,8,["modelValue","class"]),o.value?(c(),f("small",Q,"La contraseña es obligatoria")):g("",!0),u(d(v),{type:"submit",label:"Iniciar sesión",class:"login-btn login-btn-primary"}),a("div",Z,[u(d(v),{label:"Recuperar contraseña",link:"",class:"login-link-btn",onClick:F}),u(d(v),{label:"Registro",link:"",class:"login-link-btn",onClick:_})])],32)])]))}}),X=I(G,[["__scopeId","data-v-3f91513b"]]);export{X as default};
