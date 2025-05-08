document.addEventListener('DOMContentLoaded', () => {
  // 获取所有带 hover-text 类的元素
  const hoverTexts = document.querySelectorAll('.hover-text');
  
  hoverTexts.forEach(text => {
    // 将文本拆分为单个字母
    const letters = text.textContent.split('');
    text.innerHTML = letters.map(letter => 
      `<span>${letter}</span>`
    ).join('');

    // 获取所有字母的 DOM 元素
    const spans = text.querySelectorAll('span');
    
    // 鼠标进入时触发散开
    text.addEventListener('mouseenter', () => {
      spans.forEach(span => {
        // 生成随机位移（-20px 到 20px）
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 40;
        span.style.transform = `translate(${x}px, ${y}px)`;
      });
    });

    // 鼠标离开时恢复原位
    text.addEventListener('mouseleave', () => {
      spans.forEach(span => {
        span.style.transform = 'translate(0, 0)';
      });
    });
  });
});