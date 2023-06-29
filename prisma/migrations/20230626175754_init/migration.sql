-- CreateTable
CREATE TABLE "author" (
    "AuthorID" SERIAL NOT NULL,
    "authorName" VARCHAR(50) NOT NULL,
    "yearBorn" INTEGER,
    "yearDied" INTEGER,

    CONSTRAINT "author_pkey" PRIMARY KEY ("AuthorID")
);

-- CreateTable
CREATE TABLE "book" (
    "BookID" SERIAL NOT NULL,
    "bookName" VARCHAR(50) NOT NULL,
    "publicationYear" INTEGER,
    "publisherName" VARCHAR(50),

    CONSTRAINT "book_pkey" PRIMARY KEY ("BookID")
);

-- CreateTable
CREATE TABLE "customer" (
    "CustomerID" INTEGER NOT NULL,
    "custName" VARCHAR(50) NOT NULL,
    "city" VARCHAR(50),
    "country" VARCHAR(50),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("CustomerID")
);

-- CreateTable
CREATE TABLE "employee" (
    "EmployeeID" INTEGER NOT NULL,
    "employeeName" VARCHAR(50) NOT NULL,
    "position" VARCHAR(50),

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("EmployeeID")
);

-- CreateTable
CREATE TABLE "inventory" (
    "InventoryID" INTEGER NOT NULL,
    "BookID" INTEGER NOT NULL,
    "StoreID" INTEGER NOT NULL,
    "lastUpdate" DATE,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("InventoryID","BookID","StoreID")
);

-- CreateTable
CREATE TABLE "publisher" (
    "publisherID" INTEGER NOT NULL,
    "publisherName" VARCHAR(50) NOT NULL,
    "city" VARCHAR(50),
    "country" VARCHAR(50),
    "telephone" VARCHAR(20),
    "yearFounded" INTEGER,

    CONSTRAINT "Publisher_pkey" PRIMARY KEY ("publisherID")
);

-- CreateTable
CREATE TABLE "store" (
    "StoreID" INTEGER NOT NULL,
    "storeName" VARCHAR(50) NOT NULL,
    "city" VARCHAR(50),
    "telephone" VARCHAR(20),

    CONSTRAINT "Store_pkey" PRIMARY KEY ("StoreID")
);

-- CreateTable
CREATE TABLE "storestaffs" (
    "StoreID" INTEGER NOT NULL,
    "EmployeeID" INTEGER NOT NULL,

    CONSTRAINT "StoreStaffs_pkey" PRIMARY KEY ("StoreID","EmployeeID")
);

-- CreateTable
CREATE TABLE "transaction" (
    "TransactionID" INTEGER NOT NULL,
    "CustomerID" INTEGER NOT NULL,
    "BookID" INTEGER NOT NULL,
    "price" INTEGER,
    "date" DATE,
    "quantity" INTEGER,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("CustomerID","BookID","TransactionID")
);

-- CreateTable
CREATE TABLE "write" (
    "AuthorID" INTEGER NOT NULL,
    "BookID" INTEGER NOT NULL,

    CONSTRAINT "Write_pkey" PRIMARY KEY ("AuthorID","BookID")
);

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "BookID" FOREIGN KEY ("BookID") REFERENCES "book"("BookID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "StoreID" FOREIGN KEY ("StoreID") REFERENCES "store"("StoreID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "storestaffs" ADD CONSTRAINT "EmployeeID" FOREIGN KEY ("EmployeeID") REFERENCES "employee"("EmployeeID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "storestaffs" ADD CONSTRAINT "StoreID" FOREIGN KEY ("StoreID") REFERENCES "store"("StoreID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "CustomerID" FOREIGN KEY ("CustomerID") REFERENCES "customer"("CustomerID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "write" ADD CONSTRAINT "AuthorID" FOREIGN KEY ("AuthorID") REFERENCES "author"("AuthorID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "write" ADD CONSTRAINT "BookID" FOREIGN KEY ("BookID") REFERENCES "book"("BookID") ON DELETE NO ACTION ON UPDATE NO ACTION;
