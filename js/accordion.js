

//console.log($accordion);

function accordion(){
    let $accordion = document.querySelectorAll('.accordion');
    let $title = document.getElementById('title');
    let $content = document.getElementById('content');
    const cont = 0;

    //console.log($accordion);

    $accordion.forEach(function(accordion){
        const item = accordion.children
        console.log(item)
        for(let i = 0; i < item.length; i++){
            console.log(item[i].children);
            item[i].onclick = function(){
                console.log('entre', i)
                if(item[i].classList.contains('activo')){
                    item[i].classList.remove('activo')
                }
                else{
                    item[i].classList.add('activo')
                }
            }
        }



    })
/*
    $title.onclick = function(){
        $content.style.height = '150px';
        $content.style.paddingTop = '15px';
        
     }
     */
}

accordion();