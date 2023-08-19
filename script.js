let d=document.getElementById("result")
function clr()
{
d.value=" ";
}
function del(){
    d.value=d.value.slice(0,-1);
}
function dis(val)
{
    d.value+=val;
}
function calculate()
{
    d.value=eval(d.value);
}