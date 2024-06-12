let grid = document.querySelector('.grid-container')
            let screenx = window.screen.availWidth
            let slidecheck = true
            let slideitem = document.querySelectorAll('.slideitem')
            let pos = 50
            window.onload = function(){
                grid.style.gridTemplateColumns = `50px auto ${screenx * 0.1}px`
            }
            function slideopen(){
                let open = document.getElementById('open')
                if (slidecheck){
                    let id = setInterval(move,16)
                    function move(){
                        if (pos >= screenx * 0.2){
                            slideitem.forEach(item => item.style.display = 'block')
                            clearInterval(id)
                        }
                        else{
                            pos+= 15
                            grid.style.gridTemplateColumns = `${pos}px auto ${screenx * 0.1}px`
                        }
                    }
                    open.innerHTML = '<'
                    slidecheck = false
                }
                else{
                    slideitem.forEach(item => item.style.display = 'none')
                    let cd = setInterval(moveminus,16)
                    function moveminus(){
                        if (pos <= 50){
                            clearInterval(cd)
                        }
                        else{
                            pos-= 15
                            grid.style.gridTemplateColumns = `${pos}px auto ${screenx * 0.1}px`
                        }
                    }
                    open.innerHTML = '>'
                    slidecheck = true
                }
            }