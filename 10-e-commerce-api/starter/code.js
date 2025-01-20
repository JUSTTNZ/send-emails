// Database Schema and Relationships

 {
  users: {
    _id: "string", // Primary Key
    username: "string", // Unique identifier for the user
    email: "string (unique)", // User's email address
    password: "string", // Encrypted password
    role: '"student" | "admin"', // User role
    phone_number: "string", // User's contact number
    school_id: "ObjectId (schools)", // References the school the user belongs to
    department_id: "ObjectId (departments)", // References the user's department
    level: "string", // Academic level (e.g., "100", "200")
    created_At: "Date", // Record creation timestamp
    updated_At: "Date", // Record last updated timestamp
  },
  books: {
    _id: "string", // Primary Key
    title: "string", // Book title
    author: "string", // Author's name
    description: "string", // Brief book description
    price: "Number", // Cost of the book
    stock_quantity: "Number", // Number of copies available
    school_id: "ObjectId (schools)", // References the school offering the book
    department_id: "ObjectId (departments)", // References the department associated with the book
    level: "string", // Academic level relevant to the book
    created_At: "Date", // Record creation timestamp
    updated_At: "Date", // Record last updated timestamp
  },
  schools: {
    _id: "string", // Primary Key
    name: "string", // School name
    description: "string", // School description
    created_At: "Date", // Record creation timestamp
    updated_At: "Date", // Record last updated timestamp
  },
  departments: {
    _id: "string", // Primary Key
    school_id: "ObjectId (schools)", // References the school this department belongs to
    name: "string", // Department name
    description: "string", // Brief description of the department
    created_At: "Date", // Record creation timestamp
    updated_At: "Date", // Record last updated timestamp
  },
  categories: {
    category_id: "string", // Primary Key
    name: "string", // Category name
    description: "string", // Category description
    created_At: "Date", // Record creation timestamp
    updated_At: "Date", // Record last updated timestamp
  },
  orders: {
    _id: "string", // Primary Key
    user_id: "ObjectId (users)", // References the user who placed the order
    orderItems: ["ObjectId (orderItems)"], // References the items in the order
    status: '"pending" | "collected"', // Order status
    total_price: "Number", // Total price of the order
    payment_status: '"Success" | "failed" | "pending"', // Payment status
    created_At: "Date", // Record creation timestamp
    updated_At: "Date", // Record last updated timestamp
  },
  orderItems: {
    _id: "string", // Primary Key
    order_id: "ObjectId (orders)", // References the order
    book_id: "ObjectId (books)", // References the book
    quantity: "Number", // Quantity of the book ordered
    price: "Number", // Price of the book in the order
  },
  transactions: {
    transaction_id: "string", // Primary Key
    order_id: "ObjectId (orders)", // References the order
    user_id: "ObjectId (users)", // References the user
    amount: "Number", // Transaction amount
    payment_method: '"bank" | "card" | "transfer"', // Payment method
    payment_gateway: '"paystack" | "stripe"', // Payment gateway
    status: '"Success" | "failed" | "pending"', // Transaction status
    created_At: "Date", // Record creation timestamp
  },
  comments: {
    comments_id: "string", // Primary Key
    user_id: "ObjectId (users)", // References the user who commented
    book_id: "ObjectId (books)", // References the book
    comment: "string", // User's comment
    rating: "Number", // User's rating of the book
    created_At: "Date", // Record creation timestamp
  },
};

// Relationships
 {
  // Many books can belong to one school
  "books.school_id" > "schools._id (Many-to-One)",

  // Many books can belong to one department
  "books.department_id" > "departments._id (Many-to-One)",

  // Many books can be relevant to one level
  "books.level" > "users.level (Many-to-One)",

  // Many departments can belong to one school
  "departments.school_id" > "schools._id (Many-to-One)",

  // Many users can belong to one school
  "users.school_id" > "schools._id (Many-to-One)",

  // Many users can belong to one department
  "users.department_id" > "departments._id (Many-to-One)",

  // Many users can be assigned to many book level
  "users.level" <> "books.level (Many-to-Many)",

  // Many order items can reference one book
  "orderItems.book_id" > "books._id (Many-to-One)",

  // Many orders can belong to one user
  "orders.user_id" > "users._id (Many-to-One)",

  // Many order items can belong to one order
  "orders.orderItems" < "orderItems._id (One-to-Many)",

  // Many transactions can belong to one order
  "transactions.order_id" > "orders._id (Many-to-One)",

  // Many transactions can be made by one user
  "transactions.user_id"> "users._id (Many-to-One)",

  // Many comments can be made by one user
  "comments.user_id" > "users._id (Many-to-One)",

  // Many comments can belong to one book
  "comments.book_id" > "books._id (Many-to-One)",
};

