"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[7250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const o={},a="Hello World",i={unversionedId:"hpc-tutorials/cpp-introduction/hello-world",id:"hpc-tutorials/cpp-introduction/hello-world",title:"Hello World",description:"Choosing a Compiler",source:"@site/docs/02-hpc-tutorials/04-cpp-introduction/01-hello-world.md",sourceDirName:"02-hpc-tutorials/04-cpp-introduction",slug:"/hpc-tutorials/cpp-introduction/hello-world",permalink:"/docs/hpc-tutorials/cpp-introduction/hello-world",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C++ Introduction",permalink:"/docs/category/c-introduction"},next:{title:"Main Scenario",permalink:"/docs/hermes/index"}},p={},s=[{value:"Choosing a Compiler",id:"choosing-a-compiler",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"C++ Source File",id:"c-source-file",level:2},{value:"C++ Header Files",id:"c-header-files",level:2},{value:"Program start",id:"program-start",level:2},{value:"Console output",id:"console-output",level:2},{value:"Program return",id:"program-return",level:2},{value:"Building",id:"building",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hello-world"},"Hello World"),(0,l.kt)("h2",{id:"choosing-a-compiler"},"Choosing a Compiler"),(0,l.kt)("p",null,"There are many C++ compilers."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"GNU compiler collection (GCC)"),": The standard C/C++ compiler provided on most Linux systems. Linux-only."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Clang"),": Clang provides various extensions that can be used to build custom compiler add-ons. Cross-platform.\nStandard on Mac."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Microsoft Visual C++ (MSVC)"),": The standard C/C++ compiler for Windows."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Intel Compiler"),": Sometimes used. Optimizations for intel products."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"MinGW"),": Like gcc, except works on Windows.")),(0,l.kt)("p",null,"Generally, we prioritize compiling for Linux systems. This means we typically focus on gcc and occasionally clang. Clang is a more modern compiler with many advanced features and better warnings and error messages. However, we generally focus on gcc."),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"In this example, we will demonstrate how print text to a terminal. One of the main use of printing is for debugging.\nTools such as ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/google/glog"},"Google Logger"),", are used to make print statements to help determine\nwhere a program crashes, without having to use an expensive debugger all the time."),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${SCS_TUTORIAL}/cpp_hello_world\n")),(0,l.kt)("h2",{id:"c-source-file"},"C++ Source File"),(0,l.kt)("p",null,"Below is the code in ",(0,l.kt)("inlineCode",{parentName:"p"},"hello_world.cc"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <stdio.h>\n#include <iostream>\n\nint main() {\n  printf("Hello world 0\\n");\n  std::cout << "hello world 1" << std::endl;\n  return 0;\n}\n')),(0,l.kt)("p",null,"We will describe this step-by-step."),(0,l.kt)("h2",{id:"c-header-files"},"C++ Header Files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <stdio.h>\n#include <iostream>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"#include"),' is used to instruct the C++ compiler where to find header files. In our case, the header files being included are\n"',(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),'" and "',(0,l.kt)("inlineCode",{parentName:"p"},"iostream"),"\". Header files typically contain the definitions of functions. They have the same syntax as a source\nfile, but they don't typically have as much code logic."),(0,l.kt)("p",null,'To find header files, compilers will search a number of places. For example, "',(0,l.kt)("inlineCode",{parentName:"p"},"/usr/include"),'" will typically contain "',(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),'"\nand "',(0,l.kt)("inlineCode",{parentName:"p"},"/usr/include/c++"),'" may contain iostream. These paths are subject to change depending on the gcc version and OS.'),(0,l.kt)("p",null,'In our case, "',(0,l.kt)("inlineCode",{parentName:"p"},"stdio.h"),'" is where printf is defined, and "',(0,l.kt)("inlineCode",{parentName:"p"},"iostream"),'" is where ',(0,l.kt)("inlineCode",{parentName:"p"},"std::cout")," is defined."),(0,l.kt)("h2",{id:"program-start"},"Program start"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n  // code here...\n}\n")),(0,l.kt)("p",null,"The main function is required in order to execute a C++ program. When you launch a program, the main function is where\nthe code execution begins."),(0,l.kt)("h2",{id:"console-output"},"Console output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'printf("Hello world 0\\n");\nstd::cout << "Hello world 1" << std::endl;\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Text is always in double quotes ",(0,l.kt)("inlineCode",{parentName:"li"},'""')),(0,l.kt)("li",{parentName:"ol"},'"',(0,l.kt)("inlineCode",{parentName:"li"},"\\n"),'" in "Hello world 0" means "new line". Analogous to hitting the ',(0,l.kt)("kbd",null,"Enter")," key on your keyboard in a text editor."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"std::cout")," uses left shift operator (",(0,l.kt)("inlineCode",{parentName:"li"},"<<"),") to print to console"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"std::endl")," is equivalent to '",(0,l.kt)("inlineCode",{parentName:"li"},"\\n"),"'"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"printf")," takes the text as a function parameter")),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"printf")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"cout")," are valid ways of printing. Typically ",(0,l.kt)("inlineCode",{parentName:"p"},"cout")," is preferred in C++ programs, but you'll likely see\nboth in example programs."),(0,l.kt)("h2",{id:"program-return"},"Program return"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"int main() {\n  // code here...\n  return 0;\n}\n")),(0,l.kt)("p",null,'Main returns an integer "',(0,l.kt)("inlineCode",{parentName:"p"},"int"),'". This indicates the success or failure of a program. Generally, a return value of "',(0,l.kt)("inlineCode",{parentName:"p"},"0"),'" indicates\nthe program succeeded. Any other value indicates a failure and the reason for failure.'),(0,l.kt)("h2",{id:"building"},"Building"),(0,l.kt)("p",null,"We will build this code manually using gcc. It is generally a bad idea to compile things manually, but the knowledge of how\nthe compiler is called will be helpful."),(0,l.kt)("p",null,'Here we will use gcc to compile the program "',(0,l.kt)("inlineCode",{parentName:"p"},"hello_world.cc"),'".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"g++ hello_world.cc -o hello_world\n")),(0,l.kt)("p",null,'This will produce an executable file called "hello_world". To run the code:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./hello_world\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"hello world 0\nhello world 1\n")),(0,l.kt)("p",null,"To view the return code of the program in Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$?\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"0\n")),(0,l.kt)("p",null,"which is what we returned using the ",(0,l.kt)("inlineCode",{parentName:"p"},"return")," statement."))}d.isMDXComponent=!0}}]);