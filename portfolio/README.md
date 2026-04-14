# 作品集项目规范

本规范文件用于指导作品集项目的开发和维护，确保代码质量和一致性。

## 设计规范

### 1. 布局规范
- 画布尺寸：1440px
- 边距：使用8的倍数（8px、16px、24px、32px等）
- 圆角：16px
- 阴影：0 8px 24px rgba(0, 0, 0, 0.06)

### 2. 颜色规范
- 主色：#FF2365
- 背景色：#FDFDFD
- 文本色：
  - 主文本：#111827
  - 次要文本：#6B7280
  - 辅助文本：#374151
- 边框色：#E5E7EB
- 状态色：
  - 成功：#22C55E
  - 警告：#F59E0B
  - 错误：#EF4444

### 3. 字体规范
- 字体：-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- 字体大小：
  - 标题1：96px
  - 标题2：20px
  - 标题3：16px
  - 正文：14px
  - 小文本：12px
  - 最小文本：11px
- 行高：
  - 标题：1.2-1.4
  - 正文：1.5-1.6

### 4. 图标规范
- 使用emoji作为图标
- 图标大小：28px-32px

## 代码规范

### 1. HTML规范
- 使用语义化标签
- 缩进：2个空格
- 命名：使用kebab-case（如：portfolio-grid）
- 注释：使用<!-- 注释内容 -->格式

### 2. CSS规范
- 使用小写字母和连字符
- 缩进：2个空格
- 命名：使用kebab-case（如：field-card）
- 注释：使用/* 注释内容 */格式
- 组织：按模块组织样式
- 优先级：使用类选择器，避免使用ID选择器

### 3. JavaScript规范
- 缩进：2个空格
- 命名：
  - 变量：camelCase（如：portfolioImages）
  - 函数：camelCase（如：renderPortfolioCards）
  - 常量：UPPER_CASE（如：API_URL）
- 注释：使用// 注释内容格式
- 组织：按功能组织代码
- 错误处理：添加基本的错误处理

## 项目结构

```
portfolio/
├── index.html          # 主HTML文件
├── style.css           # 样式文件
├── script.js           # JavaScript文件
└── README.md           # 本规范文件
```

## 版本控制规范

### 1. Git提交规范
- 提交信息格式：<type>: <description>
- 类型（type）：
  - feat: 新功能
  - fix: 修复bug
  - docs: 文档更新
  - style: 代码风格更改
  - refactor: 代码重构
  - test: 测试更新
  - chore: 构建或依赖更新

### 2. 分支规范
- main：主分支，用于发布
- develop：开发分支，用于集成功能
- feature/<feature-name>：特性分支，用于开发新功能
- fix/<bug-name>：修复分支，用于修复bug

## 开发流程

1. 从develop分支创建特性分支
2. 在特性分支上开发
3. 提交代码并推送到远程仓库
4. 创建Pull Request到develop分支
5. 代码审查通过后合并到develop分支
6. 当develop分支准备就绪后，合并到main分支并发布

## 注意事项

1. 严格遵守8的倍数边距规范
2. 保持代码风格一致
3. 定期更新README.md文件
4. 确保代码可维护性和可扩展性
5. 测试所有功能确保正常工作
