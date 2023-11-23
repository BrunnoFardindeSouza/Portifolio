const header = document.getElementsByTagName("header")[0]
const menu = document.getElementsByTagName("nav")[0]
topo = menu.offsetTop


window.onscroll = ()=>{
    if(window.scrollY > topo){
       menu.classList.add("fixar")
    }else{
      menu.classList.remove("fixar")
    }

}
