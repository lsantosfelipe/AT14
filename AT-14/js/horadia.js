function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

        if(hora > 4 && hora < 12){
            img.src =  'images/manha.jpg'
            document.body.style.background = '#F28705'
        }else if(hora >= 12 && hora < 18){
            img.src = 'images/tarde.jpg'
            document.body.style.background = '#D96941'
        }else{ 
            img.src = 'images/noite.jpg'
            document.body.style.background = '#142426'
        }
    
}
