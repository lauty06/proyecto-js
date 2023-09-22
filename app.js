class Item {
    constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
    }
  }

  const cartuchoDeEscopeta = new Item("cartucho de escopeta", 2000, "");
  const balasDePistola = new Item("balas de pistola", 1400, "");
  const hiervaAmarilla = new Item("hierva amarilla", 3000, "");
  const polvora = new Item("polvora", 700, "");
  const sprayDePrimerosAuxilios = new Item("spray de primeros auxilios", 5000, "");
  const pistola = new Item("pistola", 7500, "");
  const escopeta = new Item("escopeta", 10000, "");
  
  const inventario = [];
  
  
  let Pesetas = 15000;
  
  
  const lasPesetas = document.querySelector("#peseta span");
  lasPesetas.innerText = pesetas;
  const elInventario = document.getElementById("inventario");
  
 
  function comprar (objeto) {
    
    if (Pesetas - objeto.precio >= 0) {
      inventario.push(objeto);
      Pesetas -= objeto.precio;
      actualizarHTML();
    } else {
      alert(`No tenes Pstas suficientes para comprar ${objeto.nombre}.`);
    }
  }
  
  
  function vender(nombreDelItem) {
    
    const itemEncontrado = inventario.find((item) => item.nombre == nombreDelItem);
  
    
    if (itemEncontrado) {
      
      Pesetas += itemEncontrado.precio;
      
      const indice = inventario.indexOf(itemEncontrado);
      inventario.splice(indice, 1);
      
      actualizarHTML();
    }
  }
  
 