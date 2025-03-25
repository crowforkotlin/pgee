"use strict";(self.webpackChunkpgee=self.webpackChunkpgee||[]).push([[8179],{3780:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"network/05/network-05-06","title":"5.6 TCP \u7684\u6d41\u91cf\u63a7\u5236","description":"\u7531\u4e8e TCP \u4f7f\u7528\u6ed1\u52a8\u7a97\u53e3\u5b9e\u73b0\u6570\u636e\u6536\u53d1\u7684\u7ba1\u7406\uff0c\u56e0\u6b64\u5229\u7528\u6ed1\u52a8\u7a97\u53e3\u5c31\u5f88\u5bb9\u6613\u5b9e\u73b0\u6d41\u91cf\u63a7\u5236\u3002","source":"@site/docs/network/05/network-05-06.md","sourceDirName":"network/05","slug":"/network/05/network-05-06","permalink":"/pgee/network/05/network-05-06","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/network/05/network-05-06.md","tags":[],"version":"current","lastUpdatedAt":1735033854000,"frontMatter":{},"sidebar":"network","previous":{"title":"5.5 UDP \u548c TCP \u62a5\u6587\u6bb5\u62a5\u5934\u683c\u5f0f","permalink":"/pgee/network/05/network-05-05"},"next":{"title":"5.7 TCP \u7684\u62e5\u585e\u63a7\u5236","permalink":"/pgee/network/05/network-05-07"}}');var s=r(4848),o=r(8453);const i={},c="5.6 TCP \u7684\u6d41\u91cf\u63a7\u5236",l={},d=[];function h(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"56-tcp-\u7684\u6d41\u91cf\u63a7\u5236",children:"5.6 TCP \u7684\u6d41\u91cf\u63a7\u5236"})}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4e8e TCP \u4f7f\u7528\u6ed1\u52a8\u7a97\u53e3\u5b9e\u73b0\u6570\u636e\u6536\u53d1\u7684\u7ba1\u7406\uff0c\u56e0\u6b64\u5229\u7528\u6ed1\u52a8\u7a97\u53e3\u5c31\u5f88\u5bb9\u6613\u5b9e\u73b0\u6d41\u91cf\u63a7\u5236\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6d41\u91cf\u63a7\u5236\u662f",(0,s.jsx)(n.strong,{children:"\u4e00\u79cd\u786e\u4fdd\u6570\u636e\u5b8c\u6574\u6027\u7684\u65b9\u6cd5"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u6b64\u5c0f\u8282\u4e2d\u53d1\u9001\u65b9\u6307\u53d1\u9001 TCP \u62a5\u6587\u6bb5\u4e00\u65b9\uff0c\u63a5\u6536\u65b9\u6307\u63a5\u6536 TCP \u62a5\u6587\u7684\u4e00\u65b9\uff0c\u800c\u975e\u7279\u6307\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u3002"})}),"\n",(0,s.jsx)(n.p,{children:"TCP \u62a5\u5934\u4e2d\u6709\u4e00\u4e2a\u201c\u7a97\u53e3\u201d\u5b57\u6bb5\uff08Window\uff09\uff0c\u6b64\u5b57\u6bb5\u4ee3\u8868\u53d1\u9001\u5f53\u524d\u62a5\u6587\u7684\u4e00\u65b9\u7684\u63a5\u6536\u7a97\u53e3\u7684\u5927\u5c0f\uff0c\u56e0\u4e3a\u6d41\u91cf\u63a7\u5236\u662f\u5229\u7528\u6ed1\u52a8\u7a97\u53e3\u5b9e\u73b0\u7684\uff0c\u4e8e\u662f\u8c03\u6574\u6b64\u5b57\u6bb5\u5373\u53ef\u5b8c\u6210\u6d41\u91cf\u63a7\u5236\u3002\u5177\u4f53\u7684\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5047\u8bbe\u63a5\u6536\u65b9\u539f\u59cb\u63a5\u6536\u7a97\u53e3\u5927\u5c0f\u4e3a 500\uff08\u5b9e\u8df5\u4e2d\u63a5\u6536\u7a97\u53e3\u5927\u5c0f\u53ef\u80fd\u8fdc\u5927\u4e8e\u6b64\u503c\uff0c\u6b64\u5904\u4ec5\u4e3a\u4e3e\u4f8b\uff09\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u63a5\u6536\u65b9\u7684\u5e94\u7528\u7a0b\u5e8f\u6765\u4e0d\u53ca\u5904\u7406\u6570\u636e\uff0c\u800c\u6b64\u65f6\u63a5\u6536\u7a97\u53e3\u5185\u5df2\u5b58\u653e\u4e86 200 \u5b57\u8282\u6570\u636e\uff0c\u4e8e\u662f\u63a5\u6536\u7a97\u53e3\u5269\u4f59\u7a7a\u95f4\u4e3a 300\uff0c\u5373\u63a5\u6536\u65b9 ACK \u62a5\u6587 ",(0,s.jsx)(n.code,{children:"rwnd=300"}),"\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u53d1\u9001\u65b9\u51cf\u5c0f\u81ea\u8eab\u7684\u53d1\u9001\u7a97\u53e3\u4f7f\u5176\u4e0d\u5927\u4e8e\u5bf9\u65b9\u7684\u63a5\u6536\u7a97\u53e3\uff0c\u5e76\u7ee7\u7eed\u53d1\u9001\u4e86 300 \u5b57\u8282\u6570\u636e\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u63a5\u6536\u65b9\u7684\u5e94\u7528\u7a0b\u5e8f\u5b9e\u5728\u6765\u4e0d\u53ca\u5904\u7406\u6570\u636e\uff0c\u6b64\u524d\u5b58\u653e\u7684 200 \u5b57\u8282\u4ecd\u672a\u5904\u7406\uff0c\u4e8e\u662f\u6b64\u65f6\u63a5\u53d7\u7a97\u53e3\u5df2\u586b\u6ee1\uff0c\u5373\u63a5\u6536\u65b9 ACK \u62a5\u6587 ",(0,s.jsx)(n.code,{children:"rwnd=0"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6b64\u65f6\u53d1\u9001\u65b9\u6536\u5230\u63a5\u6536\u65b9\u7684",(0,s.jsx)(n.strong,{children:"\u96f6\u7a97\u53e3\u901a\u77e5"}),"\uff0c\u5373 ",(0,s.jsx)(n.code,{children:"rwnd=0"})," \u7684\u62a5\u6587\uff0c\u4e0d\u518d\u7ee7\u7eed\u53d1\u9001\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5f53\u63a5\u6536\u65b9\u7a81\u7136\u51cf\u5c0f\u5176\u63a5\u6536\u7a97\u53e3\uff0c\u800c\u53d1\u9001\u65b9\u6765\u4e0d\u53ca\u51cf\u5c0f\u5176\u53d1\u9001\u7a97\u53e3\uff0c\u5bfc\u81f4\u53d1\u9001\u4e86\u591a\u4f59\u7684\u6570\u636e\u65f6\uff0c\u63a5\u6536\u65b9\u4f1a\u5c06\u591a\u4f59\u7684\u6570\u636e\u4e22\u5f03\uff0c\u5373\u4e22\u5f03\u63a5\u6536\u7a97\u53e3\u4ee5\u5916\u7684\u6570\u636e\uff0c\u5e76\u5411\u53d1\u9001\u65b9\u56de\u5e94\u4e00\u4e2a ACK \u786e\u8ba4\u5f53\u524d\u5df2\u6b63\u786e\u63a5\u6536\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5f53\u63a5\u6536\u65b9\u8bbe\u7f6e\u5176\u63a5\u6536\u7a97\u53e3\u4e3a 0 \u65f6\uff0c\u53d1\u9001\u65b9\u4f1a\u542f\u52a8\u4e00\u4e2a",(0,s.jsx)(n.strong,{children:"\u6301\u7eed\u8ba1\u65f6\u5668\uff08Persistence Timer\uff09"}),"\uff0c\u5f53\u8ba1\u65f6\u5668\u5230\u671f\u65f6\uff0c\u4f1a\u5411\u5bf9\u65b9\u53d1\u9001",(0,s.jsx)(n.strong,{children:"\u63a2\u6d4b\u62a5\u6587\u6bb5"}),"\uff0c\u5373\u4ec5",(0,s.jsx)(n.strong,{children:"\u643a\u5e26 1 \u5b57\u8282\u6570\u636e\u7684\u62a5\u6587"}),"\uff0c\u5f53\u5bf9\u65b9\u56de\u590d\u7684\u62a5\u6587\u4e2d\u7a97\u53e3\u5b57\u6bb5\u4ecd\u4e3a 0\uff0c\u5219\u91cd\u542f\u6301\u7eed\u8ba1\u65f6\u5668\uff0c\u5982\u679c\u4e0d\u4e3a 0 \u5219\u7ee7\u7eed\u53d1\u9001\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6301\u7eed\u8ba1\u65f6\u5668\u7684\u5b58\u5728\u662f\u4e3a\u4e86\u6253\u7834",(0,s.jsx)(n.strong,{children:"\u6b7b\u9501"}),"\u7684\u5c40\u9762\uff0c\u5373\u5f53\u63a5\u6536\u65b9\u6269\u5927\u4e86\u5176\u63a5\u6536\u7a97\u53e3\uff0c\u5411\u5bf9\u65b9\u53d1\u9001\u4e86\u7a97\u53e3\u5b57\u6bb5\u4e0d\u4e3a 0 \u7684 TCP \u62a5\u6587\uff0c\u800c\u6b64\u62a5\u6587\u4e0d\u5e78\u4e22\u5931\u4e86\uff0c\u5c31\u4f1a\u9020\u6210\u53d1\u9001\u65b9\u4e00\u76f4\u7b49\u5f85\u5bf9\u65b9\u7684\u975e\u96f6\u7a97\u53e3\u901a\u77e5\uff0c\u800c\u63a5\u6536\u65b9\u4e00\u76f4\u7b49\u5f85\u5bf9\u65b9\u7ee7\u7eed\u53d1\u9001\u6570\u636e\u3002"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(6540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);