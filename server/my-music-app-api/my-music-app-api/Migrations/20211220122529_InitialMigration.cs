using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace my_music_app_api.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kategorije",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazivKategorije = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kategorije", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pjesme",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazivPjesme = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    NazivIzvodjaca = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    UrlPjesme = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: false),
                    Ocjena = table.Column<int>(type: "int", nullable: false),
                    IsFavorite = table.Column<bool>(type: "bit", nullable: false),
                    DatumUnosa = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DatumModifikovanja = table.Column<DateTime>(type: "datetime2", nullable: false),
                    KategorijaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pjesme", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pjesme_Kategorije_KategorijaId",
                        column: x => x.KategorijaId,
                        principalTable: "Kategorije",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pjesme_KategorijaId",
                table: "Pjesme",
                column: "KategorijaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pjesme");

            migrationBuilder.DropTable(
                name: "Kategorije");
        }
    }
}
