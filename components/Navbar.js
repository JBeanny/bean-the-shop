class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <style>
        .nav-container {
            width: 100vw;
            height: 60px;
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
            box-shadow: 1px 2px 2px 1px #EEEEEE;
        }
        .logo {
            width: 200px;
            height: 40px;
            padding-left: 150px;
            display:flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            text-decoration: none;
        }

        .logo span {
            color: #1e1e1e;
        }

        .logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .logo h3 {
            font-size: 1.3em;
            color: #fb2576;
        }

        .link {
            width: 200px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center; 
            gap: 50px;
            padding-right: 150px;
        }

        .link a {
            font-size: 1.2em;
            cursor: pointer;
            text-decoration: none; 
        }

        .active {
            border-bottom: 5px solid #fb2576;
            border-radius: 50%;
            color: #fb2576;
            padding: 5px;
        }

        .inactive {
            color: #fb2576;
        }

        .loginBtn {
            width: 100px;
            background-color: #fb2576;
            color: white;
            padding: 5px 20px;
            border-radius: 5px;
            border: 2px solid transparent;
            transition: all 0.2s linear;
        }

        .loginBtn:hover {
            border: 2px solid #fb2576;
            background-color: transparent;
            color: #fb2576;
        }

        </style>
        <header>
            <div class="nav-container">
                <a class="logo" href="Card.html">
                    <img src="./Images/logo.png" alt="image" />
                    <h3>Bean<span>The</span>Shop</h3>
                </a>
                <div class="link">
                    <a href="index.html" 
                        class="${
                          window.location.href.includes("index") ||
                          window.location.href.includes("Detail")
                            ? "active"
                            : "inactive"
                        }"
                    >
                        Products
                    </a>
                    <a href="Cart.html" class="${
                      window.location.href.includes("Cart")
                        ? "active"
                        : "inactive"
                    }">Cart</a>
                    <a href="Login.html" class="loginBtn">Login</a>
                </div>
            </div>
        </header>
      `;
  }
}

customElements.define(`navbar-component`, Header);
