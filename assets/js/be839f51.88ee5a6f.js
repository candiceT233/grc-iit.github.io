"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[9423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Choosing an OS",s={unversionedId:"hpc-tutorials/linux-introduction/choosing-an-os",id:"hpc-tutorials/linux-introduction/choosing-an-os",title:"Choosing an OS",description:"Which distro?",source:"@site/docs/02-hpc-tutorials/01-linux-introduction/01-choosing-an-os.md",sourceDirName:"02-hpc-tutorials/01-linux-introduction",slug:"/hpc-tutorials/linux-introduction/choosing-an-os",permalink:"/docs/hpc-tutorials/linux-introduction/choosing-an-os",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux Introduction",permalink:"/docs/category/linux-introduction"},next:{title:"Basics of using a Terminal",permalink:"/docs/hpc-tutorials/linux-introduction/using-a-terminal"}},l={},u=[{value:"Which distro?",id:"which-distro",level:2},{value:"What if I have Windows?",id:"what-if-i-have-windows",level:2},{value:"What if I have a Mac?",id:"what-if-i-have-a-mac",level:2}],c={toc:u},h="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"choosing-an-os"},"Choosing an OS"),(0,o.kt)("h2",{id:"which-distro"},"Which distro?"),(0,o.kt)("p",null,"There are many Linux distributions out there, and they all have different quirks. The following is a list of distros\nwhich are currently being used, or we expect may eventually be used."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/desktop"},"Ubuntu"),": We use Ubuntu currently in our cluster. It's not widely used in HPC, but it's a mature, well-maintained distro.\nThere are many ubuntu-like systems (e.g., Linux Mint), feel free to use any of them. We recommend using an ubuntu-like system for the purposes of our research."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.centos.org/download/"},"Centos7/8"),": CentOS 7 and 8 are used pretty commonly in HPC. However, they have been discontinued. We don't recommend\nusing them for your main OS, but you should be aware you may have to deal with them for software portability."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rockylinux.org/"},"Rocky"),": A replacement to CentOS, and is a potential candidate for HPC systems."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://almalinux.org/"},"Alma"),": Another CentOS-like system, which is also a potential candidate for HPC systems.")),(0,o.kt)("h2",{id:"what-if-i-have-windows"},"What if I have Windows?"),(0,o.kt)("p",null,"Microsoft Windows has the Windows Subsystem for Linux (WSL). It's competent for the majority of Linux development. If you\ndon't want to kill your current windows installation, WSL should be sufficient for most cases of our research. WSL provides\nan Ubuntu installation. Follow ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"Microsoft's instructions")," on how to\nenable WSL."),(0,o.kt)("h2",{id:"what-if-i-have-a-mac"},"What if I have a Mac?"),(0,o.kt)("p",null,"Macs are a bit tricky. Mac and Linux are NOT the same thing. Generally speaking, we highly recommend developing on a Linux distribution which is similar to what\nis used in HPC. Unfortunately, Macs don't have something like WSL. We recommend using either a container (e.g., Docker/Singularity) or a virtual machine\n(VirtualBox/Qemu) for development. Generally, containers are much faster than VMs by default. We recommend using a container for Ubuntu. We describe Docker\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/scs-lab/scs-tutorial/wiki/5.1.-Docker-Basics"},"here"),"."))}d.isMDXComponent=!0}}]);