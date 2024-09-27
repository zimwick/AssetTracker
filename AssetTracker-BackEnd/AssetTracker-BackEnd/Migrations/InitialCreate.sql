CREATE DATABASE AssetTracker;
GO

SET QUOTED_IDENTIFIER ON;
GO

USE AssetTracker;
GO

IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Assets] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NOT NULL,
    [Make] nvarchar(max) NULL,
    [Model] nvarchar(max) NULL,
    [Location] nvarchar(max) NOT NULL,
    [SerialNumber] nvarchar(max) NULL,
    [PricePaid] decimal(18,2) NOT NULL,
    [DatePurchased] date NOT NULL,
    [WarrantyExpiration] date NULL,
    [OwnerFirstName] nvarchar(max) NOT NULL,
    [OwnerLastName] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Assets] PRIMARY KEY ([Id])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240213194417_InitialMigration', N'8.0.2');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'DatePurchased', N'Location', N'Make', N'Model', N'Name', N'OwnerFirstName', N'OwnerLastName', N'PricePaid', N'SerialNumber', N'WarrantyExpiration') AND [object_id] = OBJECT_ID(N'[Assets]'))
    SET IDENTITY_INSERT [Assets] ON;
INSERT INTO [Assets] ([Id], [DatePurchased], [Location], [Make], [Model], [Name], [OwnerFirstName], [OwnerLastName], [PricePaid], [SerialNumber], [WarrantyExpiration])
VALUES (1, '2024-02-13', N'Main Headquarters', N'Apple', N'M2 Pro', N'Macbook Pro', N'Jay', N'Lightfoot', 2500.5, N'X3742GH59', '2025-02-13'),
(2, '2023-01-25', N'HR Building Room 12', N'Acer', N'Model Pro', N'Tablet', N'Cathie', N'Albridge', 450.25, N'Z3742534TGH', '2024-01-25');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'DatePurchased', N'Location', N'Make', N'Model', N'Name', N'OwnerFirstName', N'OwnerLastName', N'PricePaid', N'SerialNumber', N'WarrantyExpiration') AND [object_id] = OBJECT_ID(N'[Assets]'))
    SET IDENTITY_INSERT [Assets] OFF;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240213202835_SeededAssets', N'8.0.2');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [AspNetRoles] (
    [Id] nvarchar(450) NOT NULL,
    [Name] nvarchar(256) NULL,
    [NormalizedName] nvarchar(256) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AspNetUsers] (
    [Id] nvarchar(450) NOT NULL,
    [FirstName] nvarchar(max) NOT NULL,
    [LastName] nvarchar(max) NOT NULL,
    [UserName] nvarchar(256) NULL,
    [NormalizedUserName] nvarchar(256) NULL,
    [Email] nvarchar(256) NULL,
    [NormalizedEmail] nvarchar(256) NULL,
    [EmailConfirmed] bit NOT NULL,
    [PasswordHash] nvarchar(max) NULL,
    [SecurityStamp] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [PhoneNumber] nvarchar(max) NULL,
    [PhoneNumberConfirmed] bit NOT NULL,
    [TwoFactorEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset NULL,
    [LockoutEnabled] bit NOT NULL,
    [AccessFailedCount] int NOT NULL,
    CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [RoleId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [UserId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max) NULL,
    [UserId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AspNetUserRoles] (
    [UserId] nvarchar(450) NOT NULL,
    [RoleId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [AspNetUserTokens] (
    [UserId] nvarchar(450) NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_AspNetRoleClaims_RoleId] ON [AspNetRoleClaims] ([RoleId]);
GO

CREATE UNIQUE INDEX [RoleNameIndex] ON [AspNetRoles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL;
GO

CREATE INDEX [IX_AspNetUserClaims_UserId] ON [AspNetUserClaims] ([UserId]);
GO

CREATE INDEX [IX_AspNetUserLogins_UserId] ON [AspNetUserLogins] ([UserId]);
GO

CREATE INDEX [IX_AspNetUserRoles_RoleId] ON [AspNetUserRoles] ([RoleId]);
GO

CREATE INDEX [EmailIndex] ON [AspNetUsers] ([NormalizedEmail]);
GO

CREATE UNIQUE INDEX [UserNameIndex] ON [AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240214194334_AddedIdentityTables', N'8.0.2');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'ConcurrencyStamp', N'Name', N'NormalizedName') AND [object_id] = OBJECT_ID(N'[AspNetRoles]'))
    SET IDENTITY_INSERT [AspNetRoles] ON;
INSERT INTO [AspNetRoles] ([Id], [ConcurrencyStamp], [Name], [NormalizedName])
VALUES (N'538dddfd-2d6e-49c8-9515-825276380a9d', NULL, N'Administrator', N'ADMINISTRATOR');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'ConcurrencyStamp', N'Name', N'NormalizedName') AND [object_id] = OBJECT_ID(N'[AspNetRoles]'))
    SET IDENTITY_INSERT [AspNetRoles] OFF;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240214200556_AddedDefaultRoles', N'8.0.2');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

DELETE FROM [AspNetRoles]
WHERE [Id] = N'538dddfd-2d6e-49c8-9515-825276380a9d';
SELECT @@ROWCOUNT;

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'ConcurrencyStamp', N'Name', N'NormalizedName') AND [object_id] = OBJECT_ID(N'[AspNetRoles]'))
    SET IDENTITY_INSERT [AspNetRoles] ON;
INSERT INTO [AspNetRoles] ([Id], [ConcurrencyStamp], [Name], [NormalizedName])
VALUES (N'75358421-e9ad-4612-96be-0c7e754dd415', NULL, N'Administrator', N'ADMINISTRATOR');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'ConcurrencyStamp', N'Name', N'NormalizedName') AND [object_id] = OBJECT_ID(N'[AspNetRoles]'))
    SET IDENTITY_INSERT [AspNetRoles] OFF;
GO

UPDATE [Assets] SET [Name] = N'Macbook', [OwnerFirstName] = N'Teri', [OwnerLastName] = N'Schandler'
WHERE [Id] = 1;
SELECT @@ROWCOUNT;

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'DatePurchased', N'Location', N'Make', N'Model', N'Name', N'OwnerFirstName', N'OwnerLastName', N'PricePaid', N'SerialNumber', N'WarrantyExpiration') AND [object_id] = OBJECT_ID(N'[Assets]'))
    SET IDENTITY_INSERT [Assets] ON;
