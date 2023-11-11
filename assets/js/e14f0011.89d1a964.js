"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[4792],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>m});var t=i(7294);function p(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){p(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,p=function(e,n){if(null==e)return{};var i,t,p={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(p[i]=e[i]);return p}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(p[i]=e[i])}return p}var o=t.createContext({}),s=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(i),g=p,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||a;return i?t.createElement(m,r(r({ref:n},c),{},{components:i})):t.createElement(m,r({ref:n},c))}));function m(e,n){var i=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var a=i.length,r=new Array(a);r[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:p,r[1]=l;for(var s=2;s<a;s++)r[s]=i[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},6997:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=i(7462),p=(i(7294),i(3905));const a={},r="Python API",l={unversionedId:"jarvis/jarvis-cd/python-api",id:"jarvis/jarvis-cd/python-api",title:"Python API",description:"This guide documents how to use Jarvis within a Python script. To this point,",source:"@site/docs/05-jarvis/02-jarvis-cd/07-python-api.md",sourceDirName:"05-jarvis/02-jarvis-cd",slug:"/jarvis/jarvis-cd/python-api",permalink:"/docs/jarvis/jarvis-cd/python-api",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building a Package",permalink:"/docs/jarvis/jarvis-cd/building-package"},next:{title:"CM1",permalink:"/docs/jarvis/jarvis-cd/packages/cm1"}},o={},s=[{value:"Importing Jarvis CD",id:"importing-jarvis-cd",level:2},{value:"Creating a Pipeline",id:"creating-a-pipeline",level:2},{value:"Loading an Existing Pipeline",id:"loading-an-existing-pipeline",level:2},{value:"Append Pkgs to a Pipeline",id:"append-pkgs-to-a-pipeline",level:2},{value:"Configure a <code>Pkg</code> in the Pipeline",id:"configure-a-pkg-in-the-pipeline",level:2},{value:"Unlink/Remove <code>Pkg</code>s from a Pipeline",id:"unlinkremove-pkgs-from-a-pipeline",level:2},{value:"Run a Pipeline",id:"run-a-pipeline",level:2},{value:"Destroy a Pipeline",id:"destroy-a-pipeline",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...i}=e;return(0,p.kt)(u,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"python-api"},"Python API"),(0,p.kt)("p",null,"This guide documents how to use Jarvis within a Python script. To this point,\nwe have demonstrated the Jarvis CLI. However, the Python API can be used\nfor building more complex benchmarks."),(0,p.kt)("h2",{id:"importing-jarvis-cd"},"Importing Jarvis CD"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"from jarvis_cd.basic.pkg import Pipeline\n")),(0,p.kt)("h2",{id:"creating-a-pipeline"},"Creating a Pipeline"),(0,p.kt)("p",null,"To create a pipeline and save the environment for the pipeline:"),(0,p.kt)("p",null,"USAGE:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().create(pipeline_id).build_env().save()\n")),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().create('gs-hermes').build_env().save()\n")),(0,p.kt)("p",null,"NOTE: ",(0,p.kt)("inlineCode",{parentName:"p"},"create()")," will not override any data if the pipeline already exists."),(0,p.kt)("h2",{id:"loading-an-existing-pipeline"},"Loading an Existing Pipeline"),(0,p.kt)("p",null,"USAGE:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().load(pipeline_id=None)\n")),(0,p.kt)("p",null,"The following will load the currently-focused pipeline:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().load()\n")),(0,p.kt)("p",null,"The following will load the pipeline with a particular name"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().load('gs-hermes')\n")),(0,p.kt)("h2",{id:"append-pkgs-to-a-pipeline"},"Append Pkgs to a Pipeline"),(0,p.kt)("p",null,"USAGE:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'pipeline.append(pkg_type, pkg_id=None, do_configure=True, **kwargs)\n"""\nCreate and append a pkg to the pipeline\n\n:param pkg_type: The type of pkg to create (e.g., OrangeFS)\n:param pkg_id: Semantic name of the pkg to create\n:param do_configure: Whether to configure while appending\n:param kwargs: Any parameters the user want to configure in the pkg\n:return: self\n"""\n')),(0,p.kt)("p",null,"The following will add Hermes to the pipeline with a sleep of 10"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.append('hermes', 'sleep'=10)\npipeline.append('hermes_mpiio')\npipeline.append('gray_scott')\npipeline.save()\n")),(0,p.kt)("h2",{id:"configure-a-pkg-in-the-pipeline"},"Configure a ",(0,p.kt)("inlineCode",{parentName:"h2"},"Pkg")," in the Pipeline"),(0,p.kt)("p",null,"USAGE:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pkg = pipeline.get_pkg(pkg_id)\npkg.configure(**kwargs)\n")),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pkg = pipline.get_pkg('hermes')\npkg.configure(sleep=5).save()\n")),(0,p.kt)("h2",{id:"unlinkremove-pkgs-from-a-pipeline"},"Unlink/Remove ",(0,p.kt)("inlineCode",{parentName:"h2"},"Pkg"),"s from a Pipeline"),(0,p.kt)("p",null,"Unlink will simply remove the program from the Jarvis config, but not\ndestroy its contents. Unlinked pkgs can be re-linked using append without\nlosing the configuration data."),(0,p.kt)("p",null,"Remove ereases the pkg from the filesystem entirely."),(0,p.kt)("p",null,"USAGE:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.remove(pkg_id).save()\npipeline.unlink(pkg_id).save()\n")),(0,p.kt)("p",null,"For example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.remove('hermes').save()\n")),(0,p.kt)("h2",{id:"run-a-pipeline"},"Run a Pipeline"),(0,p.kt)("p",null,"To run the Pipeline end-to-end:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.run()\n")),(0,p.kt)("h2",{id:"destroy-a-pipeline"},"Destroy a Pipeline"),(0,p.kt)("p",null,"To destroy a Pipeline:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.destroy()\n")))}d.isMDXComponent=!0}}]);