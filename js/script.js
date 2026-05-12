//dữ liệu sp
const productsDB = {
    //giày nam
    "adidas-eq21": {
        name: "Giày Thể Thao Adidas EQ 21 Run Shoes Màu Trắng",
        price: 1550000,
        mainImage: "images/adidas-aq-21.img",
        thumbnails: ["images/adidas-aq-21-1.png", "images/adidas-aq-21-2.png", "images/adidas-aq-21-3.png", "images/adidas-aq-21-4.png", "images/adidas-aq-21-5.png", "images/adidas-aq-21-6.png", "images/adidas-aq-21-7.png"],
        desc: "Dòng giày chạy bộ Bounce êm ái, hỗ trợ vận động tối ưu.",
        colors: ["Trắng"], sizes: [40, 41, 42, 43]
    },
    "adidas-grand-court": {
        name: "Giày thể thao nam - Adidas Grand Court trắng",
        price: 1499000,
        mainImage: "images/adidas-grand-court.img",
        thumbnails: ["images/adidas-grand-court-1.png", "images/adidas-grand-court-2.png", "images/adidas-grand-court-3.png", "images/adidas-grand-court-4.png", "images/adidas-grand-court-5.png"],
        desc: "Phong cách tennis cổ điển, phù hợp dạo phố và đi làm.",
        colors: ["Trắng Sọc Đen"], sizes: [39, 40, 41, 42]
    },
    "adidas-pureboost": {
        name: "Giày Adidas Nam Nữ Chính Hãng - Pureboost Light Shoes",
        price: 1580000,
        mainImage: "images/adidas.img",
        thumbnails: ["images/adidas-1.png", "images/adidas-2.png", "images/adidas-3.png", "images/adidas-4.png", "images/adidas-5.png"],
        desc: "Công nghệ Boost siêu nhẹ, hoàn trả năng lượng cực tốt.",
        colors: ["Đen"], sizes: [40, 41, 42, 43]
    },
    "btis-hunter-x": {
        name: "Giày Thể Thao Nam Biti's Hunter X 2k20",
        price: 949000,
        mainImage: "images/btis-den-nam.img",
        thumbnails: ["images/btis-den-nam-1.png", "images/btis-den-nam-2.png"],
        desc: "Thiết kế Hunter X mạnh mẽ, đế LiteFlex độc quyền.",
        colors: ["Đen Cam"], sizes: [39, 40, 41, 42]
    },
    "btis-hunter-core": {
        name: "Giày Thể Thao Nam Biti's Hunter Core 2023 (Xám)",
        price: 780000,
        mainImage: "images/btis-nam.png",
        thumbnails: ["images/btis-nam-1.png", "images/btis-nam-2.png", "images/btis-nam-3.png", "images/btis-nam-4.png", "images/btis-nam-5.png"],
        desc: "Phối màu xám tối giản, dễ phối đồ hàng ngày.",
        colors: ["Xám"], sizes: [40, 41, 42]
    },
    "btis-running": {
        name: "Giày Chạy Bộ Nam Biti's Hunter Running",
        price: 1069000,
        mainImage: "images/btis-xam-nam.png",
        thumbnails: ["images/btis-xam-nam.png"],
        desc: "Chuyên dụng cho chạy bộ với độ bám đường cao.",
        colors: ["Xám Xanh"], sizes: [40, 41, 42, 43]
    },
    "crocs-cool": {
        name: "Crocs cực Cool Đen",
        price: 400000,
        mainImage: "images/crocs-den.png",
        thumbnails: ["images/crocs-den-1.png", "images/crocs-den-2.png", "images/crocs-den-3.png", "images/crocs-den-4.png", "images/crocs-den-5.png", "images/crocs-den-6.png"],
        desc: "Dép Crocs tiện lợi, chống trượt và thoáng khí.",
        colors: ["Đen"], sizes: [39, 40, 41, 42]
    },
    "nike-af1": {
        name: "Giày Nike Air Force 1 Low College Pack Midnight Navy",
        price: 3621000,
        mainImage: "images/nike-air-force.png",
        thumbnails: ["images/nike-air-force-2.png", "images/nike-air-force-3.png", "images/nike-air-force-4.png", "images/nike-air-force-5.png", "images/nike-air-force-6.png"],
        desc: "Huyền thoại AF1 phối màu Midnight Navy sang trọng.",
        colors: ["Navy/Trắng"], sizes: [40, 41, 42, 43]
    },
    "nike-jordan1": {
        name: "Giày Thể Thao Nike Air Jordan 1 Low Dune Red",
        price: 2990000,
        mainImage: "images/nike-air-jordan.png",
        thumbnails: ["images/nike-air-jordan-1.png", "images/nike-air-jordan-2.png", "images/nike-air-jordan-3.png", "images/nike-air-jordan-4.png", "images/nike-air-jordan-5.png", "images/nike-air-jordan-6.png"],
        desc: "Tông màu Dune Red cá tính, phong cách street style.",
        colors: ["Đỏ Dune"], sizes: [39, 40, 41, 42]
    },
    "nike-court": {
        name: "Giày Nike Court Vision Mid Smoke Grey",
        price: 1490000,
        mainImage: "images/nike-court-vision.png",
        thumbnails: ["images/nike-court-vision-1.png", "images/nike-court-vision-2.png", "images/nike-court-vision-3.png", "images/nike-court-vision-4.png"],
        desc: "Thiết kế cổ Mid ôm chân, bền bỉ và thời trang.",
        colors: ["Xám Khói"], sizes: [40, 41, 42]
    },
    "thuong-dinh-den": {
        name: "Giày Thượng Đình đế đinh",
        price: 90000,
        mainImage: "images/thuong-dinh-den.png",
        thumbnails: ["images/thuong-dinh-den.png","images/thuong-dinh-socdo.png","images/thuong-dinh-trang.png"],
        desc: "Giày đá bóng sân cỏ nhân tạo huyền thoại.",
        colors: ["Đen"], sizes: [38, 39, 40, 41, 42]
    },
    //giày nữ
    "btis-hunter-nu": {
        name: "Giày Biti's Hunter Nữ Màu Hồng",
        price: 980000,
        mainImage: "images/btis-hong-nu.img",
        thumbnails: ["images/btis-hong-nu-1.png", "images/btis-hong-nu-2.png", "images/btis-hong-nu-3.png", "images/btis-hong-nu-4.png"],
        desc: "Sắc hồng dịu dàng, trọng lượng siêu nhẹ cho phái nữ.",
        colors: ["Hồng"], sizes: [36, 37, 38, 39]
    },
    "adidas-nu": {
        name: "Giày Đế Mềm Nữ Adidas",
        price: 3400000,
        mainImage: "images/adidas-nu.img",
        thumbnails: ["images/adidas-nu-1.png", "images/adidas-nu-2.png"],
        desc: "Phom dáng thanh thoát, đế mềm cực kỳ êm ái.",
        colors: ["Trắng"], sizes: [36, 37, 38]
    },
    "btis-embrace": {
        name: "Giày Thể Thao Nữ Biti's Êmbrace",
        price: 620000,
        mainImage: "images/btis-nu.png",
        thumbnails: ["images/btis-nu-1.png", "images/btis-nu-2.png", "images/btis-nu-3.png"],
        desc: "Dòng giày thời trang mới với công nghệ Êmbrace.",
        colors: ["Trắng"], sizes: [36, 37, 38, 39]
    },
    "crocs-platform": {
        name: "Giày CLOG Nữ Crocs Platform Classic",
        price: 980000,
        mainImage: "images/crocs-trang.png",
        thumbnails: ["images/crocs-trang-1.png", "images/crocs-trang-2.png", "images/crocs-trang-3.png", "images/crocs-trang-4.png", "images/crocs-trang-5.png"],
        desc: "Đế xuồng tôn dáng, phong cách trẻ trung năng động.",
        colors: ["Trắng"], sizes: [35, 36, 37, 38]
    },
    "crocs-literite": {
        name: "Giày CLOG Nữ Crocs Literite",
        price: 475000,
        mainImage: "images/crocs-xanh.png",
        thumbnails: ["images/crocs-xanh.png"],
        desc: "Công nghệ Literite siêu mềm, cực kỳ thoải mái.",
        colors: ["Xanh Dương"], sizes: [36, 37, 38]
    },

    //giày trẻ em
    "btis-eva-kid": {
        name: "Dép Eva Biti's Bé Gái Màu Xanh Dương",
        price: 270000,
        mainImage: "images/crocs-nu-kid.png",
        thumbnails: ["images/crocs-nu-kid-1.png", "images/crocs-nu-kid-6.png", "images/crocs-nu-kid-3.png", "images/crocs-nu-kid-4.png","images/crocs-nu-kid-5.png"],
        desc: "Chất liệu Eva nhẹ nhàng, an toàn cho da bé.",
        colors: ["Xanh Dương"], sizes: [28, 29, 30, 31]
    },
    "btis-disney-kid": {
        name: "Sandal Biti's Disney Cherry Blossom Bé Gái Màu Kem",
        price: 475000,
        mainImage: "images/btis-nu-kid.png",
        thumbnails: ["images/btis-nu-kid-1.png", "images/btis-nu-kid-2.png", "images/btis-nu-kid-3.png", "images/btis-nu-kid-4.png", "images/btis-nu-kid-5.png", "images/btis-nu-kid-6.png"],
        desc: "Họa tiết Disney hoa anh đào dễ thương.",
        colors: ["Kem"], sizes: [29, 30, 31, 32]
    },
    "dep-adidas-kid": {
        name: "Dép ADILETTE ESTRAP trẻ em",
        price: 480000,
        mainImage: "images/dep-adidas-kids.png",
        thumbnails: ["images/dep-adidas-kids-7.png"],
        desc: "Dép quai ngang Adidas bền bỉ cho bé hiếu động.",
        colors: ["Đen"], sizes: [30, 31, 32, 33]
    },
    "sandal-nike-kid": {
        name: "Sandal Nike trẻ em siêu nhẹ màu hồng dây chéo",
        price: 330000,
        mainImage: "images/nike-kid.png",
        thumbnails: ["images/nike-kid-1.png", "images/nike-kid-2.png", "images/nike-kid-3.png", "images/nike-kid-4.png"],
        desc: "Sandal Nike quai chéo thoáng mát, nhanh khô.",
        colors: ["Hồng"], sizes: [26, 27, 28, 29]
    },
    "skechers-heart": {
        name: "Giày sneakers bé gái cổ thấp Heart Lights",
        price: 790000,
        mainImage: "images/skechers-kid.png",
        thumbnails: ["images/skechers-kid-1.png", "images/skechers-kid-2.png", "images/skechers-kid-3.png", "images/skechers-kid-4.png"],
        desc: "Đèn LED lấp lánh ở đế giày mỗi bước đi.",
        colors: ["Đa sắc"], sizes: [28, 29, 30, 31]
    },
    "skechers-tracks": {
        name: "Skech Tracks Bé Nam",
        price: 890000,
        mainImage: "images/skechers-kid2.png",
        thumbnails: ["images/skechers-kid2-1.png", "images/skechers-kid2-2.png", "images/skechers-kid2-3.png", "images/skechers-kid2-4.png"],
        desc: "Kiểu dáng năng động, đế bám tốt cho bé trai.",
        colors: ["Xanh Đen"], sizes: [30, 31, 32, 33, 34]
    }
};
document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const suggestionBox = document.getElementById('suggestionBox');
    const productCards = document.querySelectorAll('.product-card');

    if (searchInput && searchBtn && suggestionBox) {
        const brands = ["Adidas", "Nike", "Biti's", "Crocs", "Thượng Đình", "Vans", "Converse", "Puma"];

        function performSearch(keyword) {
            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(keyword)) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        }

        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            suggestionBox.innerHTML = ''; 
            if (query === '') { suggestionBox.classList.add('hide'); return; }

            const matchedBrands = brands.filter(brand => brand.toLowerCase().includes(query));
            if (matchedBrands.length > 0) {
                suggestionBox.classList.remove('hide');
                matchedBrands.forEach(brand => {
                    const li = document.createElement('li');
                    li.textContent = brand;
                    li.addEventListener('click', () => {
                        searchInput.value = brand;
                        suggestionBox.classList.add('hide'); 
                        performSearch(brand.toLowerCase()); 
                    });
                    suggestionBox.appendChild(li);
                });
            } else {
                suggestionBox.classList.add('hide');
            }
        });

        document.addEventListener('click', function(e) {
    
            if (e.target.classList.contains('btn-add-cart') || 
                e.target.classList.contains('btn-add-detail') || 
                (e.target.classList.contains('btn-shop-now') && e.target.innerText.toUpperCase().includes('GIỎ HÀNG'))) {
                flyToCart(e.target);
                }
            });

        searchBtn.addEventListener('click', () => {
            performSearch(searchInput.value.toLowerCase().trim());
            suggestionBox.classList.add('hide');
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value.toLowerCase().trim());
                suggestionBox.classList.add('hide');
                e.preventDefault(); 
            }
        });
    }
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterCards = document.querySelectorAll('.product-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                btn.classList.add('active');
                let filterValue = btn.getAttribute('data-filter');
                filterCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }
    //ảnh chi tiết các góc chụp
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('currentImage');
    if (thumbnails.length > 0 && mainImg) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImg.src = this.src;
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    updateCartBadge(); 
    const cartPage = document.querySelector('.cart-page');
    if (cartPage) {
        renderCart(); 
    }
});


