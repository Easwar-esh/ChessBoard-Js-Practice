const btn=document.querySelector('.btn');
let row=document.querySelector('.row');
let col=document.querySelector('.column');
let board=document.querySelector('.board');
let width=0;
let height=0;
let box_width=100;
let box_height=100;
let del=false;
btn.addEventListener('click',()=>{
    let row_val=row.value;
    let col_val=col.value;
    if(del){
        deleteBox();
    }
    if(row_val != '' && col_val != ''){
        height=(row_val*box_width)+(row_val*10);
        width=(col_val*box_height)+(col_val*10);
        console.log("Width X Height "+width+" "+height);
        board.style.width=`${width}px`;
        board.style.height=`${height}px`;
        addBox(row_val,col_val);
        del=true;
    }
})

function addBox(r,c){
    let isWhite=true;
    for(let i=0;i<r;i++){
        isWhite=(i%2==0)?true:false
        for(let j=0;j<c;j++){
            let b=document.createElement('div');
            b.style.width="100px";
            b.style.height="100px";
            b.style.display="inline-block"
            b.style.borderStyle="solid"
            b.style.margin="-3.9px 0px 0px 0px"
            if(isWhite){
                b.style.backgroundColor="white";
                isWhite=false;
            }
            else{
                b.style.backgroundColor="black";
                isWhite=true;
            }
            board.appendChild(b);
        }
    }
}

function deleteBox(){
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
}


