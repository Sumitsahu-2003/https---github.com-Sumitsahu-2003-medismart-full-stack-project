// controllers/billingController.js

// Create a new billing record
exports.createBilling = async (req, res) => {
  try {
    const { patientId, items, dueDate, description } = req.body;

    if (!patientId || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: patientId and items are required'
      });
    }

    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const billingData = {
      invoiceId: 'INV-' + Date.now(),
      patientId,
      items,
      totalAmount: totalAmount.toFixed(2),
      dueDate: dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      description: description || 'Medical services',
      status: 'pending',
      createdAt: new Date().toISOString(),
      createdBy: req.user?.id || 'system'
    };

    res.status(201).json({
      success: true,
      message: 'Billing created successfully',
      data: billingData
    });
  } catch (error) {
    console.error('Error creating billing:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating billing',
      error: error.message
    });
  }
};

// Get all billing records
exports.getAllBillings = async (req, res) => {
  try {
    // Simulated data
    const billings = [ /* ...sample billing data... */ ];

    res.status(200).json({
      success: true,
      message: 'All billings retrieved successfully',
      data: billings
    });
  } catch (error) {
    console.error('Error getting all billings:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting billings',
      error: error.message
    });
  }
};

// Get billing by ID
exports.getBillingById = async (req, res) => {
  try {
    const { id } = req.params;

    const billing = { 
  id,
  patientId: 'PAT-123',
  amount: 150.00,
  status: 'pending',
  dueDate: '2024-07-15T00:00:00Z',
  description: 'Routine check-up'
};


    res.status(200).json({
      success: true,
      message: `Billing ${id} retrieved successfully`,
      data: billing
    });
  } catch (error) {
    console.error('Error getting billing:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting billing',
      error: error.message
    });
  }
};

// Update billing record
exports.updateBilling = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, dueDate, notes, items } = req.body;

    let totalAmount;
    if (items && Array.isArray(items)) {
      totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    const updatedData = {
      id,
      ...req.body,
      ...(totalAmount && { totalAmount: totalAmount.toFixed(2) }),
      updatedAt: new Date().toISOString(),
      updatedBy: req.user?.id || 'system'
    };

    res.status(200).json({
      success: true,
      message: `Billing ${id} updated successfully`,
      data: updatedData
    });
  } catch (error) {
    console.error('Error updating billing:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating billing',
      error: error.message
    });
  }
};

// Delete billing record
exports.deleteBilling = async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      success: true,
      message: `Billing ${id} deleted successfully`,
      data: {
        id,
        deletedAt: new Date().toISOString(),
        deletedBy: req.user?.id || 'system'
      }
    });
  } catch (error) {
    console.error('Error deleting billing:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting billing',
      error: error.message
    });
  }
};
