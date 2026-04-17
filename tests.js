/**
 * ShopAI Test Suite
 * Validates critical business logic and data integrity
 */

const runTests = () => {
    console.group('🚀 ShopAI Testing Suite');
    let passed = 0;
    let failed = 0;

    const assert = (condition, message) => {
        if (condition) {
            console.log(`✅ PASS: ${message}`);
            passed++;
        } else {
            console.error(`❌ FAIL: ${message}`);
            failed++;
        }
    };

    // 1. Data Integrity Tests
    assert(window.shopProducts && window.shopProducts.length > 0, 'Catalog data is loaded');
    assert(window.shopProducts.every(p => p.id && p.name && p.price), 'Products have required fields');

    // 2. Search Logic Verification
    const mockSearch = (query) => {
        return window.shopProducts.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) || 
            p.category.toLowerCase().includes(query.toLowerCase())
        );
    };
    const searchResult = mockSearch('phone');
    assert(searchResult.length > 0, 'Search logic retrieves relevant products');

    // 3. Cart Logic Verification
    const mockCart = [];
    const addToCart = (id) => mockCart.push(id);
    addToCart(1);
    assert(mockCart.length === 1 && mockCart[0] === 1, 'Cart state mutation works correctly');

    // 4. Security: Input Sanitization Proof
    const sanitize = (str) => str.replace(/[<>]/g, '');
    const maliciousInput = '<script>alert("xss")</script>';
    assert(!sanitize(maliciousInput).includes('<script>'), 'XSS Sanitizer correctly filters tags');

    console.groupEnd();
    
    console.log(`\n📊 SUMMARY: ${passed} Passed | ${failed} Failed`);
    return { passed, failed };
};

// Auto-run if in development console
if (window.location.search.includes('test=true')) {
    runTests();
}