INSERT INTO [Assets] ([Id], [DatePurchased], [Location], [Make], [Model], [Name], [OwnerFirstName], [OwnerLastName], [PricePaid], [SerialNumber], [WarrantyExpiration])
VALUES (3, '2020-08-26', N'North 1st St, front office', N'Apple', N'M1 Pro', N'Macbook', N'Trude', N'Bonner', 2000.0, N'JDLSRU3957D', '2021-04-03'),
(4, '2022-05-13', N'Auditors office', N'Apple', N'14 Pro Max', N'Iphone', N'Cathie', N'Albridge', 1000.0, N'ASHDK32GH59', '2023-05-13'),
(5, '2020-01-25', N'Main Headquarters', N'Microsoft', N'Surface Pro 8', N'Surface', N'Skye', N'Howsam', 3000.0, N'SJGQRY5479', '2022-01-25'),
(6, '2024-02-13', N'Main Headquarters', N'Apple', N'M2 Pro', N'Macbook', N'Marcelo', N'Fabler', 2500.5, N'XGHS342GH59', '2025-02-13'),
(7, '2019-08-05', N'Testing Center', N'Hp', N'Spectre X5', N'Spectre', N'Teri', N'Schandler', 2900.75, N'NVHSLHGD234', '2020-08-05'),
(8, '2020-03-15', N'Main Headquarters', N'Apple', N'12 Pro', N'Iphone', N'Tracie', N'Tomson', 800.0, N'VSJLE35SKC', '2021-03-15'),
(9, '2024-02-13', N'Recovery Room', N'Acer', N'A515', N'Aspire', N'Jack', N'Black', 1500.5, N'SJCL2CH3SDGE', '2025-02-13'),
(10, '2023-05-22', N'Main Headquarters', N'Apple', N'M3 Pro', N'Macbook', N'Josh', N'Rainer', 2900.0, N'AHSDL26D2V', '2024-05-22'),
(11, '2024-04-05', N'Main Headquarters', N'Apple', N'14 Pro Max', N'Iphone', N'Jeri', N'Cortex', 1000.0, N'SJDC30D23', '2025-04-05');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'DatePurchased', N'Location', N'Make', N'Model', N'Name', N'OwnerFirstName', N'OwnerLastName', N'PricePaid', N'SerialNumber', N'WarrantyExpiration') AND [object_id] = OBJECT_ID(N'[Assets]'))
    SET IDENTITY_INSERT [Assets] OFF;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240215170941_Created-More-Seeded-Data', N'8.0.2');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

