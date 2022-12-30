function carregaCosmetica() {

  var biografias = {

    bio01: {

      nome: "Definição",

      imagem: "https://i.postimg.cc/nc6Kn4YF/6045733-bela-menina-com-toalha-e-coco-cosmeticos-naturais-spa-beleza-cuidados-faciais-mulheres-com-b.jpg",

      descricao:

        "Cosméticos sustentáveis são produtos que contemplam aspectos sociais, ambientais e econômicos. Cosmética também é política!! Produtos sustentáveis geram menos impactos ao meio ambiente do que os convencionais, cuidam do bem-estar animal e utilizam matérias-primas renováveis.",

    },

    bio02: {

      nome: "Impacto Ambiental",

      imagem: "https://i.postimg.cc/fb50SmX0/6029814-conceito-organico-cosmetico-garrafas-e-tubos-em-frony-od-plantas-e-ervas-cosmeticos-ervas-im.jpg",

      descricao: "Os consumidores modernos têm uma consciência global crescente. A sustentabilidade dos produtos vai muito além do lixo final que geramos. Indústrias farmacêuticas e cosméticas consomem muita água para produção de seus produtos, desde a embalagem e o produto final.  A L’Oréal é uma empresa que se preocupa com a sustentabilidade desde o início do processo, como em quais matérias-primas, formulações, emissão de gases com efeito estufa até o produto final que é entregue ao consumidor",

    
    },

    bio03: {

      nome: "Principais exemplos",

      imagem: "https://i.postimg.cc/Jh75F15Z/6030059-cuidados-cosmeticos-em-prateleira-tubos-de-perfume-de-oleo-creme-esfoliante-soro-o-conceito.jpg",

      descricao:

        "Biocosméticos: produzidos a partir de ingredientes naturais; Cosméticos Veganos: Não contém nenhuma matéria-prima de origem animal; Cosméticos Naturais: Não contém aditivos químicos na composição; Cosméticos orgânicos: 95% da matéria-prima deve ser certificada com selo orgânico; Cosméticos biodinâmicos: Orgânicos, livres de aditivos químicos e respeitam o ciclo natural da matéria-prima (fases da lua, estações, desenvolvimento das plantas...)",

      citacao:

        "",

    },
    bio04: {

      nome: "Relação com o veganismo",

      imagem: "https://i.postimg.cc/PrZypVqp/hand-drawn-cruelty-free-vegan-illustration-23-2148843555.webp",

      descricao:

        "Não dá para negar que essa nova pegada de cosméticos sustentáveis tem um cheirinho muito melhor do que os antigos, não é? Esse que nos fazer sentir mais acolhido vem da composição de ingredientes naturais, oleoquímicos que trazem muitos benefícios para a pele. Além disso, nada melhor do que ter a consciência que o seu consumo não está associado a testes em animais, que causam sofrimento e dor para esses bichinhos. E precisa ser vegano para isso? Obvio que não!! Se joga nesse mundo muito mais cheiroso, colorido e cheio de amor!! Na hora de consumir, prefira produtos com o símbolo Cruelty Free e veganos.",

    },

    bio05: {

      nome: "Self-care",

      imagem: "https://i.postimg.cc/GtTBfffk/6686224-mulher-s-rosto-e-cosmeticos-beleza-mascara-mulher-relaxante-rodeada-por-plantas-doces-concei.jpg",

      descricao:

        "A melhor forma de se cuidar é o autocuidado que devemos praticar diariamente. Fazer skincare e haircare traz benefícios para nossa saúde e mente sendo um momento de se conectar consigo mesmo e relaxar. Já que precisamos praticar o autocuidado porquê não praticar o cuidado com o próximo? Ter consciência do seu próprio consumo, o impacto que ele gera para as gerações futuras e cuidar do meio ambiente.",

    },


    bio06: {

      nome: "E o futuro, como fica?",

      imagem: "https://i.postimg.cc/ydbgvKL1/istockphoto-1257765281-612x612.jpg",

      descricao:

        "É notado o crescente interesse das novas gerações com os impactos ambientas e sociais. Se adequar a essa nova tendência que veio para ficar é necessário. Para as empresas, o impacto associa a marca à sustentabilidade, investimento em tecnologia e respeito ao meio ambiente o que passa uma imagem muito melhor para o consumidor. Que tal repensar os nossos atos e sempre que possível optar por produtos sustentáveis e cruelty free?",
    },

  };

  var content = document.getElementById("content");

  for (var bio in biografias) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      biografias[bio].nome +
      "</summary>" +
      "<p>" +
      biografias[bio].descricao +
      "</p>" +
      "</details>" +
      "</div>";

  }

}


carregaCosmetica();