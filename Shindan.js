function RETURN1() {
  window.open('https://www.google.com/search?q=うんこ','_blank');
}
function RETURN2() {
  window.open('https://www.google.com/search?q=マザーテレサ','_blank');
}
function RETURN3() {
  window.open("https://www.google.com/search?q=ブリの照り焼き",'_blank');
}
function RETURN4() {
  window.open("https://www.google.com/search?q=車海老",'_blank');
}
function RETURN5() {
  window.open("https://www.google.com/search?q=アインシュタイン",'_blank');
}
function RETURN6() {
  window.open("https://www.google.com/search?q=鉛筆",'_blank');
}
function RETURN7() {
  window.open("https://www.google.com/search?q=セノビック",'_blank');
}
function RETURN8() {
  window.open("https://www.google.com/search?q=騒音おばさん",'_blank');
}
function PUSH1() {
  document.getElementById("first").innerHTML = "<h2>結果：氏ね！この親不孝め！</h2>"
  document.getElementById("button1").outerHTML= "<button id='button3' onclick='RETURN1()'>帰れ！</button>"
  document.getElementById("button2").outerHTML = "<button id='button4' onclick='PUSH3()'>次だ！</button>"
  
}
function PUSH2() {
 document.getElementById("first").innerHTML = "<h2>結果：氏ね！このマザコンが！！</h2>"
 document.getElementById("button1").outerHTML= "<button id='button3' onclick='RETURN2()'>帰れ！</button>"
 document.getElementById("button2").outerHTML = "<button id='button4' onclick='PUSH3()'>次だ！</button>"
}
function PUSH3() {
  document.getElementById("first").innerHTML = "<h2>Q2.あなたは肉と野菜、どちらが好き？</h2>"
  document.getElementById("button3").outerHTML= "<button id='button5' onclick='PUSH4()'>肉</button>"
  document.getElementById("button4").outerHTML = "<button id='button6' onclick='PUSH5()'>野菜</button>"
}
function PUSH4() {
  document.getElementById("first").innerHTML = "<h2>結果：お前はドSだ！消えろ！</h2>"
  document.getElementById("button5").outerHTML= "<button onclick='RETURN3()' id='button7'>帰れ！</button>"
  document.getElementById("button6").outerHTML = "<button onclick='PUSH6()' id='button8'>次だ！</button>"
}
function PUSH5() {
  document.getElementById("first").innerHTML = "<h2>結果：お前はドMだ！消えろ！</h2>"
  document.getElementById("button5").outerHTML= "<button onclick='RETURN4()' id='button7'>帰れ！</button>"
  document.getElementById("button6").outerHTML = "<button onclick='PUSH6()' id='button8'>次だ！</button>"
}
function PUSH6() {
  document.getElementById("first") .innerHTML = "<h2>Q3.自分は頭が良いと思う。"
  document.getElementById("button7").outerHTML = "<button onclick='PUSH7()' id='button9'>YES</button>"
  document.getElementById("button8").outerHTML = "<button onclick='PUSH8()' id='button10'>NO</button>"
}
function PUSH7() {
  document.getElementById("first").innerHTML = "<h2>結果：よっ！自意識過剰な天才！</h2>"
  document.getElementById("button9").outerHTML= "<button onclick='RETURN5()' id='button11'>帰れ！</button>"
  document.getElementById("button10").outerHTML = "<button onclick='PUSH9()' id='button12'>次だ！</button>"
}
function PUSH8() {
  document.getElementById("first").innerHTML = "<h2>結果：よっ！自己嫌悪の低脳！</h2>"
  document.getElementById("button9").outerHTML= "<button onclick='RETURN6()' id='button11'>帰れ！</button>"
  document.getElementById("button10").outerHTML = "<button onclick='PUSH9()' id='button12'>次だ！</button>"
}
function PUSH9() {
  document.getElementById("first").innerHTML = "<h2>Q4.戦争は発展のためには大事だ。</h2>"
  document.getElementById("button11").outerHTML= "<button onclick='PUSH10()' id='button13'>YES</button>"
  document.getElementById("button12").outerHTML = "<button onclick='PUSH11()' id='button14'>カレー</button>"
}
function PUSH10() {
  document.getElementById("first").innerHTML = "<h2>結果：あなたは危険思想です。</h2>"
  document.getElementById("button13").outerHTML= "<button onclick='RETURN7()' id='button15'>帰れ！</button>"
  document.getElementById("button14").outerHTML = "<button onclick='PUSH12()' id='button16'>次だ！</button>"
}
function PUSH11() {
  document.getElementById("first").innerHTML = "<h2>結果：あなたはキチガイです。</h2>"
  document.getElementById("button13").outerHTML= "<button onclick='RETURN8()' id='button15'>帰れ！</button>"
  document.getElementById("button14").outerHTML = "<button onclick='PUSH12()' id='button16'>次だ！</button>"
}
function PUSH12() {
  document.getElementById("first").innerHTML = "<h2>結果：あなたはキチガイです。</h2>"
  document.getElementById("button13").outerHTML= "<button onclick='RETURN8()' id='button15'>帰れ！</button>"
  document.getElementById("button14").outerHTML = "<button onclick='PUSH12()' id='button16'>次だ！</button>"
}
function PUSH13() {
  document.getElementById("first").innerHTML = "<h2>結果：あなたはキチガイです。</h2>"
  document.getElementById("button13").outerHTML= "<button onclick='RETURN8()' id='button15'>帰れ！</button>"
  document.getElementById("button14").outerHTML = "<button onclick='PUSH12()' id='button16'>次だ！</button>"
}
function PUSH14() {
  document.getElementById("first").innerHTML = "<h2>結果：あなたはキチガイです。</h2>"
  document.getElementById("button13").outerHTML= "<button onclick='RETURN8()' id='button15'>帰れ！</button>"
  document.getElementById("button14").outerHTML = "<button onclick='PUSH12()' id='button16'>次だ！</button>"
}
