"use strict";(self.webpackChunkpgee=self.webpackChunkpgee||[]).push([[4377],{2783:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"programming/06/programming-06-20","title":"6.20 \u8fde\u7eed\u5b50\u6570\u7ec4\u6700\u5927\u4e58\u79ef","description":"\u4f8b\u9898\uff1a152. \u4e58\u79ef\u6700\u5927\u5b50\u6570\u7ec4 - \u529b\u6263\uff08LeetCode\uff09","source":"@site/docs/programming/06/programming-06-20.md","sourceDirName":"programming/06","slug":"/programming/06/programming-06-20","permalink":"/pgee/programming/06/programming-06-20","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/programming/06/programming-06-20.md","tags":[],"version":"current","lastUpdatedAt":1742296372000,"frontMatter":{},"sidebar":"programming","previous":{"title":"6.19 \u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217","permalink":"/pgee/programming/06/programming-06-19"},"next":{"title":"DLC\u3001\u5176\u4ed6\u8d44\u6e90","permalink":"/pgee/category/dlc\u5176\u4ed6\u8d44\u6e90"}}');var r=s(4848),a=s(8453);const i={},m="6.20 \u8fde\u7eed\u5b50\u6570\u7ec4\u6700\u5927\u4e58\u79ef",c={},o=[];function l(n){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",header:"header",math:"math",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"620-\u8fde\u7eed\u5b50\u6570\u7ec4\u6700\u5927\u4e58\u79ef",children:"6.20 \u8fde\u7eed\u5b50\u6570\u7ec4\u6700\u5927\u4e58\u79ef"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4f8b\u9898\uff1a",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-product-subarray/",children:"152. \u4e58\u79ef\u6700\u5927\u5b50\u6570\u7ec4 - \u529b\u6263\uff08LeetCode\uff09"})]}),"\n",(0,r.jsx)(e.p,{children:"\u8001\u89c4\u77e9\uff0c\u5148\u8003\u8651\u66b4\u529b\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u6839\u636e\u9898\u76ee\u8981\u6c42\uff0c\u6570\u7ec4\u5143\u7d20\u7684\u8303\u56f4\u4e3a ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsxs)(e.mrow,{children:[(0,r.jsx)(e.mo,{stretchy:"false",children:"["}),(0,r.jsx)(e.mo,{children:"\u2212"}),(0,r.jsx)(e.mn,{children:"10"}),(0,r.jsx)(e.mo,{separator:"true",children:","}),(0,r.jsx)(e.mn,{children:"10"}),(0,r.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"[-10, 10]"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(e.span,{className:"mopen",children:"["}),(0,r.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,r.jsx)(e.span,{className:"mord",children:"10"}),(0,r.jsx)(e.span,{className:"mpunct",children:","}),(0,r.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(e.span,{className:"mord",children:"10"}),(0,r.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),"\uff0c\u5f53\u67d0\u4e2a\u5b50\u6570\u7ec4\u5b58\u5728\u6570\u5b57 0 \u65f6\uff0c\u6b64\u5b50\u6570\u7ec4\u7684\u4e58\u79ef\u5c31\u53ea\u80fd\u4e3a 0 \u4e86\uff0c\u4e8e\u662f\u8003\u8651\u7528\u5143\u7d20 0 \u5206\u5272\u6574\u4e2a\u6570\u7ec4\uff0c\u8bb0\u5f55\u6bcf\u4e2a\u5b50\u6570\u7ec4\u6210\u7ee9\u4e2d\u7684\u6700\u5927\u503c\u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"#include <iostream>\n#include <cstring>\n#include <cmath>\n#include <algorithm>\n\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxProduct(vector<int>& nums) {\n        if (nums.size() == 1) {\n            return nums[0];\n        }\n\n        vector<int> tmp;\n        int result = INT_MIN;\n        bool no_0 = false;\n        for (int& num : nums) {\n            if (num != 0) {\n                tmp.push_back(num);\n                no_0 = true;\n                continue;\n            }\n            if (tmp.empty()) {\n                continue;\n            }\n            result = max(result, subMaxProduct(tmp));\n            tmp.clear();\n        }\n        if (no_0) {\n            result = subMaxProduct(nums);\n        }\n        return result;\n    }\n\nprivate:\n    int subMaxProduct(vector<int>& nums) {\n        int result = INT_MIN, tmp;\n        for (int i = 0; i < nums.size(); ++i) {\n            tmp = 1;\n            for (int j = i; j < nums.size(); ++j) {\n                tmp *= nums[j];\n                result = max(result, tmp);\n            }\n        }\n        return result;\n    }\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u4e8e\u7a0d\u5927\u4e00\u70b9\u7684\u6570\u636e\u89c4\u6a21\uff0c\u4e0a\u8ff0\u65b9\u6cd5\u5c31\u4f1a\u8d85\u65f6\uff0c\u8003\u8651\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// TODO\n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>m});var t=s(6540);const r={},a=t.createContext(r);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function m(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);