users [icon: user] {
    _id string pk
    username string
    email (unique) string
    password string
    role ("student", "admin") string
    phone_number string
    school_id ObjectId schools
    department_id ObjectId departments
    level string
    created_At Date
    updated_At Date
  }
  
  books [icon: book] {
    _id string pk
    title string
    author string
    description string
    price Number
    stock_quantity Number
    school_id ObjectId schools
    department_id ObjectId departments
    level string
    created_At Date
    updated_At Date
  }
  
  schools [icon: building] {
    _id string pk
    name string
    description string
    created_At Date
    updated_At Date
  }
  
  departments [icon: package] {
    _id string pk
    school_id ObjectId schools
    name string
    description string
    created_At Date
    updated_At Date
  }
  
  categories [icon: package] {
    category_id string pk
    name string
    description string
    created_At Date
    updated_At Date
  }
  
  orders [icon: list] {
    _id string pk
    user_id ObjectId users
    orderItems ObjectId[] orderItems
    status enum ("pending", "collected")
    total_price Number
    payment_status enum ("Success", "failed", "pending") string
    created_At Date
    updated_At Date
  }
  
  orderItems [icon: list] {
    _id string pk
    order_id ObjectId orders
    book_id ObjectId books
    quantity Number
    price Number
  }
  
  transactions [icon: bank] {
    transaction_id string pk
    order_id ObjectId orders
    user_id ObjectId users
    amount Number
    payment_method enum ("bank", "card", "transfer") string
    payment_gateway enum ("paystack", "stripe") string
    status enum ("Success", "failed", "pending") string
    created_At Date
  }
  
  comments [icon: pencil] {
    comments_id string pk
    user_id ObjectId users
    book_id ObjectId books
    comment string
    rating Number
    created_At Date
  }
  
  
  books.school_id > schools._id
  books.department_id > departments._id
  books.level <> users.level
  departments.school_id > schools._id
  users.school_id > schools._id
  users.department_id > departments._id
  users.level <> books.level
  orderItems.book_id > books._id
  orders.user_id > users._id
  orders.orderItems < orderItems._id
  transactions.order_id > orders._id
  transactions.user_id > users._id
  comments.user_id > users._id
  comments.book_id > books._id