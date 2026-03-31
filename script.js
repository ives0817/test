// 作品数据（你只需要改这里！）
const projects = [
    {
      title: "UI&UX设计",
      desc: "从用户旅程出发，优化界面交互与视觉层次，打造流畅高效的产品体验",
      img: "https://picsum.photos/seed/figma-course/600/400"
    },
    {
      title: "运营设计",
      desc: "围绕业务目标设计营销物料与活动页面，强化品牌感知并提升用户转化",
      img: "https://picsum.photos/seed/b-end-design/600/400"
    },
    {
      title: "动效设计",
      desc: "使用 After Effects 制作界面交互动效，提升产品视觉吸引力与用户体验",
      img: "https://picsum.photos/seed/ae-animation/600/400"
    }
  ];
// 渲染作品卡片
function renderProjects() {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-card__thumb">
        <img src="${project.img}" alt="${project.title}">
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// 汉堡菜单交互
const menuBtn = document.getElementById("menuBtn");
const menuDropdown = document.getElementById("menuDropdown");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuDropdown.classList.toggle("show");
  const open = menuBtn.classList.contains("active");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

// 点击页面其他地方关闭菜单
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
    menuBtn.classList.remove("active");
    menuDropdown.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("DOMContentLoaded", renderProjects);