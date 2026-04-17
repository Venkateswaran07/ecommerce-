// ShopAI Core Logic
document.addEventListener('DOMContentLoaded', () => {
    // Inject Cart Drawer HTML if not present (Optimized for Accessibility)
    if (!document.querySelector('.cart-drawer')) {
        const drawerHtml = `
            <div class="cart-overlay" id="cartOverlay" aria-hidden="true" role="presentation"></div>
            <div class="cart-drawer" id="cartDrawer" role="dialog" aria-modal="true" aria-labelledby="cartTitle">
                <div class="cart-header">
                    <h2 id="cartTitle" class="display-font" style="font-size: 1.5rem;">Your Cart</h2>
                    <button id="closeCart" aria-label="Close Shopping Cart" style="background: none; border: none; cursor: pointer; font-size: 1.5rem;">&times;</button>
                </div>
                <div class="cart-body">
                    <div class="cart-item">
                        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop" class="cart-item-img" alt="SonicPro Wireless Headphones" loading="lazy">
                        <div style="flex: 1;">
                            <p style="font-weight: 600; font-size: var(--body-md);">SonicPro Wireless Headphones</p>
                            <p style="font-size: 12px; color: var(--outline);">Matte Black • Noise Cancelling</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                                <div style="display: flex; align-items: center; gap: 8px; border: 1px solid var(--outline-variant); border-radius: 4px; padding: 2px 8px; font-size: 12px;">
                                    <span>-</span> <span>1</span> <span>+</span>
                                </div>
                                <span style="font-weight: 700; color: var(--primary);">$249.00</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="cart-item">
                        <img src="https://images.unsplash.com/photo-1544117518-30dd5f7a942a?q=80&w=400&auto=format&fit=crop" class="cart-item-img" alt="Aura Smartwatch Series 5" loading="lazy">
                        <div style="flex: 1;">
                            <p style="font-weight: 600; font-size: var(--body-md);">Aura Smartwatch Series 5</p>
                            <p style="font-size: 12px; color: var(--outline);">Arctic White • 42mm</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                                <div style="display: flex; align-items: center; gap: 8px; border: 1px solid var(--outline-variant); border-radius: 4px; padding: 2px 8px; font-size: 12px;">
                                    <span>-</span> <span>1</span> <span>+</span>
                                </div>
                                <span style="font-weight: 700; color: var(--primary);">$199.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="ai-insight-box">
                        <div class="ai-tag" style="padding: 2px 8px; font-size: 10px; margin-bottom: 0.5rem;">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                            AI INSIGHT
                        </div>
                        <h4 style="font-size: var(--body-md); margin-bottom: 0.5rem;">Why this combination?</h4>
                        <p style="font-size: 12px; color: var(--outline); line-height: 1.4;">Based on your recent focus on <strong>productivity and fitness</strong>, the SonicPro headphones will provide the deep focus you need for work, while the Aura Smartwatch seamlessly tracks your afternoon runs. Buying them together saves you 15% on shipping.</p>
                    </div>
                </div>
                <div class="cart-footer">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                        <span style="color: var(--outline);">Subtotal</span>
                        <span style="font-weight: 600;">$448.00</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 2rem;">
                        <span style="color: var(--outline);">Estimated Shipping</span>
                        <span style="font-size: 12px;">Calculated at checkout</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 2rem; border-top: 1px solid var(--outline-variant); padding-top: 1rem;">
                        <span class="display-font" style="font-size: 1.2rem;">Total</span>
                        <span class="display-font" style="font-size: 1.2rem; color: var(--primary);">$448.00</span>
                    </div>
                    <button id="checkout-btn" class="btn btn-primary" style="width: 100%; padding: 1.2rem;">Proceed to Checkout &nbsp; →</button>
                    <p style="text-align: center; font-size: 10px; color: var(--outline); margin-top: 1rem;">Secure, AI-verified transaction.</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', drawerHtml);
    }

    // Toggle Cart
    const cartTriggers = document.querySelectorAll('.cart-toggle');
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    const closeBtn = document.getElementById('closeCart');

    const openCart = (e) => {
        if (e) e.preventDefault();
        drawer.classList.add('open');
        overlay.style.display = 'block';
    };

    const closeCart = (e) => {
        if (e) e.preventDefault();
        drawer.classList.remove('open');
        overlay.style.display = 'none';
    };

    cartTriggers.forEach(trigger => {
        trigger.addEventListener('click', openCart);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (overlay) overlay.addEventListener('click', closeCart);

    // Redirect to checkout
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'checkout.html';
        });
    }

    // Security: Input Sanitizer for XSS Prevention
    const sanitizeQuery = (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    // AI Reasoning Integration
    const handleAIReasoning = async (query) => {
        if (!query) return;
        
        // --- REAL AI INTEGRATION POINT ---
        // user can set their key here: window.shopAI.setApiKey('YOUR_KEY_HERE');
        
        const products = window.shopProducts || [];
        const result = await window.shopAI.getRecommendation(query, products);
        
        console.group('🧠 Real-Time AI Intelligence');
        console.log('User Intent:', query);
        console.log('AI Logic:', result.reasoning);
        console.log('Curated Count:', result.recommendedIds.length);
        console.groupEnd();

        // Update UI with AI Scout Prompt if on listing page
        const scoutTxt = document.querySelector('.ai-insight-small p');
        if (scoutTxt) scoutTxt.innerText = result.scoutPrompt;
    };

    // Search functionality with optimized reasoning
    const mainSearchBtn = document.getElementById('main-search-btn');
    const mainSearchInput = document.getElementById('main-search-input');

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        const baseQuery = mainSearchInput ? mainSearchInput.value.trim() : '';
        const sanitized = sanitizeQuery(baseQuery);
        
        if (sanitized) {
            handleAIReasoning(sanitized);
            // Simulate a short processing delay for premium 'AI' feel
            const btn = e.target.closest('button');
            if (btn) btn.innerHTML = '<span class="spinner"></span> Processing...';
            
            setTimeout(() => {
                window.location.href = `listing.html?q=${encodeURIComponent(sanitized)}`;
            }, 600);
        } else {
            window.location.href = `listing.html`;
        }
    };

    if (mainSearchBtn) mainSearchBtn.addEventListener('click', handleSearch);
    if (mainSearchInput) {
        mainSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch(e);
        });
    }

    // Fallback for navbar search or other search inputs
    const otherSearchBtns = document.querySelectorAll('.glass button');
    otherSearchBtns.forEach(btn => {
        if (btn.querySelector('svg[viewBox*="M21 21"]')) {
            btn.addEventListener('click', handleSearch);
        }
    });

    const otherInputs = document.querySelectorAll('input[placeholder*="Search"]');
    otherInputs.forEach(input => {
        if (input !== mainSearchInput) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleSearch(e);
            });
        }
    });

    // Hide cart drawer logic for checkout page
    if (window.location.pathname.includes('checkout.html')) {
        const cartTriggers = document.querySelectorAll('.cart-toggle');
        cartTriggers.forEach(t => t.style.display = 'none');
    }
});
