using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AssetTracker_BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class seedingUsers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "75358421-e9ad-4612-96be-0c7e754dd415");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "b331ce72-dc6e-4de8-a9f4-c5920fbabb97", null, "Administrator", "ADMINISTRATOR" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "145e934d-2fd7-4dcb-8261-0408715f5eb7", 0, "85f70426-3895-4429-b000-4d0e3928cf66", "admin@assettracker.com", true, "System", "Admin", false, null, "ADMIN@ASSETTRACKER.COM", "ADMIN@ASSETTRACKER.COM", "AQAAAAIAAYagAAAAEDpK8ho7kjg0YaoHHRlWwL10R+cGH6RGJrLIYj0XQ6kpr2JP8O254AbxSemhs6fnCA==", null, false, "8a625188-ca1b-4581-8b6c-af3b600e2775", false, "admin@assettracker.com" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "b331ce72-dc6e-4de8-a9f4-c5920fbabb97", "145e934d-2fd7-4dcb-8261-0408715f5eb7" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "b331ce72-dc6e-4de8-a9f4-c5920fbabb97", "145e934d-2fd7-4dcb-8261-0408715f5eb7" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b331ce72-dc6e-4de8-a9f4-c5920fbabb97");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "145e934d-2fd7-4dcb-8261-0408715f5eb7");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "75358421-e9ad-4612-96be-0c7e754dd415", null, "Administrator", "ADMINISTRATOR" });
        }
    }
}
