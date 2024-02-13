using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace AssetTracker_BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class SeededAssets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Assets",
                columns: new[] { "Id", "DatePurchased", "Location", "Make", "Model", "Name", "OwnerFirstName", "OwnerLastName", "PricePaid", "SerialNumber", "WarrantyExpiration" },
                values: new object[,]
                {
                    { 1, new DateOnly(2024, 2, 13), "Main Headquarters", "Apple", "M2 Pro", "Macbook Pro", "Jay", "Lightfoot", 2500.50m, "X3742GH59", new DateOnly(2025, 2, 13) },
                    { 2, new DateOnly(2023, 1, 25), "HR Building Room 12", "Acer", "Model Pro", "Tablet", "Cathie", "Albridge", 450.25m, "Z3742534TGH", new DateOnly(2024, 1, 25) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Assets",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
