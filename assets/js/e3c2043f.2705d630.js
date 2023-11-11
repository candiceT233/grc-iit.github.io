"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[9636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={},i="Adapters",o={unversionedId:"hermes/adapters",id:"hermes/adapters",title:"Adapters",description:"[[../images/Hermes_Ecosystem.jpg|Hermes Adapters]]",source:"@site/docs/03-hermes/07-adapters.md",sourceDirName:"03-hermes",slug:"/hermes/adapters",permalink:"/docs/hermes/adapters",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Topology",permalink:"/docs/hermes/components/topology"},next:{title:"Quick Start Guide",permalink:"/docs/hermes/quick-start"}},l={},p=[{value:"Filesystem Base Class (FSBC)",id:"filesystem-base-class-fsbc",level:2},{value:"Design",id:"design",level:3},{value:"VFD",id:"vfd",level:3},{value:"PubSub Adapter",id:"pubsub-adapter",level:2},{value:"Suported API",id:"suported-api",level:3},{value:"<code>connect</code>",id:"connect",level:4},{value:"<code>attach</code>",id:"attach",level:4},{value:"<code>detach</code>",id:"detach",level:4},{value:"<code>publish</code>",id:"publish",level:4},{value:"<code>subscribe</code>",id:"subscribe",level:4},{value:"Current Limitations",id:"current-limitations",level:2},{value:"Future Work",id:"future-work",level:2},{value:"References",id:"references",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adapters"},"Adapters"),(0,a.kt)("p",null,"[","[../images/Hermes_Ecosystem.jpg|Hermes Adapters]","]"),(0,a.kt)("p",null,"Instead of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/hermes/programming"},"Hermes primitives"),", existing applications\nuse I/O libraries and middleware such as the C standard I/O library,\nMPI-IO, or HDF5. Since Hermes is intended to be a seamless I/O\nbuffering solution, a set of ",(0,a.kt)("em",{parentName:"p"},"adapters")," is provided in the form of\n",(0,a.kt)("inlineCode",{parentName:"p"},"LD_PRELOAD"),"-able shared libraries. These adapters perform the task of\nmapping between the application view of I/O primitives (e.g., files)\nand the Hermes primitives. An exemplary discussion of such mappings\ncan be found in ",(0,a.kt)("a",{parentName:"p",href:"http://www.cs.iit.edu/~scs/assets/files/Enosis.pdf"},(0,a.kt)("em",{parentName:"a"},"Enosis: Bridging the Semantic Gap between File-based\nand Object-based Data Models"))," and\n",(0,a.kt)("a",{parentName:"p",href:"http://www.cs.iit.edu/~scs/assets/files/Syndesis.pdf"},(0,a.kt)("em",{parentName:"a"},"Syndesis: Mapping Objects to Files for a Unified Data Access\nSystem")),"."),(0,a.kt)("p",null,"Another important task of Hermes adapters is to collect I/O profiling\nthat supports the detection of I/O patterns."),(0,a.kt)("h2",{id:"filesystem-base-class-fsbc"},"Filesystem Base Class (FSBC)"),(0,a.kt)("p",null,"The Filesystem Base Class (FSBC) is used by all filesystem-based APIs. This\nincludes STDIO, POSIX, and MPIIO. The FSBC implements all necessary APIs for\nbuffering files within Hermes."),(0,a.kt)("p",null,"The FSBC provides basic filesystem overrides, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Opening a file"),(0,a.kt)("li",{parentName:"ul"},"Writing to a file"),(0,a.kt)("li",{parentName:"ul"},"Reading from a file"),(0,a.kt)("li",{parentName:"ul"},"Getting the size of a file"),(0,a.kt)("li",{parentName:"ul"},"Removing a file")),(0,a.kt)("p",null,"Currently, we have four filesystem adapters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"STDIO"),(0,a.kt)("li",{parentName:"ol"},"POSIX"),(0,a.kt)("li",{parentName:"ol"},"MPI-IO"),(0,a.kt)("li",{parentName:"ol"},"HDF5 VFD")),(0,a.kt)("h3",{id:"design"},"Design"),(0,a.kt)("p",null,"When reading/writing to a file, the FSBC will divide the I/O request into\nfixed-size pages. This is a configurable value, but the default is 1MB."),(0,a.kt)("p",null,"When extending the size of a file, the FSBC relies on a lock to ensure that\nthe size of the file is coherent. This lock is a problem for workloads which\nperform shared I/O to a single file. FPP workloads are generally better."),(0,a.kt)("p",null,"A solution to this problem would be a log-structured merge tree, but this\nwill require significant changes to the Hermes data model."),(0,a.kt)("h3",{id:"vfd"},"VFD"),(0,a.kt)("p",null,"The HDF5 VFD is used to interface HDF5 with Hermes natively. To use the Hermes\nVFD in HDF5, you must define the following environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export HDF5_PLUGIN_PATH=/path/to/hermes/lib\nexport HDF5_DRIVER=hdf5_hermes_vfd\n")),(0,a.kt)("p",null,"HDF5_PLUGIN_PATH indicates the directory to search for the HDF5_DRIVER. In\nthis case, HDF5 will search for libhdf5_hermes_vfd.so."),(0,a.kt)("h2",{id:"pubsub-adapter"},"PubSub Adapter"),(0,a.kt)("p",null,"The PubSub adapter for Hermes stands a bit different from other adapters due to the diverse nature of pub/sub APIs on the market. For example, here are two examples of starting programs for two different queue/broker systems."),(0,a.kt)("p",null,"A simple example of, one of, the ZeroMQ C++ API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#include <string>\n#include <zmq.hpp>\nint main()\n{\n   zmq::context_t ctx;\n   zmq::socket_t sock(ctx, zmq::socket_type::push);\n   sock.bind("inproc://test");\n   const std::string_view m = "Hello, world";\n   sock.send(zmq::buffer(m), zmq::send_flags::dontwait);\n}\n')),(0,a.kt)("p",null,"And an example of the Kafka C++ API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#include "kafka/KafkaProducer.h"\n#include <iostream>\n#include <string>\nint main(int argc, char **argv)\n{\n  std::string brokers = argv[1];\n  kafka::Topic topic  = argv[2];\n  string line\'\n\n  kafka::Properties props({\n    {"bootstrap.servers", brokers},\n    {"enable.idempotence", "true"},\n  });\n  kafka::KafkaSyncProducer producer(props);\n  std::cin >> line;\n  auto record = kafka::ProducerRecord(topic, kafka::NullKey, kafka::Value(line.c_str(), line.size()));\n  kafka::Producer::RecordMetadata metadata = producer.send(record);\n}\n')),(0,a.kt)("p",null,"Both examples highlight the diversity of APIs present on the pub/sub market.\nAs such, the adapter API is intended to present a common and sharable lower interface to Hermes to which all other used API can be intercepted and redirected."),(0,a.kt)("h3",{id:"suported-api"},"Suported API"),(0,a.kt)("p",null,"In all functions ",(0,a.kt)("inlineCode",{parentName:"p"},"hapi")," stands for objects under the ",(0,a.kt)("inlineCode",{parentName:"p"},"hermes::api")," namespace."),(0,a.kt)("h4",{id:"connect"},(0,a.kt)("inlineCode",{parentName:"h4"},"connect")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hapi::Status connect(const std::string &config_file);\nhapi::Status connect();\n    - Connects to the Hermes instance\n    - One option accepts, config_file: Path to the config file of Hermes\n    - The other, assumes that path is loaded into an environment variable defined in constants.h under kHermesConf\n")),(0,a.kt)("h4",{id:"attach"},(0,a.kt)("inlineCode",{parentName:"h4"},"attach")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hapi::Status attach(const std::string& topic);\n    - Attaches to a topic, creating it if it doesn't exist\n    - topic: The name of the topic\n")),(0,a.kt)("h4",{id:"detach"},(0,a.kt)("inlineCode",{parentName:"h4"},"detach")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hapi::Status detach(const std::string& topic);\n    - Detaches from the topic cleaning up all client-local metadata\n    - topic: The name of the topic\n    - Note, detaching doesn't delete the topic\n")),(0,a.kt)("h4",{id:"publish"},(0,a.kt)("inlineCode",{parentName:"h4"},"publish")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hapi::Status publish(const std::string& topic,  const std::vector<unsigned char>& message);\n    - Puts a message to a topic\n    - topic: The name of the topic\n    - message: the data buffer\n    - Note, the function uses std::vector<unsigned char> which is equivalent to hermes::api::Blob\n")),(0,a.kt)("h4",{id:"subscribe"},(0,a.kt)("inlineCode",{parentName:"h4"},"subscribe")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," std::pair<std::vector<unsigned char>, hapi::Status> subscribe( const std::string& topic);\n    - Retrieves the next message from the topic\n    - topic: The name of the topic\n    - returns: a pair of the return code/status and, if successful, the subscribed message.\n")),(0,a.kt)("h2",{id:"current-limitations"},"Current Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Currently on Hermes, Blob deletions causes the latest Blob to be placed in it's place, this is intended to save memory space and provide an O(1) deletion complexity. Nevertheless, this destroys the ordering of messages expected but the pub/sub API, as such, message/Blob deletions is not possible, currently."),(0,a.kt)("li",{parentName:"ul"},"Multi-threaded support of the API has not been fully tested. All tests have been performed under multi-process, MPI-driven tests.")),(0,a.kt)("h2",{id:"future-work"},"Future Work"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Current work is being focused in expanding the library to support the use of traits to support in-transit transformations of the data")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/LLNL/GOTCHA"},"GOTCHA is a library for wrapping function calls in shared libraries"))))}u.isMDXComponent=!0}}]);