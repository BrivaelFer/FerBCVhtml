let zoom = 0;
let pho = 0;
function clickedExp()
{
    if(zoom == 0)
    {
        console.dir(document.querySelector('.exp'))
        document.querySelector('.left').style.display = 'none';
        document.querySelector('.top').style.display = 'none';
        document.querySelector('.blockForm').style.display = 'none';
        document.querySelector('.exp').style.fontSize = '20pt';
        document.querySelector('.expT').style.fontSize = '30pt';
        document.querySelector('.exp').style.gridTemplateColumns = '300px 1fr';
        document.querySelector('.right').style.maxWidth = '1000px';
        zoom = 1;
    }
    else
    {
        document.querySelector('.left').style.display = 'block';
        document.querySelector('.top').style.display = 'flex';
        document.querySelector('.blockForm').style.display = 'block';
        document.querySelector('.exp').style.fontSize = '12pt';
        document.querySelector('.expT').style.fontSize = '18pt';
        document.querySelector('.exp').style.gridTemplateColumns = '100px 1fr';
        document.querySelector('.right').style.maxWidth = '550px';
        zoom = 0;
    }
    
}
/*function change(){
    //console.dir(document.querySelector('#hil'))
    if(pho == 0){
        document.querySelector('#hil').src = "https://encrypted-tbn0.gstatic.com/"+
        "images?q=tbn:ANd9GcToAwyeil1nCCM_R7lgy_IdeETYCiwr7ZnFFA&usqp=CAU";
        pho = 1
    }
    else{
        document.querySelector('#hil').src = "https://images-na.ssl-images-amazon.com/"+
        "images/I/51AUfTQ3gmL._SX358_BO1,204,203,200_.jpg";
        pho = 0;
    }
}*/
function clickedForm()
{
    if(zoom == 0)
    {
        console.dir(document.querySelector('.exp'))
        document.querySelector('.left').style.display = 'none';
        document.querySelector('.top').style.display = 'none';
        document.querySelector('.blockExp').style.display = 'none';
        document.querySelector('.form').style.fontSize = '20pt';
        document.querySelector('.formT').style.fontSize = '30pt';
        document.querySelector('.form').style.gridTemplateColumns = '300px 1fr';
        document.querySelector('.right').style.maxWidth = '1000px';
        zoom = 1;
    }
    else
    {
        document.querySelector('.left').style.display = 'block';
        document.querySelector('.top').style.display = 'flex';
        document.querySelector('.blockExp').style.display = 'block';
        document.querySelector('.form').style.fontSize = '12pt';
        document.querySelector('.formT').style.fontSize = '18pt';
        document.querySelector('.form').style.gridTemplateColumns = '100px 1fr';
        document.querySelector('.right').style.maxWidth = '550px';
        zoom = 0;
    }
    
}
function clickedComp()
{
    if(zoom == 0)
    {
        //console.dir(document.querySelector('.exp'))
        document.querySelector('.right').style.display = 'none';
        document.querySelector('.top').style.display = 'none';
        document.querySelector('.Blockloisir').style.display = 'none';
        document.querySelector('.blockComp').style.fontSize = '20pt';
        document.querySelector('.compT').style.fontSize = '30pt';
        document.querySelector('.left').style.maxWidth = '1000px';
        zoom = 1;
    }
    else
    {
        console.log('merde')
        document.querySelector('.right').style.display = 'block';
        document.querySelector('.top').style.display = 'flex';
        document.querySelector('.Blockloisir').style.display = 'block';
        document.querySelector('.blockComp').style.fontSize = '12pt';
        document.querySelector('.compT').style.fontSize = '18pt';
        document.querySelector('.left').style.maxWidth = '300px';
        zoom = 0;
    }
    
}
function chanColoF(){
    document.querySelector('.blockForm').style.backgroundColor = '#0000003b';
}
function backColoF(){
    document.querySelector('.blockForm').style.backgroundColor = '';
}
function chanColoE(){
    document.querySelector('.blockExp').style.backgroundColor = '#0000003b';
}
function backColoE(){
    document.querySelector('.blockExp').style.backgroundColor = '';
}
function chanColoC(){
    document.querySelector('.blockComp').style.backgroundColor = '#0000003b';
}
function backColoC(){
    document.querySelector('.blockComp').style.backgroundColor = '';
}

console.dir(document.querySelector('.left'))
document.querySelector('.blockExp').addEventListener('click', clickedExp);
document.querySelector('.blockForm').addEventListener('click', clickedForm);
document.querySelector('.blockComp').addEventListener('click', clickedComp);
//document.querySelector('#hil').addEventListener('click', change);
document.querySelector('.blockForm').addEventListener('mouseenter' , chanColoF)
document.querySelector('.blockForm').addEventListener('mouseleave' , backColoF)
document.querySelector('.blockExp').addEventListener('mouseenter' , chanColoE)
document.querySelector('.blockExp').addEventListener('mouseleave' , backColoE)
document.querySelector('.blockComp').addEventListener('mouseenter' , chanColoC)
document.querySelector('.blockComp').addEventListener('mouseleave' , backColoC)