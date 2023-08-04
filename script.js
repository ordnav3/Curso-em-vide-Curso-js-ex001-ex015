function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente [ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.backgroundColor = '#1d44b8'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', './imagens/c_homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/j_homem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', './imagens/ad_homem.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/i_homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.backgroundColor = '#ff00cc'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', './imagens/c_mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagens/j_mulher.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', './imagens/ad_mulher.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/i_mulher.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}