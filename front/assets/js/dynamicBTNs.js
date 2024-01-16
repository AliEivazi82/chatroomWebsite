
// ! button toggle dynamic 

var tg = document.getElementsByClassName('tg-btn')

for (var i=0;i<tg.length;i++){
    tg[i].addEventListener('click', function(){
        var targetId = this.getAttribute('target')
        var targetAddClass = this.getAttribute('toggle')
        var selfClassToggle = this.getAttribute('self-toggle')

        var targetAction = document.querySelector(targetId)
        targetAction.classList.toggle(targetAddClass)
        this.classList.toggle(selfClassToggle)
    });
}

// ! button class remover dynamic 

var tgRemover = document.getElementsByClassName('btn-remover')

for (var i=0;i<tgRemover.length;i++){
    tgRemover[i].addEventListener('click', function(){
        var targetId = this.getAttribute('target')
        var targetClass = this.getAttribute('remove')

        var targetAction = document.querySelector(targetId)
        targetAction.classList.remove(targetClass)
    });
}

// ! button class adder dynamic 

var tgAdder = document.getElementsByClassName('btn-adder')

for (var i=0;i<tgAdder.length;i++){
    tgAdder[i].addEventListener('click', function(){
        var targetId = this.getAttribute('target')
        var targetClass = this.getAttribute('add')

        var targetAction = document.querySelector(targetId)
        targetAction.classList.add(targetClass)
    });
}

