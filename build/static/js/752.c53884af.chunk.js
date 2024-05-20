"use strict";(self.webpackChunktokyo_white_react_admin_dashboard=self.webpackChunktokyo_white_react_admin_dashboard||[]).push([[752],{562:(e,o,t)=>{t.r(o),t.d(o,{default:()=>k});var n=t(9336),i=t(8212),c=t(3471),l=t(4645),r=t(7392),s=t(8070),a=t(8903),d=t(6946),x=t(5865),h=t(3404),A=t(7731),m=t(5043),p=t(4556),u=t(2220),v=t(6971),j=t(8096),f=t(579);const k=()=>{const e=(0,v.Zp)(),o=(0,p.wA)(),t=(0,p.d4)((e=>e.FollowUp.FollowUpList)),k=(0,p.d4)((e=>e.FollowUp.DeleteFollowUpMsg));(0,m.useEffect)((()=>{o((0,u.PE)())}),[o]),(0,m.useEffect)((()=>{""!==k&&(j.oR.success(k),o((0,u.Qd)()),o((0,u.PE)()))}),[k]);const[w,I]=(0,m.useState)(0),C=(t.slice(10*w,10*(w+1)),[{Id:1,Icon:(0,f.jsx)(l.A,{title:"Take FollowUp",children:(0,f.jsxs)(r.A,{children:[" ",(0,f.jsx)(n.A,{sx:{color:"green"}})]})}),Action:"FollowUp"},{Id:1,Icon:(0,f.jsx)(l.A,{title:"Admission Form",children:(0,f.jsx)(r.A,{children:(0,f.jsx)(i.A,{})})}),Action:"Admission_Link"},{Id:1,Icon:(0,f.jsx)(l.A,{title:"Remove FollowUp",children:(0,f.jsx)(r.A,{children:(0,f.jsx)(c.A,{sx:{color:"#ff1943"}})})}),Action:"Remove"}]),b=t.length,g=10*w+1,y=Math.min(10*(w+1),b);console.log(t);return(0,f.jsx)(s.A,{children:(0,f.jsxs)(a.Ay,{container:!0,spacing:2,sx:{width:"100%",overflow:"hidden"},children:[(0,f.jsx)(a.Ay,{item:!0,xs:12}),(0,f.jsxs)(a.Ay,{item:!0,xs:12,sx:{display:"flex",flexDirection:"column",flexGrow:1,position:"relative"},children:[(0,f.jsx)("div",{style:{flexGrow:1,overflow:"auto"},children:(0,f.jsx)(A.A,{HeaderList:["Name","FollowUp Count","Status","Reminder","Comment","Society","FollowUp Date-Time","Follow Up","Admission Link","Remove"],ItemList:t,IconList:C,ClickItem:t=>{"Admission_Link"===t.Action?e("../AdmissionForm/"+t.Id):"FollowUp"===t.Action?e("../FollowUpForm/"+t.Id):"Remove"===t.Action&&window.confirm("Are you sure you want to delete this FollowUp Detail?")&&o((0,u.AX)({StudentId:t.Id}))}})}),(0,f.jsxs)(d.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px"},children:[(0,f.jsxs)(x.A,{variant:"body2",children:["FollowUp List ",g,"-",y," of ",b," FollowUps"]}),(0,f.jsxs)(d.A,{sx:{display:"flex",gap:1},children:[(0,f.jsx)(h.A,{onClick:()=>{I(w-1)},variant:"outlined",disabled:0===w,style:{color:"#878686",minWidth:"120px"},children:"Previous Page"}),(0,f.jsx)(h.A,{onClick:()=>{I(w+1)},variant:"outlined",disabled:10*(w+1)>=b,style:{color:"#878686"},children:"Next Page"})]})]})]})]})})}},7731:(e,o,t)=>{t.d(o,{A:()=>m});var n=t(5865),i=t(1962),c=t(6328),l=t(1596),r=t(1806),s=t(3460),a=t(2420),d=t(9650),x=t(4882),h=t(8076),A=t(579);const m=e=>{let{HeaderList:o,ItemList:t,IconList:m,ClickItem:p,ClickCheck:u,IsSelect:v=0}=e;const j=()=>{let e=[];e=t.map((e=>({...e,IsActive:!f()}))),u({Id:0,Value:e,Action:"Select"})},f=()=>{let e=!0;return t.map((o=>{o.IsActive||(e=!1)})),e};return(0,A.jsx)(d.A,{component:l.A,children:(0,A.jsxs)(r.A,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,A.jsx)(x.A,{children:(0,A.jsx)(h.A,{sx:{backgroundColor:"#90caf9"},children:o.map(((e,o)=>(0,A.jsxs)(a.A,{align:"center",sx:{color:"grey"},children:[(0,A.jsx)(n.A,{variant:"body1",fontWeight:"bold",children:(0,A.jsx)("b",{children:e})}),2==v&&0==o&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("br",{}),(0,A.jsx)(i.A,{checked:f(),onChange:j})]})]},o)))})}),(0,A.jsx)(c.A,{in:!0,timeout:1500,children:(0,A.jsx)(s.A,{children:t.map(((e,o)=>(0,A.jsxs)(h.A,{children:[void 0!=e.Text1&&(0,A.jsx)(a.A,{align:"left",children:e.Text1}),void 0!=e.Text2&&(0,A.jsx)(a.A,{align:"center",children:e.Text2}),void 0!=e.Text3&&(0,A.jsx)(a.A,{align:"center",children:e.Text3}),void 0!=e.Text4&&(0,A.jsx)(a.A,{align:"center",children:e.Text4}),void 0!=e.Text5&&(0,A.jsx)(a.A,{align:"center",children:e.Text5}),void 0!=e.Text6&&(0,A.jsx)(a.A,{align:"center",children:e.Text6}),void 0!=e.Text7&&(0,A.jsx)(a.A,{align:"center",children:e.Text7}),null===m||void 0===m?void 0:m.map(((o,t)=>(0,A.jsx)(a.A,{align:"center",onClick:()=>{p({Id:e.Id,Action:o.Action})},children:o.Icon},t)))]},o)))})})]})})}},9336:(e,o,t)=>{var n=t(5709);o.A=void 0;var i=n(t(39)),c=t(579),l=(0,i.default)((0,c.jsx)("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}),"Call");o.A=l},3471:(e,o,t)=>{var n=t(5709);o.A=void 0;var i=n(t(39)),c=t(579),l=(0,i.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");o.A=l},8212:(e,o,t)=>{var n=t(5709);o.A=void 0;var i=n(t(39)),c=t(579),l=(0,i.default)((0,c.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");o.A=l},1962:(e,o,t)=>{t.d(o,{A:()=>g});var n=t(8587),i=t(8168),c=t(5043),l=(t(5173),t(222)),r=t(310),s=t(3064),a=t(6734),d=t(579);const x=(0,a.A)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,a.A)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),A=(0,a.A)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var m=t(6803),p=t(7864),u=t(2056),v=t(3088);function j(e){return(0,v.A)("MuiCheckbox",e)}const f=(0,t(5904).A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],w=(0,u.Ay)(s.A,{shouldForwardProp:e=>(0,u.ep)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,"default"!==t.color&&o["color".concat((0,m.A)(t.color))]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,i.A)({color:o.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,r.X4)("default"===t.color?o.palette.action.active:o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{["&.".concat(f.checked,", &.").concat(f.indeterminate)]:{color:o.palette[t.color].main},["&.".concat(f.disabled)]:{color:o.palette.action.disabled}})})),I=(0,d.jsx)(h,{}),C=(0,d.jsx)(x,{}),b=(0,d.jsx)(A,{}),g=c.forwardRef((function(e,o){var t,r;const s=(0,p.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:a=I,color:x="primary",icon:h=C,indeterminate:A=!1,indeterminateIcon:u=b,inputProps:v,size:f="medium"}=s,g=(0,n.A)(s,k),y=A?u:h,F=A?u:a,z=(0,i.A)({},s,{color:x,indeterminate:A,size:f}),T=(e=>{const{classes:o,indeterminate:t,color:n}=e,c={root:["root",t&&"indeterminate","color".concat((0,m.A)(n))]},r=(0,l.A)(c,j,o);return(0,i.A)({},o,r)})(z);return(0,d.jsx)(w,(0,i.A)({type:"checkbox",inputProps:(0,i.A)({"data-indeterminate":A},v),icon:c.cloneElement(y,{fontSize:null!=(t=y.props.fontSize)?t:f}),checkedIcon:c.cloneElement(F,{fontSize:null!=(r=F.props.fontSize)?r:f}),ownerState:z,ref:o},g,{classes:T}))}))},1053:(e,o,t)=>{t.d(o,{A:()=>n});const n=t(5043).createContext()},5213:(e,o,t)=>{t.d(o,{A:()=>c});var n=t(5043),i=t(1053);function c(){return n.useContext(i.A)}}}]);
//# sourceMappingURL=752.c53884af.chunk.js.map