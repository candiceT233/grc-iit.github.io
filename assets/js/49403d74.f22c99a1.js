"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[7652],{9540:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=t(5893),i=t(1151);const o={},l="Hostfile",r={id:"jarvis/jarvis-util/hostfile",title:"Hostfile",description:"Hostfiles contain a set of machines.",source:"@site/docs/05-jarvis/01-jarvis-util/05-hostfile.md",sourceDirName:"05-jarvis/01-jarvis-util",slug:"/jarvis/jarvis-util/hostfile",permalink:"/docs/jarvis/jarvis-util/hostfile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Argument Parsing",permalink:"/docs/jarvis/jarvis-util/argument-parsing"},next:{title:"Introduction",permalink:"/docs/jarvis/jarvis-cd/index"}},a={},h=[{value:"Host Text Files",id:"host-text-files",level:2},{value:"Hostfile Import",id:"hostfile-import",level:2},{value:"Hostfile Constructor",id:"hostfile-constructor",level:2},{value:"Hostfile for the current machine",id:"hostfile-for-the-current-machine",level:2},{value:"Hostfile from a filesystem",id:"hostfile-from-a-filesystem",level:2},{value:"Host names and IPs",id:"host-names-and-ips",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"hostfile",children:"Hostfile"}),"\n",(0,n.jsx)(s.p,{children:"Hostfiles contain a set of machines."}),"\n",(0,n.jsx)(s.h2,{id:"host-text-files",children:"Host Text Files"}),"\n",(0,n.jsx)(s.p,{children:"Hostfiles can be stored as text files on a filesystem.\nThey have the following syntax:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"ares-comp-01\nares-comp-[02-04]\nares-comp-[05-09,11,12-14]-40g\n"})}),"\n",(0,n.jsx)(s.h2,{id:"hostfile-import",children:"Hostfile Import"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"from jarvis_util.util.hostfile import Hostfile\n"})}),"\n",(0,n.jsx)(s.h2,{id:"hostfile-constructor",children:"Hostfile Constructor"}),"\n",(0,n.jsx)(s.p,{children:"The hostfile has the following constructor:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'class Hostfile:\n    """\n    Parse a hostfile or store a set of hosts passed in manually.\n    """\n\n    def __init__(self, hostfile=None, all_hosts=None, all_hosts_ip=None,\n                 text=None, find_ips=True):\n        """\n        Constructor. Parse hostfile or store existing host list.\n\n        :param hostfile: The path to the hostfile\n        :param all_hosts: a list of strings representing all hostnames\n        :param all_hosts_ip: a list of strings representing all host IPs\n        :param text: Text of a hostfile\n        :param find_ips: Whether to construct host_ip and all_host_ip fields\n        """\n'})}),"\n",(0,n.jsx)(s.h2,{id:"hostfile-for-the-current-machine",children:"Hostfile for the current machine"}),"\n",(0,n.jsx)(s.p,{children:"To get the localhost file:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"hostfile = Hostfile()\n"})}),"\n",(0,n.jsx)(s.h2,{id:"hostfile-from-a-filesystem",children:"Hostfile from a filesystem"}),"\n",(0,n.jsx)(s.p,{children:"To load a hostfile from the filesystem:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"hostfile = Hostfile(hostfile=f'{HERE}/test_hostfile.txt')\n"})}),"\n",(0,n.jsx)(s.h2,{id:"host-names-and-ips",children:"Host names and IPs"}),"\n",(0,n.jsxs)(s.p,{children:["To get the host names and IP addresses, the Hostfile stores the ",(0,n.jsx)(s.code,{children:"hosts"}),"\nand ",(0,n.jsx)(s.code,{children:"hosts_ip"})," variables. They are lists of strings."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"hostfile = Hostfile()\nprint(hostfile.hosts)\nprint(hostfile.hosts_ip)\n"})}),"\n",(0,n.jsx)(s.p,{children:"Output:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"['localhost']\n['127.0.0.1']\n"})})]})}function f(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>l});var n=t(7294);const i={},o=n.createContext(i);function l(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);