// 单击按钮实现"历史沿革与行政划分的切换"
function showDiv(divID) {
    // 获取所有div，并隐藏它们
    document.querySelectorAll('.div-container > div').forEach(function(div) {
        div.style.display = 'none';
    });
    // 显示指定ID的div
    document.getElementById(divID).style.display = 'block';
}
// 首页行政划分的图片实现放大看效果
function openModal() {
  document.getElementById('myModal').style.display = "block";
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modalImg.src = document.getElementById("myImg").src;
}
 
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}