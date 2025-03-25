"use strict";(self.webpackChunkpgee=self.webpackChunkpgee||[]).push([[1971],{6047:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>t});const r=JSON.parse('{"id":"programming/03/programming-03-01","title":"3.1 \u8d4b\u503c","description":"3.1.1 \u81ea\u589e\u3001\u81ea\u51cf","source":"@site/docs/programming/03/programming-03-01.md","sourceDirName":"programming/03","slug":"/programming/03/programming-03-01","permalink":"/pgee/programming/03/programming-03-01","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/programming/03/programming-03-01.md","tags":[],"version":"current","lastUpdatedAt":1741002591000,"frontMatter":{},"sidebar":"programming","previous":{"title":"\u4e09\u3001\u7a0b\u5e8f\u8f93\u5165\u8f93\u51fa\u5b9e\u73b0","permalink":"/pgee/category/\u4e09\u7a0b\u5e8f\u8f93\u5165\u8f93\u51fa\u5b9e\u73b0"},"next":{"title":"3.2 \u8f93\u51fa","permalink":"/pgee/programming/03/programming-03-02"}}');var s=i(4848),d=i(8453);const c={},l="3.1 \u8d4b\u503c",o={},t=[{value:"3.1.1 \u81ea\u589e\u3001\u81ea\u51cf",id:"311-\u81ea\u589e\u81ea\u51cf",level:2},{value:"3.1.2 \u6570\u636e\u8f6c\u6362",id:"312-\u6570\u636e\u8f6c\u6362",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"31-\u8d4b\u503c",children:"3.1 \u8d4b\u503c"})}),"\n",(0,s.jsx)(e.h2,{id:"311-\u81ea\u589e\u81ea\u51cf",children:"3.1.1 \u81ea\u589e\u3001\u81ea\u51cf"}),"\n",(0,s.jsxs)(e.p,{children:["\u81ea\u589e\u4e3a ",(0,s.jsx)(e.code,{children:"++"}),"\uff0c\u81ea\u51cf\u4e3a ",(0,s.jsx)(e.code,{children:"--"}),"\uff0c\u653e\u5728\u53d8\u91cf\u524d\u9762\u4e3a\u5148\u81ea\u589e/\u81ea\u51cf\u518d\u4f7f\u7528\u503c\uff0c\u653e\u5728\u53d8\u91cf\u540e\u9762\u4e3a\u5148\u4f7f\u7528\u503c\u518d\u81ea\u589e/\u81ea\u51cf\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\nint main() {\n    int a;\n\n    a = 10;\n    printf("%d\\n", a++);\n\n    a = 10;\n    printf("%d\\n", ++a);\n\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest\n10\n11\n\nProcess finished with exit code 0\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u518d\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\nint main() {\n    int a = 10;\n    int b = a++ + ++a;\n    printf("%d\\n", b);\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest\n22\n\nProcess finished with exit code 0\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,s.jsx)(e.code,{children:"int b = a++ + ++a;"})," \u8fd9\u4e00\u884c\uff0c\u8ba1\u7b97 ",(0,s.jsx)(e.code,{children:"b"})," \u7684\u503c\u7684\u65f6\u5019\uff0c\u8981\u5206\u522b\u83b7\u5f97 ",(0,s.jsx)(e.code,{children:"a++"})," \u548c ",(0,s.jsx)(e.code,{children:"++a"})," \u7684\u503c\uff0c\u7136\u540e\u76f8\u52a0\u5f97\u5230\u7b54\u6848\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u83b7\u5f97 ",(0,s.jsx)(e.code,{children:"a++"})," \u7684\u503c\uff0c\u6839\u636e\u89c4\u5219\uff0c\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u8fd4\u56de\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"10"}),"\uff0c\u7136\u540e\u5c06 ",(0,s.jsx)(e.code,{children:"a"})," \u81ea\u589e\uff0c\u81ea\u589e\u540e ",(0,s.jsx)(e.code,{children:"a"})," \u7684\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"11"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u83b7\u5f97 ",(0,s.jsx)(e.code,{children:"++a"})," \u7684\u503c\uff0c\u6839\u636e\u89c4\u5219\uff0c\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u4f1a\u5148\u5c06 ",(0,s.jsx)(e.code,{children:"a"})," \u81ea\u589e\uff0c\u6b64\u65f6 ",(0,s.jsx)(e.code,{children:"a"})," \u7684\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"11"}),"\uff0c\u81ea\u589e\u540e\u4e3a ",(0,s.jsx)(e.code,{children:"12"}),"\uff0c\u4e8e\u662f\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u8fd4\u56de\u503c\u4e3a ",(0,s.jsx)(e.code,{children:"12"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u7efc\u4e0a\uff0c",(0,s.jsx)(e.code,{children:"b"})," \u7684\u503c\u4e3a 10 + 12 \u5f97\u5230\u7b54\u6848 22\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6700\u540e\uff0c",(0,s.jsx)(e.code,{children:"a"})," \u7684\u503c\u4e3a 12\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"DLC"}),(0,s.jsx)(e.p,{children:"\u81ea\u589e\u81ea\u51cf\u8fd0\u7b97\u89c4\u5219\u8ddf\u5e73\u53f0\u4e5f\u662f\u6709\u5173\u7cfb\u7684\uff0c\u4e0a\u8ff0\u89c4\u5219\u9002\u7528\u4e8e\u7c7b Unix \u5e73\u53f0\uff0c\u5373 Linux\u3001macOS\uff0c\u800c Windows \u4e0b\u7684\u89c4\u5219\u6709\u6240\u4e0d\u540c\uff0c\u5373\uff1a\u524d\u7f00\u8868\u8fbe\u5f0f\u5148\u7edf\u4e00\u8ba1\u7b97\u540e\u518d\u4f7f\u7528\u503c\uff0c\u540e\u7f00\u8868\u8fbe\u5f0f\u5728\u4f7f\u7528\u5b8c\u503c\u540e\u518d\u7edf\u4e00\u8ba1\u7b97\u3002"}),(0,s.jsxs)(e.p,{children:["\u90a3\u4e48\u8868\u8fbe\u5f0f ",(0,s.jsx)(e.code,{children:"int b = a++ + ++a;"})," \u5728 Windows \u4e0b\u7684\u8ba1\u7b97\u8fc7\u7a0b\u5c31\u5982\u4e0b\u6240\u793a\uff1a"]}),(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u9996\u5148\u524d\u7f00\u8868\u8fbe\u5f0f\u7edf\u4e00\u8ba1\u7b97\uff0c\u5373\u5148\u8ba1\u7b97 ",(0,s.jsx)(e.code,{children:"++a"}),"\uff0c\u8fd4\u56de\u503c\u4e3a 11\uff0c\u6b64\u65f6 ",(0,s.jsx)(e.code,{children:"a"})," \u7684\u503c\u4e3a 11\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8ba1\u7b97 b \u7684\u503c\uff0c",(0,s.jsx)(e.code,{children:"a++"})," \u5148\u4f7f\u7528\u503c\uff0c\u6b64\u65f6 ",(0,s.jsx)(e.code,{children:"a"})," \u7684\u503c\u4e3a 11\uff0c\u90a3\u4e48 ",(0,s.jsx)(e.code,{children:"b"})," \u7684\u503c\u4e3a 11 + 11 \u5f97\u5230 22"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8868\u8fbe\u5f0f\u5df2\u8ba1\u7b97\u5b8c\u6210\uff0c\u6b64\u65f6\u7edf\u4e00\u8ba1\u7b97\u540e\u7f00\u8868\u8fbe\u5f0f\uff0c\u5373\u8ba1\u7b97 ",(0,s.jsx)(e.code,{children:"a++"}),"\uff0c\u8ba1\u7b97\u5b8c\u540e ",(0,s.jsx)(e.code,{children:"a"})," \u7684\u503c\u4e3a 12\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u6700\u540e\uff0c",(0,s.jsx)(e.code,{children:"a"})," \u7684\u503c\u4e3a 12\u3002"]}),"\n"]}),(0,s.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u867d\u7136\u6700\u7ec8\u7b54\u6848\u662f\u4e00\u81f4\u7684\uff0c\u53d8\u91cf ",(0,s.jsx)(e.code,{children:"a"})," \u6700\u540e\u7684\u503c\u4e5f\u662f\u4e00\u81f4\u7684\uff0c\u4f46\u8ba1\u7b97\u8fc7\u7a0b\u5b8c\u5168\u4e0d\u4e00\u6837\u3002"]})]}),"\n",(0,s.jsx)(e.h2,{id:"312-\u6570\u636e\u8f6c\u6362",children:"3.1.2 \u6570\u636e\u8f6c\u6362"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636e\u8f6c\u6362\u5206\u4e3a\u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u9690\u5f0f\u8f6c\u6362"}),"\uff1a\u901a\u5e38\u53d1\u751f\u5728\u8f83\u5c0f\u7684\u7c7b\u578b\u8f6c\u6362\u4e3a\u8f83\u5927\u7684\u7c7b\u578b\uff0c\u662f\u5728\u8868\u8fbe\u5f0f\u4e2d\u81ea\u52a8\u53d1\u751f\u7684\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u663e\u5f0f\u8f6c\u6362"}),"\uff1a\u7528\u4e8e\u5c06\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\u5f3a\u5236\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u6570\u636e\u7c7b\u578b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e24\u79cd\u8f6c\u6362\u65b9\u5f0f\u90fd\u53ef\u80fd\u9020\u6210\u6570\u636e\u7cbe\u5ea6\u4e22\u5931\u3002\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n\nint main() {\n    int i = 10;\n    float f = 3.1f;\n    double d = i + f; // \u5c06 int \u7c7b\u578b\u9690\u5f0f\u8f6c\u6362\u4e3a float \u7c7b\u578b\u540e\u76f8\u52a0\uff0c\u5e76\u5728\u8d4b\u503c\u65f6\u5c06\u7ed3\u679c\u9690\u5f0f\u8f6c\u6362\u4e3a double \u7c7b\u578b\n    printf("\u9690\u5f0f\u8f6c\u6362\uff1ad = %lf\\n", d);\n\n    int d_i = (int) d;\n    printf("\u663e\u5f0f\u8f6c\u6362\uff1ad_i = %d\\n", d_i);\n\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8f93\u51fa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"/Users/madray/Documents/JetBrains/CLion/CTest/cmake-build-debug/CTest\n\u9690\u5f0f\u8f6c\u6362\uff1ad = 13.100000\n\u663e\u5f0f\u8f6c\u6362\uff1ad_i = 13\n\nProcess finished with exit code 0\n"})})]})}function h(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>l});var r=i(6540);const s={},d=r.createContext(s);function c(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);