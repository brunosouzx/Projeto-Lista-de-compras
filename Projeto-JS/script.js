
    const formulario = document.querySelector('#formulario');
    const listaCompras = document.querySelector('#lista-compras tbody');
    
    formulario.addEventListener('submit', (event) => {
   
      event.preventDefault();
    
      const produto = document.querySelector('#produto').value;
      const quantidade = document.querySelector('#quantidade').value;
    
      listaCompras.innerHTML += `
        <tr>
          <td>${produto}</td>
          <td>${quantidade}</td>
          <td>
            <button class="botao-editar"><img src="scr/img/editar.png" alt="icone compra" style="height: 20px;" ></button>
            <button class="botao-excluir" ><img src="scr/img/trash_bin_icon-icons.com_67981.png" alt="icone compra" style="height: 20px;"></button>
          </td>
        </tr>
      `;
    
      formulario.reset();
    });

    listaCompras.addEventListener('click', (event) => {

      if (event.target.classList.contains('botao-editar')) {

        const linha = event.target.closest('tr'); 
        const produto = linha.querySelector('td:nth-child(1)').textContent;
        const quantidade = linha.querySelector('td:nth-child(2)').textContent;

        document.querySelector('#produto').value = produto;
        document.querySelector('#quantidade').value = quantidade;
        
        linha.remove();

      } else if (event.target.classList.contains('botao-excluir')) {
        const linha = event.target.closest('tr');
        linha.remove();
      }
    });
    