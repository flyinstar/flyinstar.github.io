document.addEventListener('DOMContentLoaded', () => {
  const hoverTexts = document.querySelectorAll('.hover-text');
  
  // 通用处理函数
  const activateEffect = (text) => {
    const spans = text.querySelectorAll('span');
    spans.forEach(span => {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      span.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const resetEffect = (text) => {
    text.querySelectorAll('span').forEach(span => {
      span.style.transform = 'translate(0, 0)';
    });
  };

  // 事件绑定
  hoverTexts.forEach(text => {
    // 拆分字母（同桌面端）
    const letters = text.textContent.split('');
    text.innerHTML = letters.map(letter => 
      `<span>${letter}</span>`
    ).join('');

    // 桌面端事件
    text.addEventListener('mouseenter', () => activateEffect(text));
    text.addEventListener('mouseleave', () => resetEffect(text));

    // 移动端事件
    let isTouching = false;
    
    text.addEventListener('touchstart', (e) => {
      e.preventDefault(); // 阻止默认滚动行为
      if (!isTouching) {
        activateEffect(text);
        isTouching = true;
      }
    });

    text.addEventListener('touchend', () => {
      resetEffect(text);
      isTouching = false;
    });

    // 防止多次触发
    text.addEventListener('touchmove', (e) => e.preventDefault());
  });
});