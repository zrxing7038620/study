<style>
*{
    margin:0;
    padding: 0;
    border: 0 none;
}
table{
    width: 600px;
    margin: 10px auto;
    border-collapse: collapse;
}
td{
    border: 1px solid #999;
    padding: 5px;
    text-align: center;
}
thead{
    background-color: #999;
}
</style>
<body>
<!--隔行换色是一个非常好的提高用户体验的效果，请用JavaScript完成一个表格的隔行换色效果。-->
<table>
    <thead>
        <tr>
            <td>id</td>
            <td>标题</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>标题1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>标题2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>标题3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>标题4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>标题5</td>
        </tr>
        <tr>
            <td>6</td>
            <td>标题6</td>
        </tr>
    </tbody>
</table>
<script>
var tds=document.querySelectorAll('tbody tr');
console.log(tds.length);
for(var i=0;i<tds.length;i++)
{
    if(i%2==0)
    {
        tds[i].style.backgroundColor='#eee';
    }
}
</script>
</body>
