(window["webpackJsonpel-algoritmo-del-ritmo"]=window["webpackJsonpel-algoritmo-del-ritmo"]||[]).push([[9],{46:function(e,t){ace.define("ace/mode/ada_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,r){"use strict";var i=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,a=function(){var e=this.createKeywordMapper({"support.function":"count|min|max|avg|sum|rank|now|coalesce|main",keyword:"abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|body|private|then|if|procedure|type|case|in|protected|constant|interface|until||is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor","constant.language":"true|false|null"},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]}};i.inherits(a,o),t.AdaHighlightRules=a})),ace.define("ace/mode/ada",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ada_highlight_rules"],(function(e,t,r){"use strict";var i=e("../lib/oop"),o=e("./text").Mode,a=e("./ada_highlight_rules").AdaHighlightRules,n=function(){this.HighlightRules=a,this.$behaviour=this.$defaultBehaviour};i.inherits(n,o),function(){this.lineCommentStart="--",this.$id="ace/mode/ada"}.call(n.prototype),t.Mode=n}))}}]);
//# sourceMappingURL=9.dd6853ff.chunk.js.map