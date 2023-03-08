-- CreateTable
CREATE TABLE "m_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "password" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "m_category1" (
    "userId" TEXT NOT NULL,
    "category1Id" INTEGER NOT NULL,
    "category1Name" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "category1Id"),
    CONSTRAINT "m_category1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "m_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "m_category2" (
    "userId" TEXT NOT NULL,
    "category1Id" INTEGER NOT NULL,
    "category2Id" INTEGER NOT NULL,
    "category2Name" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "category1Id", "category2Id"),
    CONSTRAINT "m_category2_userId_fkey" FOREIGN KEY ("userId") REFERENCES "m_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "m_category2_userId_category1Id_fkey" FOREIGN KEY ("userId", "category1Id") REFERENCES "m_category1" ("userId", "category1Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "m_shop" (
    "userId" TEXT NOT NULL,
    "category1Id" INTEGER NOT NULL,
    "category2Id" INTEGER NOT NULL,
    "shopId" INTEGER NOT NULL,
    "shopName" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "category1Id", "category2Id", "shopId"),
    CONSTRAINT "m_shop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "m_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "m_shop_userId_category1Id_fkey" FOREIGN KEY ("userId", "category1Id") REFERENCES "m_category1" ("userId", "category1Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "m_shop_userId_category1Id_category2Id_fkey" FOREIGN KEY ("userId", "category1Id", "category2Id") REFERENCES "m_category2" ("userId", "category1Id", "category2Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "m_paymentType" (
    "userId" TEXT NOT NULL,
    "paymentTypeId" INTEGER NOT NULL,
    "paymentTypeName" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "paymentTypeId"),
    CONSTRAINT "m_paymentType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "m_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "m_buyer" (
    "userId" TEXT NOT NULL,
    "buyerId" INTEGER NOT NULL,
    "buyerName" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("userId", "buyerId"),
    CONSTRAINT "m_buyer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "m_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "t_record" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "accountedMonth" TEXT NOT NULL,
    "accountedAt" DATETIME NOT NULL,
    "price" DECIMAL NOT NULL,
    "category1Id" INTEGER NOT NULL,
    "category1Name" TEXT NOT NULL,
    "category2Id" INTEGER,
    "category2Name" TEXT,
    "shopId" INTEGER,
    "shopName" TEXT,
    "paymentTypeId" INTEGER,
    "paymentTypeName" TEXT,
    "buyerId" INTEGER,
    "buyerName" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "t_record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "m_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
