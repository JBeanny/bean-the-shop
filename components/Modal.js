class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .modal-container {
            width: 100vw;
            height: 100vh;
            background-color: rgba(128, 128, 128, 0.468);
            position: absolute;
            top: 0;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .modal {
            width: 400px;
            height: 400px;
            background-color: white;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
        }
        .title {
            font-size: 1.3em;
            color: #fb2576;
        }
        .item {
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
        }

        .item img {
            width: 100px;
            height: 100px;
            object-fit: contain;
        }

        .quality {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .quality span {
            font-size: 1.2em;
            width: 50px;
            height: 30px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .quality button:hover {
            background-color: #fb2576;
            color: white;
        }

        .decrease {
            border: 2px solid #fb2576;
            background-color: transparent;
            color: #fb2576;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-size: 1.2em;
            cursor: pointer;
            transition: all 0.2s linear;
        }

        .increase {
            border: 2px solid #fb2576;
            background-color: transparent;
            color: #fb2576;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-size: 1.2em;
            cursor: pointer;
            transition: all 0.2s linear;
        }

        .button-container {
            width: 100%;
            display: flex;
            gap: 20px;
            justify-content: flex-end;
        }

        .cancelBtn {
            width: 100px;
            height: 40px;
            background-color: white;
            color: #fb2576;
            border-radius: 5px;
            border: 2px solid #fb2576;
            cursor: pointer;
            transition: all 0.1s linear;
        }

        .cancelBtn:hover {
            background-color: #fb2576;
            color: white;
        }

        .okBtn:hover {
            background-color: transparent;
            color: #fb2576;
        }

        .okBtn {
            width: 70px;
            height: 40px;
            background-color: #fb2576;
            color: white;
            border-radius: 5px;
            border: 2px solid #fb2576;
            cursor: pointer;
            transition: all 0.1s linear;
        }
    </style>
    <div class="modal-container">
      <div class="modal">
        <div class="title">Add to cart</div>
        <div class="item">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
          <div class="quality">
            <button class="decrease">-</button>
            <span>0</span>
            <button class="increase">+</button>
          </div>
        </div>
        <div class="button-container">
          <button class="cancelBtn">Cancel</button>
          <button class="okBtn">OK</button>
        </div>
      </div>
    </div>
        `;
  }
}

customElements.define(`modal-component`, Modal);