// giỏ hàng
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('fongSportCart')) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('fongSportCart', JSON.stringify(cart));
}

// Thêm tham số size vào hàm
function addToCart(name, price, image, quantityToAdd = 1, size = '') {
    let cart = getCart();
    
    // ĐIỂM MẤU CHỐT: Chỉ coi là trùng khi trùng TÊN và trùng SIZE
    let itemIndex = cart.findIndex(item => item.name === name && item.size === size);

    let qty = parseInt(quantityToAdd) || 1;

    if (itemIndex > -1) {
        // Nếu đã có giày này VÀ đúng size này -> Tăng số lượng
        cart[itemIndex].quantity += qty;
    } else {
        // Nếu là giày mới, HOẶC giày cũ nhưng khác size -> Tạo dòng mới trong giỏ
        cart.push({ name, price, image, quantity: qty, size: size });
    }

    saveCart(cart);
    updateCartBadge();
    
    // Bạn có thể mở comment dòng dưới để test thông báo
    // alert(`Đã thêm giày size ${size} vào giỏ hàng!`);
}

function updateCartBadge() {
    let cart = getCart();
    const badge = document.querySelector('.cart-count');
    if (badge) {
        let totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalQty;
    }
}

function renderCart() {
    const container = document.querySelector('.cart-items-list');
    if (!container) return; 
    
    let cart = getCart();
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <p style="font-size: 18px; color: #555; margin-bottom: 20px;">Giỏ hàng của bạn đang trống.</p>
                <a href="index.html" class="btn-shop-now" style="display:inline-block; text-decoration:none; padding: 10px 20px; border-radius: 5px;">Tiếp tục mua sắm</a>
            </div>
        `;
        updateSummary(0);
        return;
    }

    let html = '';
    let subTotal = 0;

    cart.forEach((item, index) => {
        let safePrice = Number(item.price) || 0; 
        let itemTotal = safePrice * item.quantity;
        subTotal += itemTotal;
        
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p style="color: #f26522; font-weight: bold;">Size: ${item.size || 'Mặc định'}</p>
                </div>
                <div class="cart-item-price">${safePrice.toLocaleString('vi-VN')}đ</div>
                <div class="cart-item-qty">
                    <input type="number" value="${item.quantity}" min="1" onchange="changeQty(${index}, this.value)">
                </div>
                <div class="cart-item-total">${itemTotal.toLocaleString('vi-VN')}đ</div>
                <button class="btn-remove" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    container.innerHTML = html;
    updateSummary(subTotal);
}

function changeQty(index, newQty) {
    if (newQty < 1) newQty = 1;
    let cart = getCart();
    cart[index].quantity = parseInt(newQty);
    saveCart(cart);
    renderCart();
    updateCartBadge();
}

function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
    updateCartBadge();
}

function updateSummary(subTotal) {
    const shipping = subTotal > 0 ? 30000 : 0;
    const total = subTotal + shipping;
    
    const summaryLines = document.querySelectorAll('.summary-line span:last-child');
    if (summaryLines.length >= 2) {
        summaryLines[0].innerText = subTotal.toLocaleString('vi-VN') + 'đ';
        summaryLines[1].innerText = shipping.toLocaleString('vi-VN') + 'đ';
    }
    
    const totalDisplay = document.querySelector('.total-price');
    if (totalDisplay) totalDisplay.innerText = total.toLocaleString('vi-VN') + 'đ';
    
    const pageTitle = document.querySelector('.page-title');
    let cart = getCart();
    if (pageTitle) pageTitle.innerText = `Giỏ hàng của bạn (${cart.length} sản phẩm)`;
}
    //chi tiết sp
    const detailPage = document.querySelector('.product-detail-page');
    
    if (detailPage) {
        const urlParams = new URLSearchParams(window.location.search);
        let productId = urlParams.get('id');
        
        if (!productId || !productsDB[productId]) {
            productId = 'adidas-eq21'; 
        }

        const product = productsDB[productId];

        document.querySelector('.product-title').innerText = product.name;
        document.querySelector('.product-price').innerHTML = `${product.price.toLocaleString('vi-VN')}đ <del class="old-price">${(product.price * 1.2).toLocaleString('vi-VN')}đ</del>`;
        document.querySelector('.product-desc').innerText = product.desc;
        
        const breadcrumbSpan = document.querySelector('.breadcrumb span');
        if (breadcrumbSpan) breadcrumbSpan.innerText = product.name;

        const mainImage = document.getElementById('currentImage');
        mainImage.src = product.mainImage;
        mainImage.alt = product.name;

        const thumbnailsContainer = document.querySelector('.thumbnail-images');
        thumbnailsContainer.innerHTML = '';
        
        product.thumbnails.forEach((thumbSrc, index) => {
            const img = document.createElement('img');
            img.src = thumbSrc;
            img.className = index === 0 ? 'thumb active' : 'thumb';
            img.alt = `Góc ${index + 1}`;
            thumbnailsContainer.appendChild(img);
        });

        const sizeContainer = document.querySelector('.size-options');
        sizeContainer.innerHTML = '';
        product.sizes.forEach((size, index) => {
            const btn = document.createElement('button');
            btn.className = index === 0 ? 'size-btn active' : 'size-btn';
            btn.innerText = size;
            sizeContainer.appendChild(btn);
        });
        document.getElementById('size-name').innerText = product.sizes[0];

        const colorContainer = document.querySelector('.color-options');
        colorContainer.innerHTML = '';
        product.colors.forEach((color, index) => {
            const btn = document.createElement('button');
            btn.className = index === 0 ? 'color-btn active' : 'color-btn';
            btn.style.backgroundColor = '#ccc'; 
            btn.setAttribute('data-color', color);
            colorContainer.appendChild(btn);
        });
        document.getElementById('color-name').innerText = product.colors[0];

        const btnAddToCart = document.querySelector('.add-to-cart-action .btn-add-detail');
        if (btnAddToCart) {
            btnAddToCart.removeAttribute('onclick'); 
            btnAddToCart.addEventListener('click', () => {
            const qty = document.getElementById('detail-qty').value;
        
        // LẤY SIZE MÀ KHÁCH HÀNG ĐANG CHỌN TRÊN MÀN HÌNH
            const selectedSize = document.getElementById('size-name').innerText;
        
        // Gửi tên, giá, ảnh, số lượng và SIZE vào giỏ hàng
            addToCart(product.name, product.price, product.mainImage, qty, selectedSize);
            });
        }

        const thumbnails = document.querySelectorAll('.thumb');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = this.src;
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        const sizeBtns = document.querySelectorAll('.size-btn');
        const sizeNameDisplay = document.getElementById('size-name');
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                sizeBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                sizeNameDisplay.innerText = this.innerText; 
            });
        });

        const colorBtns = document.querySelectorAll('.color-btn');
        const colorNameDisplay = document.getElementById('color-name');
        colorBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                colorBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                colorNameDisplay.innerText = this.getAttribute('data-color'); 
            });
        });

        const btnMinus = document.getElementById('btn-minus');
        const btnPlus = document.getElementById('btn-plus');
        const inputQty = document.getElementById('detail-qty');

        if (btnMinus && btnPlus && inputQty) {
            btnMinus.addEventListener('click', () => {
                if (inputQty.value > 1) {
                    inputQty.value--;
                }
            });

            btnPlus.addEventListener('click', () => {
                inputQty.value++;
            });
        }
    }
//thanh toán
const checkoutPage = document.querySelector('.checkout-page');

if (checkoutPage) {
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    let cart = getCart();
    const container = document.getElementById('checkout-items');
    const totalDisplay = document.getElementById('checkout-total-price');

    if (!container || !totalDisplay) return;

    if (cart.length === 0) {
        container.innerHTML = '<p style="color: #666; font-style: italic;">Giỏ hàng của bạn đang trống.</p>';
        totalDisplay.innerText = '0đ';
        return;
    }

    let html = '';
    let subTotal = 0;

    cart.forEach(item => {
        let safePrice = Number(item.price) || 0;
        let itemTotal = safePrice * item.quantity;
        subTotal += itemTotal;
        
        html += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px;">
                <span style="flex: 2; padding-right: 10px;">${item.quantity} x <strong style="color:#333;">${item.name}</strong></span>
                <span style="flex: 1; text-align: right; color:#555;">${itemTotal.toLocaleString('vi-VN')}đ</span>
            </div>
        `;
    });

    container.innerHTML = html;
    let finalTotal = subTotal > 0 ? subTotal + 30000 : 0;
    totalDisplay.innerText = finalTotal.toLocaleString('vi-VN') + 'đ';
}

