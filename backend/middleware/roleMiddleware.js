// roleMiddleware.js

// This function returns a middleware that checks the user's role
const authorizeRoles = (...allowedRoles) => {
  // ...allowedRoles: a list of roles that are allowed (e.g., 'admin', 'moderator')
  return (req, res, next) => {
    // req.user: set by authenticateToken, contains user info from the token
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      // If user is not logged in or role is not allowed
      return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }
    // If role is allowed, continue to the next function/route
    next();
  };
};

module.exports = authorizeRoles;
