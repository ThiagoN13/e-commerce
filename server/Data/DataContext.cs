using System.Data;
using Microsoft.EntityFrameworkCore;
using server.Model;

namespace server.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Produto> Produtos{get;set;}
        public DbSet<Categoria> Categorias{get;set;}
    }
}