window.placeOrder = function(event) {
    event.preventDefault(); 
    
    let cart = getCart();

    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi thanh toán.');
        window.location.href = 'index.html';
        return;
    }

    alert('🎉 ĐẶT HÀNG THÀNH CÔNG!\n\nCảm ơn bạn đã mua sắm tại FongSport. Chúng tôi sẽ sớm liên hệ theo số điện thoại bạn vừa cung cấp để xác nhận và giao hàng.');

    localStorage.removeItem('fongSportCart');

    window.location.href = 'index.html';
};
//sale
const flashSaleTimer = document.getElementById('flash-sale-timer');

if (flashSaleTimer) {
    let timeInSeconds = 5 * 3600 + 30 * 60; 

    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    function updateTimer() {
        if (timeInSeconds <= 0) return;

        timeInSeconds--;

        const h = Math.floor(timeInSeconds / 3600);
        const m = Math.floor((timeInSeconds % 3600) / 60);
        const s = timeInSeconds % 60;

        hoursSpan.innerText = h < 10 ? '0' + h : h;
        minutesSpan.innerText = m < 10 ? '0' + m : m;
        secondsSpan.innerText = s < 10 ? '0' + s : s;
    }
    setInterval(updateTimer, 1000);
}
//hiệu ứng bay vào giỏ
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-add-cart') || 
       (e.target.classList.contains('btn-shop-now') && e.target.innerText.toUpperCase().includes('GIỎ HÀNG'))) {
        flyToCart(e.target);
    }
});

