"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[8858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="Nyx",o={unversionedId:"jarvis/jarvis-cd/packages/nyx",id:"jarvis/jarvis-cd/packages/nyx",title:"Nyx",description:"Installation",source:"@site/docs/05-jarvis/02-jarvis-cd/08-packages/nyx.md",sourceDirName:"05-jarvis/02-jarvis-cd/08-packages",slug:"/jarvis/jarvis-cd/packages/nyx",permalink:"/docs/jarvis/jarvis-cd/packages/nyx",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeepDriveMD",permalink:"/docs/jarvis/jarvis-cd/packages/deepdrivemd"},next:{title:"WRF",permalink:"/docs/jarvis/jarvis-cd/packages/wrf"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configure the &quot;inputs&quot; file under <strong>LyA</strong> directory",id:"configure-the-inputs-file-under-lya-directory",level:3},{value:"Run the Nyx Application",id:"run-the-nyx-application",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nyx"},"Nyx"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Dependencies: MPI and "parallel hdf5"')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ARMex"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/AMReX-Codes/amrex.git\nmkdir amrex/build && cd amrex/build\ncmake .. -DAMReX_HDF5=ON -DAMReX_PARTICLES=ON -DAMReX_PIC=ON -DBUILD_SHARED_LIBS=ON -DCMAKE_INSTALL_PREFIX=$HOME/amrex/install\nmake -j 8\nmake install\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install Nyx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/AMReX-astro/Nyx.git\ncd Nyx\nmkdir build && cd build\ncmake .. -DCMAKE_PREFIX_PATH=$HOME/amrex/install/ -DAMReX_DIR=$HOME/amrex/install/Tools/CMake/ -DNyx_SINGLE_PRECISION_PARTICLES=OFF -DNyx_OMP=OFF\nmake -j 8\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,'The Nyx executable reads run-time information from an \u201cinputs\u201d file which you designate on the command line. Most executable directories have an "inputs" file. Nyx has several different executables. Here I only show how to run the ',(0,a.kt)("strong",{parentName:"p"},"LyA")," example."),(0,a.kt)("h3",{id:"configure-the-inputs-file-under-lya-directory"},'Configure the "inputs" file under ',(0,a.kt)("strong",{parentName:"h3"},"LyA")," directory"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By default, Nyx doesn't output HDF5 files. To enable Nyx to write HDF5 files, adding ",(0,a.kt)("inlineCode",{parentName:"li"},"nyx.write_hdf5 = 1"),' to the "inputs" file. For example:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# ------------------  INPUTS TO MAIN PROGRAM  -------------------\nmax_step = 200\n\nnyx.ppm_type         = 1\nnyx.use_colglaz      = 0\nnyx.corner_coupling  = 1\nnyx.write_hdf5       = 1  # add this line\nnyx.strang_split     = 0\nnyx.sdc_split        = 1\nnyx.add_ext_src      = 0\nnyx.heat_cool_type   = 11\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Set the ",(0,a.kt)("inlineCode",{parentName:"li"},"nyx.initial_z")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"nyx.final_z"),", z corresponds to time, but it is negative. ",(0,a.kt)("inlineCode",{parentName:"li"},"nyx.initial_z")," is larger than ",(0,a.kt)("inlineCode",{parentName:"li"},"nyx.final_z"),". For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nyx.initial_z = 190.0\nnyx.final_z = 170.0\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Nyx needs to initialize binary particles. I want it to read from a binary file. By default, there is a binary file ",(0,a.kt)("inlineCode",{parentName:"li"},"64sssss_20mpc.nyx")," in LyA directory. Here are some related parameters:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# >>>>>>>>>>>>>  PARTICLE INIT OPTIONS <<<<<<<<<<<<<<<<\nnyx.particle_init_type = BinaryFile\nnyx.binary_particle_file = 64sssss_20mpc.nyx\nparticles.nparts_per_read = 2097152\n")),(0,a.kt)("p",null,"Note: If ",(0,a.kt)("inlineCode",{parentName:"p"},"64sssss_20mpc.nyx")," is located in a different directory, you need to use the absolute path of the file."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Nyx will generate two kinds of files: \u201cplotfiles\u201d and \u201ccheckpoint\u201d files. The "plotfiles" are used for visualization and the "checkpoint" files for restarting the code. The "plotfiles" are written in AMReX plotfile binary format by default. You can tell Nyx to output HDF5 file by adding ',(0,a.kt)("inlineCode",{parentName:"li"},"nyx.write_hdf5 = 1"))),(0,a.kt)("p",null,'3.1 Set "plotfiles" related parameters'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# PLOTFILES\namr.plot_files_output = 1\namr.plot_file       = /mnt/ssd/jye20/LyA_test/plt\namr.plot_int        = -1\nnyx.plot_z_values   = 188.0 184.0 182.0\n\namr.plot_vars        = density xmom ymom zmom rho_e Temp phi_grav\n#amr.derive_plot_vars = particle_mass_density particle_count\n")),(0,a.kt)("p",null,"amr.plot_files_output: This is set to 1 to enable plot files. If you don't want to output plot files, set it to 0."),(0,a.kt)("p",null,"amr.plot_file: This is the base name for the plotfile, e.g. plt. If you set it to be ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/ssd/jye20/LyA_test/plt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/mnt/ssd/jye20/LyA_test")," is the output directory."),(0,a.kt)("p",null,"nyx.plot_z_values: Specify a list of z values for which Nyx will save a snapshot."),(0,a.kt)("p",null,"amr.plot_vars: Specify the name of state variables to include in plotfiles"),(0,a.kt)("p",null,"amr.derive_plot_vars: Specify name of derived variables to include in plotfiles"),(0,a.kt)("p",null,"3.2 Set checkpoint file parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# CHECKPOINT FILES\namr.checkpoint_files_output = 1\namr.check_file        = /mnt/ssd/jye20/LyA_test/chk\namr.check_int         = 100\namr.checkpoint_nfiles = 64\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Resolution related parameters")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"amr.n_cell           =  64  64  64\namr.max_grid_size    = 32\n")),(0,a.kt)("p",null,"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://amrex-astro.github.io/Nyx/docs_html/NyxInputs.html#examples-of-usage-2"},"Nyx document")),(0,a.kt)("h2",{id:"run-the-nyx-application"},"Run the Nyx Application"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter into the ",(0,a.kt)("strong",{parentName:"li"},"LyA")," executable directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./nyx_LyA ./inputs\n")))}d.isMDXComponent=!0}}]);