DELETE FROM [AspNetRoles]
WHERE [Id] = N'75358421-e9ad-4612-96be-0c7e754dd415';
SELECT @@ROWCOUNT;

GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'ConcurrencyStamp', N'Name', N'NormalizedName') AND [object_id] = OBJECT_ID(N'[AspNetRoles]'))
    SET IDENTITY_INSERT [AspNetRoles] ON;
INSERT INTO [AspNetRoles] ([Id], [ConcurrencyStamp], [Name], [NormalizedName])
VALUES (N'b331ce72-dc6e-4de8-a9f4-c5920fbabb97', NULL, N'Administrator', N'ADMINISTRATOR');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'ConcurrencyStamp', N'Name', N'NormalizedName') AND [object_id] = OBJECT_ID(N'[AspNetRoles]'))
    SET IDENTITY_INSERT [AspNetRoles] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'AccessFailedCount', N'ConcurrencyStamp', N'Email', N'EmailConfirmed', N'FirstName', N'LastName', N'LockoutEnabled', N'LockoutEnd', N'NormalizedEmail', N'NormalizedUserName', N'PasswordHash', N'PhoneNumber', N'PhoneNumberConfirmed', N'SecurityStamp', N'TwoFactorEnabled', N'UserName') AND [object_id] = OBJECT_ID(N'[AspNetUsers]'))
    SET IDENTITY_INSERT [AspNetUsers] ON;
INSERT INTO [AspNetUsers] ([Id], [AccessFailedCount], [ConcurrencyStamp], [Email], [EmailConfirmed], [FirstName], [LastName], [LockoutEnabled], [LockoutEnd], [NormalizedEmail], [NormalizedUserName], [PasswordHash], [PhoneNumber], [PhoneNumberConfirmed], [SecurityStamp], [TwoFactorEnabled], [UserName])
VALUES (N'145e934d-2fd7-4dcb-8261-0408715f5eb7', 0, N'85f70426-3895-4429-b000-4d0e3928cf66', N'admin@assettracker.com', CAST(1 AS bit), N'System', N'Admin', CAST(0 AS bit), NULL, N'ADMIN@ASSETTRACKER.COM', N'ADMIN@ASSETTRACKER.COM', N'AQAAAAIAAYagAAAAEDpK8ho7kjg0YaoHHRlWwL10R+cGH6RGJrLIYj0XQ6kpr2JP8O254AbxSemhs6fnCA==', NULL, CAST(0 AS bit), N'8a625188-ca1b-4581-8b6c-af3b600e2775', CAST(0 AS bit), N'admin@assettracker.com');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'Id', N'AccessFailedCount', N'ConcurrencyStamp', N'Email', N'EmailConfirmed', N'FirstName', N'LastName', N'LockoutEnabled', N'LockoutEnd', N'NormalizedEmail', N'NormalizedUserName', N'PasswordHash', N'PhoneNumber', N'PhoneNumberConfirmed', N'SecurityStamp', N'TwoFactorEnabled', N'UserName') AND [object_id] = OBJECT_ID(N'[AspNetUsers]'))
    SET IDENTITY_INSERT [AspNetUsers] OFF;
GO

IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'RoleId', N'UserId') AND [object_id] = OBJECT_ID(N'[AspNetUserRoles]'))
    SET IDENTITY_INSERT [AspNetUserRoles] ON;
INSERT INTO [AspNetUserRoles] ([RoleId], [UserId])
VALUES (N'b331ce72-dc6e-4de8-a9f4-c5920fbabb97', N'145e934d-2fd7-4dcb-8261-0408715f5eb7');
IF EXISTS (SELECT * FROM [sys].[identity_columns] WHERE [name] IN (N'RoleId', N'UserId') AND [object_id] = OBJECT_ID(N'[AspNetUserRoles]'))
    SET IDENTITY_INSERT [AspNetUserRoles] OFF;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20240221050428_seedingUsers', N'8.0.2');
GO

COMMIT;
GO