function flyToCart(button) {
    const cartIcon = document.querySelector('.cart-icon');
    let productImg = null;

    const productCard = button.closest('.product-card');
    if (productCard) {
        productImg = productCard.querySelector('img');
    } else {
        productImg = document.getElementById('currentImage');
    }

    if (!productImg || !cartIcon) return;
    const flyingImg = productImg.cloneNode();
    flyingImg.classList.add('flying-img');
    const imgRect = productImg.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();
    flyingImg.style.left = `${imgRect.left}px`;
    flyingImg.style.top = `${imgRect.top}px`;
    flyingImg.style.width = `${imgRect.width}px`;
    flyingImg.style.height = `${imgRect.height}px`;

    document.body.appendChild(flyingImg);
    setTimeout(() => {
        flyingImg.style.left = `${cartRect.left + cartRect.width/2 - 10}px`;
        flyingImg.style.top = `${cartRect.top + cartRect.height/2 - 10}px`;
        flyingImg.style.width = '20px';
        flyingImg.style.height = '20px';
        flyingImg.style.opacity = '0';
    }, 10);
    setTimeout(() => {
        flyingImg.remove();
        cartIcon.classList.add('cart-bounce'); 
        setTimeout(() => cartIcon.classList.remove('cart-bounce'), 400); 
    }, 800);
}