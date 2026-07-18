function f()
{
    document.getElementById('demo').innerHTML = "Hello, World!";
}


// Đang test thử cái này, test lại lần nữa.

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="header">
        <h1>Khám phá code</h1>
        <div class="navbar">
            <a href="index.html">Trang chủ</a> <!--Changed link here-->
            <a href="#about">Giới thiệu</a>
            <a href="#contact">Liên hệ</a>
        </div>
    </header>`;
  }
}
customElements.define('my-header', MyHeader);