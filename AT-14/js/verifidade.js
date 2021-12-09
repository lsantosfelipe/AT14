function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
        img.setAttribute('id', 'foto')


    if(fano.value.length == 0 || Number(fano.value) < 0) {
        alert('Ocorreu um erro! Verifique os dados e tente novamente!')
    } else if( Number(fano.value) > ano) {
        res.innerText = `Tem algo errado ai! Essa pessoa já nasceu?`
        img.setAttribute('src', 'images/confuso.png')
        res.appendChild(img)
    }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
        if(idade > 130){
            res.innerText = `Existe alguém vivo com essa idade?`
            img.setAttribute('src', 'images/susto.jpg')
            res.appendChild(img)
        }else{
            if (fsex[0].checked) {
                gênero =  'Homem'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/homembebe.png')
                } else if(idade > 10 && idade <= 20){
                    img.setAttribute('src', 'images/homemjovem.png')
                }else if(idade > 20 && idade < 55){
                    img.setAttribute('src', 'images/homemadulto.png')
                }
                else if (idade >= 55 && idade < 130){
                    img.setAttribute('src', 'images/homemidoso.png')
                }
            }else if (fsex[1].checked){
                gênero =  'Mulher'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/mulherbebe.png')
                }else if(idade > 10 && idade <= 20){
                    img.setAttribute('src', 'images/mulherjovem.png')
                }else if(idade > 20 && idade < 55){
                    img.setAttribute('src', 'images/mulheradulta.png')
                }else{
                    img.setAttribute('src', 'images/mulheridosa.png')
                }
            }
            res.innerText = `${gênero} com ${idade} anos.`
            res.appendChild(img)
        }
    }
}
