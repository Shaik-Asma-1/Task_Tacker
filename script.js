function addTask(){
    let ip=document.querySelector("input");
    let ipVal=ip.value.trim();
    if(ipVal===""){
        alert("You didn't entered any task");
        return;
    }

    let list=document.createElement("li");
    let items=document.querySelector("ul");


    let matter=document.createElement("span");
    matter.innerText=ipVal;
    

    //adding task comp btn
    let comp_btn=document.createElement("button");
    comp_btn.innerText='✔'; 
    comp_btn.classList.add("comp_btn_cls");
    comp_btn.onclick=()=>{
        matter.classList.toggle("complete");
    }


    //adding del btn
    let del_btn=document.createElement("button");
    del_btn.innerText="Delete";
    del_btn.classList.add("del_btn_cls");
    del_btn.onclick=()=>{
        items.removeChild(list);
    }


    list.appendChild(comp_btn);
    list.appendChild(matter);
    list.appendChild(del_btn);

    items.appendChild(list);
    ip.value="";
}
