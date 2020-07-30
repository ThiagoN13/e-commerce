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

        public DbSet<Cartao> Cartoes{get;set;}

        public DbSet<Cupom> Cupons{get;set;}

        public DbSet<Endereco> Enderecos{get;set;}

        public DbSet<Loja> Lojas{get;set;}

        public DbSet<Lead> Leads{get;set;}

        public DbSet<Marca> Marcas{get;set;}

        public DbSet<Pedido> Pedidos{get;set;}

        public DbSet<Resposta> Respostas{get;set;}

        public DbSet<Pergunta> Perguntas{get;set;}

        public DbSet<Categoria> Categorias{get;set;}
    }
}