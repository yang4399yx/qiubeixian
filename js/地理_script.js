// 地理环境中多张图片放大效果开始
// 打开弹窗并显示图片
	    function openModal(imgElement) {
	        const modal = document.getElementById("imageModal");
	        const modalImage = document.getElementById("modalImage");
	        modalImage.src = imgElement.src; // 设置弹窗中的图片为点击的图片
	        modal.classList.add("active"); // 显示弹窗
	    }
	
	    // 关闭弹窗
	    function closeModal() {
	        const modal = document.getElementById("imageModal");
	        modal.classList.remove("active"); // 隐藏弹窗
	    }
// 地理环境中多张图片放大效果结束