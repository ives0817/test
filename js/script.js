// 项目数据
const projects = [
    { id: 1, name: '项目 1', year: '2024', image: 'assets/images/home/home_image_3.png' },
    { id: 2, name: '项目 2', year: '2024', image: 'assets/images/home/home_image_4.png' },
    { id: 3, name: '项目 3', year: '2024', image: 'assets/images/home/home_image_5.png' },
    { id: 4, name: '项目 4', year: '2024', image: 'assets/images/home/home_image_6.png' },
    { id: 5, name: '项目 5', year: '2024', image: 'assets/images/home/home_image_7.png' },
    { id: 6, name: '项目 6', year: '2024', image: 'assets/images/home/home_image_8.png' },
    { id: 7, name: '项目 7', year: '2024', image: 'assets/images/home/home_image_9.png' },
    { id: 8, name: '项目 8', year: '2024', image: 'assets/images/home/home_image_10.png' }
];

// 专业领域数据
const skills = [
    { icon: '📐', title: '界面设计', description: '布局、视觉、交互' },
    { icon: '💻', title: '前端开发', description: 'HTML、Flutter' },
    { icon: '✨', title: '动效设计', description: 'LOTTIE、RIVE、FRAMER' },
    { icon: '🎨', title: '设计系统', description: '令牌、组件、规范' }
];

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

// 渲染项目
function renderProjects() {
    const projectContainer = document.getElementById('project-container');
    if (!projectContainer) return;
    
    let projectsHtml = '';
    for (let i = 0; i < projects.length; i += 4) {
        let rowHtml = '<div class="flex items-center">';
        for (let j = i; j < Math.min(i + 4, projects.length); j++) {
            const project = projects[j];
            rowHtml += `
                <div class="flex flex-col shrink-0 items-start bg-gray-50 pb-0.5 px-[1px] ${j < i + 3 ? 'mr-[7px]' : ''} rounded-md border border-solid border-gray-200 project-card">
                    <img
                        src="${project.image}"
                        class="w-[72px] h-[72px] rounded-md object-fill"
                    />
                    <div class="flex flex-col items-start p-1.5 gap-[1px]">
                        <div class="flex flex-col items-start pr-[27px]">
                            <span class="text-gray-900 text-[11px] font-bold">
                                ${project.name}
                            </span>
                        </div>
                        <div class="flex flex-col items-start pr-[38px]">
                            <span class="text-gray-500 text-[9px]">
                                ${project.year}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }
        rowHtml += '</div>';
        projectsHtml += rowHtml;
    }
    
    projectContainer.innerHTML = projectsHtml;
}

// 渲染专业领域
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    let skillsHtml = '';
    for (let i = 0; i < skills.length; i += 2) {
        let rowHtml = '<div class="flex justify-between items-center gap-[17px]">';
        for (let j = i; j < Math.min(i + 2, skills.length); j++) {
            const skill = skills[j];
            rowHtml += `
                <div class="flex flex-col items-start bg-white w-[287px] h-[125px] rounded-lg border border-solid border-gray-200 skill-card">
                    <div class="flex flex-col items-start p-4 h-full">
                        <span class="text-neutral-950 text-[28px] mb-2">
                            ${skill.icon}
                        </span>
                        <div class="flex flex-col items-start">
                            <span class="text-gray-900 text-base font-bold">
                                ${skill.title}
                            </span>
                        </div>
                        <div class="flex flex-col items-start mt-1">
                            <span class="text-gray-500 text-[11px]">
                                ${skill.description}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }
        rowHtml += '</div>';
        skillsHtml += rowHtml;
    }
    
    skillsContainer.innerHTML = skillsHtml;
}

// 加载导航组件
function loadNavbar() {
    fetch('components/nav-header.html')
        .then(response => response.text())
        .then(data => {
            const navContainer = document.getElementById('nav-container');
            if (navContainer) {
                navContainer.innerHTML = data;
                initNavbar();
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// 导航栏交互
function initNavbar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // 切换菜单
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // 点击导航项时关闭菜单
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                
                // 更新活动状态
                navItems.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    renderProjects();
    renderSkills();
    setTimeout(traverseHTML, 100); // 延迟执行，确保DOM已经完全加载
});
