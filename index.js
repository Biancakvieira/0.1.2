function compra (valor, convenio, cartao){
    if(valor<=100){
      if(convenio && cartao){
          let desconto = valor * 0.15
          let calc = valor - desconto
          return calc
    
    }else if (convenio || cartao){
        let desconto = valor*0.1
        let calc = valor - desconto
        return calc
    }else{
        return valor;
    }
    }else{
        return valor;
    }
    }

    console.log("O valor da compra será: ", compra(110, true, true))