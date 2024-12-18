import{d as g,k as u,a as m,e,n as v,u as r,t as f,b,q as s,o as c}from"./app-r4TGU7DZ.js";import{u as P}from"./vue.8fc199ce-CiUYUx37.js";import{a as t,f as h,u as n}from"./formatter-DWb2Yiwn.js";const y={class:"mx-auto px-10 xl:px-0 space-y-16 max-w-screen-lg mt-4 mb-20"},A={class:"space-y-10"},V={class:"flex flex-col gap-6 bg-gray-50 p-8 border border-gray-200 rounded-md"},L={class:"flex flex-col gap-1"},G=["value"],I={class:"flex flex-col gap-1"},C=["value"],q={class:"flex flex-col gap-1"},_={class:"flex rounded-sm border border-gray-300"},j=["value"],w={class:"flex flex-col gap-1"},F={class:"flex rounded-sm border border-gray-300"},k=["value"],R={key:0,class:"flex flex-col gap-6 bg-gray-50 p-10 border border-gray-200 rounded-md"},z={class:"bg-zinc-700 p-5 text-white text-center rounded-sm col-span-2"},B={class:"font-bold text-xl"},J=g({name:"GrahamPage",__name:"formula-de-graham",setup(E){P({title:"Fórmula de Graham - Tools Invest",meta:[{name:"description",content:"Calcule o valor intrínseco de uma ação usando a famosa fórmula de Benjamin Graham."},{name:"keywords",content:"Fórmula de Graham, Calculadora da Fórmula de Graham, Cálculo do Valor Intrínseco, Investimento de Graham, Valor Intrínseco das Ações, Cálculo de Ações, Fórmula de Graham para Ações, Avaliação de Ações, Investimento em Ações, Cálculo de Preço Justo de Ações, Graham Formula Calculator, Preço Justo das Ações, Investimento Inteligente, Teoria de Graham, Cálculo de Preço de Ações com Graham, Graham Equation"}],script:[{hid:"json-ld",type:"application/ld+json",textContent:JSON.stringify({"@context":"https://schema.org","@type":"ItemList",name:"Calculadoras Financeiras",itemListElement:[{"@type":"ListItem",position:1,name:"Calculadora de Juros Compostos",url:"https://toolsinvest.com.br/juros-compostos"},{"@type":"ListItem",position:2,name:"Correção de Valores pela Inflação",url:"https://toolsinvest.com.br/correcao-de-valor-pela-inflacao"},{"@type":"ListItem",position:3,name:"Fórmula de Graham",url:"https://toolsinvest.com.br/formula-de-graham"}]})}]});const o=u({PL:"15,00",PVP:"1,50",LPA:null,VPA:null}),d=u(null);function p(){if(!o.value.LPA||!o.value.VPA)return;const i=n(o.value.PL),a=n(o.value.PVP),l=n(o.value.LPA),x=n(o.value.VPA);d.value=Math.sqrt(i*a*l*x)}return(i,a)=>(c(),m("div",y,[e("main",A,[e("div",V,[a[11]||(a[11]=e("header",null,[e("h1",{class:"text-2xl font-bold"},"Fórmula de Graham"),e("p",null,"Insira os indicadores e calcule o valor intrínseco de uma ação")],-1)),e("form",{class:"grid grid-cols-2 gap-5",onSubmit:v(p,["prevent"])},[e("div",L,[a[4]||(a[4]=e("label",{class:"text-sm"},"P/L (Preço sobre Lucro)",-1)),e("input",{type:"text",placeholder:"15",class:"h-10 px-3 rounded-sm border border-gray-300 placeholder:text-gray-400",onInput:a[0]||(a[0]=l=>o.value.PL=r(t)(l.target.value)),value:o.value.PL},null,40,G)]),e("div",I,[a[5]||(a[5]=e("label",{class:"text-sm"},"P/VP (Preço sobre Valor Patrimonial)",-1)),e("input",{type:"text",placeholder:"1,5",class:"h-10 px-3 rounded-sm border border-gray-300 placeholder:text-gray-400",onInput:a[1]||(a[1]=l=>o.value.PVP=r(t)(l.target.value)),value:o.value.PVP},null,40,C)]),e("div",q,[a[7]||(a[7]=e("label",{class:"text-sm"},"LPA (Lucro por Ação)",-1)),e("div",_,[a[6]||(a[6]=e("span",{class:"w-12 flex items-center border-r border-gray-300 justify-center bg-gray-100"}," R$ ",-1)),e("input",{placeholder:"0,00",class:"h-10 px-3 w-full placeholder:text-gray-400",onInput:a[2]||(a[2]=l=>o.value.LPA=r(t)(l.target.value)),value:o.value.LPA},null,40,j)])]),e("div",w,[a[9]||(a[9]=e("label",{class:"text-sm"},"VPA (Valor Patrimonial por Ação)",-1)),e("div",F,[a[8]||(a[8]=e("span",{class:"w-12 flex items-center border-r border-gray-300 justify-center bg-gray-100"}," R$ ",-1)),e("input",{type:"text",placeholder:"0,00",class:"h-10 px-3 w-full placeholder:text-gray-400",onInput:a[3]||(a[3]=l=>o.value.VPA=r(t)(l.target.value)),value:o.value.VPA},null,40,k)])]),a[10]||(a[10]=e("button",{type:"submit",class:"h-10 col-span-2 rounded-sm text-white bg-zinc-700"}," Calcular ",-1))],32)]),d.value?(c(),m("div",R,[a[12]||(a[12]=e("header",null,[e("h2",{class:"text-2xl font-bold"},"Resultado"),e("p",null,"Esse resultado corresponde ao valor intrínseco de uma ação")],-1)),e("div",z,[e("p",B,f(r(h)(d.value)),1)])])):b("",!0)]),a[13]||(a[13]=e("article",{class:"space-y-10"},[e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Quem foi Benjamin Graham?"),e("p",{class:"text-lg leading-relaxed"},[s(" Benjamin Graham é considerado o "),e("strong",null,"Value Investing"),s(". Ele foi um investidor, economista e professor, conhecido por ensinar fundamentos de análise de ações e investimento seguro. Graham escreveu dois livros icônicos: "),e("strong",null,'"O Investidor Inteligente"'),s(" e "),e("strong",null,'"Security Analysis"'),s(", que influenciaram gerações de investidores, incluindo "),e("strong",null,"Warren Buffett"),s(", um de seus alunos mais famosos. ")])]),e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Como funciona a fórmula de Graham?"),e("p",{class:"text-lg leading-relaxed"}," A fórmula de Graham é uma ferramenta simples e eficaz para calcular o valor intrínseco de uma ação. A fórmula original é: "),e("math",{class:"text-3xl py-5",display:"block"},[e("mi",null,"V"),e("mo",null,"="),e("msqrt",null,[e("mrow",null,[e("mn",null,"22.5"),e("mo",null,"×"),e("mi",null,"LPA"),e("mo",null,"×"),e("mi",null,"VPA")])])]),e("p",{class:"text-lg leading-relaxed"}," Explicando cada termo "),e("ul",{class:"list-disc list-inside text-lg leading-relaxed"},[e("li",null,"V: Valor intrínseco da ação - o preço justo estimado."),e("li",null," LPA (Lucro por Ação): representa o lucro líquido da empresa dividido pelo número total de ações. "),e("li",null," VPA (Valor Patrimonial por Ação): corresponde ao patrimônio líquido da empresa dividido pelo número total de ações. "),e("li",null," 22.5: Um fator que Graham determinou como adequado, combinando um múltiplo máximo de 15 para o P/L (Preço/Lucro) e de 1.5 para o P/VP (Preço/Valor Patrimonial). ")])]),e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Para que serve o Número de Graham?"),e("p",{class:"text-lg leading-relaxed"},[s(" A fórmula de Graham é uma ferramenta que calcula o valor justo de uma ação com base nos lucros e no patrimônio da empresa. O resultado desse cálculo pode ser comparado ao preço atual de mercado para ajudar os investidores a identificar oportunidades de investimento. "),e("br"),e("br"),s(" De acordo com a fórmula, se o preço de mercado de uma ação estiver abaixo do valor calculado, isso indica que a ação está "),e("strong",null,"subvalorizada"),s(", podendo ser uma boa oportunidade de compra. Por outro lado, se o preço de mercado for superior ao valor calculado, a ação pode estar "),e("strong",null,"supervalorizada"),s(", sugerindo maior cautela ao investir. ")])]),e("section",{class:"space-y-4"},[e("h2",{class:"text-3xl font-bold"},"Exemplo Prático"),e("p",{class:"text-lg leading-relaxed"}," Imagine uma ação com os seguintes indicadores: "),e("ul",{class:"list-disc list-inside text-lg leading-relaxed"},[e("li",null," LPA (Lucro por Ação): R$ 5,00 "),e("li",null," VPA (Valor Patrimonial por Ação): R$ 20,00 ")]),e("br"),e("p",null," Aplicando a fórmula: "),e("math",{class:"text-3xl py-5",display:"block"},[e("mi",null,"V"),e("mo",null,"="),e("msqrt",null,[e("mrow",null,[e("mn",null,"22.5"),e("mo",null,"×"),e("mn",null,"5"),e("mo",null,"×"),e("mn",null,"20")])]),e("mo",null,"="),e("msqrt",null,[e("mn",null,"2250")]),e("mo",null,"="),e("mn",null,"47.43")]),e("p",{class:"text-lg leading-relaxed"}," O valor intrínseco calculado (V) é aproximadamente R$ 47,43. Agora, comparando com o preço atual de mercado: "),e("ul",{class:"list-disc list-inside"},[e("li",null," Se o preço de mercado for R$ 40,00: A ação está subvalorizada, sugerindo uma possível oportunidade de compra. "),e("li",null," Se o preço de mercado for R$ 50,00: A ação está supervalorizada, o que exige mais cautela. ")])])],-1))]))}});export{J as default};
