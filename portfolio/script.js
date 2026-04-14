// Data from React component
const portfolioImages = [
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
  "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?w=400",
  "https://images.unsplash.com/photo-1752524722694-e0976575a993?w=400",
  "https://images.unsplash.com/photo-1770012977129-19f856a1f935?w=400",
  "https://images.unsplash.com/photo-1766503206606-27de0861e8a4?w=400",
  "https://images.unsplash.com/photo-1771931169282-4ebc82b973b3?w=400",
  "https://images.unsplash.com/photo-1771930235454-273b6a545deb?w=400",
  "https://images.unsplash.com/photo-1771931278406-e3deaf47d786?w=400",
];

const portfolioCards = [
  {
    title: "界面设计",
    subtitle: "布局、视觉、交互",
    icon: "📐",
  },
  {
    title: "前端开发",
    subtitle: "VUE、REACT、TAILWIND",
    icon: "💻",
  },
  {
    title: "动效设计",
    subtitle: "LOTTIE、RIVE、FRAMER",
    icon: "✨",
  },
  {
    title: "设计系统",
    subtitle: "令牌、组件、规范",
    icon: "🎨",
  },
];

// Render portfolio images
function renderPortfolioImages() {
  const portfolioImagesContainer = document.querySelector('.portfolio-images');
  if (!portfolioImagesContainer) return;

  portfolioImagesContainer.innerHTML = '';

  // 只显示前6张图片，排列成3x2
  const imagesToShow = portfolioImages.slice(0, 6);

  imagesToShow.forEach((img, index) => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'portfolio-item';

    portfolioItem.innerHTML = `
      <div class="image-container">
        <img
          src="${img}"
          alt="作品 ${index + 1}"
        />
      </div>
    `;

    portfolioImagesContainer.appendChild(portfolioItem);
  });
}

// Render portfolio cards
function renderPortfolioCards() {
  const fieldsCardsContainer = document.querySelector('.fields-cards');
  if (!fieldsCardsContainer) return;

  fieldsCardsContainer.innerHTML = '';

  portfolioCards.forEach((card, index) => {
    const fieldCard = document.createElement('div');
    fieldCard.className = 'field-card';

    fieldCard.innerHTML = `
      <div class="icon">${card.icon}</div>
      <h4>${card.title}</h4>
      <p>${card.subtitle}</p>
    `;

    fieldsCardsContainer.appendChild(fieldCard);
  });
}

// Initialize the page
function initPage() {
  renderPortfolioImages();
  renderPortfolioCards();
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
