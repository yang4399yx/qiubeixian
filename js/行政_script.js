// 单击按钮实现"切换"
function showDiv(divID) {
    // 获取所有div，并隐藏它们
    document.querySelectorAll('.div-container > div').forEach(function(div) {
        div.style.display = 'none';
    });
    // 显示指定ID的div
    document.getElementById(divID).style.display = 'block';
}


