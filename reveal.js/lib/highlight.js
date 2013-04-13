/*
Syntax highlighting with language autodetection.
http://softwaremaniacs.org/soft/highlight/
*/var hljs=new function(){function a(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function b(a,b,c){return RegExp(b,"m"+(a.cI?"i":"")+(c?"g":""))}function c(a){for(var b=0;b<a.childNodes.length;b++){var c=a.childNodes[b];if(c.nodeName=="CODE")return c;if(c.nodeType!=3||!c.nodeValue.match(/\s+/))break}}function d(a,b){var c="";for(var e=0;e<a.childNodes.length;e++)if(a.childNodes[e].nodeType==3){var f=a.childNodes[e].nodeValue;b&&(f=f.replace(/\n/g,"")),c+=f}else a.childNodes[e].nodeName=="BR"?c+="\n":c+=d(a.childNodes[e]);return/MSIE [678]/.test(navigator.userAgent)&&(c=c.replace(/\r/g,"\n")),c}function e(a){var b=a.className.split(/\s+/);b=b.concat(a.parentNode.className.split(/\s+/));for(var c=0;c<b.length;c++){var d=b[c].replace(/^language-/,"");if(o[d]||d=="no-highlight")return d}}function f(a){var b=[];return function(a,c){for(var d=0;d<a.childNodes.length;d++)a.childNodes[d].nodeType==3?c+=a.childNodes[d].nodeValue.length:a.childNodes[d].nodeName=="BR"?c+=1:(b.push({event:"start",offset:c,node:a.childNodes[d]}),c=arguments.callee(a.childNodes[d],c),b.push({event:"stop",offset:c,node:a.childNodes[d]}));return c}(a,0),b}function g(b,c,d){function h(){return b.length&&c.length?b[0].offset!=c[0].offset?b[0].offset<c[0].offset?b:c:c[0].event=="start"?b:c:b.length?b:c}function i(b){var c="<"+b.nodeName.toLowerCase();for(var d=0;d<b.attributes.length;d++){var e=b.attributes[d];c+=" "+e.nodeName.toLowerCase(),e.nodeValue!=undefined&&e.nodeValue!=0&&e.nodeValue!=null&&(c+='="'+a(e.nodeValue)+'"')}return c+">"}var e=0,f="",g=[];while(b.length||c.length){var j=h().splice(0,1)[0];f+=a(d.substr(e,j.offset-e)),e=j.offset;if(j.event=="start")f+=i(j.node),g.push(j.node);else if(j.event=="stop"){var k=g.length;do{k--;var l=g[k];f+="</"+l.nodeName.toLowerCase()+">"}while(l!=j.node);g.splice(k,1);while(k<g.length)f+=i(g[k]),k++}}return f+=d.substr(e),f}function h(){function a(c,d,e){if(c.compiled)return;e||(c.bR=b(d,c.b?c.b:"\\B|\\b"),!c.e&&!c.eW&&(c.e="\\B|\\b"),c.e&&(c.eR=b(d,c.e))),c.i&&(c.iR=b(d,c.i)),c.r==undefined&&(c.r=1),c.k&&(c.lR=b(d,c.l||hljs.IR,!0));for(var f in c.k){if(!c.k.hasOwnProperty(f))continue;c.k[f]instanceof Object?c.kG=c.k:c.kG={keyword:c.k};break}c.c||(c.c=[]),c.compiled=!0;for(var g=0;g<c.c.length;g++)a(c.c[g],d,!1);c.starts&&a(c.starts,d,!1)}for(var c in o){if(!o.hasOwnProperty(c))continue;a(o[c].dM,o[c],!0)}}function i(c,d){function e(a,b){for(var c=0;c<b.c.length;c++)if(b.c[c].bR.test(a))return b.c[c]}function f(a,b){if(s[a].e&&s[a].eR.test(b))return 1;if(s[a].eW){var c=f(a-1,b);return c?c+1:0}return 0}function g(a,b){return b.iR&&b.iR.test(a)}function j(a,c){var d=[];for(var e=0;e<a.c.length;e++)d.push(a.c[e].b);var f=s.length-1;do s[f].e&&d.push(s[f].e),f--;while(s[f+1].eW);return a.i&&d.push(a.i),b(c,"("+d.join("|")+")",!0)}function k(a,b){var c=s[s.length-1];c.t||(c.t=j(c,r)),c.t.lastIndex=b;var d=c.t.exec(a);return d?[a.substr(b,d.index-b),d[0],!1]:[a.substr(b),"",!0]}function l(a,b){var c=r.cI?b[0].toLowerCase():b[0];for(var d in a.kG){if(!a.kG.hasOwnProperty(d))continue;var e=a.kG[d].hasOwnProperty(c);if(e)return[d,e]}return!1}function m(b,c){if(!c.k)return a(b);var d="",e=0;c.lR.lastIndex=0;var f=c.lR.exec(b);while(f){d+=a(b.substr(e,f.index-e));var g=l(c,f);g?(u+=g[1],d+='<span class="'+g[0]+'">'+a(f[0])+"</span>"):d+=a(f[0]),e=c.lR.lastIndex,f=c.lR.exec(b)}return d+=a(b.substr(e,b.length-e)),d}function n(a,b){if(b.sL&&o[b.sL]){var c=i(b.sL,a);return u+=c.keyword_count,c.value}return m(a,b)}function p(b,c){var d=b.cN?'<span class="'+b.cN+'">':"";b.rB?(v+=d,b.buffer=""):b.eB?(v+=a(c)+d,b.buffer=""):(v+=d,b.buffer=c),s.push(b),t+=b.r}function q(b,c,d){var h=s[s.length-1];if(d)return v+=n(h.buffer+b,h),!1;var i=e(c,h);if(i)return v+=n(h.buffer+b,h),p(i,c),i.rB;var j=f(s.length-1,c);if(j){var k=h.cN?"</span>":"";h.rE?v+=n(h.buffer+b,h)+k:h.eE?v+=n(h.buffer+b,h)+k+a(c):v+=n(h.buffer+b+c,h)+k;while(j>1)k=s[s.length-2].cN?"</span>":"",v+=k,j--,s.length--;var l=s[s.length-1];return s.length--,s[s.length-1].buffer="",l.starts&&p(l.starts,""),h.rE}if(g(c,h))throw"Illegal"}h.called||(h(),h.called=!0);var r=o[c],s=[r.dM],t=0,u=0,v="";try{var w=0;r.dM.buffer="";do{var x=k(d,w),y=q(x[0],x[1],x[2]);w+=x[0].length,y||(w+=x[1].length)}while(!x[2]);if(s.length>1)throw"Illegal";return{r:t,keyword_count:u,value:v}}catch(z){if(z=="Illegal")return{r:0,keyword_count:0,value:a(d)};throw z}}function j(b){var c={keyword_count:0,r:0,value:a(b)},d=c;for(var e in o){if(!o.hasOwnProperty(e))continue;var f=i(e,b);f.language=e,f.keyword_count+f.r>d.keyword_count+d.r&&(d=f),f.keyword_count+f.r>c.keyword_count+c.r&&(d=c,c=f)}return d.language&&(c.second_best=d),c}function k(a,b,c){return b&&(a=a.replace(/^((<[^>]+>|\t)+)/gm,function(a,c,d,e){return c.replace(/\t/g,b)})),c&&(a=a.replace(/\n/g,"<br>")),a}function l(a,b,c){var h=d(a,c),l=e(a);if(l=="no-highlight")return;if(l)var m=i(l,h);else{var m=j(h);l=m.language}var n=f(a);if(n.length){var o=document.createElement("pre");o.innerHTML=m.value,m.value=g(n,f(o),h)}m.value=k(m.value,b,c);var p=a.className;p.match("(\\s|^)(language-)?"+l+"(\\s|$)")||(p=p?p+" "+l:l);if(/MSIE [678]/.test(navigator.userAgent)&&a.tagName=="CODE"&&a.parentNode.tagName=="PRE"){var o=a.parentNode,q=document.createElement("div");q.innerHTML="<pre><code>"+m.value+"</code></pre>",a=q.firstChild.firstChild,q.firstChild.cN=o.cN,o.parentNode.replaceChild(q.firstChild,o)}else a.innerHTML=m.value;a.className=p,a.result={language:l,kw:m.keyword_count,re:m.r},m.second_best&&(a.second_best={language:m.second_best.language,kw:m.second_best.keyword_count,re:m.second_best.r})}function m(){if(m.called)return;m.called=!0;var a=document.getElementsByTagName("pre");for(var b=0;b<a.length;b++){var d=c(a[b]);d&&l(d,hljs.tabReplace)}}function n(){window.addEventListener?(window.addEventListener("DOMContentLoaded",m,!1),window.addEventListener("load",m,!1)):window.attachEvent?window.attachEvent("onload",m):window.onload=m}var o={};this.LANGUAGES=o,this.highlight=i,this.highlightAuto=j,this.fixMarkup=k,this.highlightBlock=l,this.initHighlighting=m,this.initHighlightingOnLoad=n,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\.",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0},this.CLCM={cN:"comment",b:"//",e:"$"},this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"},this.HCM={cN:"comment",b:"#",e:"$"},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.inherit=function(a,b){var c={};for(var d in a)c[d]=a[d];if(b)for(var d in b)c[d]=b[d];return c}};hljs.LANGUAGES.cs={dM:{k:{"abstract":1,as:1,base:1,bool:1,"break":1,"byte":1,"case":1,"catch":1,"char":1,checked:1,"class":1,"const":1,"continue":1,decimal:1,"default":1,delegate:1,"do":1,"do":1,"double":1,"else":1,"enum":1,event:1,explicit:1,extern:1,"false":1,"finally":1,fixed:1,"float":1,"for":1,foreach:1,"goto":1,"if":1,implicit:1,"in":1,"int":1,"interface":1,internal:1,is:1,lock:1,"long":1,namespace:1,"new":1,"null":1,object:1,operator:1,out:1,override:1,params:1,"private":1,"protected":1,"public":1,readonly:1,ref:1,"return":1,sbyte:1,sealed:1,"short":1,sizeof:1,stackalloc:1,"static":1,string:1,struct:1,"switch":1,"this":1,"throw":1,"true":1,"try":1,"typeof":1,uint:1,ulong:1,unchecked:1,unsafe:1,ushort:1,using:1,virtual:1,"volatile":1,"void":1,"while":1,ascending:1,descending:1,from:1,get:1,group:1,into:1,join:1,let:1,orderby:1,partial:1,select:1,set:1,value:1,"var":1,where:1,yield:1},c:[{cN:"comment",b:"///",e:"$",rB:!0,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},hljs.CLCM,hljs.CBLCLM,{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},hljs.ASM,hljs.QSM,hljs.CNM]}},hljs.LANGUAGES.ruby=function(){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",c={keyword:{and:1,"false":1,then:1,defined:1,module:1,"in":1,"return":1,redo:1,"if":1,BEGIN:1,retry:1,end:1,"for":1,"true":1,self:1,when:1,next:1,until:1,"do":1,begin:1,unless:1,END:1,rescue:1,nil:1,"else":1,"break":1,undef:1,not:1,"super":1,"class":1,"case":1,require:1,yield:1,alias:1,"while":1,ensure:1,elsif:1,or:1,def:1},keymethods:{__id__:1,__send__:1,abort:1,abs:1,"all?":1,allocate:1,ancestors:1,"any?":1,arity:1,assoc:1,at:1,at_exit:1,autoload:1,"autoload?":1,"between?":1,binding:1,binmode:1,"block_given?":1,call:1,callcc:1,caller:1,capitalize:1,"capitalize!":1,casecmp:1,"catch":1,ceil:1,center:1,chomp:1,"chomp!":1,chop:1,"chop!":1,chr:1,"class":1,class_eval:1,"class_variable_defined?":1,class_variables:1,clear:1,clone:1,close:1,close_read:1,close_write:1,"closed?":1,coerce:1,collect:1,"collect!":1,compact:1,"compact!":1,concat:1,"const_defined?":1,const_get:1,const_missing:1,const_set:1,constants:1,count:1,crypt:1,"default":1,default_proc:1,"delete":1,"delete!":1,delete_at:1,delete_if:1,detect:1,display:1,div:1,divmod:1,downcase:1,"downcase!":1,downto:1,dump:1,dup:1,each:1,each_byte:1,each_index:1,each_key:1,each_line:1,each_pair:1,each_value:1,each_with_index:1,"empty?":1,entries:1,eof:1,"eof?":1,"eql?":1,"equal?":1,eval:1,exec:1,exit:1,"exit!":1,extend:1,fail:1,fcntl:1,fetch:1,fileno:1,fill:1,find:1,find_all:1,first:1,flatten:1,"flatten!":1,floor:1,flush:1,for_fd:1,foreach:1,fork:1,format:1,freeze:1,"frozen?":1,fsync:1,getc:1,gets:1,global_variables:1,grep:1,gsub:1,"gsub!":1,"has_key?":1,"has_value?":1,hash:1,hex:1,id:1,include:1,"include?":1,included_modules:1,index:1,indexes:1,indices:1,induced_from:1,inject:1,insert:1,inspect:1,instance_eval:1,instance_method:1,instance_methods:1,"instance_of?":1,"instance_variable_defined?":1,instance_variable_get:1,instance_variable_set:1,instance_variables:1,"integer?":1,intern:1,invert:1,ioctl:1,"is_a?":1,isatty:1,"iterator?":1,join:1,"key?":1,keys:1,"kind_of?":1,lambda:1,last:1,length:1,lineno:1,ljust:1,load:1,local_variables:1,loop:1,lstrip:1,"lstrip!":1,map:1,"map!":1,match:1,max:1,"member?":1,merge:1,"merge!":1,method:1,"method_defined?":1,method_missing:1,methods:1,min:1,module_eval:1,modulo:1,name:1,nesting:1,"new":1,next:1,"next!":1,"nil?":1,nitems:1,"nonzero?":1,object_id:1,oct:1,open:1,pack:1,partition:1,pid:1,pipe:1,pop:1,popen:1,pos:1,prec:1,prec_f:1,prec_i:1,print:1,printf:1,private_class_method:1,private_instance_methods:1,"private_method_defined?":1,private_methods:1,proc:1,protected_instance_methods:1,"protected_method_defined?":1,protected_methods:1,public_class_method:1,public_instance_methods:1,"public_method_defined?":1,public_methods:1,push:1,putc:1,puts:1,quo:1,raise:1,rand:1,rassoc:1,read:1,read_nonblock:1,readchar:1,readline:1,readlines:1,readpartial:1,rehash:1,reject:1,"reject!":1,remainder:1,reopen:1,replace:1,require:1,"respond_to?":1,reverse:1,"reverse!":1,reverse_each:1,rewind:1,rindex:1,rjust:1,round:1,rstrip:1,"rstrip!":1,scan:1,seek:1,select:1,send:1,set_trace_func:1,shift:1,singleton_method_added:1,singleton_methods:1,size:1,sleep:1,slice:1,"slice!":1,sort:1,"sort!":1,sort_by:1,split:1,sprintf:1,squeeze:1,"squeeze!":1,srand:1,stat:1,step:1,store:1,strip:1,"strip!":1,sub:1,"sub!":1,succ:1,"succ!":1,sum:1,superclass:1,swapcase:1,"swapcase!":1,sync:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,taint:1,"tainted?":1,tell:1,test:1,"throw":1,times:1,to_a:1,to_ary:1,to_f:1,to_hash:1,to_i:1,to_int:1,to_io:1,to_proc:1,to_s:1,to_str:1,to_sym:1,tr:1,"tr!":1,tr_s:1,"tr_s!":1,trace_var:1,transpose:1,trap:1,truncate:1,"tty?":1,type:1,ungetc:1,uniq:1,"uniq!":1,unpack:1,unshift:1,untaint:1,untrace_var:1,upcase:1,"upcase!":1,update:1,upto:1,"value?":1,values:1,values_at:1,warn:1,write:1,write_nonblock:1,"zero?":1,zip:1}},d={cN:"yardoctag",b:"@[A-Za-z]+"},e={cN:"comment",b:"#",e:"$",c:[d]},f={cN:"comment",b:"^\\=begin",e:"^\\=end",c:[d],r:10},g={cN:"comment",b:"^__END__",e:"\\n$"},h={cN:"subst",b:"#\\{",e:"}",l:a,k:c},i=[hljs.BE,h],j={cN:"string",b:"'",e:"'",c:i,r:0},k={cN:"string",b:'"',e:'"',c:i,r:0},l={cN:"string",b:"%[qw]?\\(",e:"\\)",c:i,r:10},m={cN:"string",b:"%[qw]?\\[",e:"\\]",c:i,r:10},n={cN:"string",b:"%[qw]?{",e:"}",c:i,r:10},o={cN:"string",b:"%[qw]?<",e:">",c:i,r:10},p={cN:"string",b:"%[qw]?/",e:"/",c:i,r:10},q={cN:"string",b:"%[qw]?%",e:"%",c:i,r:10},r={cN:"string",b:"%[qw]?-",e:"-",c:i,r:10},s={cN:"string",b:"%[qw]?\\|",e:"\\|",c:i,r:10},t={cN:"function",b:"\\bdef\\s+",e:" |$|;",l:a,k:c,c:[{cN:"title",b:b,l:a,k:c},{cN:"params",b:"\\(",e:"\\)",l:a,k:c},e,f,g]},u={cN:"identifier",b:a,l:a,k:c,r:0},v=[e,f,g,j,k,l,m,n,o,p,q,r,s,{cN:"class",b:"\\b(class|module)\\b",e:"$|;",k:{"class":1,module:1},c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+hljs.IR+"::)?"+hljs.IR}]},e,f,g]},t,{cN:"constant",b:"(::)?([A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[j,k,l,m,n,o,p,q,r,s,u],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},u,{b:"("+hljs.RSR+")\\s*",c:[e,f,g,{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[hljs.BE]}],r:0}];return h.c=v,t.c[1].c=v,{dM:{l:a,k:c,c:v}}}(),hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}},hljs.LANGUAGES.css=function(){var a={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:!0,eE:!0,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:!0,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:{"font-face":1,page:1}},{cN:"at_rule",b:"@",e:"[{;]",eE:!0,k:{"import":1,page:1,media:1,charset:1},c:[a,hljs.ASM,hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[a,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}(),hljs.LANGUAGES.xml=function(){var a="[A-Za-z0-9\\._:-]+",b={eW:!0,c:[{cN:"attribute",b:a,r:0},{b:'="',rB:!0,e:'"',c:[{cN:"value",b:'"',eW:!0}]},{b:"='",rB:!0,e:"'",c:[{cN:"value",b:"'",eW:!0}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:!0,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[b],starts:{cN:"css",e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[b],starts:{cN:"javascript",e:"</script>",rE:!0,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}}(),hljs.LANGUAGES.java={dM:{k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1},c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,{cN:"class",b:"(class |interface )",e:"{",k:{"class":1,"interface":1},i:":",c:[{b:"(implements|extends)",k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR}]},hljs.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}},hljs.LANGUAGES.php={cI:!0,dM:{k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,eval:1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1,"true":1,"false":1,namespace:1},c:[hljs.CLCM,hljs.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+",r:10}]},hljs.CNM,hljs.inherit(hljs.ASM,{i:null}),hljs.inherit(hljs.QSM,{i:null}),{cN:"variable",b:"\\$[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"}]}},hljs.LANGUAGES.python=function(){var a={cN:"string",b:"(u|b)?r?'''",e:"'''",r:10},b={cN:"string",b:'(u|b)?r?"""',e:'"""',r:10},c={cN:"string",b:"(u|r|ur|b|br)'",e:"'",c:[hljs.BE],r:10},d={cN:"string",b:'(u|r|ur|b|br)"',e:'"',c:[hljs.BE],r:10},e={cN:"title",b:hljs.UIR},f={cN:"params",b:"\\(",e:"\\)",c:[a,b,c,d,hljs.ASM,hljs.QSM]};return{dM:{k:{keyword:{and:1,elif:1,is:1,global:1,as:1,"in":1,"if":1,from:1,raise:1,"for":1,except:1,"finally":1,print:1,"import":1,pass:1,"return":1,exec:1,"else":1,"break":1,not:1,"with":1,"class":1,assert:1,yield:1,"try":1,"while":1,"continue":1,del:1,or:1,def:1,lambda:1,nonlocal:10},built_in:{None:1,True:1,False:1,Ellipsis:1,NotImplemented:1}},i:"(</|->|\\?)",c:[hljs.HCM,a,b,c,d,hljs.ASM,hljs.QSM,{cN:"function",b:"\\bdef ",e:":",i:"$",k:{def:1},c:[e,f],r:10},{cN:"class",b:"\\bclass ",e:":",i:"[${]",k:{"class":1},c:[e,f],r:10},hljs.CNM,{cN:"decorator",b:"@",e:"$"}]}}}(),hljs.LANGUAGES.perl=function(){var a={getpwent:1,getservent:1,quotemeta:1,msgrcv:1,scalar:1,kill:1,dbmclose:1,undef:1,lc:1,ma:1,syswrite:1,tr:1,send:1,umask:1,sysopen:1,shmwrite:1,vec:1,qx:1,utime:1,local:1,oct:1,semctl:1,localtime:1,readpipe:1,"do":1,"return":1,format:1,read:1,sprintf:1,dbmopen:1,pop:1,getpgrp:1,not:1,getpwnam:1,rewinddir:1,qq:1,fileno:1,qw:1,endprotoent:1,wait:1,sethostent:1,bless:1,s:1,opendir:1,"continue":1,each:1,sleep:1,endgrent:1,shutdown:1,dump:1,chomp:1,connect:1,getsockname:1,die:1,socketpair:1,close:1,flock:1,exists:1,index:1,shmget:1,sub:1,"for":1,endpwent:1,redo:1,lstat:1,msgctl:1,setpgrp:1,abs:1,exit:1,select:1,print:1,ref:1,gethostbyaddr:1,unshift:1,fcntl:1,syscall:1,"goto":1,getnetbyaddr:1,join:1,gmtime:1,symlink:1,semget:1,splice:1,x:1,getpeername:1,recv:1,log:1,setsockopt:1,cos:1,last:1,reverse:1,gethostbyname:1,getgrnam:1,study:1,formline:1,endhostent:1,times:1,chop:1,length:1,gethostent:1,getnetent:1,pack:1,getprotoent:1,getservbyname:1,rand:1,mkdir:1,pos:1,chmod:1,y:1,substr:1,endnetent:1,printf:1,next:1,open:1,msgsnd:1,readdir:1,use:1,unlink:1,getsockopt:1,getpriority:1,rindex:1,wantarray:1,hex:1,system:1,getservbyport:1,endservent:1,"int":1,chr:1,untie:1,rmdir:1,prototype:1,tell:1,listen:1,fork:1,shmread:1,ucfirst:1,setprotoent:1,"else":1,sysseek:1,link:1,getgrgid:1,shmctl:1,waitpid:1,unpack:1,getnetbyname:1,reset:1,chdir:1,grep:1,split:1,require:1,caller:1,lcfirst:1,until:1,warn:1,"while":1,values:1,shift:1,telldir:1,getpwuid:1,my:1,getprotobynumber:1,"delete":1,and:1,sort:1,uc:1,defined:1,srand:1,accept:1,"package":1,seekdir:1,getprotobyname:1,semop:1,our:1,rename:1,seek:1,"if":1,q:1,chroot:1,sysread:1,setpwent:1,no:1,crypt:1,getc:1,chown:1,sqrt:1,write:1,setnetent:1,setpriority:1,foreach:1,tie:1,sin:1,msgget:1,map:1,stat:1,getlogin:1,unless:1,elsif:1,truncate:1,exec:1,keys:1,glob:1,tied:1,closedir:1,ioctl:1,socket:1,readlink:1,eval:1,xor:1,readline:1,binmode:1,setservent:1,eof:1,ord:1,bind:1,alarm:1,pipe:1,atan2:1,getgrent:1,exp:1,time:1,push:1,setgrent:1,gt:1,lt:1,or:1,ne:1,m:1},b={cN:"subst",b:"[$@]\\{",e:"}",k:a,r:10},c={cN:"variable",b:"\\$\\d"},d={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"},e=[hljs.BE,b,c,d],f={b:"->",c:[{b:hljs.IR},{b:"{",e:"}"}]},g=[c,d,hljs.HCM,{cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},f,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:e,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:e,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:e,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:e,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:e,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:e,r:5},{cN:"string",b:"'",e:"'",c:[hljs.BE],r:0},{cN:"string",b:'"',e:'"',c:e,r:0},{cN:"string",b:"`",e:"`",c:[hljs.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[hljs.BE],r:0},{cN:"sub",b:"\\bsub\\b",e:"(\\s*\\(.*?\\))?[;{]",k:{sub:1},r:5},{cN:"operator",b:"-\\w\\b",r:0},{cN:"pod",b:"\\=\\w",e:"\\=cut"}];return b.c=g,f.c[1].c=g,{dM:{k:a,c:g}}}(),hljs.LANGUAGES.cpp=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1,alignof:1,char16_t:1,char32_t:1,constexpr:1,decltype:1,noexcept:1,nullptr:1,static_assert:1,thread_local:1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1,unordered_set:1,unordered_map:1,unordered_multiset:1,unordered_multimap:1,array:1,shared_ptr:1}},b={cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:a,r:10};return b.c=[b],{dM:{k:a,i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},hljs.CNM,{cN:"preprocessor",b:"#",e:"$"},b]}}}();