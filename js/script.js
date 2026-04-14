// 导航栏交互
function initNavbar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // 切换菜单
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // 点击导航项时关闭菜单
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // 更新活动状态
            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// 遍历HTML并处理内容
function traverseHTML() {
    // 获取所有图片元素
    const images = document.querySelectorAll('img');
    
    // 添加图片错误处理
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'assets/images/image_1.png'; // 备用图片
        });
    });

    // 获取所有链接元素
    const links = document.querySelectorAll('a');
    
    // 为链接添加点击效果
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止默认行为
            e.preventDefault();
            
            // 获取目标ID
            const targetId = this.getAttribute('href').substring(1);
            
            // 如果是内部链接，平滑滚动到目标位置
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 优化页面加载性能
    optimizePerformance();
}

// 优化页面性能
function optimizePerformance() {
    // 减少重排重绘
    const style = document.createElement('style');
    style.textContent = `
        img {
            backface-visibility: hidden;
            perspective: 1000px;
        }
    `;
    document.head.appendChild(style);
}

// 加载导航栏组件
function loadNavbar() {
    fetch('components/nav-header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.createElement('div');
            headerContainer.innerHTML = data;
            document.body.insertBefore(headerContainer, document.body.firstChild);
            initNavbar();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    setTimeout(traverseHTML, 100); // 延迟执行，确保DOM已经完全加载
});
