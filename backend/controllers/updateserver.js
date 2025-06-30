// In server.js
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Add after other routes
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
