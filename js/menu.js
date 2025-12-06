// ハンバーガーメニュー
// ハンバーガーボタンの要素取得
const btn = document.querySelector('.header-nav__toggle');
// メニューの要素取得
const menu = document.querySelector('.header-nav__menu');

// //スクロール位置の保存
// let scrollPosition = 0;

// クリックイベントの開始
btn.addEventListener('click', () => {
	// メニューが開いているかを取得
	const isOpen = btn.classList.toggle('is-active');
	menu.classList.toggle('is-open',isOpen);
})

