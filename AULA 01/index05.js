
let r = new Retangulo(5,5,"azul");
let r2 = new Retangulo(8,8,"amarelo");
console.log(r.toString());
console.log(r2.toString());

let q = new Quadrado(3);
console.log(q.area);
console.log(q.lado,q.num_requests);
//chamando o setter
q.area=25;
console.log(q.area);
console.log(q.lado,q.num_requests);