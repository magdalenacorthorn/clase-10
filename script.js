
        
            const filas = document.querySelector("tbody");
            const texto = document.querySelector("#promedio")
            var total = 0;
            async function notas() {
                let consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/opr/refs/heads/main/clase-08/notas.json");
                let data = await consulta.json();
                console.log(data);
                data.forEach((d)=>{
                    filas.innerHTML += `<tr><td>${d.nombre}</td><td>${(d.nota).toFixed(1)}</td><td>${carita(d.nota)}</td><td>${barrita(d.nota)}</tr>`;
                    total = total + d.nota;
                });
                texto.innerHTML = (total/12).toFixed(1);
            }
              notas().catch((error) => console.error(error));         

               function carita (n){
                var emoji;
            if (n > 5.9){
                emoji= "😄";
            } else if (n == 5.9) {
                emoji= "🙂";
            } else { 
                emoji= "😕";
            }
            return emoji
        }

   function barrita(n) {
    let ancho = (n / 7) * 250;
    let color = "#006837"; 
    if (n < 4); 
    else if (n < 5.9); 

    return `
        <svg class="barra-svg" width="250" height="20">
            <rect width="250" height="20" fill="#c2e699"/>
            <rect width="${ancho}" height="20" fill="${color}"/>
            <text x="15%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${ancho > 50 ? '#c2e699' : '#c2e699'}" font-size="15">${n}</text>
        </svg>`;
}