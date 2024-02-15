using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace AssetTracker_BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class CreatedMoreSeededData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "538dddfd-2d6e-49c8-9515-825276380a9d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "75358421-e9ad-4612-96be-0c7e754dd415", null, "Administrator", "ADMINISTRATOR" });

            migrationBuilder.UpdateData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Name", "OwnerFirstName", "OwnerLastName" },
                values: new object[] { "Macbook", "Teri", "Schandler" });

            migrationBuilder.InsertData(
                table: "Assets",
                columns: new[] { "Id", "DatePurchased", "Location", "Make", "Model", "Name", "OwnerFirstName", "OwnerLastName", "PricePaid", "SerialNumber", "WarrantyExpiration" },
                values: new object[,]
                {
                    { 3, new DateOnly(2020, 8, 26), "North 1st St, front office", "Apple", "M1 Pro", "Macbook", "Trude", "Bonner", 2000.00m, "JDLSRU3957D", new DateOnly(2021, 4, 3) },
                    { 4, new DateOnly(2022, 5, 13), "Auditors office", "Apple", "14 Pro Max", "Iphone", "Cathie", "Albridge", 1000.00m, "ASHDK32GH59", new DateOnly(2023, 5, 13) },
                    { 5, new DateOnly(2020, 1, 25), "Main Headquarters", "Microsoft", "Surface Pro 8", "Surface", "Skye", "Howsam", 3000.00m, "SJGQRY5479", new DateOnly(2022, 1, 25) },
                    { 6, new DateOnly(2024, 2, 13), "Main Headquarters", "Apple", "M2 Pro", "Macbook", "Marcelo", "Fabler", 2500.50m, "XGHS342GH59", new DateOnly(2025, 2, 13) },
                    { 7, new DateOnly(2019, 8, 5), "Testing Center", "Hp", "Spectre X5", "Spectre", "Teri", "Schandler", 2900.75m, "NVHSLHGD234", new DateOnly(2020, 8, 5) },
                    { 8, new DateOnly(2020, 3, 15), "Main Headquarters", "Apple", "12 Pro", "Iphone", "Tracie", "Tomson", 800.00m, "VSJLE35SKC", new DateOnly(2021, 3, 15) },
                    { 9, new DateOnly(2024, 2, 13), "Recovery Room", "Acer", "A515", "Aspire", "Jack", "Black", 1500.50m, "SJCL2CH3SDGE", new DateOnly(2025, 2, 13) },
                    { 10, new DateOnly(2023, 5, 22), "Main Headquarters", "Apple", "M3 Pro", "Macbook", "Josh", "Rainer", 2900.00m, "AHSDL26D2V", new DateOnly(2024, 5, 22) },
                    { 11, new DateOnly(2024, 4, 5), "Main Headquarters", "Apple", "14 Pro Max", "Iphone", "Jeri", "Cortex", 1000.00m, "SJDC30D23", new DateOnly(2025, 4, 5) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "75358421-e9ad-4612-96be-0c7e754dd415");

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "538dddfd-2d6e-49c8-9515-825276380a9d", null, "Administrator", "ADMINISTRATOR" });

            migrationBuilder.UpdateData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Name", "OwnerFirstName", "OwnerLastName" },
                values: new object[] { "Macbook Pro", "Jay", "Lightfoot" });
        }
    }
}
