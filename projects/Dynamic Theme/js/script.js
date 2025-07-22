let theme = document.documentElement;
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let btnClass = e.currentTarget.classList;
        if(btnClass.contains("btn-1")){
            theme.style.setProperty("--theme-color", "#add8e6")
            console.log("btnClass",btnClass);
        }else if
            (btnClass.contains("btn-2")){
            theme.style.setProperty("--theme-color","#f08080")
        }
        else if(btnClass.contains("btn-3")){
            theme.style.setProperty("--theme-color", "#90ee90")
        }
        else {
            theme.style.setProperty("--theme-color", "#20b2aa")
        }
    });
} );